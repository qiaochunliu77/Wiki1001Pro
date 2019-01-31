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
    "revision": "f2128681e625dfddc659fb649c05f37a"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "8daeff9117c0da1149dff713f6d60b5d"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "db0386905441e4f2f1758554850c3c7d"
  },
  {
    "url": "Another/Project.html",
    "revision": "2bcb76f78252eb68975e035159aea97d"
  },
  {
    "url": "Another/Review.html",
    "revision": "a28ed7b1f552d06ab4987ccaa1142293"
  },
  {
    "url": "assets/css/0.styles.14761d57.css",
    "revision": "2271879c0ee1e70cfbc43e31b4db8abc"
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
    "url": "assets/img/logo2.7af828f6.jpg",
    "revision": "7af828f6f609dd9f9068cff116dd330a"
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
    "url": "assets/js/10.5ec156b5.js",
    "revision": "cf3d88683ecb92f014ca2d5b1cf522c5"
  },
  {
    "url": "assets/js/11.2fc7525f.js",
    "revision": "0d6d26ff0f52c2317a525e361ef30538"
  },
  {
    "url": "assets/js/12.fb6a2285.js",
    "revision": "959ab3fa66a60f1a7c549c91d001edd2"
  },
  {
    "url": "assets/js/13.676147cd.js",
    "revision": "b0ac69418982078460382161544ad429"
  },
  {
    "url": "assets/js/14.e024a619.js",
    "revision": "1ec6e0f6844ce92321e29e0e64060e30"
  },
  {
    "url": "assets/js/15.e63e4456.js",
    "revision": "f8cf0f3c38024041fb04baa1dd81c64f"
  },
  {
    "url": "assets/js/16.ec398d8a.js",
    "revision": "cf1dff54c876fb99a0d7143da78aa997"
  },
  {
    "url": "assets/js/17.a3144a18.js",
    "revision": "71428236876c051024e9e3de36786ea0"
  },
  {
    "url": "assets/js/18.e26b8ff7.js",
    "revision": "f6bb853e7c73422def3dbffe9436d31d"
  },
  {
    "url": "assets/js/19.c347e17e.js",
    "revision": "7d396e95cd4a64c855f4a00057457899"
  },
  {
    "url": "assets/js/2.c74594ee.js",
    "revision": "97002005afada17e31f25a7c44f69638"
  },
  {
    "url": "assets/js/20.c174f7b4.js",
    "revision": "832cc394388a1d05a19c5efcd794ba8b"
  },
  {
    "url": "assets/js/21.96c91018.js",
    "revision": "f7d000d7d250a2f76603a181e82e6317"
  },
  {
    "url": "assets/js/22.7447a0e5.js",
    "revision": "38212febdf515e241d2a01ab2fb57860"
  },
  {
    "url": "assets/js/23.fcf2f0eb.js",
    "revision": "807b5d801508b92bddaa576a5f5dd397"
  },
  {
    "url": "assets/js/24.c527e0b9.js",
    "revision": "22e574333099a92a006280b79d7f6753"
  },
  {
    "url": "assets/js/25.6992dcf4.js",
    "revision": "e5de3d5afbf7b3ce10d1e2443a0d0c9e"
  },
  {
    "url": "assets/js/26.3710c224.js",
    "revision": "ae49bde2db138a99daac2dc793468a16"
  },
  {
    "url": "assets/js/27.c41a3902.js",
    "revision": "d6b2e110c6ef6b49c88fda38e59013e5"
  },
  {
    "url": "assets/js/28.eee19bd7.js",
    "revision": "b0bacae8ba340210e7c768232c74b498"
  },
  {
    "url": "assets/js/29.aed84946.js",
    "revision": "79875dde9271970aabfa4c132ae46006"
  },
  {
    "url": "assets/js/3.878252a7.js",
    "revision": "0b7876be8f51a9d13a65daa0df055c29"
  },
  {
    "url": "assets/js/30.8d649f88.js",
    "revision": "4d922bac28d7ae10a286563f45b70532"
  },
  {
    "url": "assets/js/31.6904b7bb.js",
    "revision": "d585eebc2ebadd5b25544bd41d47147e"
  },
  {
    "url": "assets/js/32.3d155bfb.js",
    "revision": "c04736530bb1249cf9e0b80d244bfe01"
  },
  {
    "url": "assets/js/33.0ae4bb68.js",
    "revision": "ce95d9afdb24a8b3310c053707f1ad48"
  },
  {
    "url": "assets/js/34.5c58846d.js",
    "revision": "bc008dbba9e21320e32540def2661453"
  },
  {
    "url": "assets/js/35.98117094.js",
    "revision": "a52e7bdae5a0344d03c02002f0c8f381"
  },
  {
    "url": "assets/js/36.d6956cd5.js",
    "revision": "ecadff2bfd881ce04c6db987c3838698"
  },
  {
    "url": "assets/js/37.d318365b.js",
    "revision": "0b58ed0cdcdf3b5584cb2b531c4f31bf"
  },
  {
    "url": "assets/js/38.cadf2866.js",
    "revision": "ba0954cf6e1ac972d808aafbfa9c438c"
  },
  {
    "url": "assets/js/39.c82bdb99.js",
    "revision": "9bbdf88225074e4db37334dd6215c549"
  },
  {
    "url": "assets/js/4.89c5dc8f.js",
    "revision": "d6f01825c8c4f33541a3acdbcd77b516"
  },
  {
    "url": "assets/js/5.fbb01d43.js",
    "revision": "bfbe339cbc95f5483d7d145564c67624"
  },
  {
    "url": "assets/js/6.b3bc97d1.js",
    "revision": "e9ad1b8bab6ad3eda1cdb62b3397fb40"
  },
  {
    "url": "assets/js/7.2445e680.js",
    "revision": "2e5cc489b2823ac34b21c5b45d7ed650"
  },
  {
    "url": "assets/js/8.14e1f543.js",
    "revision": "90326de677ece6612bc68a86332d4660"
  },
  {
    "url": "assets/js/9.1a2ae827.js",
    "revision": "d0bad13e16f9fd5667ecb1388b0e9da3"
  },
  {
    "url": "assets/js/app.dee6dab6.js",
    "revision": "0581cabbcc61e7b0e69a8144ffeb7227"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "dc73fc354d326085fda3609d4d3509ea"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "c8f793909ef3ae75aaa5bfa84689bf96"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "cb8c62ffa0679f0647adf7893d5cd287"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "a8d92ed9f5e9279f750e52c2e5c813b9"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "448736ca7339f106edcf9adc5996dea8"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "b1a176a263fe76b2c25806f14f84acfb"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "40d9bb78c1759bbbfd0c7a9b4200365f"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "622d0630077c21b04721060f38beb173"
  },
  {
    "url": "homeBg/1.jpg",
    "revision": "2f8d4a2abe6a357435075c3c4d8f1cdc"
  },
  {
    "url": "homeBg/2.jpg",
    "revision": "29bfdf6c231fa025b42aaf9b9c48faf1"
  },
  {
    "url": "homeBg/3.jpg",
    "revision": "ce3a9dc4152c0d6a9fee5a72e0878314"
  },
  {
    "url": "homeBg/4.jpg",
    "revision": "8eba958b67aceca68728701ec0780d8c"
  },
  {
    "url": "img/logo.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "img/logo2.jpg",
    "revision": "7af828f6f609dd9f9068cff116dd330a"
  },
  {
    "url": "index.html",
    "revision": "3730372979c6b9e46b4562acc3d5c834"
  },
  {
    "url": "links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "683294530e0300e35e3692e58ba21cc6"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "467181de7d34f8223347f4a36a4e184a"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "1baf1bdce43e098679ae92761148134b"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "17f5eed8273ac2460b1a93e00c2ce820"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "2547021c4bf283129edc490bb28f11f7"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "546402cd1803ea162e69e4fcfca85241"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "b1198a8bdda87c04a092250d3803f608"
  },
  {
    "url": "Store/index.html",
    "revision": "8a29bf0e7c476826304c06a90485d4d0"
  },
  {
    "url": "Thought/index.html",
    "revision": "99f1f2317293cb5a5ca6c606dcf07e4b"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "6af21429bb3ee32adbbe323ac8a6eaeb"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "f8e58ee2796ab461120554c9e98892a7"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "ede1bce1897afc9195ab4054312b4021"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "e2b32ba0c75871cde8cff9d257ebffdc"
  },
  {
    "url": "users/finen.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
  },
  {
    "url": "users/orange.jpg",
    "revision": "dfdf9f5b6e8122ac76479ee38297b42e"
  },
  {
    "url": "wiki/Baidu.png",
    "revision": "dfa63b81c92322d44db59e06cd0ad259"
  },
  {
    "url": "wiki/baiduHelp.png",
    "revision": "d91ad7ef1b5642a4a291ea87c563d0df"
  },
  {
    "url": "wiki/bing.png",
    "revision": "c6c301113aeffd8f80029a72e6e7037d"
  },
  {
    "url": "wiki/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "wiki/earth.png",
    "revision": "5bedfd819a77ac7d87befdff600e3a5f"
  },
  {
    "url": "wiki/google.png",
    "revision": "b4ddf57cc277d4ac6cb237c71b327c73"
  },
  {
    "url": "wiki/hacker.png",
    "revision": "7ce17c1d46025625752d9d8869e4b2d8"
  },
  {
    "url": "wiki/vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "wiki/Wikipedia.png",
    "revision": "a9bcbc01c4d9ca7c299b478d123a6a75"
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
