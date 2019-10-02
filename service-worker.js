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
    "revision": "14380f0d1858d365ba8c60b176821829"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "f613c4d6da7cea24f2bf8e6d4217b251"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "2548b5b1c5ff414bd1e5ad621673da58"
  },
  {
    "url": "Another/Review.html",
    "revision": "8c8ba61b698d29da174bc272b1924a0b"
  },
  {
    "url": "assets/css/0.styles.96e50fdb.css",
    "revision": "9e9e4c56fbb9f0692ad300a64e27cd0a"
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
    "url": "assets/img/1.70462db7.png",
    "revision": "70462db70a5cf2af4b74374d4f7e87eb"
  },
  {
    "url": "assets/img/A005_multiShadows.172b9df2.jpg",
    "revision": "172b9df2a154d4c986f805969d9e15d6"
  },
  {
    "url": "assets/img/A005_shadow01.d5f30f93.jpg",
    "revision": "d5f30f931661a9263768e360fc64a3da"
  },
  {
    "url": "assets/img/A005_shadow02.0c472907.jpg",
    "revision": "0c472907c476c244e250a4fe92d5bb57"
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
    "url": "assets/img/home.02a9ccad.jpg",
    "revision": "02a9ccadcf89704ccc6900e35ecd8ab1"
  },
  {
    "url": "assets/img/horseSwing.39c8d1ef.jpg",
    "revision": "39c8d1efaa7383ac829f07646c0cebfa"
  },
  {
    "url": "assets/img/iconSelect.6b3b7652.jpg",
    "revision": "6b3b7652a121ce0f42b35db1b935ac7d"
  },
  {
    "url": "assets/img/island.4e09cc3d.png",
    "revision": "4e09cc3d73697cccbca6b0df45b1f184"
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
    "url": "assets/img/logo-White.98dace1e.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
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
    "url": "assets/img/switch.58bb7083.jpg",
    "revision": "58bb7083df2c8877382989b40ca585f9"
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
    "url": "assets/img/userHead.4fe18208.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "assets/img/versions.6306b5ab.jpg",
    "revision": "6306b5ab6610e0e2cce99e20ac4cde9b"
  },
  {
    "url": "assets/js/10.4de21b8f.js",
    "revision": "dc969f03f8c508c8bc31adbe42f0a5cb"
  },
  {
    "url": "assets/js/11.81edf0e4.js",
    "revision": "d0129e2f789e85784534378eda725ffa"
  },
  {
    "url": "assets/js/12.f9053bcc.js",
    "revision": "046638cbd4ea12193543ec5f80399f0c"
  },
  {
    "url": "assets/js/13.28122979.js",
    "revision": "f0356c8922adfe98804b88e92fb72dcf"
  },
  {
    "url": "assets/js/14.f48cc607.js",
    "revision": "913d72c4e271fe3cc583290d0e80bdc6"
  },
  {
    "url": "assets/js/15.ed117d7a.js",
    "revision": "b56464f72fada220a65fc466dc930dec"
  },
  {
    "url": "assets/js/16.0f4025bd.js",
    "revision": "23eb4c8e29b0a882415c6f4034e22892"
  },
  {
    "url": "assets/js/17.0de86b7f.js",
    "revision": "2563dd5ae2e80f421a2bbfdf241fd4a9"
  },
  {
    "url": "assets/js/18.b5fee844.js",
    "revision": "bc3612db3933719b56227c3c6bf8f377"
  },
  {
    "url": "assets/js/19.82e2536a.js",
    "revision": "24dc86d37949afe8e03a53dfa8694156"
  },
  {
    "url": "assets/js/2.1419e4e8.js",
    "revision": "9054c1cb6b26d29277fc2e462849952c"
  },
  {
    "url": "assets/js/20.431ccf8b.js",
    "revision": "da375f82000cf136a3da2cbc8474421e"
  },
  {
    "url": "assets/js/21.46a778d2.js",
    "revision": "f3f46b163fc3b1277b9369b6aca8b856"
  },
  {
    "url": "assets/js/22.2279cb31.js",
    "revision": "8a18a9e5cdab280417ca038b3246c90d"
  },
  {
    "url": "assets/js/23.bc45da3e.js",
    "revision": "310d786f56c35aba45a2e9b4c72a56df"
  },
  {
    "url": "assets/js/24.035dfd9c.js",
    "revision": "c8e9583b360d04b41c175e864fc99814"
  },
  {
    "url": "assets/js/25.41247dc2.js",
    "revision": "fa1efc87d98fcfcec809609abaf61646"
  },
  {
    "url": "assets/js/26.7448302c.js",
    "revision": "b6c76d5083a6b12dbd5367301a6d71ae"
  },
  {
    "url": "assets/js/27.c31bf1ce.js",
    "revision": "64da9783708e7f0b674aba4256b806d7"
  },
  {
    "url": "assets/js/28.f16d4680.js",
    "revision": "02bcb7531478e60d6d75311aa44100e0"
  },
  {
    "url": "assets/js/29.fbc292b3.js",
    "revision": "d8c790afb31c9007216c7b4d9ce1269a"
  },
  {
    "url": "assets/js/3.d13e1593.js",
    "revision": "8940d1f856a4e69375b567b9c296dc35"
  },
  {
    "url": "assets/js/30.60e154aa.js",
    "revision": "609095aeb9c5a3a146c211ac809f1055"
  },
  {
    "url": "assets/js/31.421c29db.js",
    "revision": "dbd1e731844df1ad788904110ac38638"
  },
  {
    "url": "assets/js/32.1a52fcba.js",
    "revision": "218ee95fcf1ea1aa3779f29ca6956fca"
  },
  {
    "url": "assets/js/33.525ec506.js",
    "revision": "560ec81ea4f814567402db4e6963f556"
  },
  {
    "url": "assets/js/34.5329f3e6.js",
    "revision": "95ec4f705932256aefb4361ceb23d696"
  },
  {
    "url": "assets/js/35.bd76cc88.js",
    "revision": "b0aab2c9db8c9b477ef0c97b85bf45d3"
  },
  {
    "url": "assets/js/36.d87d054c.js",
    "revision": "39c1aad18f82b543570bf2f86f23e7a0"
  },
  {
    "url": "assets/js/37.ca349d75.js",
    "revision": "6d08db52d5c59c491ea3f277a2a256e7"
  },
  {
    "url": "assets/js/38.8837dda2.js",
    "revision": "9c0654e7889436957ecae914f421725b"
  },
  {
    "url": "assets/js/39.d3342c7c.js",
    "revision": "8106fa0ac9596fa052a725e775967d94"
  },
  {
    "url": "assets/js/4.fb6b2cda.js",
    "revision": "08ee9f737591c1109f88f7c62fc91ab0"
  },
  {
    "url": "assets/js/40.f9961ce3.js",
    "revision": "fcd658268274f95277515540e50a2767"
  },
  {
    "url": "assets/js/41.70775c8a.js",
    "revision": "591ab6ebbb311e4625f718f5de450c5b"
  },
  {
    "url": "assets/js/42.62c529d6.js",
    "revision": "4d5cf0f57b99014f21bcd8d72a1c36e8"
  },
  {
    "url": "assets/js/43.96782975.js",
    "revision": "db36d7e98f3d29b9d97ef8e1186b3024"
  },
  {
    "url": "assets/js/44.1142b0c8.js",
    "revision": "db4e302fb4f2f216eb94bb178593158b"
  },
  {
    "url": "assets/js/45.2b37eedc.js",
    "revision": "d162c60155eae6c4c52c8f36d16b9a12"
  },
  {
    "url": "assets/js/46.5245f398.js",
    "revision": "1d158fe9b5ecfc0e2e66289928c7d4fb"
  },
  {
    "url": "assets/js/47.1a5dc89f.js",
    "revision": "eaed1c8b69c6ceea1c6769ca287b4a03"
  },
  {
    "url": "assets/js/48.416d0875.js",
    "revision": "22da9a04de15409b20423f458ecd039a"
  },
  {
    "url": "assets/js/49.96c761f6.js",
    "revision": "51f3082db207098bf722ada1abc53f5d"
  },
  {
    "url": "assets/js/5.3551a4bd.js",
    "revision": "5f167285ec0b0369696bc10932141ed1"
  },
  {
    "url": "assets/js/50.e216b733.js",
    "revision": "227eabec67b7a54af07142dc9b97f81e"
  },
  {
    "url": "assets/js/51.1262d779.js",
    "revision": "22c9874c6a98c7efc48cb1329e3954f6"
  },
  {
    "url": "assets/js/52.c39239ea.js",
    "revision": "1a6fbcbbdb5f79e355485d16693447cb"
  },
  {
    "url": "assets/js/53.bac5fb6e.js",
    "revision": "83e468b89573cce7f2741029f328d2cd"
  },
  {
    "url": "assets/js/54.389b3d1c.js",
    "revision": "a6808cf7d37fb0d19cc8891132c0b5c9"
  },
  {
    "url": "assets/js/55.20b226f6.js",
    "revision": "013e87b6e176cdec24b3e7a4ccbcfb2f"
  },
  {
    "url": "assets/js/56.63909cf6.js",
    "revision": "e961d3f560ed3de3726033eaf43e3c21"
  },
  {
    "url": "assets/js/57.842d1c0e.js",
    "revision": "897566951ce600d8e558e0be4e94897e"
  },
  {
    "url": "assets/js/58.8ab96610.js",
    "revision": "a4136a415a0b4ed6527a1b5cb1c38d1f"
  },
  {
    "url": "assets/js/59.6a057e33.js",
    "revision": "bf47f6520166164346f712e3e8c73fe0"
  },
  {
    "url": "assets/js/6.f2789b91.js",
    "revision": "43d97f14eb9ba1d66a1697b8b59f8059"
  },
  {
    "url": "assets/js/60.ffec813a.js",
    "revision": "0e442cc7fa49faf6e19c377c90b7dd5a"
  },
  {
    "url": "assets/js/61.adb0dec0.js",
    "revision": "717110293b7e7b470d598ec8b42e4fd5"
  },
  {
    "url": "assets/js/62.da88a4cc.js",
    "revision": "47bc6b1064c7ca66a3416011f3492cde"
  },
  {
    "url": "assets/js/63.e2245be9.js",
    "revision": "544d67ac133203ef27d02c09dfe9a23d"
  },
  {
    "url": "assets/js/64.fcfad9eb.js",
    "revision": "b7b7932da7146bbdc06edeec316a66a5"
  },
  {
    "url": "assets/js/65.51529dbe.js",
    "revision": "b8468ef752ce8224c905dd21698b26eb"
  },
  {
    "url": "assets/js/66.94d94e45.js",
    "revision": "0aa1b3307add704d7f84e73b162c6c21"
  },
  {
    "url": "assets/js/67.87d4812b.js",
    "revision": "0c09f0bdd974a9095e5c3f3062119413"
  },
  {
    "url": "assets/js/68.f5a208fe.js",
    "revision": "b61144df41a627410d01315960a601db"
  },
  {
    "url": "assets/js/69.0d00e4aa.js",
    "revision": "fe8bddf1f72ce9744487dd3cbde6e143"
  },
  {
    "url": "assets/js/7.e2e07257.js",
    "revision": "cc8db5275de0254765d3d32d08171a66"
  },
  {
    "url": "assets/js/70.5c9498f8.js",
    "revision": "2be3e1e13a8e43af42e49528053e462f"
  },
  {
    "url": "assets/js/71.498f8137.js",
    "revision": "7ff4336584a9423c32e821640aea4325"
  },
  {
    "url": "assets/js/72.eaa08a66.js",
    "revision": "b4538f7363d3ee27a3234c78fbe5e73c"
  },
  {
    "url": "assets/js/73.0490d483.js",
    "revision": "b909a2add2b5f969999a4cbd3f84da1d"
  },
  {
    "url": "assets/js/74.d27ea32c.js",
    "revision": "efe1a36384846afa01d31abfe8ebcedf"
  },
  {
    "url": "assets/js/75.e473c691.js",
    "revision": "9cfac8440812a5bcb8d02146c8f8033b"
  },
  {
    "url": "assets/js/76.569f97d2.js",
    "revision": "7c9fc30d8397d804aa180df3a80b8e42"
  },
  {
    "url": "assets/js/77.cd925961.js",
    "revision": "545e8f4e5b8d9e0e0abc77359a4be645"
  },
  {
    "url": "assets/js/78.f76961e2.js",
    "revision": "d8a1032ff9906701c50d4bb1ad52f301"
  },
  {
    "url": "assets/js/79.3fdb2a80.js",
    "revision": "548317d6262912f2702641aac0186f65"
  },
  {
    "url": "assets/js/8.ff1c2651.js",
    "revision": "28855bb8ca50fc70ebe2ebe5da8d0f14"
  },
  {
    "url": "assets/js/80.57459a0b.js",
    "revision": "860cb7fdc1d70eb4226bdd57e5f9095d"
  },
  {
    "url": "assets/js/81.853e2937.js",
    "revision": "a9b195fe1505b8ab773ccf3f148f5300"
  },
  {
    "url": "assets/js/82.d4ebf23f.js",
    "revision": "6b1be158c3a1f10e0078811ebe10630e"
  },
  {
    "url": "assets/js/83.ee4cea5d.js",
    "revision": "524bf2de8f6df27828b499be61d877bc"
  },
  {
    "url": "assets/js/84.1483bf5d.js",
    "revision": "f6319de51d945bc9ee3d715a457def34"
  },
  {
    "url": "assets/js/85.f26acf0f.js",
    "revision": "df62905e809dbb2bdf1c211c9f6a5dca"
  },
  {
    "url": "assets/js/86.7ce06009.js",
    "revision": "1b031ebf41cdbac7995cec680d47a1ea"
  },
  {
    "url": "assets/js/87.609020ae.js",
    "revision": "8d489f2724dfe2863820a5f11080a421"
  },
  {
    "url": "assets/js/9.58c59ff7.js",
    "revision": "9fa6955a53f5682b78fc9252ef6e6fd1"
  },
  {
    "url": "assets/js/app.83512ab7.js",
    "revision": "683add0cd2c6f367d884524000ea57de"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "dd5b35816f73f0a7860c58e032b22292"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "fbfc4e0f27246ec25e7b197faa3fc276"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "bd6c7fcf0abb85e58cc3645fb37906bd"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "c0685d352ffed74bd9d42352b799b6a8"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "0d4f226471a4425227aa40855cbce8f6"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "df3ce74f9b8bd324fadbf6f75bbc2521"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "191b9fe547795096f945a4da620498ab"
  },
  {
    "url": "FAQ/Console/A007.html",
    "revision": "6c46253dee5f50459a7be9885c1fe88a"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "bd209f9ae70039dc508cfaa960057f2e"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "546f8cb34315f655c0a9b0613443ba09"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "f6adac0b9a90ae02de806944529a96cc"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "92fc871809b1cf58c25311ca99921c79"
  },
  {
    "url": "img/links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/logo-White.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "img/logo.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/logo2.jpg",
    "revision": "7af828f6f609dd9f9068cff116dd330a"
  },
  {
    "url": "img/Myself/antForest.png",
    "revision": "c1210c58f6117b2d4f69d86f87df44b2"
  },
  {
    "url": "img/Myself/island.png",
    "revision": "4e09cc3d73697cccbca6b0df45b1f184"
  },
  {
    "url": "img/Myself/userHead.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/users/finen.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
  },
  {
    "url": "img/users/orange.jpg",
    "revision": "dfdf9f5b6e8122ac76479ee38297b42e"
  },
  {
    "url": "img/users/yoko.jpeg",
    "revision": "69fde537fd2200ba922eb1442e549b25"
  },
  {
    "url": "img/wiki/Baidu.png",
    "revision": "dfa63b81c92322d44db59e06cd0ad259"
  },
  {
    "url": "img/wiki/baiduHelp.png",
    "revision": "d91ad7ef1b5642a4a291ea87c563d0df"
  },
  {
    "url": "img/wiki/bing.png",
    "revision": "c6c301113aeffd8f80029a72e6e7037d"
  },
  {
    "url": "img/wiki/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/wiki/earth.png",
    "revision": "5bedfd819a77ac7d87befdff600e3a5f"
  },
  {
    "url": "img/wiki/google.png",
    "revision": "b4ddf57cc277d4ac6cb237c71b327c73"
  },
  {
    "url": "img/wiki/hacker.png",
    "revision": "7ce17c1d46025625752d9d8869e4b2d8"
  },
  {
    "url": "img/wiki/vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "img/wiki/Wikipedia.png",
    "revision": "a9bcbc01c4d9ca7c299b478d123a6a75"
  },
  {
    "url": "index.html",
    "revision": "4d264783619e957ecb6e8e2a2024dc28"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "1727e64c56621d4ea6e4767d4d579c43"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "afa8449db5e3f3e7c8ff00518f0b1de4"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "2c80ff7dccbaecaa119755e896c9c95e"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "191283c4b1320caac2ebfef490fb4952"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "463ebc9560b5b4de7e87c1bfe8e5cbea"
  },
  {
    "url": "Store/index.html",
    "revision": "c64bc9a29ef70f2001739fb293b592a1"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "a516bc34be6b3ee15440e7ccdd555d4f"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "f56a829832567513e2ce3e7f9e4dea4a"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "f9e762210543bdc0086a93d27aa94d1d"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "b6091ca268721e766dcb79c597794457"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "e48c1d04a3e8c1ae06fc52abf8084f0c"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "a8aad7002ea6fb5dbd088c2a18adb4da"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "cd180ef9db324c713c329dcda6f467b4"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "96ce40e2efc6577d28ce91c13849111a"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "bec16937953af8a99720e3befaddc626"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "f6e7ff9f4e5ccb3d014ba411e4530ea2"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "f4d6841d0c69973efd681064c34d672f"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "7280feff2518a4b88eedf1832ee9de19"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "121d8f5861e208b016baa47fd7c3ec33"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "eecaa4944807c9f64af92067f07f98af"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "e8fa2c920b8b63169bacb20c2017d734"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "dbcb4b516a42e23b88a0e4aaa5c55490"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "09532d8cedad87353bf430148bd7a026"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "e7542e9a9a4d28d86ec88d2d23169aac"
  },
  {
    "url": "Thought/index.html",
    "revision": "ba0856a16785b36761fc91bbd45a0c0b"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "e241116b05830b50dea1aa28a5adb9fa"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "aaf4e3f2bf56a04c75b29ecdffa7b011"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "b98af0b44ae03fac6260723997effaca"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "508ea4ea41319bd38694de2850f1c27c"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "455dee4b19ec1793205e324669b3328f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "190d9299ce2421a93ce7753b2b227908"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "268ea4feea82dd7f390a29f5307ee00f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "a84c04414725db023ac05c2bdda6da02"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "28932628a4302726973a147622ffef6b"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "244fcc8533b66bcc4bced09730016a95"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "1c1603446e4acaab8c9a02ce393c41dd"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "cac5cf212b6c69c9438c81737ffdad48"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "e0fb1bdca40290b6ef3bafb066822254"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "34acfc63248ab34d618ae438a8dc7c6f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "d06e471812d6c4ea509a219092e31c67"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "87e13806db7af0440a1ae3042ef05cba"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "3498c1faeb7ef5bd47a19730b6a5c81e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "c8699a6c4ceae1b7153c9cf454652a03"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "7ddf9b857b7cc2e70df0295078b30b82"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "af265d136a38f8507ee9b2497e25adc2"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "d709814eaf9e078fad313cc9d205409a"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "5c1bc9261aa1b5c66139bd14e0706fb0"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "9575c3987933da117fe8ad5d7fc00a58"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "0ec7ee52881141d8d5cd29983e5d63d3"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "e0e95c51b3ec59812d8b02155052ccda"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "fb6157a9dc168029185d1a401325ff04"
  },
  {
    "url": "Thought/Words/W002.html",
    "revision": "6c40f7ac79e38a4e9d1612ca243da667"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "fa1c6d8f425d93a619fa130242ef4e7e"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "0f0bfee4ef7e66d4a90d5f879712cfc1"
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
