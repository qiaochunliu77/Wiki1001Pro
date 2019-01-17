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
    "revision": "7748db03909ad989bac07037159103ac"
  },
  {
    "url": "assets/css/0.styles.342e36af.css",
    "revision": "8209d38e4ddad5f7eeb3f712e8ff4b04"
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
    "url": "assets/js/10.eab83823.js",
    "revision": "9f6973c8920f048d18372fe7a931e7b3"
  },
  {
    "url": "assets/js/11.f5adf8ba.js",
    "revision": "087b6dc5ac38d60a54f176ad8d74d272"
  },
  {
    "url": "assets/js/12.944a8127.js",
    "revision": "b3b985d783763071313c6af6ea234758"
  },
  {
    "url": "assets/js/13.96cad2aa.js",
    "revision": "164bf5617705c7e40a63c85b7bc503d7"
  },
  {
    "url": "assets/js/14.7fab821b.js",
    "revision": "24c22b4add0973c44c88496f9f395f2e"
  },
  {
    "url": "assets/js/15.6d73c1a4.js",
    "revision": "fa8c7554f44f0d1840ad6e33e46aa65c"
  },
  {
    "url": "assets/js/16.554a594a.js",
    "revision": "dccfdf2317d22467ab9fb6ab01e79a62"
  },
  {
    "url": "assets/js/17.a2c68815.js",
    "revision": "03bd17fd6e9b7a62bc313266d4d55a38"
  },
  {
    "url": "assets/js/18.f0ef477f.js",
    "revision": "0ebd5f797ff6cd0dc310e4e9f8564ba6"
  },
  {
    "url": "assets/js/19.f80683cf.js",
    "revision": "b61c38fb4a5d2146908ecd669ad2bd89"
  },
  {
    "url": "assets/js/2.f5bef9be.js",
    "revision": "8fb5bd6dd8bc1eb0d34060e0bb5d01e8"
  },
  {
    "url": "assets/js/20.8cef4bb9.js",
    "revision": "2f1a18d427e8262f330c728c1a1cea45"
  },
  {
    "url": "assets/js/21.63753044.js",
    "revision": "8ffaf04c1506ca3c60c6aadb9422984a"
  },
  {
    "url": "assets/js/22.67038ba3.js",
    "revision": "3f29c1d8bd468a8e6f8589b2d6ccac75"
  },
  {
    "url": "assets/js/23.63c5e28f.js",
    "revision": "280f69e83c1e893124a0ce14cad69675"
  },
  {
    "url": "assets/js/24.d25f4f88.js",
    "revision": "1b3d5470f199b9735b7b7c53d5f15976"
  },
  {
    "url": "assets/js/25.c19d2249.js",
    "revision": "7825998934f8ded3c58057302eaa1ce4"
  },
  {
    "url": "assets/js/26.ab9d8036.js",
    "revision": "9e65fa23d2ef24746e16bcd90c6219a1"
  },
  {
    "url": "assets/js/3.76c99355.js",
    "revision": "b67f5e38bef9a41a957b0a9595389c85"
  },
  {
    "url": "assets/js/4.eaaca346.js",
    "revision": "163e46548da1e856cfeab9ee792a317d"
  },
  {
    "url": "assets/js/5.c5b74223.js",
    "revision": "3a3462f1e12f641fe4c7fb853b80eef9"
  },
  {
    "url": "assets/js/6.394cac6a.js",
    "revision": "e246c4f51d1df73a8c5508b92e98c80b"
  },
  {
    "url": "assets/js/7.d8239a99.js",
    "revision": "ba9f38487fc30c3c113a7e3bc957339a"
  },
  {
    "url": "assets/js/8.7573f1f3.js",
    "revision": "45a77b4abfc97dd1d173dd5e61db6fa5"
  },
  {
    "url": "assets/js/9.69b45404.js",
    "revision": "49ccb8d751e31641f44a8b1ad5d1cd48"
  },
  {
    "url": "assets/js/app.3167a62f.js",
    "revision": "9741784712969441d9d0ea1d22cb0d24"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "1b0b0bef0f6d5e5600dd45cd41f391d3"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "8c2cc12ebe8d621bdf87eb7bd5d0238d"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "730cad64f4589457383928edc34c6148"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "bbc865fde3d4f28e8b8b859484b40ebf"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "3c3fe483357f598e501ded3b926fabe2"
  },
  {
    "url": "FAQ/index.html",
    "revision": "30d0b1c89afcfaf6b1298fa2d845dfe1"
  },
  {
    "url": "FAQ/Pool/Review.html",
    "revision": "8c9d05bc1a62c36bff24a00b7069962f"
  },
  {
    "url": "FAQ/Pool/SkillStack.html",
    "revision": "e7a6d725a790e9e379de573923d9687b"
  },
  {
    "url": "img/logo.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "index.html",
    "revision": "c8b5d92724b445422465f2fcb7a1fd1e"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "ec7c497d8acb54479d07269c5e5f8289"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "2dd6271ce1cd4b79dcb22f88b4f893d5"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "3b8f66e0ac5a15c884e594fa12997676"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "3855e2d5bf7eed56ff2e71bb180445d2"
  },
  {
    "url": "Store/index.html",
    "revision": "c1d1c81aa40dbb39d5df360d50b8808b"
  },
  {
    "url": "Thought/index.html",
    "revision": "2b9b6f8749186206be2b9dcdeb187a44"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "5ffa304f815c695b761130cb87250495"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "34c37c4c94cd4491c83af6bc25b5d07d"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "5f349df506a85a89837733e6aa4ad940"
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
