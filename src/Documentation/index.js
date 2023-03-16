import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <body class="landing-page">
          <script async defer src="https://buttons.github.io/buttons.js"></script>
          <div id="fb-root"></div>
          <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=994736563909741&autoLogAppEvents=1"></script>

          <div class="page-wrapper">
            <header class="header text-center">
              <div class="container">
                <div class="branding">
                  <h1 class="logo">
                    <span aria-hidden="true" class="icon_documents_alt icon"></span>
                    <span class="text-highlight">BLOCKLY</span><span class="text-bold">EDU-IOT</span>
                  </h1>
                </div>
                <div class="tagline">
                  <p>Simple apps for learning coding</p>
                  {/* <p>Aplikasi Pembelajaran Logika Pemrograman Dasar Pada Edu-IoT Board</p> */}
                </div>

                <div class="main-search-box pt-3 pb-4 d-inline-block">
                  <form class="form-inline search-form justify-content-center" action="" method="get">
                    <input type="text" placeholder="Enter search terms..." name="search" class="form-control search-input"></input>
                    <button type="submit" class="btn search-btn" value="Search"><i class="fas fa-search"></i></button>
                  </form>
                </div>
                <div class="social-container">
                </div>
              </div>
            </header>
            <section class="cards-section text-center">
              <div class="container">
                <h2 class="title">Getting started is easy!</h2>
                <div class="intro">
                  <p>Website ini adalah sebuah aplikasi pembelajaran logika pemrograman dasar menggunakan visual programming yaitu Blockly.Anda bisa dengan mudah drag & drop block yang dibutuhkan ketika ingin menyusun sebuah logika. Aplikasi ini disusun dengan tujuan untuk mempermudah belajar logika pemrograman kepada mahasiswa.
                  </p>
                  <div class="cta-container">
                    <a class="btn btn-primary btn-cta" href="/start" target="_blank"><i class="fas fa-book"></i>Lihat Semua Dokumentasi</a>
                  </div>
                </div>
                <div id="cards-wrapper" class="cards-wrapper row">
                  <div class="item item-green col-lg-4 col-6">
                    <div class="item-inner">
                      <div class="icon-holder">
                        <i class="icon fa fa-paper-plane"></i>
                      </div>
                      <h3 class="title">Introduction</h3>
                      <p class="intro">Perkenalan Mengenai Aplikasi</p>
                      <a class="link" href="/introduction"><span></span></a>
                    </div>
                  </div>
                  <div class="item item-primary col-lg-4 col-6">
                    <div class="item-inner">
                      <div class="icon-holder">
                        <span aria-hidden="true" class="icon icon_genius"></span>
                      </div>
                      <h3 class="title">Variasi Blok</h3>
                      <p class="intro">Macam-macam blok yang ada</p>
                      <a class="link" href="/variasiblok"><span></span></a>
                    </div>
                  </div>
                  <div class="item item-orange col-lg-4 col-6">
                    <div class="item-inner">
                      <div class="icon-holder">
                        <span aria-hidden="true" class="icon icon_gift"></span>
                      </div>
                      <h3 class="title">Operasi Logika Blockly</h3>
                      <p class="intro">Dasar dan cara melakukan operasi logika pada aplikasi</p>
                      <a class="link" href="/operasilogika"><span></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer class="footer text-center">
              <div class="container">
                <small class="copyright">Designed with <span class="sr-only">love</span><i class="fas fa-heart"></i> by <a href="https://themes.3rdwavemedia.com/" target="_blank">Xiaoying Riley</a> for developers</small>
              </div>
            </footer>
          </div>
        </body>
      </div>
    )
  }
}
