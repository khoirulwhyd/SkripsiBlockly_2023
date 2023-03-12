import React, { Component } from 'react'

export default class start extends Component {
    render() {
        return (
            <div>
                <body class="body-green">
                    <div class="page-wrapper">
                        <header id="header" class="header">
                            <div class="container">
                                <div class="branding">
                                    <h1 class="logo">
                                        <a href="index.html">
                                            <span aria-hidden="true" class="icon_documents_alt icon"></span>
                                            <span class="text-highlight">Blockly</span><span class="text-bold">Edu-IoT</span>
                                        </a>
                                    </h1>
                                </div>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/index">Home</a></li>
                                    <li class="breadcrumb-item active">Quick Start</li>
                                </ol>
                                <div class="top-search-box">
                                    <form class="form-inline search-form justify-content-center" action="" method="get">
                                        <input type="text" placeholder="Search..." name="search" class="form-control search-input"></input>
                                        <button type="submit" class="btn search-btn" value="Search"><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </header>
                        <div class="doc-wrapper">
                            <div class="container">
                                <div id="doc-header" class="doc-header text-center">
                                    <h1 class="doc-title"><i class="icon fa fa-paper-plane"></i> Quick Start</h1>
                                    <div class="meta"><i class="far fa-clock"></i> Last updated: June 13th, 2022</div>
                                </div>
                                <div class="doc-body row">
                                    <div class="doc-content col-md-9 col-12 order-1">
                                        <div class="content-inner">
                                            <section id="download-section" class="doc-section">
                                                <h2 class="section-title">Introduction</h2>
                                                <div class="section-block">
                                                    <p>Aplikasi ini adalah sebuah modul pembelajaran
                                                        logika pemrograman dasar IoT menggunakan visual programming
                                                        yaitu Blockly.Anda bisa dengan mudah drag & drop block
                                                        yang dibutuhkan ketika ingin menyusun sebuah logika. Blok yang ada pada aplikasi
                                                        ini juga sangat bervariatif mulai dari percabangan, perulangan dan blok untuk mengontrol aktuator
                                                        Aplikasi ini disusun dengan tujuan untuk mempermudah
                                                        belajar logika pemrograman kepada mahasiswa.
                                                    </p>
                                                    {/* <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/prettydocs-free-bootstrap-theme-for-developers-and-startups/" class="btn btn-green" target="_blank"><i class="fas fa-download"></i> Download PrettyDocs</a> */}
                                                </div>
                                            </section>
                                            <section id="installation-section" class="doc-section">
                                                <h2 class="section-title">Variasi Blok</h2>
                                                <div id="blokeduiotboard" class="section-block">
                                                    <h3 class="block-title">Blok Edu-IoT Board</h3>
                                                    <p>IoT Development Board atau Edu – IoT Board adalah board yang merupakan sebuah produk 
                                                        pembelajaran Internet of Things yang diproduksi oleh TEFA (Teaching Factory) Polinema 
                                                        berguna untuk perangkat pembelajaran praktikum untuk anggota TEFA (Teaching Factory). 
                                                        Edu IoT Board ini memiliki komponen sensor dan actuator agar bisa dikontrol oleh pengguna, 
                                                        macam macam sensor yang berada di IoT Development Board terdiri dari sensor jarak, sensor suhu, 
                                                        sensor cahaya, sensor kelembapan. Selain itu juga terdiri macam macam actuator, yang berfungsi 
                                                        untuk pembelajaran controlling, actuator terdiri dari relay, led, buzzer dan fan. Aktuator bisa 
                                                        dikontrol melalui program yang sudah dibuat untuk Edu – IoT Board.
                                                    </p>
                                                    <div class="code-block">   
                                                        <img src="/blok/eduiotboard.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <p>Selain itu Blok Edu-IoT Board atau IoT Development Board merupakan blok induk yang harus dipasang atau
                                                            dimasukkan ketika melakukan sebuah penyusunan blok sebagai contoh adalah menyalakan LED
                                                            dan menyalakan Buzzer seperti gambar dibawah
                                                        </p>
                                                        <img src="/blok/menyalakanled.png" width={180} alt="..." />
                                                        <img src="/blok/menyalakanbuzzer.png" width={180} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <p>Selain itu blok Edu-IoT Board ini juga harus dimasukkan ketika seorang user ingin melakukan
                                                            penyusunan logika pencabangan maupun perulangan maupun operasi logika yang lain.
                                                        </p>
                                                    </div>
                                                    
                                                </div>
                                                <div id="blokkontrolled" class="section-block">
                                                    <h3 class="block-title">Blok Kontrol LED</h3>
                                                    <p>Blok kontrol LED berguna untuk mengontrol LED yang ada pada IoT Development Board.
                                                        Maksud dari mengontrol tersebut adalah menyalakan dan mematikan LED yang ada pada IoT Development Board.
                                                    </p>
                                                    <div class="code-block">
                                                        <img src="/blok/led.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h5>Value pada LED</h5>
                                                        <p>Blok LED mempunyai value 0-8 berguna untuk menyalakan berapa LED yang ingin dinyalakan. LED yang
                                                            dimaksud adalah LED yang ada di perangkat Edu-IoT Board. Cara memunculkan angka 1-8 adalah tinggal
                                                            klik pada tombol segitiga terbalik
                                                            seperti contoh adalah gambar dibawah:</p>
                                                    </div>
                                                    <img src="/blok/led1.png" width={150} alt="..." />
                                                    <div class="code-block">
                                                        Apabila kita menginginkan menyalakan 3 LED maka blok yang disusun seperti contoh pada gambar
                                                        dibawah:
                                                    </div>
                                                    <img src="/blok/led3.png" width={150} alt="..." />
                                                </div>
                                                <div id="blokkontrolfan" class="section-block">
                                                    <h3 class="block-title">Blok Kontrol FAN</h3>
                                                    <p>Blok kontrol FAN berguna untuk mengontrol aktuator FAN dan yang ada pada IoT Development Board.
                                                        Maksud dari mengontrol tersebut adalah menyalakan dan mematikan FAN yang ada pada IoT Development Board.
                                                    </p>
                                                    <div class="code-block">
                                                        <img src="/blok/fan.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h5>Value pada FAN</h5>
                                                        <p>Blok FAN mempunyai value 0-40 berguna untuk menyalakan FAN. Semakin banyak angka yang dimasukkan oleh user
                                                            maka FAN yang berputar akan semakin cepat, Semakin kecil angka yang dimasukkan oleh user maka Fan yang berputarpun
                                                            akan semakin pelan. FAN yang
                                                            dimaksud adalah FAN yang ada di perangkat Edu-IoT Board. Cara mamasukkan angkanya adalah tinggal
                                                            memasukkan angka yang diinginkan oleh pengguna seperti contoh pada gambar dibawah</p>
                                                    </div>
                                                    <div class="code-block">
                                                        <img src="/blok/fan3-.png" width={150} alt="..." />
                                                        <p>
                                                        Gambar diatas menunjukkan bahwa value pada fan di set pada angka 30 dimana FAN akan berputar secara kencang
                                                        pada perangkat Edu-IoT Board.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div id="blokkontrolbuzzer" class="section-block">
                                                    <h3 class="block-title">Blok Kontrol Buzzer</h3>
                                                    <p>Blok kontrol BUZZER berguna untuk mengontrol aktuator BUZZER dan yang ada pada IoT Development Board.
                                                        Maksud dari mengontrol tersebut adalah menyalakan dan mematikan buzzer yang ada pada IoT Development Board.
                                                    </p>
                                                    <div class="code-block">
                                                        <h5>Value pada BUZZER</h5>
                                                        <p>
                                                            Blok buzzer memiliki 2 value yaitu (BUZZER = ON) dan (BUZZER OFF) ketika user ingin menghidupkan buzzer, blok buzzer
                                                            yang disusun harus BUZZER ON. Ketika user ingin mamtikan buzzer, maka blok buzzer yang disusun harus BUZZER OFF. Untuk lebih
                                                            jelasnya tertera pada gambar dibawah.
                                                        </p>
                                                    </div>
                                                    <div class="code-block">
                                                        <img src="/blok/buzon.png" width={150} alt="..." />
                                                        <img src="/blok/buzof.png" width={150} alt="..." />
                                                    </div>
                                                </div>
                                                <div id="bloktimer" class="section-block">
                                                    <h3 class="block-title">Blok Kontrol Timer</h3>
                                                    <p>Blok timer berguna untuk memberikan timer/delay pada aktuator yang di eksekusi
                                                    </p>
                                                    <div class="code-block">
                                                        <img src="/blok/timer.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h5>Value pada Timer</h5>
                                                        <p>
                                                            Blok timer terdiri dari angka 1 - 5. Angka tersebut akan menentukan berapa (detik) jeda/delay yang diinginkan oleh
                                                            user. Ketika user ingin  mengeksekusi delay 3 detik maka blok yang disusun harus 3 juga. Seperti gambar dibawah
                                                        </p>
                                                        <div class="code-block">
                                                            <img src="/blok/timer3.png" width={150} alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="blokteksprint" class="section-block">
                                                    <h3 class="block-title">Blok Teks Print</h3>
                                                    <p>Blok teks print bertujuan unutuk memberikan pesan teks.
                                                    </p>
                                                    <div class="code-block">
                                                        <img src="/blok/print.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h5>Value pada Text Print</h5>
                                                        <p>
                                                            Blok timer memiliki value sesui inputan dari user. Sebagai contoh bisa dilihat dari gambar dibawah.
                                                        </p>
                                                        <div class="code-block">
                                                            <img src="/blok/1.png" width={200} alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="blokoperasilogika" class="section-block">
                                                    <h3 class="block-title">Blok Operasi Logika</h3>
                                                    <p>Blok operasi logika berfungsi sebagai blok perancangan logika yang akan dikirimkan ke perangkat Edu-IoT Board.
                                                        Logika yang akan di terapkan atara lain pencabangan if else dan if bersarang.
                                                        Di sini juga terdapat gerbang logika seperti contoh lebih dari, kurang dari, dan sama dengan. 
                                                    </p>
                                                    <div class="code-block">
                                                        <h6>Logika If Else</h6>
                                                        <img src="/blok/logicifelse.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h6>Blok Gerbang Logika</h6>
                                                        <img src="/blok/logicgerbang.png" width={150} alt="..." />
                                                    </div>
                                                </div>
                                                <div id="blokvariabel" class="section-block">
                                                    <h3 class="block-title">Blok Variabel</h3>
                                                    <p>Variabel adalah lokasi penyimpanan simbolis yang berisi berapa kuantitas yang
                                                        diketahui atau tidak diketahui. Fungsi dari blok ini adalah seperti itu
                                                    </p>
                                                    <div class="code-block">
                                                        <h6></h6>
                                                        <img src="/blok/variabel.png" width={150} alt="..." />
                                                    </div>
                                                </div>
                                                <div id="blokperulangan" class="section-block">
                                                    <h3 class="block-title">Blok Perulangan</h3>
                                                    <p>Blok Perulangan/Looping merupakan pernyataan atau instruksi yang diberikan kepada komputer agar ia mau melakukan sesuatu entah itu memproses data, menampilkan data, atau yang lainnya secara berulang.
                                                        looping dalam aplikasi ini antara lain perulangan for dan perulangan while
                                                    </p>
                                                    <div class="code-block">
                                                        <h6>Perulangan For</h6>
                                                        <img src="/blok/forloop.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h6>Perulangan While</h6>
                                                        <img src="/blok/whileloop.png" width={150} alt="..." />
                                                    </div>
                                                </div>
                                                <div id="blokfunction" class="section-block">
                                                    <h3 class="block-title">Blok Function</h3>
                                                    <p>Blok Fungsi (function) adalah sub modul atau sub program yang dibuat 
                                                        untuk menyelesaikan hal tertentu. Fungsi memiliki nama dan dalam ANSI/C, 
                                                        diimplementasi untuk hal-hal yang khusus dan dapat dipanggil berkali-kali 
                                                        (berulang) dalam program.
                                                    </p>
                                                    <div class="code-block">
                                                        <h6></h6>
                                                        <img src="/blok/fungsi.png" width={150} alt="..." />
                                                    </div>
                                                </div>
                                            </section>
                                            <section id="code-section" class="doc-section">
                                                <h2 class="section-title">Code</h2>
                                                <div class="section-block">
                                                    <p>
                                                        <a href="https://prismjs.com/" target="_blank">PrismJS</a> is used as the syntax highlighter here. You can <a href="https://prismjs.com/download.html" target="_blank">build your own version</a> via their website should you need to.
                                                    </p>
                                                </div>
                                            </section>
                                            <section id="callouts-section" class="doc-section">
                                                <h2 class="section-title">Callouts</h2>
                                                <div class="section-block">
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                                    </p>
                                                </div>
                                                <div class="section-block">
                                                    <div class="callout-block callout-info">
                                                        <div class="icon-holder">
                                                            <i class="fas fa-info-circle"></i>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="callout-title">Aenean imperdiet</h4>
                                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <code>&lt;code&gt;</code> , Nemo enim ipsam voluptatem quia voluptas <a href="#">link example</a> sit aspernatur aut odit aut fugit.</p>
                                                        </div>
                                                    </div>
                                                    <div class="callout-block callout-warning">
                                                        <div class="icon-holder">
                                                            <i class="fas fa-bug"></i>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="callout-title">Morbi posuere</h4>
                                                            <p>Nunc hendrerit odio quis dignissim efficitur. Proin ut finibus libero. Morbi posuere fringilla felis eget sagittis. Fusce sem orci, cursus in tortor <a href="#">link example</a> tellus vel diam viverra elementum.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>

                                    {/* siidebar */}
                                    <div class="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
                                        <div id="doc-nav" class="doc-nav">
                                            <nav id="doc-menu" class="nav doc-menu flex-column sticky">
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#download-section">Introduction</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#installation-section">Variasi Blok</a>
                                                </li>
                                                <nav class="nav doc-sub-menu nav flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokeduiotboard">Blok Edu-IoT Board</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokkontrolled">Blok Kontrol LED</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokkontrolfan">Blok Kontrol FAN</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokkontrolbuzzer">Blok Kontrol Buzzer</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#bloktimer">Blok Timer</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokteksprint">Blok Teks Print</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokoperasilogika">Blok Operasi Logika</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokvariabel">Blok Variabel</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokperulangan">Blok Perulangan</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokfunction">Blok Function</a>
                                                    </li>
                                                </nav>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#code-section">Operasi Logika Blockly</a>
                                                </li>

                                                <nav class="nav doc-sub-menu nav flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#html">Percabangan</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#css">Perulangan</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#sass">Menggunakan Variabel</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#less">Menggunakan Function</a>
                                                    </li>
                                                    
                                                </nav>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#callouts-section">Callouts</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#tables-section">Tables</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#buttons-section">Buttons</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#video-section">Video</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#icons-section">Icons</a>
                                                </li>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}
