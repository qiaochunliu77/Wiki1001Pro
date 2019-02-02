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
    "revision": "7e778e2b6679d4384b228b9ee4e7a6aa"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "9c718b5adb3046ecaeb8c6c232c5ec66"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "b60b73011c80f6870220b3ec50906e28"
  },
  {
    "url": "Another/Project.html",
    "revision": "8cc98a86eac38209b21d48a70b0264de"
  },
  {
    "url": "Another/Review.html",
    "revision": "46ea52bc4c3b7e7c532cc3893f86a593"
  },
  {
    "url": "assets/css/0.styles.49f87e43.css",
    "revision": "56a3360cf6b3e6aeeddcda7355db422e"
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
    "url": "assets/js/10.3861163e.js",
    "revision": "0de4ec8d38f9fcc6282e37c1b35450be"
  },
  {
    "url": "assets/js/11.6a92152e.js",
    "revision": "d69d92e517427869b50d8d03b0e975fe"
  },
  {
    "url": "assets/js/12.fc5cb22e.js",
    "revision": "5161f50a2c296bf274277cfb0c40cf4f"
  },
  {
    "url": "assets/js/13.7b79141c.js",
    "revision": "ef6e89b51d516a1c59d63d247adfb643"
  },
  {
    "url": "assets/js/14.492bc22b.js",
    "revision": "aeb95ee15414359070599e5b0665eb93"
  },
  {
    "url": "assets/js/15.bd5a28cc.js",
    "revision": "83e861d180451529eba7a3a379d529dc"
  },
  {
    "url": "assets/js/16.3cec3cce.js",
    "revision": "d65e4319b77b7f40c0854724411c8a54"
  },
  {
    "url": "assets/js/17.3f908ac5.js",
    "revision": "eb31de127f5a28562889593ff0f8e9c5"
  },
  {
    "url": "assets/js/18.5d60e318.js",
    "revision": "7e6b04688d7c1f17a0ce7a9523ee9d7e"
  },
  {
    "url": "assets/js/19.cc3fc08a.js",
    "revision": "a2acb814c7ea27c4404d7f156ee35be5"
  },
  {
    "url": "assets/js/2.93fdeb5f.js",
    "revision": "94222ce720b1eaffded0e9a4b308cdad"
  },
  {
    "url": "assets/js/20.76126060.js",
    "revision": "6a9608e36916f0b467805b87fb88369b"
  },
  {
    "url": "assets/js/21.54b98cc3.js",
    "revision": "b58fb4c80ccf766af5088480b60f93b9"
  },
  {
    "url": "assets/js/22.0cc1451e.js",
    "revision": "5d2c9a4fa727844c1d807fabdfa604b4"
  },
  {
    "url": "assets/js/23.646aa811.js",
    "revision": "b5dec51af59fcf19c88969afa766d6b4"
  },
  {
    "url": "assets/js/24.090cccf5.js",
    "revision": "d3f5ba65b1ee195d471aa672d4a26de8"
  },
  {
    "url": "assets/js/25.84649cc5.js",
    "revision": "4adafb375ab9435bd314d71113c23a42"
  },
  {
    "url": "assets/js/26.697f6336.js",
    "revision": "7c0b4d0e9c52a0ccb000dd56611f3219"
  },
  {
    "url": "assets/js/27.7f4f2984.js",
    "revision": "3093de7fff148ac9555e4c4405ca9d57"
  },
  {
    "url": "assets/js/28.94e6140d.js",
    "revision": "0863685be708f6e38b03c404ffc45665"
  },
  {
    "url": "assets/js/29.5a3d5347.js",
    "revision": "2109f60091ae4496745f9c1023a5af5e"
  },
  {
    "url": "assets/js/3.6d65ba9f.js",
    "revision": "de3972d009c0a4ebde3c23d45e812683"
  },
  {
    "url": "assets/js/30.c382f8ce.js",
    "revision": "fc46590f1d4c6970909e8353289418f6"
  },
  {
    "url": "assets/js/31.8bef38ee.js",
    "revision": "f2996c5c8f5e8ad6bd3f0b228ae8f830"
  },
  {
    "url": "assets/js/32.c42c85cf.js",
    "revision": "bff46db2b58cd3cbeb9aedced01519df"
  },
  {
    "url": "assets/js/33.2934d456.js",
    "revision": "6273fdae6341afd18a699f74cbabd679"
  },
  {
    "url": "assets/js/34.60c08bf6.js",
    "revision": "5c3974407b4c2fa67d78fc55eacd0e18"
  },
  {
    "url": "assets/js/35.0abccbfa.js",
    "revision": "7c885b012d8eb546c8c2f46e731df164"
  },
  {
    "url": "assets/js/36.b53814b5.js",
    "revision": "5a09f6aeca1b63ce391b90a61ce25ed5"
  },
  {
    "url": "assets/js/37.e9f86744.js",
    "revision": "baf2ed0aafa80b92e1cfe54509b4c40b"
  },
  {
    "url": "assets/js/38.8d336929.js",
    "revision": "3a3d4aa1fd361b83e80c1987786395f3"
  },
  {
    "url": "assets/js/39.683247fa.js",
    "revision": "9da4c66a1bffa6bed2cdcd0122d41f77"
  },
  {
    "url": "assets/js/4.6bab4d5b.js",
    "revision": "50b3dc89f50836afb286294a930d1169"
  },
  {
    "url": "assets/js/40.34b08aad.js",
    "revision": "389a63130bb670bbfa1422d059c08e0f"
  },
  {
    "url": "assets/js/5.6543a4de.js",
    "revision": "45fc8665eb4a62329ccb4422fe952ae7"
  },
  {
    "url": "assets/js/6.7784ad2b.js",
    "revision": "f1534cfcc66502aa4f3617daed9f1c41"
  },
  {
    "url": "assets/js/7.1e21f9dc.js",
    "revision": "aa5e243addaa3d420aab01edea306ee4"
  },
  {
    "url": "assets/js/8.8086c875.js",
    "revision": "65d99b415c5dbbb437323ed41f27bfa4"
  },
  {
    "url": "assets/js/9.279b4d1c.js",
    "revision": "c45bedbda90c14d403a363ed5560d398"
  },
  {
    "url": "assets/js/app.c0c19066.js",
    "revision": "5dccf9938f6491d4d3ba056426604bed"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "1b6f6494cf4a642a34c5d835e1fde485"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "65cb024a37316c2fd6a2ecdca284f31e"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "9490a1d9f311fada3c0d4ea5f54136c9"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "bd3fd767f5ade217ff1665b484571aba"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "8749c358d2b127527c60d2e1b749eff4"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "ddebc299e72ad74f20c6f73afa3ae0b6"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "09a4c3ceb0dbcfa21ee5c16596b82362"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "9ad5c663bbcae5600d91c325dbb01c5a"
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
    "revision": "f320bb86e84bfa1202cfbab602e5013f"
  },
  {
    "url": "links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "ff4ea01b6251114d072f108bc7834878"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "74a7f5dd996d4d805dba9f6c024d2445"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "d2934af760887dec597b64cf6534d09a"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "33c6d93fc583211a3c88b0ea8ab2f788"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "49e94cef6b947f30b91309b2c113473f"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "dd9153228ab28deaf8ebc7cbe3ecc22d"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "59e75373373d1f5c8624becc5a8a221e"
  },
  {
    "url": "Store/index.html",
    "revision": "585c6193eb2b7b135ea6cba1100bc97d"
  },
  {
    "url": "Thought/index.html",
    "revision": "804bd8d85729556b6cad7e88f4491ac9"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "a608342e9f7f1931190c24efae873303"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "959bea4ea843ec57784456b5c0fb0e13"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "fa37d2ea12929b551ee024e2575f5360"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "aa1237f77b0d35f02c10091f961a98c3"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "2eaa0827dcecb4cb1ebbaf2586e67ac8"
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
