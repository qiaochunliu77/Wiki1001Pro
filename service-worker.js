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
    "revision": "7508c1fb627cc54de17cf6ebab49e21e"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "26b4d67836a28ad62a6bc1b404fc00d6"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "5d21345072598af90ddbb01dcb8b7c92"
  },
  {
    "url": "Another/Project.html",
    "revision": "4cfae3a49ffe5c1681c779e7ab601ae0"
  },
  {
    "url": "Another/Review.html",
    "revision": "acbfeb654c065a75352224ded247749d"
  },
  {
    "url": "assets/css/0.styles.4b32a822.css",
    "revision": "499741ad0beb0f83e4686928e431d2d2"
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
    "url": "assets/img/modelLeft.3a975195.jpg",
    "revision": "3a975195084b883117ec86d4262eb0a9"
  },
  {
    "url": "assets/img/modelRight.5b58ce3e.jpg",
    "revision": "5b58ce3e42b0454dd42746471d22e42e"
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
    "url": "assets/js/10.015982c5.js",
    "revision": "976d21abbfec80f903d32c1556c7589c"
  },
  {
    "url": "assets/js/11.d3955a83.js",
    "revision": "0f4c238fbd5f3bca443b14d73cdd4f7f"
  },
  {
    "url": "assets/js/12.89d0fad0.js",
    "revision": "e547a9bba7e1b1afa1c88600a1ea6636"
  },
  {
    "url": "assets/js/13.f8880997.js",
    "revision": "ba39f6cfa69078d88911e6086768a385"
  },
  {
    "url": "assets/js/14.d54179ef.js",
    "revision": "79197939b64ec30638aa20e5255063fd"
  },
  {
    "url": "assets/js/15.dbfdab66.js",
    "revision": "fa79abd408732ccced544f450afcf8db"
  },
  {
    "url": "assets/js/16.71978c3c.js",
    "revision": "8e7aa4860761c34ed38a81ef32f261c2"
  },
  {
    "url": "assets/js/17.4cd265d7.js",
    "revision": "628c6807bf6f419c52694f01664af555"
  },
  {
    "url": "assets/js/18.c87f37d2.js",
    "revision": "0d384c1b5a8942f23262ba948aff45be"
  },
  {
    "url": "assets/js/19.123f4f6d.js",
    "revision": "b6f5336ef6ab551a8152407dbcdbb95d"
  },
  {
    "url": "assets/js/2.9df49846.js",
    "revision": "7e313fa0d6e81062813d23e472266a8f"
  },
  {
    "url": "assets/js/20.5794673a.js",
    "revision": "6c1fbc17a78bdbd3411930f8beeebd06"
  },
  {
    "url": "assets/js/21.45d44b14.js",
    "revision": "fb388a8d89b7e3a2caf6bcfc0471d834"
  },
  {
    "url": "assets/js/22.642e9d38.js",
    "revision": "2e64b89d46cb48b676792f5e66ccebd7"
  },
  {
    "url": "assets/js/23.6fde4f09.js",
    "revision": "c18ff8cf563dcbeaaaee0b2cb8b894db"
  },
  {
    "url": "assets/js/24.c3e3b555.js",
    "revision": "177df2ce7f9f13387c866c5db1106e51"
  },
  {
    "url": "assets/js/25.5e92d51f.js",
    "revision": "ee275528480a18e8a4e44c787b7edf3d"
  },
  {
    "url": "assets/js/26.a9e11a5b.js",
    "revision": "de4c245a211c518e82c9ad3055e94462"
  },
  {
    "url": "assets/js/27.fd3990be.js",
    "revision": "95232fd1abb5f7d3ccad420a67941d6c"
  },
  {
    "url": "assets/js/28.48d2d2c6.js",
    "revision": "18a2e5ab051b0fc5775199edc70c2a9b"
  },
  {
    "url": "assets/js/29.eac0049b.js",
    "revision": "c1929691cc320b3f1488f235c4690706"
  },
  {
    "url": "assets/js/3.f69d82e6.js",
    "revision": "9e9dd4b94da78f4fd8407a95cfb29fbc"
  },
  {
    "url": "assets/js/30.05799555.js",
    "revision": "73e7fce80531fc437c4c49091f3d859f"
  },
  {
    "url": "assets/js/31.57f955c1.js",
    "revision": "49e9c0a24b574d045a309e333d5dd298"
  },
  {
    "url": "assets/js/32.2ebc76ac.js",
    "revision": "2140a01c87703a5025e1091f482c9c05"
  },
  {
    "url": "assets/js/33.cad63a54.js",
    "revision": "e1f0e87c9c58f56f15524f38eaedf62f"
  },
  {
    "url": "assets/js/34.be7ae7c0.js",
    "revision": "368cb47b31c11ace3000766acf5569f3"
  },
  {
    "url": "assets/js/35.e87a85fa.js",
    "revision": "4aa957b96f9aeaaf40a721fee0606977"
  },
  {
    "url": "assets/js/36.62232abd.js",
    "revision": "816a661ad609426db72cffb3ad780ab8"
  },
  {
    "url": "assets/js/37.04938f70.js",
    "revision": "b318e011b70a1a7bfdfd396b533b68c6"
  },
  {
    "url": "assets/js/38.bdc4e58b.js",
    "revision": "2ae94c92f0fb3aa9eb06b72e364bbe12"
  },
  {
    "url": "assets/js/39.d75b6fc7.js",
    "revision": "5773cf924aa25d53eb0efc0f195a2877"
  },
  {
    "url": "assets/js/4.1a69194f.js",
    "revision": "8e4f8048df700998d761a80822cdeef8"
  },
  {
    "url": "assets/js/40.6ca59b9d.js",
    "revision": "5811fa761e0978d3d2f2ab9c6f1dca79"
  },
  {
    "url": "assets/js/41.a2d827c1.js",
    "revision": "5b681cdf4aa6bc8e4acc7093d7c81708"
  },
  {
    "url": "assets/js/5.1e14e580.js",
    "revision": "ee4ba048767b12b7882449d6cc374d7e"
  },
  {
    "url": "assets/js/6.4583009d.js",
    "revision": "8d8c0d48b4f3a3261414446eabe0b6b0"
  },
  {
    "url": "assets/js/7.74f1f84b.js",
    "revision": "03d410b4e5e2b123b65d6d51f113211d"
  },
  {
    "url": "assets/js/8.73580e41.js",
    "revision": "fa87081eb28c74eb773ffecea4199fe6"
  },
  {
    "url": "assets/js/9.1c1a02c8.js",
    "revision": "7c47d4238a0d264e6f9d39fe1dc42d03"
  },
  {
    "url": "assets/js/app.7ab530b3.js",
    "revision": "2b55c4a61bbc8e925d0e2b9b967727a5"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "222930d716be8b79b45a2e53c11b45e4"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "45414bc14c367653c53f8537783ead4e"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "4443d702189999d1ded29cad33091ea3"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "382dd0a743d6c72ee2c116acd825fa99"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "3afa01aabab4593638e7b667e499d882"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "e471edf38994ec2006132a4e3e9e5f3f"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "83b9c2a463160285f2ac6949783ebab7"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "f3043bdf989e2bf468cdc83f94edeb7d"
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
    "url": "img/logo.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
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
    "url": "img/modelLeft.jpg",
    "revision": "3a975195084b883117ec86d4262eb0a9"
  },
  {
    "url": "img/modelRight.jpg",
    "revision": "5b58ce3e42b0454dd42746471d22e42e"
  },
  {
    "url": "index.html",
    "revision": "c40afed503ca16d55946efec261595da"
  },
  {
    "url": "links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "2b01c19ed1960a2cc0744a2a4bd0d7a9"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "fbc5ba303b76e2914906c8bc0ac5b714"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "42f3f799a05ad0f3e3cbbb017e04b14d"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "51b35f0ac660c77c2e884dbf24b8afc7"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "d5c6e44440c9d81b6dfe6f4931ba2dcf"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "048360b48ab4ec3885b17c6d84ca8498"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "fe7186cec29093df34595e40cc757172"
  },
  {
    "url": "Store/index.html",
    "revision": "51bc459851086c7676f54299bd6974de"
  },
  {
    "url": "Thought/index.html",
    "revision": "03e15144e7ca17a35c50f5a194dcbefc"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "fa64e26b6863390f2adaa37b5253cb42"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "b1263de509ef9221f201d25a8f99793a"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "2c214e0d72ab50bb6af5117e106b11e6"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "4925de6daae93af0e7587ba649fc581d"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "2f8bb11a4ad0b831e36eb9a61c86e4c0"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "086c7e4b5d54530b65c093099fe3e461"
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
