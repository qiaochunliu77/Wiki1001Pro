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
    "revision": "151c163f08bef49c85807cc04a872b20"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "8d1bcd3c4b416292f718c71226348105"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "b2d10469c4016ea2ccfbddb7e5e42152"
  },
  {
    "url": "Another/Project.html",
    "revision": "386c75f10f8fd4fe52aeab4a8a7675fc"
  },
  {
    "url": "Another/Review.html",
    "revision": "9f5dbb4fd9dd430c4a1c78044f5fd91c"
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
    "url": "assets/js/10.e7ab7220.js",
    "revision": "4a986300c80084a4d6b216f45f5ea999"
  },
  {
    "url": "assets/js/11.c3c124a9.js",
    "revision": "322fe471f262a25bcbce6dc53d4fc282"
  },
  {
    "url": "assets/js/12.4749aab3.js",
    "revision": "77402678d645cbca44cc3c852fa3e098"
  },
  {
    "url": "assets/js/13.1f9de314.js",
    "revision": "8cfbca4559c5c57a9fa6c53e14d11dfe"
  },
  {
    "url": "assets/js/14.8b5bbf38.js",
    "revision": "0b8990d099743967ee10b32b9cf75517"
  },
  {
    "url": "assets/js/15.84aea66d.js",
    "revision": "9a5e8b86bf961726729cc3a8f9eb7dc8"
  },
  {
    "url": "assets/js/16.a28da893.js",
    "revision": "ed378a5c5e1a3b211ec81c2c838432d9"
  },
  {
    "url": "assets/js/17.4f420f91.js",
    "revision": "f1ccb86213d402bc5bce571a8ab1fff7"
  },
  {
    "url": "assets/js/18.aef57514.js",
    "revision": "0809ebb1b24508dda1bd65997d4e7a62"
  },
  {
    "url": "assets/js/19.9565f60f.js",
    "revision": "15ed713c7d04ffaabcdc3701600af76a"
  },
  {
    "url": "assets/js/2.fd69b77d.js",
    "revision": "ae438e34c586780e9b9a7637ee67527a"
  },
  {
    "url": "assets/js/20.8e3178d8.js",
    "revision": "f23120ab503425f5b63e61318867f289"
  },
  {
    "url": "assets/js/21.b2cde4e9.js",
    "revision": "50a29b178bfc86aaae3a16a5bbbfea7f"
  },
  {
    "url": "assets/js/22.abfb4cdb.js",
    "revision": "0c54b34160cc004204e766c5165757b5"
  },
  {
    "url": "assets/js/23.a3cc6356.js",
    "revision": "fe9dd0f85a8503b33e463f913a0b98e3"
  },
  {
    "url": "assets/js/24.25159e87.js",
    "revision": "d7cc4651b66d258a6d413e1e6658cb4d"
  },
  {
    "url": "assets/js/25.aeaecc4b.js",
    "revision": "abab0e2f4d1d35fc39946c33ef08719d"
  },
  {
    "url": "assets/js/26.71a155e7.js",
    "revision": "0723ad6908861344675e3d8151c2d257"
  },
  {
    "url": "assets/js/27.269d3da0.js",
    "revision": "cca383ab7191918facd4f40f5922bc9d"
  },
  {
    "url": "assets/js/28.aa505058.js",
    "revision": "5cfcf30f6bc1f5cde69c0deedcf72b57"
  },
  {
    "url": "assets/js/29.601a88b5.js",
    "revision": "cb44e153b6b7230ea733a9f5cf468e25"
  },
  {
    "url": "assets/js/3.c3448077.js",
    "revision": "16d514e68efdb4bbd1c646b0e6d25d85"
  },
  {
    "url": "assets/js/30.9dadb3d6.js",
    "revision": "ce5495dd126a3a9f1d7954e1b14fed29"
  },
  {
    "url": "assets/js/31.57ed8005.js",
    "revision": "29b80ad1cc4cbc8b27111ec9b6f0e698"
  },
  {
    "url": "assets/js/32.eae9fa38.js",
    "revision": "daa3529a3720c7b615237c810740e05c"
  },
  {
    "url": "assets/js/33.2799cc17.js",
    "revision": "abc6160347f3d3cd8ae14fb348fde939"
  },
  {
    "url": "assets/js/34.2fecbc54.js",
    "revision": "d864353e73b224084703001b6cd3da28"
  },
  {
    "url": "assets/js/35.b3fbc56e.js",
    "revision": "e3c7caab3293f6564e44c05a6fae422b"
  },
  {
    "url": "assets/js/36.fc9fdc54.js",
    "revision": "7a23211c6f6efd9dc56482864cae554b"
  },
  {
    "url": "assets/js/37.48830a7b.js",
    "revision": "1f88c9ad0c1b3cca2fb0930299b07442"
  },
  {
    "url": "assets/js/38.7c9cf6c5.js",
    "revision": "72adc8aebf7136d2664f9d40c6e7aa82"
  },
  {
    "url": "assets/js/4.f327c560.js",
    "revision": "d9fac11787e71b3dbdf515943c169e8c"
  },
  {
    "url": "assets/js/5.0eb3f3cf.js",
    "revision": "50dab0fb0ca7f11bbc45d1d45a6126a8"
  },
  {
    "url": "assets/js/6.5587d800.js",
    "revision": "87e5db1f6e70ce280067f722c36856af"
  },
  {
    "url": "assets/js/7.fdf9eef4.js",
    "revision": "4921910438ef54dfc6f5c3aebdea0a02"
  },
  {
    "url": "assets/js/8.80d7078d.js",
    "revision": "36bae3bee0c6fd6694b28b149e9a6ec6"
  },
  {
    "url": "assets/js/9.cdd7ce74.js",
    "revision": "e00b98a2e06d5f6072b895f154eaedb3"
  },
  {
    "url": "assets/js/app.f488d5e7.js",
    "revision": "08af1c9baef434d183d2a6de35b2aa8d"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "3ca1ba5a2e44a376cc3bb2c7134171c8"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "ecf9273f7b15097d69f1e34e8556bcb1"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "1771357270fee2863ccd86f047703682"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "db56ab32c3ad7a7fd39e07c7dfb8354e"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "e3526d1aac3d4dc3885c7dc7a725791f"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "ceb1f120d2ac52e7a1cb77acc471e446"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "108dad964d44894d0f0e3aef029a9dce"
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
    "revision": "ef7089f7ca1db253ef6846b9e4b466ec"
  },
  {
    "url": "links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "4517909cd5fa8bd3dd5f209189a0f435"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "056368be7485d0091b22e2289ae2991c"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "e74bd6d84bfecaec6f0623bb949a4947"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "7df463fa57ff1b1b81730de4b01497af"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "662e438155d28c38fa4c7583fcb715bb"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "abc7ea468876c8116ecc2e48f6b3d49b"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "550792f11ecd83bfffeb2a8c0218a976"
  },
  {
    "url": "Store/index.html",
    "revision": "18152b4c5effe5fd82961f8a1aa8f987"
  },
  {
    "url": "Thought/index.html",
    "revision": "c92488b1c8e3cfa668fd939122445d68"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "987a25bef8b78f5d60bb97a8e575ca0a"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "df67b11a8b0b4b9f71e0f28de37f49f0"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "e26f761692c53fc02e8dd217dfb4235c"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "240ab1727cd517f31474af2aba7c9d90"
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
