import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import './index.css';
// import "@fontsource/poppins";
import './style/home.css';

export default function Homepage() {  
  return (
      <div className="body">
        <Navbar collapseOnSelect expand="lg" bg="none" variant="none" className="mt-5">
          <Container>
            <Navbar.Brand href="#home"><img src="/logodejti.png" width={30} alt="..." /> <strong class="p-2 text-white">Polinema</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Link to="#" className="btn btn-primary-1 text-white shadow fw-semibold"><FontAwesomeIcon icon={faCloudDownload} className="px-1" /> Unduh Panduan</Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7 mt-5">
            <h1 className="h1 text-white">Aplikasi Pembelajaran Logika
                Pemrograman Dasar Pada Edu-IoT Board</h1>
              <p className="mt-5 text-white spacing-text fw-medium">Website ini adalah sebuah aplikasi pembelajaran
                logika pemrograman dasar menggunakan visual programming
                yaitu Blockly.Anda bisa dengan mudah drag & drop block
                yang dibutuhkan ketika ingin menyusun sebuah logika.
                Aplikasi ini disusun dengan tujuan untuk mempermudah
                belajar logika pemrograman kepada mahasiswa.
              </p>
              <Link to="/workspace" class="btn btn-primary-1 mt-3 fw-semibold">
                <FontAwesomeIcon icon={faBook} className="px-2" /> Mulai Belajar Sekarang
              </Link>
          </div>
          <div class="col-lg-5">
            <img class="img-fluid rounded mb-4 mb-lg-0" src="/edu-iot-board.png" alt="..." />
          </div>
        </div>
        </Container>
      </div>
   
  );
}
