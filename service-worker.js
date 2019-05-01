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
    "revision": "7d8983ed63a3bf5b3d848224d430f5c1"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "7161ec37960cba20e5bc363aad7f1a1a"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "8706809b14cb6cf6866e273e4a1d36ed"
  },
  {
    "url": "Another/Project.html",
    "revision": "48e577c3b849b8e83b7d7bfa8b5ce83e"
  },
  {
    "url": "Another/Review.html",
    "revision": "a5406545f064c766b0d4658fea27e77f"
  },
  {
    "url": "assets/css/0.styles.90fff3b5.css",
    "revision": "acf8cfd2b7d150a267f7847113ef76d5"
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
    "url": "assets/img/A005_multiShadows.172b9df2.jpg",
    "revision": "172b9df2a154d4c986f805969d9e15d6"
  },
  {
    "url": "assets/img/A005_shadow01.d5f30f93.jpg",
    "revision": "d5f30f931661a9263768e360fc64a3da"
  },
  {
    "url": "assets/img/A005_shadow02.0c472907.jpg",
    "revision": "0c472907c476c244e250a4fe92d5bb57"
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
    "url": "assets/js/10.cace537c.js",
    "revision": "810ec7c1818c4dd36b08ef8a5bcff61b"
  },
  {
    "url": "assets/js/11.e732bd27.js",
    "revision": "a6f9217156bca8aae1d93919fb0ef041"
  },
  {
    "url": "assets/js/12.a5bd547f.js",
    "revision": "224f69e40b04ff457615d33c679a917e"
  },
  {
    "url": "assets/js/13.1c3b3793.js",
    "revision": "654fb639674fd84b1155a37194a283b3"
  },
  {
    "url": "assets/js/14.af4b41ba.js",
    "revision": "1668b2d7020bd19090a96317127bdcf0"
  },
  {
    "url": "assets/js/15.107fdd2d.js",
    "revision": "47b34c80150ef1dfdb62f198cb175f1e"
  },
  {
    "url": "assets/js/16.d870eaab.js",
    "revision": "e2f7e78a42eafe6c298134d18f9cf164"
  },
  {
    "url": "assets/js/17.b1b3c75b.js",
    "revision": "49389cf7ed668d8d96e316a9ce85bbb8"
  },
  {
    "url": "assets/js/18.8b5c9c05.js",
    "revision": "23c6bc22c76de549d8f66637dfc9e367"
  },
  {
    "url": "assets/js/19.4f66d931.js",
    "revision": "c5e42a6c6cea3cf257a6feca108b6f66"
  },
  {
    "url": "assets/js/2.12aaa34d.js",
    "revision": "5a3bec5981640098a8a53a975b958e2b"
  },
  {
    "url": "assets/js/20.acf1633c.js",
    "revision": "59d8100dea2564748ef6ddb4f23bf544"
  },
  {
    "url": "assets/js/21.e0a18372.js",
    "revision": "f52b1e06266724b6fd048865a6da3f36"
  },
  {
    "url": "assets/js/22.e47be593.js",
    "revision": "df661e359625213ce82fa976dafce424"
  },
  {
    "url": "assets/js/23.87edd8f6.js",
    "revision": "c840492fb41a4fff1c5706b0c4a6b81f"
  },
  {
    "url": "assets/js/24.51b7ea25.js",
    "revision": "6bda5afac0cd2784a17c5a1c44c65724"
  },
  {
    "url": "assets/js/25.afa44061.js",
    "revision": "16ae9425c18774642272156aa8ffb66a"
  },
  {
    "url": "assets/js/26.1f253626.js",
    "revision": "732bc61de11e92dd99caf2cf78dfe1d6"
  },
  {
    "url": "assets/js/27.759216b8.js",
    "revision": "d41600b7d206365dda7b70e07e16c29b"
  },
  {
    "url": "assets/js/28.38dfa977.js",
    "revision": "2c3472550dbaeb1d1cde57fe517f9bd4"
  },
  {
    "url": "assets/js/29.87e9133f.js",
    "revision": "c45d49212c706a3215ecfa486413a228"
  },
  {
    "url": "assets/js/3.a2f4e32f.js",
    "revision": "a41d5e4baa63d8cb447cd1aa1ad05354"
  },
  {
    "url": "assets/js/30.3bee6529.js",
    "revision": "2b6c4bf75483e64a4ffa1ece6484bfbd"
  },
  {
    "url": "assets/js/31.dcf3f89a.js",
    "revision": "d85a6ecd4182804903e0a22fdc6548d2"
  },
  {
    "url": "assets/js/32.78d2549b.js",
    "revision": "790ac11c726d5c5a987a08c340081950"
  },
  {
    "url": "assets/js/33.60a980ef.js",
    "revision": "e68b6aa0daad5e9ee1150f4251381559"
  },
  {
    "url": "assets/js/34.446ad359.js",
    "revision": "2daff31d8a4d31b89cd7fbffed602e63"
  },
  {
    "url": "assets/js/35.95147ce4.js",
    "revision": "e5f50235949413750ceda8503e07a433"
  },
  {
    "url": "assets/js/36.c7df6519.js",
    "revision": "68a93b1a9a0da2283cf28d703f5125c2"
  },
  {
    "url": "assets/js/37.0ee51664.js",
    "revision": "c639d020cd7fcc3e83182cd3d58b4ec2"
  },
  {
    "url": "assets/js/38.147f34f6.js",
    "revision": "66f79d92323c0f6c9bcec46e1c99f25a"
  },
  {
    "url": "assets/js/39.c76035ce.js",
    "revision": "60b0907817c8e2882a9ed01fe59f4ccb"
  },
  {
    "url": "assets/js/4.7ed09c8b.js",
    "revision": "7bd6e74fe50c74c91bd5742ec912f5d5"
  },
  {
    "url": "assets/js/40.00b5e434.js",
    "revision": "899fc3456bea7559038bf260e2b390a4"
  },
  {
    "url": "assets/js/41.cd2c020c.js",
    "revision": "1dc0846285df462d65e0adbea4ee4413"
  },
  {
    "url": "assets/js/42.80c43423.js",
    "revision": "568f8ef3226af999bf697a1ef86b1117"
  },
  {
    "url": "assets/js/43.b73d222d.js",
    "revision": "1732dba6261201b2fdc417cc3788efed"
  },
  {
    "url": "assets/js/44.6965a79f.js",
    "revision": "6679411c4f522836f21b32c57e99e09b"
  },
  {
    "url": "assets/js/45.b600e053.js",
    "revision": "a72cccd8ef5cd4f63be6b930e977ea51"
  },
  {
    "url": "assets/js/46.42f60e84.js",
    "revision": "568c545010f1bd789ee913cce3d0212f"
  },
  {
    "url": "assets/js/47.c04d3b11.js",
    "revision": "a9e74a0f3b7f8d767cd454c5ba5c5792"
  },
  {
    "url": "assets/js/48.da78001e.js",
    "revision": "4285c534346abb7c74d00ec11f548854"
  },
  {
    "url": "assets/js/49.339c5846.js",
    "revision": "fbb36fb70d1b2fe2adfc8f21b97fddfe"
  },
  {
    "url": "assets/js/5.cea4cc08.js",
    "revision": "5be388bb2a6c2606e88e65f3b537fba5"
  },
  {
    "url": "assets/js/50.27954b6c.js",
    "revision": "bc6a07efc286c3d53dab1fe46d42e50e"
  },
  {
    "url": "assets/js/51.c50e9cea.js",
    "revision": "51694676317c8f66bdd4d18fcb8c8984"
  },
  {
    "url": "assets/js/52.528af6b4.js",
    "revision": "b759e2b1d2a05974e7d94b2769d750a9"
  },
  {
    "url": "assets/js/53.d86f55d7.js",
    "revision": "c060f58d47be3551b177fcd8974e2c94"
  },
  {
    "url": "assets/js/54.737a5f02.js",
    "revision": "149e99663e1d86739b6c883583ad3fbb"
  },
  {
    "url": "assets/js/55.fdbbf38d.js",
    "revision": "18c60527676ea571b6e473442cc437d9"
  },
  {
    "url": "assets/js/56.8df9dc83.js",
    "revision": "d4c3c2e27864eddb889fb4d923595ebc"
  },
  {
    "url": "assets/js/57.28d0c1c1.js",
    "revision": "fcf2ea750f9a93da4f6c63968e5d0097"
  },
  {
    "url": "assets/js/58.f8d69ad1.js",
    "revision": "efb37281a0f8fae7dc1b9e675b2748bc"
  },
  {
    "url": "assets/js/59.e93efbaf.js",
    "revision": "6e76b5b2e8fdae42b5d6897a3c8c68ff"
  },
  {
    "url": "assets/js/6.d23ac0f8.js",
    "revision": "176dd1efac7381eca80228c38f6f2bf8"
  },
  {
    "url": "assets/js/60.e92b4f2d.js",
    "revision": "54103e133fa8702bf9bc668abb2beed9"
  },
  {
    "url": "assets/js/61.3106dbb8.js",
    "revision": "93d73cc0c99df4f53dadeabff7db88c7"
  },
  {
    "url": "assets/js/62.8b136c84.js",
    "revision": "132609836c92125c40dfbebcce6d068b"
  },
  {
    "url": "assets/js/63.05a95591.js",
    "revision": "e99cc74c7441530a326c7075428c8e99"
  },
  {
    "url": "assets/js/64.fe744c28.js",
    "revision": "87317d0ce5d48fdc9539e66ab7c01858"
  },
  {
    "url": "assets/js/65.6e9d2e4f.js",
    "revision": "e3c5bd1f9db6efd16da8a90620089347"
  },
  {
    "url": "assets/js/66.5901f9c6.js",
    "revision": "8f3320e93f96cc0df401c3e91434d7f2"
  },
  {
    "url": "assets/js/67.bf2beecf.js",
    "revision": "6c2a6824ab9692f2cdbf379fa21494e2"
  },
  {
    "url": "assets/js/68.2fb64d4e.js",
    "revision": "4eb104e4af57be9f2cb429706b259e97"
  },
  {
    "url": "assets/js/69.9ad21032.js",
    "revision": "1b494f7c4c1cc1296266ff89baf79105"
  },
  {
    "url": "assets/js/7.51102192.js",
    "revision": "83c559833022c21c961de5f426b914c7"
  },
  {
    "url": "assets/js/70.e60ae9cc.js",
    "revision": "39f3ac2502ce2e3cc2d9af5a95dd4094"
  },
  {
    "url": "assets/js/71.933c4b01.js",
    "revision": "f9e2b239e37881dda8dff51aef9869a2"
  },
  {
    "url": "assets/js/72.2445cb76.js",
    "revision": "9bd189d35c7022fbc3382c1158bf3181"
  },
  {
    "url": "assets/js/73.b302c22b.js",
    "revision": "03282b214e3db5ebe5510a1dc8b884ec"
  },
  {
    "url": "assets/js/74.99f945d9.js",
    "revision": "2019f5fcd2f58cb7bccadc3b69c56169"
  },
  {
    "url": "assets/js/75.97d3b977.js",
    "revision": "f9fe54a084f08760fa46b25536b22c27"
  },
  {
    "url": "assets/js/76.c0dc3fb2.js",
    "revision": "9aa5709e0118d8b25f2bce5cc5e97459"
  },
  {
    "url": "assets/js/77.24e33b43.js",
    "revision": "c689c3fa6461f3f6ce260784e1d87ebb"
  },
  {
    "url": "assets/js/78.353d58bc.js",
    "revision": "36831d69ba88aa79d6df737207773257"
  },
  {
    "url": "assets/js/79.36b808f5.js",
    "revision": "f7e3a84f855e3c047eac635e6810ab05"
  },
  {
    "url": "assets/js/8.a45011a0.js",
    "revision": "28b5cebbe4cf448db1372cab5c5c107e"
  },
  {
    "url": "assets/js/80.5de9715d.js",
    "revision": "7681f0e73ab33a5c1ea9e02973831ec1"
  },
  {
    "url": "assets/js/81.0214da33.js",
    "revision": "c76f948319a209eb03a7189d06930d29"
  },
  {
    "url": "assets/js/82.635f8670.js",
    "revision": "e604ec214d64d0cf7afb24baa7519009"
  },
  {
    "url": "assets/js/9.3cea0ff3.js",
    "revision": "24de25f4bb18ef11f66b25b18db19738"
  },
  {
    "url": "assets/js/app.b150a75f.js",
    "revision": "4a144e6debafd25d55462f58bc70424b"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "8afb0f891311a2ecdb4f838792da967e"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "e868a7e63428b7371b374b1f8f5d4dbe"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "6b4528eac3aa82ede80cf7b2d0af0636"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "6828c6cfd7cbcb70c18f2a381eda540b"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "5b4660ec0e734cc104d0c154f30394fe"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "90fd6e2ac9dcb925ef7e296b40a3ba82"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "1032fa31621501b42907780524896e2e"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "eae17098121d339adac3a270e4cc4008"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "7f08e027eefad3e3f50d616ecd2ac536"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "0a1257e84ed2d091042b2a8b16b6cd8b"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "405055ba36e318abdbe5d2b93d709780"
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
    "revision": "9b960a593053ca9efdb9b58c0cec606c"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "e1aa16f5488f3db096c8612e90186cc5"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "92920ff86210e2c7bbb7252c120536d0"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "b4fd0d6423d3106aaaf05ad683a9b98a"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "1a43e2c0e7394abaa4c296e423075767"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "98552a6c3732c87171f52d36df488751"
  },
  {
    "url": "Store/index.html",
    "revision": "c5b2f8e65f179d46e6ecd1be8f2b376d"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "4391ae5f5bf4defcb713ee9cf1c69d5d"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "1d91122ea8204eb918c68cfc481c34c6"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "95823ed7db4491de61b9d59f245f4a77"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "7df24ace567aaf6af6d439c331f70bf2"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "85688e14fb7a0e9d15e67d81f442207c"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "f53b99679723075c68efa2baa021e82c"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "ff7bc6bb6e4ea3fc49e66683633f53ff"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "42baa4ff93616ab2512c4e174228a8ea"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "fb58ca612307dc5900a80b0f05dfd831"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "0e640f5a4d4de5423bed588adb265c44"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "e45ae1f0a9dd4c59a570ae6669692c7b"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "ad40ba20c04f4a0ef2cbb7201f926b23"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "42f6b51bf1e6238b6d61b1be7f21bf18"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "ed93b2331bca89aaa923cbeb4ab926d0"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "e586bab01eb75d18e44c098cab4aac26"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "ea6548de43145dd721d6b386303be01b"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "aa5262c2de22c735c76cb4f79c587f9e"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "c6dc96904ffbb5387452a09f7d75bb81"
  },
  {
    "url": "Thought/index.html",
    "revision": "3f5070692338fd2a6abce0ed1d4d1891"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "6e38873eb9de3a769cb0278ce6ba468e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "51724fc828e9dc3f08134e46a4afc966"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "412c01490460eb5bf7e6ed853b45e1da"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "048421dc52383cecafa49673068fca31"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "b23536760f59c913cdfb9a205b06c714"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "840291fede254e2321ed837412cf9976"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "d605436e5fa1fa3e32f8b983d3f33d06"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "8be49ce0a9865e53b4fbda2d7ee9d628"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "4061c03924a857c5ce460d8a10f7e9b5"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "6e1aa323f019228a734b18d6497f6c85"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "0962b23709e4ce96997c3d69d34f4638"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "a8c46ffc8b96ab20442a42f6f5f8f9ee"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "86e65e247f93446a98c0b2b0f5817dc4"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "6fdf373588d494b9edb928fca7657900"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "127074a20609f644a693b4d20695dd3e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "5888769768744e4908409667d4ff6893"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "e6c14ea1e199f3c7b93383f0b3320d7e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "86726121d83a10cbc2bda06bf6cc97ed"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "8e0a5c9469f15583e91d120a1de79b00"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "7ee94b4401a399ebf5a43ee9373acc74"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "df3788247b7d68158992814c17b158d3"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "595cdf4f53b6a750e5a414e90271dd7d"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "1252d9f118ec30c3edf70186b70bea90"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "155796d8d31076793ef3b565ce4f4ea1"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "f6fecfe62b651d0c8d1b88cce5777093"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "847f56461b8d624f93a97bd12382dc4f"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "9d575e01adfe9d121aecd5692983753a"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "430f9c374fdf7a265ff0e98905add3aa"
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
