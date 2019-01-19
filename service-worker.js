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
    "revision": "934f57f7c08fea2954bec017b9303393"
  },
  {
    "url": "Another/Friends.html",
    "revision": "24dc83dd10ec573fe65e7561aeee5107"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "3669e95ce1699016c8be694cdc9f898d"
  },
  {
    "url": "Another/Project.html",
    "revision": "ce788d1f4c6f3582ea18210c455fae7c"
  },
  {
    "url": "Another/Review.html",
    "revision": "ed1fd876645d725de86c8687b8d142e2"
  },
  {
    "url": "assets/css/0.styles.b9e6ca81.css",
    "revision": "9e64c940aa2ac8841d98f08179f1cbd8"
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
    "url": "assets/img/linear_home.0d3acd95.jpg",
    "revision": "0d3acd9568bea627a90b9768ea9be234"
  },
  {
    "url": "assets/img/linear_scroll.396161bc.jpg",
    "revision": "396161bcf5dea38a6d98c6dca5b03f53"
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
    "url": "assets/js/1.d27a9939.js",
    "revision": "aab7d5e113a9d000e8680d99257d8b39"
  },
  {
    "url": "assets/js/10.10d61a5d.js",
    "revision": "24a88777ac7867e151849dfd257a5ac5"
  },
  {
    "url": "assets/js/11.42dee1a7.js",
    "revision": "4bf9ae441fbbd6d99b039d20f79dffed"
  },
  {
    "url": "assets/js/12.40f515b9.js",
    "revision": "2d6cbd2a5bddc093e73c88aa0496d11e"
  },
  {
    "url": "assets/js/13.7353b216.js",
    "revision": "38983a04954e2c202d252143cea4c6d0"
  },
  {
    "url": "assets/js/14.1890e4a7.js",
    "revision": "45bdedf7ba4cfe32e7b3270b18f18482"
  },
  {
    "url": "assets/js/15.76e13f47.js",
    "revision": "93fa026604edd3edd5a8469d2efd63a4"
  },
  {
    "url": "assets/js/16.d51a786e.js",
    "revision": "0a5f3598c2587e9bd5bc0193670d7a7b"
  },
  {
    "url": "assets/js/17.eb4b20e4.js",
    "revision": "da9b919d9d43143d5eb0041ae2a635d9"
  },
  {
    "url": "assets/js/18.cb068e0c.js",
    "revision": "fe7372ca88cf0b24a6538d23feec6cd5"
  },
  {
    "url": "assets/js/19.ccc85d9e.js",
    "revision": "d682696088a9d29ed950bbf1c23fad5b"
  },
  {
    "url": "assets/js/20.114ec07f.js",
    "revision": "5936bd60b348551f92f382683fb3b689"
  },
  {
    "url": "assets/js/21.52517b22.js",
    "revision": "5485bff97684c59e02cdd85d46593f07"
  },
  {
    "url": "assets/js/22.0e94577e.js",
    "revision": "ac98281c3c2c7a64ab1373e627b31ba2"
  },
  {
    "url": "assets/js/23.9b4db5ff.js",
    "revision": "71aa3bc574d352ef25a9c09932754b13"
  },
  {
    "url": "assets/js/24.801eae59.js",
    "revision": "018933df344e2ced407358872d085696"
  },
  {
    "url": "assets/js/25.0c8ef6ba.js",
    "revision": "7bbb0371f95fd234b0bf1c2c21fb3479"
  },
  {
    "url": "assets/js/26.072472ea.js",
    "revision": "4919553d589cc270754f23c25294c700"
  },
  {
    "url": "assets/js/27.aa106e8f.js",
    "revision": "c036851cc9cd31a6c1df5286649bad32"
  },
  {
    "url": "assets/js/28.68d4e623.js",
    "revision": "402c1c78dd8b58b1d077875ddc6581c5"
  },
  {
    "url": "assets/js/29.de70b24d.js",
    "revision": "75ae69ce05b39c3c59f11d42ac1aa92b"
  },
  {
    "url": "assets/js/3.b3c6cdd8.js",
    "revision": "85a8e21f5f27994247426ce0a7623bea"
  },
  {
    "url": "assets/js/30.18b2786f.js",
    "revision": "e74c0e7fd27ff828a93df863b1ea8a12"
  },
  {
    "url": "assets/js/31.906b0699.js",
    "revision": "b689bd044d769fb43bdb0c3842112690"
  },
  {
    "url": "assets/js/32.685847d7.js",
    "revision": "b863ccf788f6c7748560a3ff6f234799"
  },
  {
    "url": "assets/js/33.3fe320b3.js",
    "revision": "d456da202a7c641dbf2f327db45f9337"
  },
  {
    "url": "assets/js/4.b3e96a89.js",
    "revision": "0c730e28332a41e330e1bfaa1190184d"
  },
  {
    "url": "assets/js/5.df114916.js",
    "revision": "241ec7151d6ebee42fe1f92b0e50c81e"
  },
  {
    "url": "assets/js/6.ed523f4b.js",
    "revision": "72664d18d9deaa33e160dbb74e076d6d"
  },
  {
    "url": "assets/js/7.58747554.js",
    "revision": "176f90522b019abbb149b81504937fca"
  },
  {
    "url": "assets/js/8.2e8be460.js",
    "revision": "f062041d192df31b4afe7973702bd3e6"
  },
  {
    "url": "assets/js/9.0a9d17a3.js",
    "revision": "8a95144f035d0583f53cdc385b4476f8"
  },
  {
    "url": "assets/js/app.7a638aa2.js",
    "revision": "a7b2407121e5f996a0707fed745fe46c"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "f3110cc6460069ccc39069ab72670075"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "1d8039f4c03bef6347b162e0d88243c5"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "46b1dad45ef1d252856f5434825535d7"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "7e8a38d9341765567d4fb976f3eb97c4"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "0af00c1057041b857a49b600e7354cdb"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "d866d334afcf696388026383151970c6"
  },
  {
    "url": "FAQ/index.html",
    "revision": "cbe504e854ec79ee7cc9d42192414088"
  },
  {
    "url": "img/logo.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "index.html",
    "revision": "30cd2d596655b51574e445a900932d54"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "fd3a72054df5c72d8ae0f6800bf34594"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "e327796f593c195d8d8d3be950eac95e"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "549f6365ac4d7646416991d0e22d3baa"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "c0c6e8d0ca80036c2275d357fec4f31c"
  },
  {
    "url": "Store/index.html",
    "revision": "b4958db0699a41406dba9d7875e7f324"
  },
  {
    "url": "Thought/index.html",
    "revision": "0e09463719917c95ed968df41ee4a1f4"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "0d85ec4f011fc936cd0faf7d584392e0"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "132a8bf7ca915f68938d7ed7320206cc"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "2f7bd93aeef72ed18081f7d861e9017a"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "b57ed33ebdc10053c9768551e92a4e01"
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
