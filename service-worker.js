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
    "revision": "13316c1daa6699a669f41fa3d2e23f72"
  },
  {
    "url": "Another/Friends.html",
    "revision": "73b4bb4237b08c907d61287ffea0d6ca"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "2d1288a2795edd9dcb085d761a91c13b"
  },
  {
    "url": "Another/Project.html",
    "revision": "653536f4d449787c4381b2770d7364cd"
  },
  {
    "url": "Another/Review.html",
    "revision": "df54806f744f2c80b814f96c61cec6d9"
  },
  {
    "url": "assets/css/0.styles.7dd45d2b.css",
    "revision": "72451fa22c372b54c9b1cb71430d41cd"
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
    "url": "assets/js/10.4a2cd6bc.js",
    "revision": "8a7d497b616d4ea02e1d277a7342368d"
  },
  {
    "url": "assets/js/11.e3d2a65b.js",
    "revision": "d1424d387b01ae86f0637c713cbe1da4"
  },
  {
    "url": "assets/js/12.8ce6a8a8.js",
    "revision": "3cba0826e409ac4570327c5630fb518c"
  },
  {
    "url": "assets/js/13.9176dabe.js",
    "revision": "b14d56087da872af3638eea88c6f76c9"
  },
  {
    "url": "assets/js/14.b2eb5f9d.js",
    "revision": "55b94f6bd68aa052384de1274c897e05"
  },
  {
    "url": "assets/js/15.e23717a1.js",
    "revision": "525217b9ba7731f99b0ca6dd8231a40d"
  },
  {
    "url": "assets/js/16.e6a225ff.js",
    "revision": "61400fb624b07c879997615123db70c1"
  },
  {
    "url": "assets/js/17.5f3f46b6.js",
    "revision": "dc0eaf06f7707afbd52a4d82e20debc9"
  },
  {
    "url": "assets/js/18.e3dd5d91.js",
    "revision": "6a5f55b10eeec62f3da7599807685135"
  },
  {
    "url": "assets/js/19.e82b07dd.js",
    "revision": "16463db93f1376bed9fd675420717a81"
  },
  {
    "url": "assets/js/2.95f4eefe.js",
    "revision": "a41127447b51c270bfa11151f52c6a3e"
  },
  {
    "url": "assets/js/20.6fa7298b.js",
    "revision": "54a293c5ece469845f81edac41b17e76"
  },
  {
    "url": "assets/js/21.83956db6.js",
    "revision": "c6c9ae24f13fdf97f3bb0026e946c426"
  },
  {
    "url": "assets/js/22.ed662a2a.js",
    "revision": "6f648257cff356d9098bc1e94453040a"
  },
  {
    "url": "assets/js/23.87b71a0c.js",
    "revision": "05a24dd6effdd6fc5cb7b669a953ffbe"
  },
  {
    "url": "assets/js/24.8c1e5337.js",
    "revision": "7aaeda1fed5865e1ddfcba1a834e16c0"
  },
  {
    "url": "assets/js/25.83884fdd.js",
    "revision": "2df06a7f1a1ce6b3b1341b757341531b"
  },
  {
    "url": "assets/js/26.072472ea.js",
    "revision": "4919553d589cc270754f23c25294c700"
  },
  {
    "url": "assets/js/27.5a91d867.js",
    "revision": "fcc4c79c5335f14f50e92f482dbbeb81"
  },
  {
    "url": "assets/js/28.95982f02.js",
    "revision": "394c0c7172f5edbee9b57c5725b8af8a"
  },
  {
    "url": "assets/js/29.2bcdbbfa.js",
    "revision": "1a4e56a9ff6446ea02999db4ae30d15d"
  },
  {
    "url": "assets/js/3.97334068.js",
    "revision": "2919a394a1169aa09799afb41f4fa539"
  },
  {
    "url": "assets/js/30.3cf23d32.js",
    "revision": "24368498b67495a65d7220118a2d39fc"
  },
  {
    "url": "assets/js/31.84b67b8e.js",
    "revision": "1da827784fd880ddb5e30df3b7255d47"
  },
  {
    "url": "assets/js/32.d00637df.js",
    "revision": "4479c6d9f5c379f7d9e94e175d0bb783"
  },
  {
    "url": "assets/js/33.1d18409a.js",
    "revision": "597ed1c6114a81b948cec4c395e152c8"
  },
  {
    "url": "assets/js/34.f345e9e5.js",
    "revision": "0ad3de7aff9cd22b16b8109949867e85"
  },
  {
    "url": "assets/js/35.c6166f5d.js",
    "revision": "ecb45b067f64ac412b0f3c36238b2ee6"
  },
  {
    "url": "assets/js/36.6f79882c.js",
    "revision": "759722908bbe29b594d6662cbcb30ed2"
  },
  {
    "url": "assets/js/4.ffcff621.js",
    "revision": "b14c25b2b3073e5bff607a6d82b84980"
  },
  {
    "url": "assets/js/5.1be80e06.js",
    "revision": "ca73b6adcccfa768b72228fc8837086e"
  },
  {
    "url": "assets/js/6.987d05cc.js",
    "revision": "a0fe2c73514fcc3593c8148e9481cb9d"
  },
  {
    "url": "assets/js/7.13ca2126.js",
    "revision": "a0aa866f5c04eef05a9895d6d001f0a4"
  },
  {
    "url": "assets/js/8.a00faef1.js",
    "revision": "2947847de56531db1df41674ef8cd28f"
  },
  {
    "url": "assets/js/9.b15534fd.js",
    "revision": "60c544b48fd7b5fcbcb4cb23a25dbf28"
  },
  {
    "url": "assets/js/app.c776f7d0.js",
    "revision": "e8684c2c1d8cfc86f14822518da61411"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "4bdaac7a44e3d9681468da2e2d571e37"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "927d36b2b4f79218ce6797ae20a41331"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "ce884ea07da80479f9395c3a25bd5788"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "bf5ae3efb792dbb0102213dfa06b4f23"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "7514ad16670874cf474a8b5be7c3447f"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "6af58de1f14b56ba45c8842ba17ccbc2"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "020054316c034e0e8344c3af95ec78fb"
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
    "revision": "ba053e1e509f1a37d6b56fff30945d52"
  },
  {
    "url": "links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "64b31ff5dda6cf3d232fc54ca21308d3"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "124faeaf04bf40e66c42394afc45f1e2"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "a701cdbc371da6ad44b6cc6bea45bf72"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "cca893fab4449b030103017d2f04f3d5"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "f4fbb6f070af1d0c325e3201ad3116d5"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "e354037d587d64764abf586b820c7253"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "01ebe40fd78e38348a2cd90d0e34e986"
  },
  {
    "url": "Store/index.html",
    "revision": "78eb27c097c94b7a992ca95e6dd9b899"
  },
  {
    "url": "Thought/index.html",
    "revision": "e0dfc543ed76b2f16e775e5acbf68dae"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "b67861234a90ee3dd6916238c2d4523f"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "77de8963b4a755a9b4f389a216f1d51e"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "bee517c3d0069f95f9eb14939b5f14e2"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "5141b5119226b88b69d38a1aa4c6fa99"
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
