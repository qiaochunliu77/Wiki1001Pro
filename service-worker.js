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
    "revision": "c4b5d276f8eaf7f66e3dd6ea82f37cb6"
  },
  {
    "url": "Another/Friends.html",
    "revision": "134da642beb1ec9362d3388de81c1a0e"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "fe7cce6b5254a1d1e1033f01a3a651fa"
  },
  {
    "url": "Another/Project.html",
    "revision": "c728659097344db5e95e1491c8494c0a"
  },
  {
    "url": "Another/Review.html",
    "revision": "baac967df2f6cdaa02a7630666d52b37"
  },
  {
    "url": "assets/css/0.styles.44a1aa0d.css",
    "revision": "9eef932da221207ce6695045e041450a"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.26ecb3d3.js",
    "revision": "fc9c4797db5f76c28a3d69a36d52b4df"
  },
  {
    "url": "assets/js/11.0aea212f.js",
    "revision": "51be25e3917d8c3d954aad12d709f4ed"
  },
  {
    "url": "assets/js/12.410b2140.js",
    "revision": "6eac079102a8ed458343535db1f8b8af"
  },
  {
    "url": "assets/js/13.8d7e02ec.js",
    "revision": "ac5f634aa8e235524b1a12d61f16926a"
  },
  {
    "url": "assets/js/14.cee2b39e.js",
    "revision": "68ae657167c94aae94f59a8acb286a87"
  },
  {
    "url": "assets/js/15.3ba70934.js",
    "revision": "eff02b9d16c788f0af716403fd4426a8"
  },
  {
    "url": "assets/js/16.da0ad6e5.js",
    "revision": "ca5391bd4132dffdc1d4dc8a4e4366f5"
  },
  {
    "url": "assets/js/17.1d1bb749.js",
    "revision": "1021fa0f9ccc085b8d56c1f7498bceff"
  },
  {
    "url": "assets/js/18.3fa1d923.js",
    "revision": "1535808a27db5a7eff009cce5396908e"
  },
  {
    "url": "assets/js/19.2f4695c4.js",
    "revision": "cab2b0d4eb729f25908347717563edc9"
  },
  {
    "url": "assets/js/2.f1cfa166.js",
    "revision": "7bd138efaf339b7c378b5b8307d150fe"
  },
  {
    "url": "assets/js/20.235a7fde.js",
    "revision": "cb0b57203e4469685598e003ddc73e54"
  },
  {
    "url": "assets/js/21.43bfb0de.js",
    "revision": "771ae7b3ef7aeac9382fc2a072ad7d87"
  },
  {
    "url": "assets/js/22.4f047177.js",
    "revision": "a47fa4718c6b2a938d067f266d8ad274"
  },
  {
    "url": "assets/js/23.a196b3fa.js",
    "revision": "a24cab10d8da2993b16f1ac5e3b83d05"
  },
  {
    "url": "assets/js/24.733554ed.js",
    "revision": "b2d43552cb97d6dad322ae13b2e427c1"
  },
  {
    "url": "assets/js/25.993ead00.js",
    "revision": "dce1b3da0c3d0f63b663f55d92244831"
  },
  {
    "url": "assets/js/26.c8b36159.js",
    "revision": "b9cb3f2337b7da70f7879800d73da4a5"
  },
  {
    "url": "assets/js/27.e63d497b.js",
    "revision": "2c1cff2af50d8222b716a8f39be57bee"
  },
  {
    "url": "assets/js/28.e5f35259.js",
    "revision": "c959a07bd57fb8c42c59087acd182d97"
  },
  {
    "url": "assets/js/29.01de503b.js",
    "revision": "5c2244d421726d25ecb9d40f8c6c789f"
  },
  {
    "url": "assets/js/3.15bebe10.js",
    "revision": "682f6b86d98da1b0a9e7f7902da988d7"
  },
  {
    "url": "assets/js/4.ecacf8a4.js",
    "revision": "4eef30b68957081d7a9fd16e2b4e88ed"
  },
  {
    "url": "assets/js/5.35d75a95.js",
    "revision": "a3a0c675937d5dc9069b59f856b65561"
  },
  {
    "url": "assets/js/6.9b579e2d.js",
    "revision": "5ad8c074471682956921448bb91ac788"
  },
  {
    "url": "assets/js/7.23319617.js",
    "revision": "f580e048f1c532ea3e7cdfbbb1a2060d"
  },
  {
    "url": "assets/js/8.834e06cd.js",
    "revision": "31334baf583e2f5dc4257e6ded29f15a"
  },
  {
    "url": "assets/js/9.2d87b99b.js",
    "revision": "8bf7ebf889f62133fcfa4f05de656fd3"
  },
  {
    "url": "assets/js/app.4fdc7763.js",
    "revision": "7c5078345246684ce60b2368de1fa0c5"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "7316708096c335afb54a5a7a3f5aa0d9"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "e81adeab54afd5a89b6dc6c7568fc178"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "c543c778eac7a8f727514503cec0ff73"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "4274f57de27862186e792027af6ee3f2"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "3dada4bc3f1d7f3bbcb5a61150540ac0"
  },
  {
    "url": "FAQ/index.html",
    "revision": "c852dec54bf9a5d23330ed788dfd051b"
  },
  {
    "url": "img/logo.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "index.html",
    "revision": "b8484b0b2b62ecea09ba3996b3d9f071"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "fde43433de084710623910e3777663d5"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "459024abab58899b91d8bc8be8479a50"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "f048f27c0d2e210dca53ad2ebbd18703"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "75841fdc7a34820db2072f3ecdc9bc9f"
  },
  {
    "url": "Store/index.html",
    "revision": "ea9fca1a544e0803bf9a6257165e5d19"
  },
  {
    "url": "Thought/index.html",
    "revision": "f21f7f6b257ba04c9e1ce3d1052ced5e"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "3704671e09b6ffe0c0b2aa7342d5cbb6"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "01827c5e3c281f20322d5352cdd93bc7"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "0561b8eef33ddcdaa6b928876a44ac61"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "b8e6864212bd89e4b16f084da6965ad6"
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
