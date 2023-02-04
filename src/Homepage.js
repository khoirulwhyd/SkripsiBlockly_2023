import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
import './index.css';
// import "@fontsource/poppins";
import './style/home.css';

export default function Homepage() {  
  return (
      <div class="body">
        <Navbar collapseOnSelect expand="lg" bg="none" variant="none" className="mt-5">
          <Container>
            <Navbar.Brand href="#home"><img src="/logodejti.png" width={30} alt="..." /> <strong class="p-2 text-white">Polinema</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Link to="#" class="btn btn-primary-1 text-white shadow"><FontAwesomeIcon icon={faCloudDownload} /> Unduh Panduan</Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7 mt-5">
              <h1 class="h1 text-white">Aplikasi Pembelajaran Logika
                Pemrograman Dasar Pada Edu-IoT Board</h1>
              <p class="mt-5 text-white spacing-text">Website ini adalah sebuah aplikasi pembelajaran
                logika pemrograman dasar menggunakan visual programming
                yaitu Blockly.Anda bisa dengan mudah drag & drop block
                yang dibutuhkan ketika ingin menyusun sebuah logika.
                Aplikasi ini disusun dengan tujuan untuk mempermudah
                belajar logika pemrograman kepada mahasiswa. </p>
              <Link to="/workspace" class="btn btn-primary-1 mt-3 "><FontAwesomeIcon icon={faBookOpenReader} /> Mulai Belajar Sekarang</Link>

            </div>
            <div class="col-lg-5">
              <img class="img-fluid rounded mb-4 mb-lg-0" src="/edu-iot-board.png" alt="..." />
            </div>
          </div>
        </Container>
      </div>
   
  );
}
