import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useEffect, useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import mqtt from "mqtt";
import { PlayIcon, PauseIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const dataMqtt = {
  host: "168.138.160.59",
  clientId: "WebApp_HUB_Skripsi",
  port: 15675,
  // port: 15672, // untuk port emqx: 8083, mosquitto: 8081/8080, hivemq: 8000
  username: "guest",
  password: "guest",
};
// const dataMqtt = {
//   host: "168.138.182.140",
//   clientId: "WebApp_HUB_Skripsi",
//   port: 8080,
//   // port: 15672, // untuk port emqx: 8083, mosquitto: 8081/8080, hivemq: 8000
//   username: "",
//   password: "",
// };

export default function Workspace() {
  const navigate = useNavigate();
  const [client, setClient] = useState(null);

  // blockly session
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const [toggleButton, settoggleButton] = useState(false);

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="iot_devboard" x="70" y="30"></block></xml>';
    const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
        ],
      },
      
      {
        kind: "category",
        name: "Looping",
        colour: "#5CA65C",
        contents: [
          {
            kind: "block",
            type: "controls_forEach",
          },
          {
            kind: "block",
            type: "controls_for",
          },
        ],
      },
      {
        kind: "category",
        name: "Aktuator",
        colour: "#E86100",
        contents: [
          // {
          //   kind: "block",
          //   type: "new_boundary_function",
          // },
          // {
          //   kind: "block",
          //   type: "return",
          // },
          {
            kind: "block",
            type: "iot_devboard",
          },
          {
            kind: "block",
            type: "aktuator_led",
          },
          {
            kind: "block",
            type: "aktuator_relay",
          },
          // {
          //   kind: "block",
          //   type: "aktuator_relay",
          // },
          {
            kind: "block",
            type: "aktuator_buzzer",
          },
          {
            kind: "block",
            type: "aktuator_fan",
          },
          {
            kind: "block",
            type: "sensor",
          },
        ],
      },
      {
        kind: "category",
        name: "Function",
        colour: "#E90909",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
        ],
      },
    ],
  };




  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    // console.log(code);
    // const code2 = Blockly.Python.workspaceToCode(workspace);
    if (!code.toLocaleLowerCase().includes("device")) {
      settoggleButton(true);
      setJavascriptCode(code);
    } else {
      settoggleButton(false);
      setJavascriptCode(code);
    }
  }

  const runCode = () => {
    console.log(javascriptCode);
    try {
      // eslint-disable-next-line no-eval
      eval(javascriptCode);
      toast.success("Run Code Berhasil", { position: "bottom-center" });
    } catch (error) {
      console.log(error);
    }
  };

  // mqtt session

  // response dari mqtt
  
  const [payload, setPayload] = useState({});
  const [connectStatus, setConnectStatus] = useState("Connect");

  const mqttConnect = () => {
    const { host, clientId, port, username, password } = dataMqtt;
    const url = `ws://${host}:${port}/ws`;
    // const url = `ws://${host}:${port}/mqtt`;
    const options = {
      keepalive: 30,
      protocolId: "MQTT",
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      will: {
        topic: "WillMsg",
        payload: "Connection Closed abnormally..!",
        qos: 0,
        retain: false,
      },
      rejectUnauthorized: false,
    };
    options.clientId = clientId;
    options.username = username;
    options.password = password;

    setConnectStatus("Connecting");
    setClient(mqtt.connect(url, options));
  };

  useEffect(() => {
    mqttConnect();
  }, []);

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        setConnectStatus("Connected");
        mqttSub();
      });
      client.on("error", (err) => {
        setConnectStatus("Error");
        console.error("Connection error: ", err);
        client.end();
      });
      client.on("reconnect", () => {
        setConnectStatus("Reconnecting");
      });
      client.on("message", (topic, message) => {
        const payload = { topic, message: message.toString() };
        // console.log("message");
        console.log(payload?.message);
        console.log(JSON.parse(payload?.message));
        setPayload(payload?.message && JSON.parse(payload?.message));
      });
    }
  }, [client]);

  useEffect(() => {
    console.log(connectStatus);
  }, [connectStatus]);

  // const mqttPublish = (context) => {
  //   if (client) {
  //     const { topic, qos, payload } = context;
  //     client.publish(topic, payload, { qos }, (error) => {
  //       if (error) {
  //         console.log("Publish error: ", error);
  //       }
  //     });
  //   }
  // };

  const mqttSub = () => {
    if (client) {
      const { topic, qos } = { topic: "sensor", qos: 0 };
      client.subscribe(topic, { qos }, (error) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
      });
    }
  };

  const generateColorButton = (key) => {
    switch (key) {
      case 'Connected':
        return '#5098FF'
      case 'Reconnecting':
        return '#FDD736'
      default:
        return '#FF4229'
    }
  }

  return (
    <>
      <Toaster />
      <div style={{ backgroundColor: "#2E6ECD", padding: "2%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "#5098FF",
              color: "#fff",
              border: "none",
              padding: "0.5rem",
              borderRadius: "5px",
              boxShadow: "0 4px #2E6ECD",
            }}
            onClick={() => navigate("/")}
            disabled={toggleButton}
          >
            <ChevronLeftIcon style={{ width: "2rem", height: "2rem" }} />
          </button>
          <button
            style={{
              cursor: "pointer",
              backgroundColor: generateColorButton(connectStatus),
              color: "#fff",
              border: "none",
              padding: "0.5rem",
              borderRadius: "5px",
              boxShadow: "0 4px #2E6ECD",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => runCode()}
            tabIndex={0}
            onKeyPress={(e) => {
              console.log(e);
              e.key.toLocaleLowerCase() === "r" && runCode();
            }}
            disabled={toggleButton}
          >
            <PlayIcon style={{ width: "2rem", height: "2rem" }} />
          </button>
        </div>

        <div style={{ width: "100%", position: "relative" }}>
          <div
            style={{
              backgroundColor: "#dedede",
              position: "absolute",
              zIndex: 1000,
              padding: "2rem",
              top: "5%",
              right: "5%",
              borderRadius: "10px",
            }}
          >
            suhu : {payload?.suhu} <br />
            kelembapan : {payload?.kelembapan} <br />
            cahaya : {payload?.cahaya} <br />
            jarak : {payload?.jarak} <br />
          </div>

          {/* workspace */}
          <div
            style={{
              backgroundColor: "#5098FF",
              padding: "1%",
              borderRadius: "10px",
            }}
          >
            <BlocklyWorkspace
              toolboxConfiguration={toolboxCategories}
              initialXml={initialXml}
              className='fill-height'
              workspaceConfiguration={{
                grid: {
                  spacing: 20,
                  length: 3,
                  colour: "#ccc",
                  snap: true,
                },
              }}
              onWorkspaceChange={workspaceDidChange}
              onXmlChange={setXml}
            />
          </div>

          {/* <div
            style={{
              position: "absolute",
              zIndex: 1000,
              bottom: "5%",
              left: "1%",
              margin: "1rem 0",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "#5098FF",
                color: "#fff",
                border: "none",
                padding: "0.5rem",
                borderRadius: "5px",
                boxShadow: "0 4px #2E6ECD",
              }}
              onClick={() => runCode()}
              disabled={toggleButton}
            >
              <PlayIcon style={{ width: "3rem", height: "3rem" }} />
            </button>
          </div> */}
        </div>

        <div style={{ color: "white" }}>
          {toggleButton && (
            <p>Harap menggunakan Block Device IOT Development Board</p>
          )}
        </div>

        {/* <pre id='generated-xml'>{xml}</pre> */}

        <h2 style={{ color: "white" }}>Kode Program</h2>
        <textarea
          id='code'
          style={{ height: "200px", width: "400px" }}
          value={javascriptCode}
          readOnly
        />
      </div>
    </>
  );
}
