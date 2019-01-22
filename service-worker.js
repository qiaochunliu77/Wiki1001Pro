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
    "revision": "5a132940b2a7353839bc559597cbdc88"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "e2fb688e82a203f5d2d78abffe7ededb"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "fd7d8b510ce5c288bcdba7a97f896ec5"
  },
  {
    "url": "Another/Project.html",
    "revision": "029074c887cf9320bd27ef01a15599a9"
  },
  {
    "url": "Another/Review.html",
    "revision": "891873ec77ba5f7d3cf86ff0803dd480"
  },
  {
    "url": "assets/css/0.styles.35bfc165.css",
    "revision": "7e695004f3b9d0549d5aa49fb4e17086"
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
    "url": "assets/js/10.72bee035.js",
    "revision": "52d57b3e41d10e6d76121c6e7f519e7b"
  },
  {
    "url": "assets/js/11.8213dba6.js",
    "revision": "07a916f4cfa57f8502adf2d5b06e3ec6"
  },
  {
    "url": "assets/js/12.38bc9e2e.js",
    "revision": "651dccb5a771de6748d0785862f48e52"
  },
  {
    "url": "assets/js/13.b37188a8.js",
    "revision": "94b6220d2fe2eabda4c0483c1353b5a1"
  },
  {
    "url": "assets/js/14.bc48bf19.js",
    "revision": "443d82514568eaa23daabcd091c4d446"
  },
  {
    "url": "assets/js/15.d3121c39.js",
    "revision": "0c8991adecc2235d529a81ce1b97919c"
  },
  {
    "url": "assets/js/16.908f67ec.js",
    "revision": "77e5cee4c4628554e2a0a4ae95b3df69"
  },
  {
    "url": "assets/js/17.e7cf8afa.js",
    "revision": "7f30bc98ae42ad70dd10b5f4eecc586e"
  },
  {
    "url": "assets/js/18.34068ba3.js",
    "revision": "7c63907b56dbb088261ae1ca4de2ee1a"
  },
  {
    "url": "assets/js/19.a0fbb688.js",
    "revision": "822296e16d26842ff71b4788724663f5"
  },
  {
    "url": "assets/js/2.98717acf.js",
    "revision": "954ad668dc7c4777121ea4d59c2d0361"
  },
  {
    "url": "assets/js/20.6050aeab.js",
    "revision": "1ba836a2a235fe934c8ac1d6b2e86d55"
  },
  {
    "url": "assets/js/21.97c29ad4.js",
    "revision": "15ac05de0f06923c16fb5c26b1d72c4b"
  },
  {
    "url": "assets/js/22.c07d9661.js",
    "revision": "962489007a25a3c72081de4099e3cf65"
  },
  {
    "url": "assets/js/23.a8bd3d78.js",
    "revision": "8f75b7050f1ceb86df42c978f89273c8"
  },
  {
    "url": "assets/js/24.43463742.js",
    "revision": "701bb3f61f63fcaafefb5aeb532c280f"
  },
  {
    "url": "assets/js/25.6fc67c5c.js",
    "revision": "411131642ca922b54bac88f678814a6f"
  },
  {
    "url": "assets/js/26.8175cb85.js",
    "revision": "23e95b400f23356f88938880928018b4"
  },
  {
    "url": "assets/js/27.2006c9b9.js",
    "revision": "337bdcae2d0c3d02ce849b9778174a70"
  },
  {
    "url": "assets/js/28.754c8ded.js",
    "revision": "e824f222fb7f58170ece841fd517eead"
  },
  {
    "url": "assets/js/29.5508f904.js",
    "revision": "4fe5a1de6db1b54fc41f2500705e9a5d"
  },
  {
    "url": "assets/js/3.bc0ce4f0.js",
    "revision": "db472c89db55a43dd27a1cd73764beb2"
  },
  {
    "url": "assets/js/30.ed78b1d1.js",
    "revision": "5604819b4bcc67b2be9ce6e9e4e38592"
  },
  {
    "url": "assets/js/31.e8b74fd6.js",
    "revision": "ac9d5f582a0dca7be7015c6a9acae02b"
  },
  {
    "url": "assets/js/32.2085802d.js",
    "revision": "c6ae2d1a6ef8289b785ef33d06a1a40c"
  },
  {
    "url": "assets/js/33.c1760ace.js",
    "revision": "bc265102a061fe3fdd227634c87f1cd9"
  },
  {
    "url": "assets/js/34.8fd13e32.js",
    "revision": "166d507174e7ab87ef2b09078d0a0e04"
  },
  {
    "url": "assets/js/35.4eaf2f4d.js",
    "revision": "9d742ab3e2e1bbd9457b7ca30e0fef4a"
  },
  {
    "url": "assets/js/36.08f0206d.js",
    "revision": "ba6d925dc642f1208b4075cb449ae7cf"
  },
  {
    "url": "assets/js/37.14e5b879.js",
    "revision": "16011892a47cacd734203d596620cba4"
  },
  {
    "url": "assets/js/4.bedb6345.js",
    "revision": "e30cdd1dea50879a0e249268cfba2065"
  },
  {
    "url": "assets/js/5.112c64da.js",
    "revision": "da84986371e2783dbe0bc79cbb551142"
  },
  {
    "url": "assets/js/6.f8db7d61.js",
    "revision": "66c4e9511438d73a0322b7340bb6cea4"
  },
  {
    "url": "assets/js/7.70cfc07f.js",
    "revision": "984aee030b473873b00980a504c3919c"
  },
  {
    "url": "assets/js/8.fd5e90d7.js",
    "revision": "c1cb778f5a5695637e999e80cc3e1756"
  },
  {
    "url": "assets/js/9.7610935d.js",
    "revision": "670a5d599d0cc0d3b190e9b49ef402cb"
  },
  {
    "url": "assets/js/app.bda34b19.js",
    "revision": "28df9a0a61a3a00a983f1148d696f35b"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "ae5f80a5b929c66c59f70ce4b709339f"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "7785399af4ab38adaed658e1e0056db8"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "1cc35ab761bca1047bea687e95e06707"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "287976f20a54d142bb861eba903ff189"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "cffd1680d7660a36b5fcff28c0d7627c"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "ace1344bd05538447dd9c4a89719aaf8"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "933e246a104df7bc94fe4c72ee6a0d5b"
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
    "revision": "ee06bfa271b946b60a835d65690d25b4"
  },
  {
    "url": "links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "97924dc92d83fe02edfa9d08da72192a"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "11825d54893d8b4ed82ea8c5b6a4c858"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "79257db21590069696da6c2ef3b79f13"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "19363af59b23283971297d4ac9162061"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "68995097cb3c7fb674ea23829d0f5d9c"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "0e5b4aa99575824be90e4b65ae13c838"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "a6fa98759ece6015b49195b27b8be0bb"
  },
  {
    "url": "Store/index.html",
    "revision": "687f79ff9289e5752faed0a70751114f"
  },
  {
    "url": "Thought/index.html",
    "revision": "b05ebcb20909f7a001e784b5fec0e328"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "db6864803de8b5ab2bd77d2caf544be2"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "9827c006703b642e398112a506f3f01a"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "690eedf539fbe0f4166dce5887bd9063"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "578c4c76c71fb1a67b8b8311156e99f4"
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
