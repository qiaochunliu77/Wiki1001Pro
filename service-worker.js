/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a033f60119be8827d52c896cd308a4c4"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "19524fb60ef4a798b54e99ddf3d0c861"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "63e095c997697bf571a443669badae0a"
  },
  {
    "url": "Another/Project.html",
    "revision": "b017fc64163ed750a1ba5f7a1e6713a9"
  },
  {
    "url": "Another/Review.html",
    "revision": "2711ed0127b14242f4561f8d5bbaf68d"
  },
  {
    "url": "assets/css/0.styles.ef1a6305.css",
    "revision": "d56889857c90193391fb98c00143b24c"
  },
  {
    "url": "assets/img/00.8ce96cb4.jpg",
    "revision": "8ce96cb4cb446f754ee142792cae5a63"
  },
  {
    "url": "assets/img/001.599f91d3.jpg",
    "revision": "599f91d3c11b76edd82f609ce3a15db7"
  },
  {
    "url": "assets/img/001.b9fa5ca8.jpg",
    "revision": "b9fa5ca84f89cadc463d44c68ea8e33e"
  },
  {
    "url": "assets/img/002.3813aefb.jpg",
    "revision": "3813aefbd1ce44d9db5ed98db9cc0f4c"
  },
  {
    "url": "assets/img/002.7f873470.jpg",
    "revision": "7f873470399aa4cc1cb5a20155b24233"
  },
  {
    "url": "assets/img/003.b3aa287d.jpg",
    "revision": "b3aa287d818ecb0ca1ce8899ee4f64c6"
  },
  {
    "url": "assets/img/003.d5ecd8fe.jpg",
    "revision": "d5ecd8fe28a5033d57d79f2bb9f4fb42"
  },
  {
    "url": "assets/img/004.6102c5a8.jpg",
    "revision": "6102c5a8da8c9c3156dacdd3e1ae6b75"
  },
  {
    "url": "assets/img/005.5ee4517a.jpg",
    "revision": "5ee4517ae8ecac8f06ba683930d8a7f3"
  },
  {
    "url": "assets/img/cssrules.9f296145.png",
    "revision": "9f296145a1b97573527a76c953b32b6d"
  },
  {
    "url": "assets/img/githubLink.7fabd7af.jpg",
    "revision": "7fabd7af2a1a06803aa35aabfe33c5a2"
  },
  {
    "url": "assets/img/google_analysis.2edd12f3.jpg",
    "revision": "2edd12f37a95dc9fe395cb91122332b9"
  },
  {
    "url": "assets/img/google_post.e19082be.jpg",
    "revision": "e19082be1304dc86ecea9fa64a2a1dad"
  },
  {
    "url": "assets/img/iconSelect.6b3b7652.jpg",
    "revision": "6b3b7652a121ce0f42b35db1b935ac7d"
  },
  {
    "url": "assets/img/linear_home.0d3acd95.jpg",
    "revision": "0d3acd9568bea627a90b9768ea9be234"
  },
  {
    "url": "assets/img/linear_scroll.396161bc.jpg",
    "revision": "396161bcf5dea38a6d98c6dca5b03f53"
  },
  {
    "url": "assets/img/logo-White.98dace1e.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "assets/img/modelLeft.3a975195.jpg",
    "revision": "3a975195084b883117ec86d4262eb0a9"
  },
  {
    "url": "assets/img/modelRight.5b58ce3e.jpg",
    "revision": "5b58ce3e42b0454dd42746471d22e42e"
  },
  {
    "url": "assets/img/pwa-post.5922cce0.jpg",
    "revision": "5922cce0fd661cfc16049db6d4cade75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sw_popup_my.507a1597.png",
    "revision": "507a15970a1fbc312959602df805c514"
  },
  {
    "url": "assets/img/swpopup_demo.bddc4d9d.jpg",
    "revision": "bddc4d9dd7d3934d336a6ab1c554a5bb"
  },
  {
    "url": "assets/img/swpopup_old.1b1dfa29.jpg",
    "revision": "1b1dfa29f19c3a818a4532b97e618de2"
  },
  {
    "url": "assets/img/versions.6306b5ab.jpg",
    "revision": "6306b5ab6610e0e2cce99e20ac4cde9b"
  },
  {
    "url": "assets/js/10.bfcf1f44.js",
    "revision": "c22618f14d2bacf2bb60856d0ec5faf6"
  },
  {
    "url": "assets/js/11.2f9f0e91.js",
    "revision": "549a1fb439098a4091444f58fed7984a"
  },
  {
    "url": "assets/js/12.75d455bb.js",
    "revision": "edec0caac7ad3d55de9de1b01c76cc0a"
  },
  {
    "url": "assets/js/13.79f83de6.js",
    "revision": "fe050d24b156b5a692ac498fe330b8fa"
  },
  {
    "url": "assets/js/14.538bb3bf.js",
    "revision": "e0fb68087b59f23c11a92776b6c0d543"
  },
  {
    "url": "assets/js/15.6a1d5866.js",
    "revision": "d49220d1117eda2522ff4379b4b43892"
  },
  {
    "url": "assets/js/16.c3effe5d.js",
    "revision": "32377afc2e3fe51352225007d7ea8701"
  },
  {
    "url": "assets/js/17.8dee3dcb.js",
    "revision": "472f7eeae365d3f39670657710229ae6"
  },
  {
    "url": "assets/js/18.77f8ed47.js",
    "revision": "090080779965a4fcecfdb2d594145ab3"
  },
  {
    "url": "assets/js/19.3e0f6a62.js",
    "revision": "b9f68176c41fe6cea4c1aca61a4d73ee"
  },
  {
    "url": "assets/js/2.4e86b3a1.js",
    "revision": "6e137a7a0b1aea9bfdb37a92ca089045"
  },
  {
    "url": "assets/js/20.a0ec4600.js",
    "revision": "ca42e5b26aff199747a39be5c4a720b8"
  },
  {
    "url": "assets/js/21.5fb64e52.js",
    "revision": "df79dbde45aad05827fcb5ea6830ced9"
  },
  {
    "url": "assets/js/22.dfa8d3d0.js",
    "revision": "f54674c1a05665d335c2a448fbe35c1e"
  },
  {
    "url": "assets/js/23.1899c72d.js",
    "revision": "866f32382e0e9e5b154d5477233cd5b9"
  },
  {
    "url": "assets/js/24.20465d37.js",
    "revision": "0c08f27339e92c05e3518d5a91e85e5d"
  },
  {
    "url": "assets/js/25.ca2f2809.js",
    "revision": "21d18cdc84ca53a79b443b6492403bfe"
  },
  {
    "url": "assets/js/26.34f5e32a.js",
    "revision": "ca4f8dcf4c21fee066e9736d0fecd8cd"
  },
  {
    "url": "assets/js/27.0f948b7c.js",
    "revision": "53b0d928cc7c476dbec62f0e21d807d3"
  },
  {
    "url": "assets/js/28.d1c4f01a.js",
    "revision": "557ab7eb7924c4a635707ec2ca7e771e"
  },
  {
    "url": "assets/js/29.c392fe82.js",
    "revision": "65fd34a345043230e15a78595bf7df60"
  },
  {
    "url": "assets/js/3.fd31ff02.js",
    "revision": "568523d16eaa764f29ff3b5d0a4d6201"
  },
  {
    "url": "assets/js/30.dca6f011.js",
    "revision": "aebe1922c020d07412b8994c259e41ed"
  },
  {
    "url": "assets/js/31.5dc2d68f.js",
    "revision": "04564a3eba00b5b31c4efc5dc09c6bd1"
  },
  {
    "url": "assets/js/32.1cd40e34.js",
    "revision": "64126a204a945f30b8cd1067acd65624"
  },
  {
    "url": "assets/js/33.717a42d2.js",
    "revision": "1c5cabf7069497168d6538868d9081e4"
  },
  {
    "url": "assets/js/34.dd847e16.js",
    "revision": "7b06160840d4997fbe13255bb064dfbc"
  },
  {
    "url": "assets/js/35.0a881bf1.js",
    "revision": "0301a892d23313de4bbea8b90287c294"
  },
  {
    "url": "assets/js/36.3b7a83c2.js",
    "revision": "9f9fe804235a8e10e16967ca3d3f312d"
  },
  {
    "url": "assets/js/37.911b4a6e.js",
    "revision": "400fc5970bc9d967bc99d654b1ed1e7f"
  },
  {
    "url": "assets/js/38.c6dd0067.js",
    "revision": "2f10fb199d08b412c326c7f219204891"
  },
  {
    "url": "assets/js/39.0d819af6.js",
    "revision": "5238e6fbfe15a10a237f5f18bd127820"
  },
  {
    "url": "assets/js/4.5b5557f5.js",
    "revision": "0671419216705dfa6ff83d5dad3243a8"
  },
  {
    "url": "assets/js/40.5efdb23a.js",
    "revision": "018cea0d3da732daa4fdde4456bc0664"
  },
  {
    "url": "assets/js/41.42deacbb.js",
    "revision": "e5f8bb91f45ec27eef8b97fd0d715f0e"
  },
  {
    "url": "assets/js/42.09e40bf7.js",
    "revision": "53c262b2084e2993fd0d3fe4aa81db51"
  },
  {
    "url": "assets/js/43.1ca5f490.js",
    "revision": "2c4ea5b3fd86d7c15ef169d403f980a2"
  },
  {
    "url": "assets/js/44.a7266af7.js",
    "revision": "8852d74bb36d001445f8791af6202a80"
  },
  {
    "url": "assets/js/45.61ebec37.js",
    "revision": "a377123ee6165fdfc0670bd59149c058"
  },
  {
    "url": "assets/js/46.c132fb61.js",
    "revision": "c20fb469a4a158542ac661b83a530ac6"
  },
  {
    "url": "assets/js/47.5a154e40.js",
    "revision": "7e872bbdbb9260e0ed4ca91ba5e17f26"
  },
  {
    "url": "assets/js/48.9613537d.js",
    "revision": "daa973a4adf68007714b3636c1be566b"
  },
  {
    "url": "assets/js/49.88f0974d.js",
    "revision": "b464c8a789216325890073228e0ab5ae"
  },
  {
    "url": "assets/js/5.3810fcd4.js",
    "revision": "f24ff97f7a48ffd8181613ed064782bb"
  },
  {
    "url": "assets/js/50.ab662f9a.js",
    "revision": "ebb336e4c0a2725b27621ec59f924591"
  },
  {
    "url": "assets/js/51.3745bac5.js",
    "revision": "7872f45db1a58001befe7430f2e93d68"
  },
  {
    "url": "assets/js/52.8f57735a.js",
    "revision": "5e0f3d985e26b1524a26401d8d5c6f04"
  },
  {
    "url": "assets/js/53.26e8c28f.js",
    "revision": "b933be943944bb8b7473f341e82babd1"
  },
  {
    "url": "assets/js/54.65f5dda7.js",
    "revision": "881c57e9323503e4858422a9ac66d006"
  },
  {
    "url": "assets/js/55.be2791e3.js",
    "revision": "603466100ddc2586b9ecdd07e9e180a3"
  },
  {
    "url": "assets/js/56.9b227806.js",
    "revision": "840dda608ae1cffb21af65994472a081"
  },
  {
    "url": "assets/js/57.a5f3541c.js",
    "revision": "3a69b356c46b0eae5c07993b3eb44316"
  },
  {
    "url": "assets/js/58.d9ffc091.js",
    "revision": "713eb16dff96800cd15525e908451eab"
  },
  {
    "url": "assets/js/59.975e9523.js",
    "revision": "d564e94cae342577955278e819c13625"
  },
  {
    "url": "assets/js/6.05dac407.js",
    "revision": "ffce2cf66343ff1044eb40d95fa859b4"
  },
  {
    "url": "assets/js/60.0e3fcb42.js",
    "revision": "1809614952e125b644767d4d0f30374c"
  },
  {
    "url": "assets/js/61.f0ed607a.js",
    "revision": "b4c4887b7ab8317b62f28cd6fcaf9e6a"
  },
  {
    "url": "assets/js/62.cc2e4d02.js",
    "revision": "12ddf21921b1378c52deea2d980e7c29"
  },
  {
    "url": "assets/js/63.48d524f0.js",
    "revision": "cf7dea106e7a352f60fe0a80224271e5"
  },
  {
    "url": "assets/js/64.d5e02161.js",
    "revision": "6b2acd0a090e54718b9aadac906fa5fb"
  },
  {
    "url": "assets/js/65.04a222ba.js",
    "revision": "1455ba8538a32045599059373223244b"
  },
  {
    "url": "assets/js/66.f5c8c7a5.js",
    "revision": "1a8322aafb5540d1766cd06659258acc"
  },
  {
    "url": "assets/js/67.41fe2dc6.js",
    "revision": "5a5224d1dcfe142a92f03fbe489ffbdb"
  },
  {
    "url": "assets/js/68.2258f032.js",
    "revision": "95249c88001c9be3a66ba52df91e325a"
  },
  {
    "url": "assets/js/69.87dbbdbf.js",
    "revision": "fbd1ad4947c1534dca51919aba5a8777"
  },
  {
    "url": "assets/js/7.1e8208e9.js",
    "revision": "0e4bf496ca81894f8d758e499b3dec3d"
  },
  {
    "url": "assets/js/70.69ba11ca.js",
    "revision": "0058340a999a4650528be04f4bba4ccf"
  },
  {
    "url": "assets/js/71.63a6f853.js",
    "revision": "85f75509333a516729f1603fc84082d9"
  },
  {
    "url": "assets/js/72.3e9782d7.js",
    "revision": "73ef5c49c2b3f7dc7e4cd43f102d3412"
  },
  {
    "url": "assets/js/73.15b6028b.js",
    "revision": "0b0b928dcd5aafd7b999ccbdb4602deb"
  },
  {
    "url": "assets/js/74.9ccfbd54.js",
    "revision": "5ab1826bfcecab4594e4b178d802261a"
  },
  {
    "url": "assets/js/75.02ecb61c.js",
    "revision": "cbbc74ed5a45fd0a2f2a7dabf65f8a7c"
  },
  {
    "url": "assets/js/76.42976569.js",
    "revision": "790b56983bbdf45b7f5b0a12106ccb59"
  },
  {
    "url": "assets/js/77.3556d603.js",
    "revision": "8dfc22763a15985dd571c07571ef741c"
  },
  {
    "url": "assets/js/78.053ab426.js",
    "revision": "9b02f0a3443d80e4a18c08a49b8557e5"
  },
  {
    "url": "assets/js/79.9623f691.js",
    "revision": "3ce0bd612544cca4606f69e2cc7793e1"
  },
  {
    "url": "assets/js/8.2d6d008b.js",
    "revision": "a89a9bee27ca455f7b47451b4cb8af1a"
  },
  {
    "url": "assets/js/80.1787a462.js",
    "revision": "c21e493bbeaa9cd04bf57af4add4a34d"
  },
  {
    "url": "assets/js/9.758a06e9.js",
    "revision": "ae3477c79079f0475e0aea9ba2a7303b"
  },
  {
    "url": "assets/js/app.e5a622ad.js",
    "revision": "082938a137051b79aaa23f26a90e28e7"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "f1b05e4ab75d2ab9f0a555655faeb28e"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "45d6416c1e134a6678f9f7981ecc0600"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "7075909a0cf9a0530f9ad030fa3ef7ba"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "1b5f9da7fc88639ad30568bfc6c7d7b8"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "7e114d5d1296a6d9c5e2a9f0b1fc431f"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "b2c4f346389afc644b2d97f811baf572"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "51334104490e3f3a775fb522c4b05cc5"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "a23030cb202df05b150a46e396717402"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "a83d984f7dd900bf21d6dd99636c5d86"
  },
  {
    "url": "img/links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/logo-White.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "img/logo.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/logo2.jpg",
    "revision": "7af828f6f609dd9f9068cff116dd330a"
  },
  {
    "url": "img/modelLeft.jpg",
    "revision": "3a975195084b883117ec86d4262eb0a9"
  },
  {
    "url": "img/modelRight.jpg",
    "revision": "5b58ce3e42b0454dd42746471d22e42e"
  },
  {
    "url": "img/users/finen.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
  },
  {
    "url": "img/users/orange.jpg",
    "revision": "dfdf9f5b6e8122ac76479ee38297b42e"
  },
  {
    "url": "img/wiki/Baidu.png",
    "revision": "dfa63b81c92322d44db59e06cd0ad259"
  },
  {
    "url": "img/wiki/baiduHelp.png",
    "revision": "d91ad7ef1b5642a4a291ea87c563d0df"
  },
  {
    "url": "img/wiki/bing.png",
    "revision": "c6c301113aeffd8f80029a72e6e7037d"
  },
  {
    "url": "img/wiki/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/wiki/earth.png",
    "revision": "5bedfd819a77ac7d87befdff600e3a5f"
  },
  {
    "url": "img/wiki/google.png",
    "revision": "b4ddf57cc277d4ac6cb237c71b327c73"
  },
  {
    "url": "img/wiki/hacker.png",
    "revision": "7ce17c1d46025625752d9d8869e4b2d8"
  },
  {
    "url": "img/wiki/vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "img/wiki/Wikipedia.png",
    "revision": "a9bcbc01c4d9ca7c299b478d123a6a75"
  },
  {
    "url": "index.html",
    "revision": "30673773b36d952eabaa3e0f24a87f0c"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "8cdab4d5084f05ac15f434055cb95e1e"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "e765a049418e203d35e412362313c385"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "d7b09faed6adb34d77ad2f5f0ef6fd53"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "5ae31b62b6540b1f3eb7b5eb6d35fc1b"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "9113d6e0449e078dd564edc98f4e8e9f"
  },
  {
    "url": "Store/index.html",
    "revision": "7f3ba31865ad1eca478535c56758a1dd"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "94840899519d1a1d52566e824b1e3e03"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "62905cc96458b5c1d40305a66f8be5bc"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "5e31661e427e732fa3ba319a4b5952cd"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "d9a3cbcd8ce72e1857553380ff497f26"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "17658edd920d7bb067d79e019e4f3c14"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "738d7be58d7922e02ad0c7eb6c11d90d"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "4000414dbb0707e6e4f38da6f7d48755"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "e84374de188a72ac0aa3b90c247fa5ee"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "6fabb01f8d4dca72d55782fb8f638dc1"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "46cb8d6ac955888f3d1ad774471d2cf4"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "86036cc90e1f2d5cb55c10f71357a58d"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "c9671ee804d19a1aadd0598bef6c4ee8"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "c228be0bf6b8e32079b3adf47483a624"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "b25ff7da45d3c12a4abe5de4931c176c"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "e88f166c36a3fd26d89860d8cec5db1c"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "56aaaeef6af9c0d7757cd01c801fd116"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "0fd71c2c6f3beaefe8e27454d44f6f36"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "c692ed794c99fcb679fee108cf151698"
  },
  {
    "url": "Thought/index.html",
    "revision": "d5c95e92678d5900fe0fd646ff5b455c"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "a4025753342cb9c22b66fab72c191355"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "4649bd54756f72f5e85da0f86a662ddb"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "c645f439e6fefcf4e9ac295183db97e9"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "6a2d2e2c006a8a8cf0d436ecc1ac5236"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "fd4b3caafc85448a52317efe4456d5d1"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "e9e968f7b54defb0385a2addd2f24bdd"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "bd0c8871e5774f351bdfe459eb19fc4e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "d3a16b7ba530c0d7435477544b55da43"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "bca4001c1b0c2b41cb3fde7511d847c3"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "903c239aa85ac5d6a0dce01328a3b417"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "cbd2023561d3a023115a82bee63b2996"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "0eef01af00bab6a2db5d1d5ebeff2487"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "c009207d0f8676425758789eaeb0b8cf"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "919ed8361ca42387ebfc43ae8dfffdd8"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "85ef6d974ffe67e54f6ead2f54a89ac3"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "2a2d26eb94a86095d9ed0d9474c4a8a0"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "9803b29df15f20d795fe5fc4cff7e493"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "0fa6bb928e6257275436ce97894d5cb7"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "161ef987e9a041be9568c04d100f08bd"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "9037e165431f11d798004ff0a0352851"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "a128e3e65dc63b4ae43a283e59f3e40a"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "5f660e75592148d329b5e85c7af5a9fb"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "728d92611bcc3454278338b2763d9f1e"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "32c1d3ae5be7113f40a4436a33db4e4d"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "c24600c90e878b745de69b34e0926f53"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "69d6256e894eb9be4dcd30a26a133dcc"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "4fa547ca808ff7f4fd20abab9562122d"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "bfad37849ed7352072c88663137bed00"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
