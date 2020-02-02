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
    "revision": "1957b9a85cfe5d1eb8977947233e2ee0"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "97eac4737e03c8e9caf3394d8b90ca90"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "bc7ae48389f2d1dd72e6e508d8e26230"
  },
  {
    "url": "Another/Review.html",
    "revision": "2724ce6413dd68a5f5d9236dd1f86a2f"
  },
  {
    "url": "assets/css/0.styles.7268c528.css",
    "revision": "e441d32c7033cf67caf4d4825393e933"
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
    "url": "assets/img/001.816c400a.jpg",
    "revision": "816c400a5db50d8fc675d376b349b772"
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
    "url": "assets/img/002.9d888206.jpg",
    "revision": "9d88820621aa16eef49c52dd397a014c"
  },
  {
    "url": "assets/img/003.9d396115.jpg",
    "revision": "9d3961154b92e8b624179bb02b6201a4"
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
    "url": "assets/img/004.5d3c0888.jpg",
    "revision": "5d3c08883340a97691671eb68012965b"
  },
  {
    "url": "assets/img/004.6102c5a8.jpg",
    "revision": "6102c5a8da8c9c3156dacdd3e1ae6b75"
  },
  {
    "url": "assets/img/005.5a8ea762.png",
    "revision": "5a8ea762a90424fe2b9cfee05bdabca0"
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
    "url": "assets/js/10.24a40bd2.js",
    "revision": "e33301e7d9b1d5aae419c594a595853e"
  },
  {
    "url": "assets/js/11.dd4a4f3d.js",
    "revision": "7fd27e62e30565900fe7bae49fe99603"
  },
  {
    "url": "assets/js/12.b435f3a7.js",
    "revision": "77d6f54b2cbbce328ccdecaf0eb169b8"
  },
  {
    "url": "assets/js/13.5c3499db.js",
    "revision": "0e61a36d3f064224ce221c773ddb9c27"
  },
  {
    "url": "assets/js/14.1769e48c.js",
    "revision": "644763d21bddf10b75ce9b05c4d7aa9c"
  },
  {
    "url": "assets/js/15.ac34c7c0.js",
    "revision": "ae17f17adadca6766d3781e0bb54acd6"
  },
  {
    "url": "assets/js/16.5414f690.js",
    "revision": "560d7fb5f021fb59e6ab4387289249e9"
  },
  {
    "url": "assets/js/17.c1b5b810.js",
    "revision": "89a777a5d862d2cf2409e4727a84261b"
  },
  {
    "url": "assets/js/18.d0572a4c.js",
    "revision": "de200ed12c3578a26b7259206d307b93"
  },
  {
    "url": "assets/js/19.e47476e0.js",
    "revision": "23f3ad7a427ab0b2a1b42f6f23ede5d0"
  },
  {
    "url": "assets/js/2.9fb2e746.js",
    "revision": "e28a721d6d493b48cd8d8ab15e4de10a"
  },
  {
    "url": "assets/js/20.d0ab0f62.js",
    "revision": "ced8e0201a875624323135165a3e07b7"
  },
  {
    "url": "assets/js/21.46cd0285.js",
    "revision": "f7a02250cdf1bb47be79b30a25dce601"
  },
  {
    "url": "assets/js/22.b2610ea4.js",
    "revision": "94bb7e2053bb8a1d425dc0404c455eb4"
  },
  {
    "url": "assets/js/23.b89c4102.js",
    "revision": "31c897160b5a4d9e0ddd74a8c0536227"
  },
  {
    "url": "assets/js/24.19883122.js",
    "revision": "20954eb7707727d16458925b5c037878"
  },
  {
    "url": "assets/js/25.eed45c27.js",
    "revision": "3d2fef6a6df8759eb29037c331c6e3ac"
  },
  {
    "url": "assets/js/26.5f6e1246.js",
    "revision": "e03b539512e84022d713779792accb5b"
  },
  {
    "url": "assets/js/27.bfb4ef93.js",
    "revision": "594a2a2d017c9e8cd1d5471612e99e9f"
  },
  {
    "url": "assets/js/28.4bd41232.js",
    "revision": "dba71c2d0e69fc13ca098e929c456788"
  },
  {
    "url": "assets/js/29.6a9f1796.js",
    "revision": "2be651713f81e64d20471cea9130c6a4"
  },
  {
    "url": "assets/js/3.77436844.js",
    "revision": "de160c32afb4c57dc40fcb4b532f57ec"
  },
  {
    "url": "assets/js/30.e9894011.js",
    "revision": "e454410342047d805e0807f4f3b50a34"
  },
  {
    "url": "assets/js/31.16fab368.js",
    "revision": "02471f9f4129965211635b815d62c16e"
  },
  {
    "url": "assets/js/32.185fcd39.js",
    "revision": "82d59f88b19a488a51a0f6422c325f0b"
  },
  {
    "url": "assets/js/33.ff12115e.js",
    "revision": "d5049e5e731edd56c3e501688848971b"
  },
  {
    "url": "assets/js/34.28ddbdc1.js",
    "revision": "47c6f73134ee80d9660dfb81c9d24e43"
  },
  {
    "url": "assets/js/35.ed58c992.js",
    "revision": "ec0fe5fa88e02c85ff01b8b3fcedefeb"
  },
  {
    "url": "assets/js/36.b79dd30f.js",
    "revision": "a609756b2f7bfefb5a5f7e5f5b78646e"
  },
  {
    "url": "assets/js/37.1dc426aa.js",
    "revision": "d0ae837f22db3fa4e8adb4a79aaa1f18"
  },
  {
    "url": "assets/js/38.5c3f246e.js",
    "revision": "c8831efa6acbdce2796de0432248e186"
  },
  {
    "url": "assets/js/39.97310dcc.js",
    "revision": "3e79c3fa3b15c2d31c0507296bec18cd"
  },
  {
    "url": "assets/js/4.80caaa44.js",
    "revision": "9a1f569ae81b0c90cbddd8fe7984b3b0"
  },
  {
    "url": "assets/js/40.30138848.js",
    "revision": "aa066f03faa7443b7ea0c9501a5b6ff1"
  },
  {
    "url": "assets/js/41.d6ca6535.js",
    "revision": "e6acb30a3352d0c8d772a63f18c07205"
  },
  {
    "url": "assets/js/42.b94abddb.js",
    "revision": "c88cf1869257484bd29f7dd8cdf7ad09"
  },
  {
    "url": "assets/js/43.7e17a784.js",
    "revision": "001b3621a96ca20fd6cd6094bfc6303f"
  },
  {
    "url": "assets/js/44.d8516a65.js",
    "revision": "3fdef6ea5cba7bbfd6429658c670957b"
  },
  {
    "url": "assets/js/45.4b32e12c.js",
    "revision": "6505cc3237f347d7e8d619a8ae85a9f2"
  },
  {
    "url": "assets/js/46.cd47c9aa.js",
    "revision": "b5f06263dc060571acd1509e017ed3b6"
  },
  {
    "url": "assets/js/47.e661c137.js",
    "revision": "c73f90b477ac33b26f89111ae3dc8a33"
  },
  {
    "url": "assets/js/48.42f61704.js",
    "revision": "270f83ee0b9e20bd7c1a6c3e9cc9d485"
  },
  {
    "url": "assets/js/49.68f3e181.js",
    "revision": "145a846b5514cdc7932200af2f17e150"
  },
  {
    "url": "assets/js/5.bf6bae59.js",
    "revision": "570d65438a98e17cf8fbb98619f2a12c"
  },
  {
    "url": "assets/js/50.67934916.js",
    "revision": "af76cb26f221138dd5ed0b8004c1cb8e"
  },
  {
    "url": "assets/js/51.5046646f.js",
    "revision": "7fb5d79925c66786b36317edeced9518"
  },
  {
    "url": "assets/js/52.a634d3aa.js",
    "revision": "abd7b393eea3f3f59e25004050e1494e"
  },
  {
    "url": "assets/js/53.b7980c8d.js",
    "revision": "5e803558f5640d2088018442bd529bcc"
  },
  {
    "url": "assets/js/54.6b787572.js",
    "revision": "e8beb8cb68beab7fa86b3d114bf88772"
  },
  {
    "url": "assets/js/55.e06859a8.js",
    "revision": "107f301af796b2a001f3107b3c162a76"
  },
  {
    "url": "assets/js/56.01796e69.js",
    "revision": "b1082ffbe10c7a0fd7f688006a711d75"
  },
  {
    "url": "assets/js/57.4d4518fb.js",
    "revision": "e86ad5c1e9dfe6f2150625402e572694"
  },
  {
    "url": "assets/js/58.6a192e89.js",
    "revision": "776b1386a71413124397e72202ffef5b"
  },
  {
    "url": "assets/js/59.a4e502c0.js",
    "revision": "bb0a932f2519d7ece14b9966040362b6"
  },
  {
    "url": "assets/js/6.132ae153.js",
    "revision": "0bb8a1129d6cffb580b0fde9fe94ec30"
  },
  {
    "url": "assets/js/60.47ea2b1b.js",
    "revision": "a5a6a7e90afd9954bf6d2d1cf079f0e7"
  },
  {
    "url": "assets/js/61.66019b7b.js",
    "revision": "ba13b319f995ad60887a27843cbab00a"
  },
  {
    "url": "assets/js/62.485da2ab.js",
    "revision": "514dcef88bb95c64837c54830787b133"
  },
  {
    "url": "assets/js/63.68592833.js",
    "revision": "27db3797ba1481e9e9ae21959b51a00f"
  },
  {
    "url": "assets/js/64.8d6c4247.js",
    "revision": "dd66d5c6d95387fec17ef0df27cfd01f"
  },
  {
    "url": "assets/js/65.3d5d213e.js",
    "revision": "66bb0e3fdc5353c11b2040a51996e805"
  },
  {
    "url": "assets/js/66.5bae9dfb.js",
    "revision": "20182268fa3a5a1e17987a03da22fe4e"
  },
  {
    "url": "assets/js/67.f6a9713b.js",
    "revision": "e23059be43059958c5879aea9766ee8e"
  },
  {
    "url": "assets/js/68.00472133.js",
    "revision": "e1bb24437b663f48f620fbd12f6fc9fd"
  },
  {
    "url": "assets/js/69.875fe797.js",
    "revision": "c313163e64b8c24e3c34343b77777663"
  },
  {
    "url": "assets/js/7.38469e7c.js",
    "revision": "1ce1447fbe91fd8040826a0025be0a22"
  },
  {
    "url": "assets/js/70.84369505.js",
    "revision": "dc66416103b5c9bd1b0c91da849da94c"
  },
  {
    "url": "assets/js/71.f4581b1e.js",
    "revision": "10bce6fbeb60c78f2c24f0284289d18a"
  },
  {
    "url": "assets/js/72.df050a97.js",
    "revision": "ab00f9e2bc69088613c16c1e6bcfdaee"
  },
  {
    "url": "assets/js/73.b13c7acb.js",
    "revision": "013fc366d6aa6890e450009678a013eb"
  },
  {
    "url": "assets/js/74.6e6e66c7.js",
    "revision": "cbb880dcf152410b70e8c04445a164fe"
  },
  {
    "url": "assets/js/75.e45e8570.js",
    "revision": "7fa386ab183f77f14097731e6832e42a"
  },
  {
    "url": "assets/js/76.569f97d2.js",
    "revision": "7c9fc30d8397d804aa180df3a80b8e42"
  },
  {
    "url": "assets/js/77.af11f805.js",
    "revision": "ffa084ab015ff7068ed20fe3c220a77d"
  },
  {
    "url": "assets/js/78.66bee85a.js",
    "revision": "457f912b341b594083e3e0da71afdc8f"
  },
  {
    "url": "assets/js/79.3fdb2a80.js",
    "revision": "548317d6262912f2702641aac0186f65"
  },
  {
    "url": "assets/js/8.fa9872da.js",
    "revision": "d2bbc4160d7b6c9be1466167bbbc8c6e"
  },
  {
    "url": "assets/js/80.4c65ba4d.js",
    "revision": "8bf764280b6a48a0ed35f69997b91afe"
  },
  {
    "url": "assets/js/81.a4b38059.js",
    "revision": "57b88cd0a9bd54fef0fe5d84f76bc1a7"
  },
  {
    "url": "assets/js/82.16879641.js",
    "revision": "1167d2490c9f5c9e10b1232bc15e103a"
  },
  {
    "url": "assets/js/83.bc5c0ae1.js",
    "revision": "8d628f11ceeb86ca611c303ff64f9d30"
  },
  {
    "url": "assets/js/84.1483bf5d.js",
    "revision": "f6319de51d945bc9ee3d715a457def34"
  },
  {
    "url": "assets/js/85.3245af46.js",
    "revision": "f1b5aacddbb4e27a0c3b78390c0126db"
  },
  {
    "url": "assets/js/86.7e2547e5.js",
    "revision": "9fb37f14862ede8fac21a968cfba585e"
  },
  {
    "url": "assets/js/87.609020ae.js",
    "revision": "8d489f2724dfe2863820a5f11080a421"
  },
  {
    "url": "assets/js/9.9ea4c298.js",
    "revision": "2b34bfe91cf4c03caf668d0466449c63"
  },
  {
    "url": "assets/js/app.5a58180e.js",
    "revision": "66a3dfffc2d61566f1a323b23ea479b7"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "f2766539c21bd0069559fd84dd5bedb0"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "2e9cf0bab2f9fb0482dea31dec7d1faa"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "fb7903c1932a24c197368ea041239698"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "93ed82616feffaed1991c0ef6718932c"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "69936ae50570d90e316c127a6c5d5756"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "85618ba0177c75729e0558eee542016e"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "07d36304403afad3918d331b2d87f91f"
  },
  {
    "url": "FAQ/Console/A007.html",
    "revision": "44992803cedb5feb8fddab26e7a00ab4"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "0aa0eebcb082ffe46562ec937433fddc"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "0f92f22f0274b7bc46ecc8ca3369b921"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "5ac6fba99e03f6e0c4c5a294f44fd915"
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
    "revision": "4d5196a4adae9f665d203e522ffbd741"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "55e24b51aa6398765dcdcc49284af0c3"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "3f99280b5eb00665ad7300be00fad0d6"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "4f163aadc8a6998aded55839ff4946a9"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "7b53e4efae86e6e71dfe66af77d2e735"
  },
  {
    "url": "Store/index.html",
    "revision": "8ca5172abc989c118d4b13bf52f57c6e"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "c16359cf6b2e5dded23edfe3b75a791c"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "435ede850aafc35233cabe21efb21555"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "35990c63db9430f4ea50d31b21aea7f7"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "f5ee8e72f9e37b91040b7a97e2995fea"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "aa06196468f71036bb08399bb84be3ec"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "8b4ffe7365d123e137f85e67802ab6ab"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "4278e5a346624ceb2eee1443994d6704"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "c8d52beaec3e3567d05f3cbb58d14a43"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "efcecc2feeec5c561e895fb875eade26"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "7ee3ea44bca70616195af253b79355fb"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "2c166711ff989e851ead44b751efa38e"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "75d1b22d076a45f191a1aeda6890b7ec"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "efaf3e1a2a1a64f7e8a93db821b82d16"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "106b3a36d2121ac2e3681fa03f955428"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "432c605511e7e719d04747adaa25c398"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "206e4c64171975339e3c3b35af8e3779"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "f579bd1f851aa18cd3a2351813b04574"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "3431ac7f11d432b2baa12ce415ef0dd9"
  },
  {
    "url": "Store/Wiki/index.html",
    "revision": "2df17b611188177f8f314dae50b38240"
  },
  {
    "url": "Thought/index.html",
    "revision": "9a0a7def2c3506e7b2ba3eef83e4a9ce"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "ae056ee5cee939ca89cda1ef4812689e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "bf9257ebf6421e805badf91c2ff78218"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "503c45fc1ee066908bb92fc7472cd46a"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "7c41dc8d36abe2073b488afe34eaafb6"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "6f18539cf48ac6ff03b1529c0c20e37e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "661031876de91f402012393faff413e9"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "a3de2f1e624da3136101142f4b289e76"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "9016e05b19ae31d1893a7ddd60400e86"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "38aac4f7003ce0229bc2f6854f1b00b1"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "de5baa274e56883cb19411fb331e49e1"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "9d4c0d564883ee0915c85c162fde2fcf"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "d023a6246060ca935e504d31b74da854"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "4e7b59e8d1bf676677f1246ad6a8e39e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "a5c9b6d21513b93776a0e57f519b201b"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "b70377168e01c115445b3af11b3df3a4"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "9329097c558d9c80614380f155298212"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "3b80558ab33c5b6992fa976c4893b02d"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "b5e7455576922bfbf33ebc603f074613"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "42b9c21203929edcce946f52b1cdea3a"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "adb7c74a45912c51f53c95cfaf82a2a3"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "9677646439a921bea351ae31d5da6c2a"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "114774cf2f8c8ac2e4d88e61b4272e88"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "08fac861ecc68c9b0252040327448b38"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "61e2901891d55a2a749cd31ddfc7d374"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "e2a324ec0bcaacfde93238354debc550"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "9e7d97bd0f61081428fab72918352b0c"
  },
  {
    "url": "Thought/Words/W002.html",
    "revision": "bce209a340ee2a5becd613197655d16a"
  },
  {
    "url": "Thought/Words/W003.html",
    "revision": "230e91cfafb2b4ac63f42d201f1b47ee"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "26fa2da7e23500d60c5456185a9748c8"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "b625ce7a0fc637331126c04bcda907e8"
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
