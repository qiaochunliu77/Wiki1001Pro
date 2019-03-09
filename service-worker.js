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
    "revision": "0b1f4858c1221902b951d1e101609376"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "0c8e8fb95b5cd060e5328fd6639984d9"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "0e4f9c49ae860eea109e08644f3113a9"
  },
  {
    "url": "Another/Project.html",
    "revision": "e286f81eb1b5a332078bfbbc70e5e5d6"
  },
  {
    "url": "Another/Review.html",
    "revision": "799e97cf6afe367653d390d34e878821"
  },
  {
    "url": "assets/css/0.styles.6d958762.css",
    "revision": "30e831e237126e91ffc8bb74dfa338da"
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
    "url": "assets/js/10.cde5de22.js",
    "revision": "0d202b4af9a6a706b73dfa7973a7740c"
  },
  {
    "url": "assets/js/11.4d7b0a2b.js",
    "revision": "5126d67d167ea99775ae2d4c4229e658"
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
    "url": "assets/js/15.0feecbad.js",
    "revision": "79a0d3245d1cb4a619d0f60390d44b61"
  },
  {
    "url": "assets/js/16.38990f19.js",
    "revision": "e63b6b90dcf11bded5fb3617c440598b"
  },
  {
    "url": "assets/js/17.d72ab51c.js",
    "revision": "f44d21ee5613fb46541136c93bdd43d1"
  },
  {
    "url": "assets/js/18.aa23c181.js",
    "revision": "7dce998bfeca451271575f41c896274e"
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
    "url": "assets/js/21.2f04cd58.js",
    "revision": "400e629ceeceb13e035f0fa53f1e3348"
  },
  {
    "url": "assets/js/22.9b4efcc0.js",
    "revision": "dc33aaf24994444a5f23067fbab86e09"
  },
  {
    "url": "assets/js/23.a43f22fe.js",
    "revision": "aa390e7d06dbcb1c12b03f054bb514c5"
  },
  {
    "url": "assets/js/24.309ee8e2.js",
    "revision": "e5e02857dd01c2f9722944447f2126c2"
  },
  {
    "url": "assets/js/25.ca2f2809.js",
    "revision": "21d18cdc84ca53a79b443b6492403bfe"
  },
  {
    "url": "assets/js/26.010a4792.js",
    "revision": "c6fe13035da15ee110e3f94ce6481611"
  },
  {
    "url": "assets/js/27.0f66d044.js",
    "revision": "6a89fd04d8ce13a2a08a1f4e4b64601b"
  },
  {
    "url": "assets/js/28.bec78455.js",
    "revision": "9d2cf7dc7c09f5ac2e5ba1bf391465f1"
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
    "url": "assets/js/33.6e2e1dc3.js",
    "revision": "d5ffa7093288def7c8ed93a35bf1668c"
  },
  {
    "url": "assets/js/34.c5185ada.js",
    "revision": "44687d43cafc26814f5216d78f24f330"
  },
  {
    "url": "assets/js/35.19dc72e1.js",
    "revision": "71c27fd45436dc632f9b24578a909c81"
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
    "url": "assets/js/4.ea0b3a81.js",
    "revision": "142d71bee7b53e4fe42c3488f1d759f1"
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
    "url": "assets/js/46.d5dff66a.js",
    "revision": "c3abfd627b5dbd24ba13753f57f78639"
  },
  {
    "url": "assets/js/47.2a467dd6.js",
    "revision": "570d0bffacb1e3282bc15dc51746338b"
  },
  {
    "url": "assets/js/48.9613537d.js",
    "revision": "daa973a4adf68007714b3636c1be566b"
  },
  {
    "url": "assets/js/49.aa604feb.js",
    "revision": "2baa3747ecf5ba819ab4ab8a97214d13"
  },
  {
    "url": "assets/js/5.907baea3.js",
    "revision": "82379fe0a268e8eab77d09233f5fb13a"
  },
  {
    "url": "assets/js/50.ef0c00b1.js",
    "revision": "d03d50cfd229f3eafd31d8793460ac98"
  },
  {
    "url": "assets/js/51.fe092de5.js",
    "revision": "05c078076889834eec83eb26b0383b4c"
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
    "url": "assets/js/6.e623dc77.js",
    "revision": "a97cd3cee62db7512c2d736d7ede64e3"
  },
  {
    "url": "assets/js/60.0e3fcb42.js",
    "revision": "1809614952e125b644767d4d0f30374c"
  },
  {
    "url": "assets/js/61.1e36c75b.js",
    "revision": "91f67de1ce84e5549e83cb4076d14615"
  },
  {
    "url": "assets/js/62.b0e81f5b.js",
    "revision": "b9aa51fcb7f0a7967f038f57da68285e"
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
    "url": "assets/js/66.ea482bcb.js",
    "revision": "2569b8f8af690d670e9da6a5ab5e11db"
  },
  {
    "url": "assets/js/67.82d38650.js",
    "revision": "e6d8347ebe32f2c4d70fbb5cff383f55"
  },
  {
    "url": "assets/js/68.2258f032.js",
    "revision": "95249c88001c9be3a66ba52df91e325a"
  },
  {
    "url": "assets/js/69.890c5a70.js",
    "revision": "90bf3801092e8d79ace6692f58440ad5"
  },
  {
    "url": "assets/js/7.c2824c2f.js",
    "revision": "0419f4b445908b15b1af345734eab083"
  },
  {
    "url": "assets/js/70.745f529f.js",
    "revision": "d942e65bf648cacf8fa34dc7751eac8a"
  },
  {
    "url": "assets/js/71.039a1166.js",
    "revision": "fcb34406f4e568f9a5d6dd6566132a15"
  },
  {
    "url": "assets/js/72.f31a40ec.js",
    "revision": "88613a37f24794fd2d8ba007cf391716"
  },
  {
    "url": "assets/js/73.d8393d9d.js",
    "revision": "7d08ea68f9d1fd6bc6038f0dcb4dc031"
  },
  {
    "url": "assets/js/74.14a78014.js",
    "revision": "7546b13114ba434ce53098f172146ad5"
  },
  {
    "url": "assets/js/75.87f023e8.js",
    "revision": "8617e42a136a796ce9eae53a6bd4d21e"
  },
  {
    "url": "assets/js/76.42976569.js",
    "revision": "790b56983bbdf45b7f5b0a12106ccb59"
  },
  {
    "url": "assets/js/77.7cea505c.js",
    "revision": "69046f7c03493565f009c49578fbb94d"
  },
  {
    "url": "assets/js/78.8cbbb409.js",
    "revision": "6e2188cdd8f37178722a416796f411c9"
  },
  {
    "url": "assets/js/79.bfd1be3f.js",
    "revision": "3285d87b6c92884ec1b34cb9605ebd06"
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
    "url": "assets/js/9.0c0a9a52.js",
    "revision": "68dfae946a933e8841340650a0af64fc"
  },
  {
    "url": "assets/js/app.fe188292.js",
    "revision": "003304cb445b9ef1f01e9082ba85a3ad"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "ad1e8c7b8c32d41fd0826035c320600f"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "47844636fb6597b65588fbb6b0ee67d3"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "4084b58e0aa0e95b088c1945c979f8d7"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "b97bf1ac96aaaf54e08b537c59086f91"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "8ebffc7f643c5b61c96a1ebe78832055"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "f8ba8cf48ee4fa761c86792eb857f8d0"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "6e4856c8ec87f7504d8047ce0f8ce541"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "41552bc03ff15b47a7fd74d080f6288e"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "4aebf5e00e94fef267d4f82d63324e09"
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
    "revision": "0dbed3b8e43d2be31467c1da7d7a7a32"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "77d131b464d2ff7c3f483e746711f8fa"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "8959e3b3d001eba837c00c04cd12f67d"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "9b91d7d02d35d4c5af89e83a702ae725"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "2920558e89699e0cd0b488e9881d1262"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "ac4c7f9e811e0c575aa34226dc9ce5c0"
  },
  {
    "url": "Store/index.html",
    "revision": "29408bf7b090640bd87d02b890f18064"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "6528ef39feb55cb648f0049ee7e4f31d"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "179b924fff00cb965027d084c0097d05"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "df5855ae16f83db68c6b8962c57c8d4a"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "159124d4bf175dff3bc4c24b14041d59"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "71c81e3a9388efdc98db18c9b89642b6"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "f0a033d217ca19e5167926119ee5f0f8"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "3ed4c1b378d565314dea1e41337fd920"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "255cacbf345abf6014ed1e1107e53003"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "0dcf4a25493e811952d58d4fc02db663"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "4da389f27b039e1b8f596e551b220410"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "bcf3fe7b7e47671fa6c4133aa0c3e8c6"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "daf8c171b86aea638e233b7a408ab9ed"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "5181bf609c59fe6e5431f902e4791786"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "9f56ff1e7f13eff8b6cdc6d5c0670830"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "affdc156e71bff00b8c0ad75f0b32e34"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "96cac138e46b90cd91b3a2184ba19543"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "b0a4903077753d3a5260d1fde3e580e1"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "42690aadc58a9dd921c163bdb0f78394"
  },
  {
    "url": "Thought/index.html",
    "revision": "eeb48a7509ef2eb85d9d48343a5ee2f8"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "bcc9c658f5bf23a238516623d8c813ed"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "d7b07088ef08feef08826528d48db73d"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "26d79f4665fb891a05faf7040b92e5fc"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "6fcf728998ff0706c335903d7f314a1f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "516466b86e22f880ab3072f1513d0ef2"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "3fef198b78cf393903496bbd15dea3fc"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "f035bdebe0c65aa2022c15336174dc1b"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "2a24b91182f99c70f29d63ca32983e80"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "be21e7f4a382858ccf9c5aa351faff56"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "6576b42c2de60447a208bd2c4adf7ab8"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "3a43ff5d8dc3bc7341d1a1a89aecc711"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "ab8a370c7072ecbe695b88f4a5275fd1"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "e6533a67c4da2f3d15fe4448344b860b"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "33bf64e8d73cda8bb09bb0f353073070"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "88f34de00d65882116149556c6abfd72"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "e14b8072e457f9224c7c52839c08c0b2"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "6a00ef64eba4fc1141d9c5a378370391"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "83daa60b5f00abdc7d5f6b9dde991c71"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "024c5dc06b9dd02321607ce2d541c9fc"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "1b043aadd2ef1d667ab59c4245af443a"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "3198dabeef745a925633d957a7987b24"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "7d23de10baf3f171c4a7dea60aab0e8c"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "e45b554f490f2ede3240de5a806adace"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "4ace5196ab588a2b8000849325e0d759"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "4eec87db67dbeccea139757f464ba65f"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "ad537e0ed2fdb0ee2c36f80f116adacd"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "7d25a6bd8069f169aca7cb4f148bd697"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "fe0339a0b41d55dc3701f8c989765159"
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
