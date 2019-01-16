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
    "revision": "34257d7eb36cd1507f76e86fd2bf8f55"
  },
  {
    "url": "assets/css/0.styles.200737f9.css",
    "revision": "8c586ca62a9ff3f2c214c779b757a4c5"
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
    "url": "assets/js/10.3aea05f0.js",
    "revision": "372893431357747af20f9d3cad087287"
  },
  {
    "url": "assets/js/11.bebc7f5c.js",
    "revision": "9a1e444510f89cf91ee2607d06e805b1"
  },
  {
    "url": "assets/js/12.e5bbc609.js",
    "revision": "3183e09100bf03371a10944ddbea0883"
  },
  {
    "url": "assets/js/13.9942bfce.js",
    "revision": "6ed13e347effcf1c0dd4ab56362bd913"
  },
  {
    "url": "assets/js/14.970fa29a.js",
    "revision": "f0ee2bc415f60470e70a4c51c3d1efb8"
  },
  {
    "url": "assets/js/15.0c3cd17f.js",
    "revision": "9ccfce6cefb4381d34e6b79df2926262"
  },
  {
    "url": "assets/js/16.80dd6964.js",
    "revision": "44002e53ae7cac24bf255eaa019fd670"
  },
  {
    "url": "assets/js/17.57d9ba72.js",
    "revision": "60b6e07fe8df3a31600216f50277fc68"
  },
  {
    "url": "assets/js/18.6eb130e3.js",
    "revision": "04298d30449cb5bb908b26d50f404d45"
  },
  {
    "url": "assets/js/19.883c0009.js",
    "revision": "daffd8f173e6b4db0898a4dac206c2ec"
  },
  {
    "url": "assets/js/2.e6995434.js",
    "revision": "ffb11bab9094fd9f863922a30d9d8e50"
  },
  {
    "url": "assets/js/20.b0dda801.js",
    "revision": "65ca2c4afc10b964e5dc0f212b3338d0"
  },
  {
    "url": "assets/js/21.90f3fe49.js",
    "revision": "a619b05fc6390c786297b2ea300bed83"
  },
  {
    "url": "assets/js/22.7ff085bd.js",
    "revision": "3b409ce7bb68cbe40ecc28dbed45c310"
  },
  {
    "url": "assets/js/23.081778da.js",
    "revision": "f7b716c8ad21590af7ef0ddf3347c382"
  },
  {
    "url": "assets/js/24.3decceec.js",
    "revision": "2546a4a24b5d22c92a8d2b3fe57e33e8"
  },
  {
    "url": "assets/js/25.71fe0325.js",
    "revision": "5d4dc6c5518bffb4ed30e124df992489"
  },
  {
    "url": "assets/js/26.ac9f7281.js",
    "revision": "310a17c9d1a35b6cfa0f88fed4eefe89"
  },
  {
    "url": "assets/js/3.0d42926f.js",
    "revision": "d5846dcf99d1fba791d24895bacd91dc"
  },
  {
    "url": "assets/js/4.09ce31e2.js",
    "revision": "8be5de5d27c3f90835fc8871263b67a9"
  },
  {
    "url": "assets/js/5.25ea3975.js",
    "revision": "b2cbdf1a725eb5658727b4fe4337476a"
  },
  {
    "url": "assets/js/6.74f75ecb.js",
    "revision": "1d6d9cf7f4db5740b8fc385692e37ec6"
  },
  {
    "url": "assets/js/7.955ed68b.js",
    "revision": "be2ccac3c4e3df9527f6a23e824c7ee9"
  },
  {
    "url": "assets/js/8.d7d7c65c.js",
    "revision": "f2f1a9347b5f0d0e09c1094761ae6433"
  },
  {
    "url": "assets/js/9.b3e150d0.js",
    "revision": "ef282851f30672ec06671a176f0e683b"
  },
  {
    "url": "assets/js/app.31bbc833.js",
    "revision": "d02dcf1437cca504564a069258e4d2c6"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "4af739a29d9d3e0aeaf879307e2d74fb"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "646a35649de96d0db8eef87ac135f9e0"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "ab07a4924ef0318b986c47c2ddb4d9c6"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "c137c15f596633c961e77c7486412fd8"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "7708d413814e1cdd23792470119e10ea"
  },
  {
    "url": "FAQ/index.html",
    "revision": "2a0bef3708f04d3fff9f99429a9142f0"
  },
  {
    "url": "FAQ/Pool/Review.html",
    "revision": "e09afc5e1bb0e31e69d6dbf483dcac8b"
  },
  {
    "url": "FAQ/Pool/SkillStack.html",
    "revision": "42f0b4099ddd89a701302360b70bc529"
  },
  {
    "url": "img/logo.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "index.html",
    "revision": "220a2786701da1f7ed15e549b86b1a30"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "e842ec5b9dcd3366c5dbad81306701c9"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "6f08a05adf510d252ff337c538f30c5b"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "1bfce331bfd6d0c17cf8966ca4a10d82"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "fbfda17bb1ffa33bad6edeb40678beb3"
  },
  {
    "url": "Store/index.html",
    "revision": "e9115551fced4b5b5b80964b31b6c7de"
  },
  {
    "url": "Thought/index.html",
    "revision": "85bb574466e0af8a0c88d0737bc5a004"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "cc74dcc95ac6642121e774e59deccc14"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "28c7e6000c1e146e5afba2b64c25f988"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "aff660d7c795e2b1ea6beb7398bd57cd"
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
