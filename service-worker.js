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
    "revision": "2c9cb4af24c7ad954810d209d005a96c"
  },
  {
    "url": "assets/css/0.styles.09256d7b.css",
    "revision": "b1c0fce0b61ae730386a94a657e95391"
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
    "url": "assets/js/10.682e8e9e.js",
    "revision": "a931bd6c439a9124dfe20832484ecb14"
  },
  {
    "url": "assets/js/11.75f7f9db.js",
    "revision": "100a01513d2f41c51cd63085c136d733"
  },
  {
    "url": "assets/js/12.20c6b10b.js",
    "revision": "6604049e0dfd07206b5e2754a42bb9b6"
  },
  {
    "url": "assets/js/13.76bf64ee.js",
    "revision": "ce3c2682462ac76534e73afe139e07c1"
  },
  {
    "url": "assets/js/14.b1df3085.js",
    "revision": "b697a630f47ef9901870c37e827ea9b5"
  },
  {
    "url": "assets/js/15.4aeba92e.js",
    "revision": "6eac0d89686d53b5b28abf149094effc"
  },
  {
    "url": "assets/js/16.491b5fde.js",
    "revision": "d8927e8d4b30b6c145e3d961d2608c94"
  },
  {
    "url": "assets/js/17.926be793.js",
    "revision": "2f13c74919c01de908fbbeec59857565"
  },
  {
    "url": "assets/js/18.9055e7ab.js",
    "revision": "200fc65c344c97944941e8307c05a7be"
  },
  {
    "url": "assets/js/19.c5c145d2.js",
    "revision": "99d6a87c019441168e8cf1b9e155e02e"
  },
  {
    "url": "assets/js/2.8e1d3bcb.js",
    "revision": "cd18e3a1da697b1ae248c698f5f94d5c"
  },
  {
    "url": "assets/js/20.7f91424f.js",
    "revision": "bb60102694d04f45bd0609ac5929599e"
  },
  {
    "url": "assets/js/21.ef5b6aad.js",
    "revision": "cc6d3a150f5c5cc209ed2d5ce865dbf7"
  },
  {
    "url": "assets/js/22.31ca67a2.js",
    "revision": "21885cbb261cc898f8ad4ac433a50ff6"
  },
  {
    "url": "assets/js/23.bca5ff59.js",
    "revision": "28725e55f727b9013610de6eb8f41e55"
  },
  {
    "url": "assets/js/24.033af3f7.js",
    "revision": "f1bcea55eb5779e5a77c0f05bb9f77ff"
  },
  {
    "url": "assets/js/25.d81c6277.js",
    "revision": "58ef48750cda77ebf56bc3e80b2be409"
  },
  {
    "url": "assets/js/3.d19c4682.js",
    "revision": "1033111cd4762802572e5fe4e5070836"
  },
  {
    "url": "assets/js/4.e00cf895.js",
    "revision": "ec039b438fe73f8298835aec7273a695"
  },
  {
    "url": "assets/js/5.0e3dfb19.js",
    "revision": "c64d0507405bc1351e1e86f2c76bcf98"
  },
  {
    "url": "assets/js/6.b4e2d33a.js",
    "revision": "1d61abd2105ea67f5d430ca973c18278"
  },
  {
    "url": "assets/js/7.da49ea99.js",
    "revision": "a1f67485e9a7363eaa4db6af35131a84"
  },
  {
    "url": "assets/js/8.41d02b9f.js",
    "revision": "e976964e487a413a33bcc50d02140096"
  },
  {
    "url": "assets/js/9.adfdb832.js",
    "revision": "c876b5226f3272b78b88ec364a6ad049"
  },
  {
    "url": "assets/js/app.cecefe17.js",
    "revision": "30024051957fc834775d829ba03b6c8c"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "59a5bda62c4247d1d5eca51f52f77ced"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "2370cec33534612cb556eae4e9d5bcc5"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "c1b106cb84716159cce8eb6000467831"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "f8838231b1a9577c5f4a9d085d9f4ca5"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "80c04d7f9ce138ee9b1023f91fe561bc"
  },
  {
    "url": "FAQ/index.html",
    "revision": "bf8a3d4f89d8a0e73915fc868b97b609"
  },
  {
    "url": "FAQ/Pool/Review.html",
    "revision": "08b4cafe3a40f4c47ce0aa5d8ba328c7"
  },
  {
    "url": "FAQ/Pool/SkillStack.html",
    "revision": "32f60bc149ce97a78b3dcb171aae813d"
  },
  {
    "url": "img/logo.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "index.html",
    "revision": "5dc3e4ffc5762514c17d70e43bf83a2b"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "4836491a70c05039f4e9f74d6ec24e22"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "6baf3347d388de015846551b0b059180"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "c1838a58c77cc4ff3b23bd035592b101"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "c0038493d0f007e1bd2e582bfc0056a5"
  },
  {
    "url": "Store/index.html",
    "revision": "5c2065f544e576f7631d0d14190a83a0"
  },
  {
    "url": "Thought/index.html",
    "revision": "4628adad0615349531fa46be4df7dbff"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "af59069b27da40b74666d4348cbd2a66"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "658abb707fde004d8fde83eb259021bc"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "d78d2d7456734be30e6d462b156f3181"
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
