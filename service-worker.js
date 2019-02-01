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
    "revision": "37e09665a7c04e2b2d0f0115cffe64fd"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "a986c46e349e8395ab8409a7c7dfe659"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "787751dc4335c7ebd0183e14b717af36"
  },
  {
    "url": "Another/Project.html",
    "revision": "33e2ea3fc9986c5b5d589aac0400152f"
  },
  {
    "url": "Another/Review.html",
    "revision": "69a3b9db9471d0bd23a7f9dbc7e7ee64"
  },
  {
    "url": "assets/css/0.styles.49f87e43.css",
    "revision": "56a3360cf6b3e6aeeddcda7355db422e"
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
    "url": "assets/js/10.5ec156b5.js",
    "revision": "cf3d88683ecb92f014ca2d5b1cf522c5"
  },
  {
    "url": "assets/js/11.2fc7525f.js",
    "revision": "0d6d26ff0f52c2317a525e361ef30538"
  },
  {
    "url": "assets/js/12.fb6a2285.js",
    "revision": "959ab3fa66a60f1a7c549c91d001edd2"
  },
  {
    "url": "assets/js/13.676147cd.js",
    "revision": "b0ac69418982078460382161544ad429"
  },
  {
    "url": "assets/js/14.e024a619.js",
    "revision": "1ec6e0f6844ce92321e29e0e64060e30"
  },
  {
    "url": "assets/js/15.e63e4456.js",
    "revision": "f8cf0f3c38024041fb04baa1dd81c64f"
  },
  {
    "url": "assets/js/16.01ad0ced.js",
    "revision": "8d06c50602e78c148fc0603fb17b8784"
  },
  {
    "url": "assets/js/17.5cd971c3.js",
    "revision": "83a15c2393b8ea6555272fd3f63fd40b"
  },
  {
    "url": "assets/js/18.e26b8ff7.js",
    "revision": "f6bb853e7c73422def3dbffe9436d31d"
  },
  {
    "url": "assets/js/19.a6ae06c1.js",
    "revision": "136ddaf5a9c6ea068f0d43e50dd67fe3"
  },
  {
    "url": "assets/js/2.c74594ee.js",
    "revision": "97002005afada17e31f25a7c44f69638"
  },
  {
    "url": "assets/js/20.8d18ac96.js",
    "revision": "2a72eed03dc200c73e2361e6f8abc71d"
  },
  {
    "url": "assets/js/21.733432be.js",
    "revision": "061262a0136313e6abaea3ed4b2c996f"
  },
  {
    "url": "assets/js/22.7447a0e5.js",
    "revision": "38212febdf515e241d2a01ab2fb57860"
  },
  {
    "url": "assets/js/23.a44b50ef.js",
    "revision": "5ef64cec31278085b4b199cbcb343d9a"
  },
  {
    "url": "assets/js/24.bf104c49.js",
    "revision": "0707f2524591b37b0998a0097f7ce754"
  },
  {
    "url": "assets/js/25.3dd20c70.js",
    "revision": "1965ffbcbe973cca66f8244570745853"
  },
  {
    "url": "assets/js/26.140c8ac1.js",
    "revision": "e4f043357d38afe2a9aa7613c78d6a5e"
  },
  {
    "url": "assets/js/27.c41a3902.js",
    "revision": "d6b2e110c6ef6b49c88fda38e59013e5"
  },
  {
    "url": "assets/js/28.3bde3798.js",
    "revision": "b52b1bdaf2562e71c62b18488f5f8c91"
  },
  {
    "url": "assets/js/29.8605076c.js",
    "revision": "dc56bbe552d48a178bb06b1beded45b1"
  },
  {
    "url": "assets/js/3.61f56217.js",
    "revision": "5da330311977bccfaaff0635dc79ab30"
  },
  {
    "url": "assets/js/30.8d649f88.js",
    "revision": "4d922bac28d7ae10a286563f45b70532"
  },
  {
    "url": "assets/js/31.78b0c2ca.js",
    "revision": "a4cc1af626973086c0e8d7e893a06d73"
  },
  {
    "url": "assets/js/32.7be36739.js",
    "revision": "4d6bcdc698b7d9950f6ad7c9efa44295"
  },
  {
    "url": "assets/js/33.0ae4bb68.js",
    "revision": "ce95d9afdb24a8b3310c053707f1ad48"
  },
  {
    "url": "assets/js/34.5c58846d.js",
    "revision": "bc008dbba9e21320e32540def2661453"
  },
  {
    "url": "assets/js/35.98117094.js",
    "revision": "a52e7bdae5a0344d03c02002f0c8f381"
  },
  {
    "url": "assets/js/36.04b46905.js",
    "revision": "1b4bc81db584b1b4bb60da2735858837"
  },
  {
    "url": "assets/js/37.28f38225.js",
    "revision": "b5cc011e910a0dac6a23c4f9f3b9467b"
  },
  {
    "url": "assets/js/38.cadf2866.js",
    "revision": "ba0954cf6e1ac972d808aafbfa9c438c"
  },
  {
    "url": "assets/js/39.c82bdb99.js",
    "revision": "9bbdf88225074e4db37334dd6215c549"
  },
  {
    "url": "assets/js/4.f6ddabe5.js",
    "revision": "e1a038e89ae7d9222521e40c0815202c"
  },
  {
    "url": "assets/js/5.fbb01d43.js",
    "revision": "bfbe339cbc95f5483d7d145564c67624"
  },
  {
    "url": "assets/js/6.b3bc97d1.js",
    "revision": "e9ad1b8bab6ad3eda1cdb62b3397fb40"
  },
  {
    "url": "assets/js/7.00c3ae2f.js",
    "revision": "a149f6dead3ab2c5033ff1c2612d96f2"
  },
  {
    "url": "assets/js/8.14e1f543.js",
    "revision": "90326de677ece6612bc68a86332d4660"
  },
  {
    "url": "assets/js/9.af90c22f.js",
    "revision": "ef89eaad03f31d69efadf550beaf9700"
  },
  {
    "url": "assets/js/app.aaab318f.js",
    "revision": "5c44faf16663fe3fe24c23bb5df07d00"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "da658969af96222ec164f595ccfd2a14"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "d222e0ffb8851bb3c68f086e03b9f180"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "0b837c408c1e856e8460ef23e661090f"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "91071092593d52e76ce72e08c7c7d406"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "b1e19a0ab52fb57ceadec24923e98987"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "534c00539a603c573fc581f7781a7224"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "8899f422586620f663e23495395cfa38"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "9e8b879f3669b95ca37eeab47675c4db"
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
    "revision": "22aadf89413c29c3e7d6de425b06586f"
  },
  {
    "url": "links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "1fb52940e9649fff3bb063b0cee2a203"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "548451192568c15dedd3ac8529226829"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "c729591515ad468854d25acdd68d13b0"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "64f488a321e4d3891a2aa639d69a7e6d"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "48a811c78a9312414ba2a5a7d15e4695"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "0792445c00d20ee830407ceae0a40a03"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "6ad517e99948f9a48b9618de83a1fa5a"
  },
  {
    "url": "Store/index.html",
    "revision": "de681ef036151458936b32fac19501e3"
  },
  {
    "url": "Thought/index.html",
    "revision": "a8505a59c166027efb2251c6be81a73d"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "d51b99798d8ade5c1fc697e6863659ed"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "279ea0b992db022f675cd7de49d59a79"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "a6b0f3435c62cc93744e88f8e7059a0e"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "355d5eb4a52113ec037a45f70d98f2df"
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
