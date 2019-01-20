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
    "revision": "641602fc9f94b133b8d8a67063a1efd5"
  },
  {
    "url": "Another/Friends.html",
    "revision": "a0895e8d2abfbb7a65346db06afa6d82"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "0af925ecfd939b1c9ea99a6185fee1e3"
  },
  {
    "url": "Another/Project.html",
    "revision": "7c525ebfc4bb56f008146edac3110df0"
  },
  {
    "url": "Another/Review.html",
    "revision": "b4796c5e2e61a14bdd358f0098dd82eb"
  },
  {
    "url": "assets/css/0.styles.4eb5c836.css",
    "revision": "051aaf279efe4920707f2781b287a451"
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
    "url": "assets/js/10.d597f2a6.js",
    "revision": "1d479e5bf0ee134fab024b2752708181"
  },
  {
    "url": "assets/js/11.7afd517e.js",
    "revision": "438b65eff9874978e6d3b8f888e2f4d0"
  },
  {
    "url": "assets/js/12.b70f7210.js",
    "revision": "5af7da23a728a030d318f3db06fce933"
  },
  {
    "url": "assets/js/13.caf3a60f.js",
    "revision": "7f820290567b758d624ff5735b105923"
  },
  {
    "url": "assets/js/14.77a41251.js",
    "revision": "90d0a561aa0df15be2f06c5676f49ec0"
  },
  {
    "url": "assets/js/15.f5ec8cb2.js",
    "revision": "342e3964f81e28ec7a89418f0a139582"
  },
  {
    "url": "assets/js/16.54b2b3d0.js",
    "revision": "c6057d1ec8eb9e029739a165289f66f2"
  },
  {
    "url": "assets/js/17.70025970.js",
    "revision": "2bc63ad1efeaa9484c5943fb7e445c4b"
  },
  {
    "url": "assets/js/18.482ec6d4.js",
    "revision": "28e630f61dec3e3b1ac8374a5488c7c6"
  },
  {
    "url": "assets/js/19.465095df.js",
    "revision": "51b9a6fe8f420699c5735e685caee5d3"
  },
  {
    "url": "assets/js/2.b1638871.js",
    "revision": "86bef1fa338e52ac69fc87c7264d2dcd"
  },
  {
    "url": "assets/js/20.ac099f81.js",
    "revision": "3e22829d1422a03979e9d1d053dd4ff3"
  },
  {
    "url": "assets/js/21.142dd4cf.js",
    "revision": "b57b39d7b06f8d4d0ba172b5ac55d47a"
  },
  {
    "url": "assets/js/22.9ba72adc.js",
    "revision": "5c3e175a260abf2b324467a171ec18df"
  },
  {
    "url": "assets/js/23.afe581e7.js",
    "revision": "70a4c07a76687e287a269bb9988bdc96"
  },
  {
    "url": "assets/js/24.9c02ce64.js",
    "revision": "705e12cfb95fa1247b95f194ced2f14f"
  },
  {
    "url": "assets/js/25.b4284e16.js",
    "revision": "a28a73639974e926b5fc70e8c03c548f"
  },
  {
    "url": "assets/js/26.b4923465.js",
    "revision": "86e44aa885f89245671409cbe13c1978"
  },
  {
    "url": "assets/js/27.eb3126d3.js",
    "revision": "b5eaaa37647d199206b097cb103d7d31"
  },
  {
    "url": "assets/js/28.edc4f62e.js",
    "revision": "9d4a5a5b86c98010a8b56c67849b71c5"
  },
  {
    "url": "assets/js/29.5f6d5fa5.js",
    "revision": "5c4c4af64140c8009b565d7279b2aada"
  },
  {
    "url": "assets/js/3.136b94af.js",
    "revision": "cc8cb448d6e2eb326cb2846bd78fd105"
  },
  {
    "url": "assets/js/30.e67195d4.js",
    "revision": "b092560abd29f3ff2d9f9123f854d5ba"
  },
  {
    "url": "assets/js/31.5d8f7b9b.js",
    "revision": "47985685b3b5a359e8427b8de29afc91"
  },
  {
    "url": "assets/js/32.1526f36a.js",
    "revision": "41257f6ab6b67dd63ddde383fe4b5341"
  },
  {
    "url": "assets/js/33.5b0a9f75.js",
    "revision": "ba5828b2318baac386f1c8e3bd724b3e"
  },
  {
    "url": "assets/js/34.9c7c9ad7.js",
    "revision": "cc5fa9bcbdedf4cff919c7b4efe87cae"
  },
  {
    "url": "assets/js/4.388ecf60.js",
    "revision": "57603c0f2b074f767173b0b0acd9bbce"
  },
  {
    "url": "assets/js/5.10e0df27.js",
    "revision": "ddae7c5d7ff73d875e7a3d1cd3974d3b"
  },
  {
    "url": "assets/js/6.e4722cd9.js",
    "revision": "fe45d1e72726dccf994cd2cffc722757"
  },
  {
    "url": "assets/js/7.c2601122.js",
    "revision": "152d39713978fd9cdc3a86c4041ef4e6"
  },
  {
    "url": "assets/js/8.97a030c2.js",
    "revision": "6bcff2c703022da36cfea563103b0808"
  },
  {
    "url": "assets/js/9.38a43377.js",
    "revision": "7d86ec33d96e3ed69cbe98ce7d9ba64a"
  },
  {
    "url": "assets/js/app.9a01d66c.js",
    "revision": "93ae0bfa3113bcd3e95ce5c96cff2bc9"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "f1380ff8ae9493c3f5623886361556c1"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "3187eb0f1b281acfb2af4f6cdf702988"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "effba24aef897a66385371244fca6b54"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "69fff068d82909ca1185de05b5576b1d"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "e0c2d2d3d16253b3946d787f07db7675"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "c4eb332a3b110f242137aaf7b9de5a1f"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "e6649421336ecd51a40d3ea28875c4ef"
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
    "revision": "709e815f46e33a57f0401274650d3b90"
  },
  {
    "url": "links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "c3a043c625524727fda5cba25a9e12b0"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "cfda84346c31b5c27f60fe9390416b65"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "827199d420621e09865122ff87bf1bcc"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "46b45fbe6c50a24b4f50ef390a02e4cb"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "475b0189ae1fd4668aed6c3168ce0580"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "85953d148849c0fc63ab5db7d2a1b7fd"
  },
  {
    "url": "Store/index.html",
    "revision": "d729074d5915b8d5860810ae166f6a2b"
  },
  {
    "url": "Thought/index.html",
    "revision": "7fb0f011bab2a14f62c74f957003a4c5"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "ede630042f59e036442e3edd6c262c63"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "948f6d9ef9661ae6d42ca384aef9299e"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "2e6383992bbf2ce2a86063895a32dd0d"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "d03eafefeab729a1f5b4a6e06af3ac99"
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
