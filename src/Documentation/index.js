import React, { Component } from 'react'
import '../style/theme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default class index extends Component {
  render() {
    return (
      <div>
        {/* start header */}
        <header class="header fixed-top">
          <div class="branding docs-branding">
            <div class="container-fluid position-relative py-2">
              <div class="docs-logo-wrapper">
                <div class="site-logo"><a class="navbar-brand" href="index.html">
                  <img class="logo-icon me-2" src="/color-jti.png" width={30} alt="..."></img><span class="logo-text">Blockly-Edu-IoT<span class="text-alt"> Documentation</span></span></a>
                  </div>
              </div>
              <div class="docs-top-utilities d-flex justify-content-end align-items-center">
                <a href="/workspace1" class="btn btn-secondary d-none d-lg-flex">Mulai Pembelajaran</a>
                <a href="/workspace1" class="btn btn-primary d-none d-lg-flex offset-0">Lihat Semua Dokumentasi</a>
              </div>
            </div>
          </div>
        </header>
        {/* end header */}
        {/* start page header */}
        <div class="page-header theme-bg-dark py-5 text-center position-relative">
          <div class="theme-bg-shapes-right"></div>
          <div class="theme-bg-shapes-left"></div>
          <div class="container">
            <h1 class="page-heading single-col-max mx-auto">Documentation</h1>
            <div class="page-intro single-col-max mx-auto">Penggunaan aplikasi modul logika pencabangan dan perulangan pada Edu-IoT Board</div>
            <div class="main-search-box pt-3 d-block mx-auto">
              <form class="search-form w-100">
                <input type="text" placeholder="Search the docs..." name="search" class="form-control search-input"></input>
                  <button type="submit" class="btn search-btn" value="Search"><i class="fas fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
        {/* end page header */}

        {/* start content */}
        <div class="page-content">
          <div class="container">
            <div class="docs-overview py-5">
              <div class="row justify-content-center">
                <div class="col-12 col-lg-4 py-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h5 class="card-title mb-3">
                        <span class="theme-icon-holder card-icon-holder me-2">
                          <FontAwesomeIcon icon={faBook} className="px-1" /><i class="fas fa-map-signs"></i>
                        </span>
                        <span class="card-title-text">Introduction</span>
                      </h5>
                      <div class="card-text">
                        Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      </div>
                      <a class="card-link-mask" href="docs-page.html#section-1"></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 py-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h5 class="card-title mb-3">
                        <span class="theme-icon-holder card-icon-holder me-2">
                          <FontAwesomeIcon icon={faBook} className="px-1" /><i class="fas fa-map-signs"></i>
                        </span>
                        <span class="card-title-text">Installation</span>
                      </h5>
                      <div class="card-text">
                        Section overview goes here. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                      </div>
                      <a class="card-link-mask" href="docs-page.html#section-2"></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 py-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h5 class="card-title mb-3">
                        <span class="theme-icon-holder card-icon-holder me-2">
                          <FontAwesomeIcon icon={faBook} className="px-1" /><i class="fas fa-map-signs"></i>
                        </span>
                        <span class="card-title-text">APIs</span>
                      </h5>
                      <div class="card-text">
                        Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                      </div>
                      <a class="card-link-mask" href="docs-page.html#section-3"></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 py-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h5 class="card-title mb-3">
                        <span class="theme-icon-holder card-icon-holder me-2">
                          <FontAwesomeIcon icon={faBook} className="px-1" /><i class="fas fa-map-signs"></i>
                        </span>
                        <span class="card-title-text">Integrations</span>
                      </h5>
                      <div class="card-text">
                        Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                      </div>
                      <a class="card-link-mask" href="docs-page.html#section-4"></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 py-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h5 class="card-title mb-3">
                        <span class="theme-icon-holder card-icon-holder me-2">
                          <FontAwesomeIcon icon={faBook} className="px-1" /><i class="fas fa-map-signs"></i>
                        </span>
                        <span class="card-title-text">Utilities</span>
                      </h5>
                      <div class="card-text">
                        Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                      </div>
                      <a class="card-link-mask" href="docs-page.html#section-5"></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 py-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h5 class="card-title mb-3">
                        <span class="theme-icon-holder card-icon-holder me-2">
                          <FontAwesomeIcon icon={faBook} className="px-1" /><i class="fas fa-map-signs"></i>
                        </span>
                        <span class="card-title-text">Web</span>
                      </h5>
                      <div class="card-text">
                        Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                      </div>
                      <a class="card-link-mask" href="docs-page.html#section-6"></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 py-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h5 class="card-title mb-3">
                        <span class="theme-icon-holder card-icon-holder me-2">
                          <FontAwesomeIcon icon={faBook} className="px-1" /><i class="fas fa-map-signs"></i>
                        </span>
                        <span class="card-title-text">Mobile</span>
                      </h5>
                      <div class="card-text">
                        Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                      </div>
                      <a class="card-link-mask" href="docs-page.html#section-7"></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 py-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h5 class="card-title mb-3">
                        <span class="theme-icon-holder card-icon-holder me-2">
                          <FontAwesomeIcon icon={faBook} className="px-1" /><i class="fas fa-map-signs"></i>
                        </span>
                        <span class="card-title-text">Resources</span>
                      </h5>
                      <div class="card-text">
                        Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                      </div>
                      <a class="card-link-mask" href="docs-page.html#section-8"></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 py-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h5 class="card-title mb-3">
                        <span class="theme-icon-holder card-icon-holder me-2">
                          <FontAwesomeIcon icon={faBook} className="px-1" /><i class="fas fa-map-signs"></i>
                        </span>
                        <span class="card-title-text">FAQs</span>
                      </h5>
                      <div class="card-text">
                        Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                      </div>
                      <a class="card-link-mask" href="docs-page.html#section-9"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* endcontent */}

        {/* start footer */}
        <section class="cta-section text-center py-5 theme-bg-dark position-relative">
          <div class="theme-bg-shapes-right"></div>
          <div class="theme-bg-shapes-left"></div>
          <div class="container">
            <h3 class="mb-2 text-white mb-3">Aplikasi Pembelajaran Logika Pemrograman Dasar Pada Edu-IoT Board</h3>
            <div class="section-intro text-white mb-3 single-col-max mx-auto">Website ini adalah sebuah aplikasi pembelajaran logika pemrograman dasar menggunakan visual programming yaitu Blockly.Anda bisa dengan mudah drag & drop block yang dibutuhkan ketika ingin menyusun sebuah logika. Aplikasi ini disusun dengan tujuan untuk mempermudah belajar logika pemrograman kepada mahasiswa.</div>
            {/* <div class="pt-3 text-center">
              <a class="btn btn-light" href="">Get CoderPro<i class="fas fa-arrow-alt-circle-right ml-2"></i></a>
            </div> */}
          </div>
        </section>
        {/* end footer */}
      </div>
    )
  }
}
