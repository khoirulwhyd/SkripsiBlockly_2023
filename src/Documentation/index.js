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
                  <div class="github-btn mb-2">
                    <a class="github-button" href="https://github.com/xriley/PrettyDocs-Theme" data-size="large" aria-label="Star xriley/PrettyDocs-Theme on GitHub">Star</a>
                    <a class="github-button" href="https://github.com/xriley" data-size="large" aria-label="Follow @xriley on GitHub">Follow @xriley</a>
                  </div>
                  <div class="twitter-tweet">
                    <a href="https://twitter.com/3rdwave_themes?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @3rdwave_themes</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </div>
                  <div class="fb-like" data-href="https://themes.3rdwavemedia.com/" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
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
                    <a class="btn btn-primary btn-cta" href="/start" target="_blank"><i class="fas fa-book"></i>Lihat Dokumentasi</a>
                  </div>
                </div>
                <div id="cards-wrapper" class="cards-wrapper row">
                  <div class="item item-green col-lg-4 col-6">
                    <div class="item-inner">
                      <div class="icon-holder">
                        <i class="icon fa fa-paper-plane"></i>
                      </div>
                      <h3 class="title">Quick Start</h3>
                      <p class="intro">Demo example, consectetuer adipiscing elit</p>
                      <a class="link" href="start.html"><span></span></a>
                    </div>
                  </div>
                  <div class="item item-pink item-2 col-lg-4 col-6">
                    <div class="item-inner">
                      <div class="icon-holder">
                        <span aria-hidden="true" class="icon icon_puzzle_alt"></span>
                      </div>
                      <h3 class="title">Components</h3>
                      <p class="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                      <a class="link" href="components.html"><span></span></a>
                    </div>
                  </div>
                  <div class="item item-blue col-lg-4 col-6">
                    <div class="item-inner">
                      <div class="icon-holder">
                        <span aria-hidden="true" class="icon icon_datareport_alt"></span>
                      </div>
                      <h3 class="title">Charts</h3>
                      <p class="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                      <a class="link" href="charts.html"><span></span></a>
                    </div>
                  </div>
                  <div class="item item-purple col-lg-4 col-6">
                    <div class="item-inner">
                      <div class="icon-holder">
                        <span aria-hidden="true" class="icon icon_lifesaver"></span>
                      </div>
                      <h3 class="title">FAQs</h3>
                      <p class="intro">Layout for FAQ page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                      <a class="link" href="faqs.html"><span></span></a>
                    </div>
                  </div>
                  <div class="item item-primary col-lg-4 col-6">
                    <div class="item-inner">
                      <div class="icon-holder">
                        <span aria-hidden="true" class="icon icon_genius"></span>
                      </div>
                      <h3 class="title">Showcase</h3>
                      <p class="intro">Layout for showcase page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>
                      <a class="link" href="showcase.html"><span></span></a>
                    </div>
                  </div>
                  <div class="item item-orange col-lg-4 col-6">
                    <div class="item-inner">
                      <div class="icon-holder">
                        <span aria-hidden="true" class="icon icon_gift"></span>
                      </div>
                      <h3 class="title">License &amp; Credits</h3>
                      <p class="intro">Layout for license &amp; credits page. Consectetuer adipiscing elit.</p>
                      <a class="link" href="license.html"><span></span></a>
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
