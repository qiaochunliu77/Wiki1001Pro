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
    "revision": "db4bdc5462c40c4c4e18f38c16a076d2"
  },
  {
    "url": "Another/Friends.html",
    "revision": "22bbac81b2422ca7692b8724da0bd940"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "b1c6a3f76f795ce64c00ea27f12a64e7"
  },
  {
    "url": "Another/Project.html",
    "revision": "b91a89a3357ef01d3a2d9e02eb76184a"
  },
  {
    "url": "Another/Review.html",
    "revision": "0c98a8591af6c636c2748d5b7424ffaf"
  },
  {
    "url": "assets/css/0.styles.951ab80b.css",
    "revision": "0d541a6aab3d11345c427c8aea8387d0"
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
    "url": "assets/js/10.63305d7c.js",
    "revision": "2ad3750e1172270dd52f0340c65facb0"
  },
  {
    "url": "assets/js/11.19fdc560.js",
    "revision": "1eb5bfadf7162d9e0d4959eed9baa898"
  },
  {
    "url": "assets/js/12.6ce4df9a.js",
    "revision": "02e0a92837dc91639bc986cc0692d1f5"
  },
  {
    "url": "assets/js/13.758ca7a8.js",
    "revision": "996400c7779bb8a04b14c97d3bbf1716"
  },
  {
    "url": "assets/js/14.c870111d.js",
    "revision": "d454e9dc527f5c9f6131c34485bb83fe"
  },
  {
    "url": "assets/js/15.cab00704.js",
    "revision": "8a9803cc743bc763c44236712e10cf5d"
  },
  {
    "url": "assets/js/16.17822652.js",
    "revision": "fa2e8b121dc005dc893a4674d54784a8"
  },
  {
    "url": "assets/js/17.70025970.js",
    "revision": "2bc63ad1efeaa9484c5943fb7e445c4b"
  },
  {
    "url": "assets/js/18.a7b1d1cb.js",
    "revision": "e8fe283103a68d77c500c3b29888c09a"
  },
  {
    "url": "assets/js/19.465095df.js",
    "revision": "51b9a6fe8f420699c5735e685caee5d3"
  },
  {
    "url": "assets/js/2.206956d5.js",
    "revision": "9c503a3284be9916b222eb0cc30e6400"
  },
  {
    "url": "assets/js/20.adf3d4d5.js",
    "revision": "4626d3688256e5353a0986026e60b265"
  },
  {
    "url": "assets/js/21.95461c8c.js",
    "revision": "518e1e15521614b0caf3b0068db945d2"
  },
  {
    "url": "assets/js/22.9ba72adc.js",
    "revision": "5c3e175a260abf2b324467a171ec18df"
  },
  {
    "url": "assets/js/23.fdd67fb9.js",
    "revision": "dc87cd562749d018afa7711f37c6ae8e"
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
    "url": "assets/js/27.a16fb888.js",
    "revision": "11f764d6232e47588a3417928ac7f6ea"
  },
  {
    "url": "assets/js/28.385e52a6.js",
    "revision": "48bad94c614a54642a38b1b1a29d1a5f"
  },
  {
    "url": "assets/js/29.f6bf57b2.js",
    "revision": "d1ef566559e2f082fc9aa3263279b705"
  },
  {
    "url": "assets/js/3.91f34810.js",
    "revision": "ef382365fe4598f7fb900f5a4d5a944d"
  },
  {
    "url": "assets/js/30.b7731d92.js",
    "revision": "6e484c28d3a9143cfaee64f348b0a314"
  },
  {
    "url": "assets/js/31.c25e728b.js",
    "revision": "5bd710e51fcad471461b005a8a94e38c"
  },
  {
    "url": "assets/js/32.536a00af.js",
    "revision": "85b93347270a66e54629aa796b5f0286"
  },
  {
    "url": "assets/js/33.9f33cfb4.js",
    "revision": "ae429c224f8ca703074c6821ead65900"
  },
  {
    "url": "assets/js/34.559fc521.js",
    "revision": "14ec8ee43d98a44149f9176dc9fdeca8"
  },
  {
    "url": "assets/js/35.fd2f1f36.js",
    "revision": "4b9eca8bc5d351c8c4a5c0cb9105e831"
  },
  {
    "url": "assets/js/4.c8d25331.js",
    "revision": "6431421faffaa6a99a57ae7d7dd76914"
  },
  {
    "url": "assets/js/5.5d3f6f3e.js",
    "revision": "288e0d895a2d0ffe6c8d203a25748f79"
  },
  {
    "url": "assets/js/6.2bd8b2e8.js",
    "revision": "5d8e72dd87e08b23ecbd7f94744c351a"
  },
  {
    "url": "assets/js/7.f7a042a0.js",
    "revision": "6e1809d7f8b988e09a7dc506d558ad54"
  },
  {
    "url": "assets/js/8.ee80db7e.js",
    "revision": "0860e5e9d6709b04d8f4cdf77084e99a"
  },
  {
    "url": "assets/js/9.0aee3ae0.js",
    "revision": "c0b6466436cb02103585dfbb8c58e0f5"
  },
  {
    "url": "assets/js/app.1a0bd777.js",
    "revision": "4a5d8a152f9c5d547e6a89aefb3196a4"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "b859159b5eb1fdcd596c98b9451049b4"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "11f34496375af3d1d1be84e740b82bb7"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "f7bad4488a69a19599a3b6c3ae81aa01"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "fd4c156b7860678d14a5e985a01b50cc"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "18005a370ed4e11ac4aaf481666fabf6"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "97d8d0339de7283d3d8ee8ac292b6147"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "7063c9635667d7496bf0f1bfa07d86fe"
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
    "revision": "1bd70837c8606a9da243366bc11b1ac8"
  },
  {
    "url": "links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "Store/Anime/index.html",
    "revision": "638ee479b1b6c18c7d666c32b88092bf"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "74360dea7f0774b1f3284941c5899ef3"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "0df96cb4eb304ac56a16226b84664da7"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "9de7bbb198e323a3e1d25df7a0f5410e"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "ee5df0d145f02e780b16bde1fd63e67b"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "d78aa67e2fd90cd978531457f0e73ab9"
  },
  {
    "url": "Store/Films/index.html",
    "revision": "0fcabac838b18f647b04b5c9f44801c0"
  },
  {
    "url": "Store/index.html",
    "revision": "a1ea1b07321d8432bcf6a6ee434cdc5b"
  },
  {
    "url": "Thought/index.html",
    "revision": "4464834362f083387d82425563b3bde6"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "25536612c723a40e3594da1c40fdf499"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "84103eb4f91bf03f11d2f194605ebc48"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "97c292ef3eaaed0607d1075435be66b0"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "c340fd786645a2ff76cc98bc58fd3c00"
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
