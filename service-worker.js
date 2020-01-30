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
    "revision": "c9e4541ad17f8b3adb5eaeebca8c125d"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "9cf68321f108060a25b75140e1a8295d"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "54aeea41a3041e40eef8f0b53e4b48fb"
  },
  {
    "url": "Another/Review.html",
    "revision": "7f0425cee30fa78d136609946c9375ac"
  },
  {
    "url": "assets/css/0.styles.f88fbc15.css",
    "revision": "a634aba35ead49bb58a9efaf626944e2"
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
    "url": "assets/js/10.0e76db66.js",
    "revision": "95f3e4892f6a4c898d8735cbac9c159f"
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
    "url": "assets/js/16.ce183017.js",
    "revision": "0ddf778da2a901bd4348d964fc9c6976"
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
    "url": "assets/js/2.9cee48d2.js",
    "revision": "c9986800a18bba7aa29041b11332f677"
  },
  {
    "url": "assets/js/20.d0ab0f62.js",
    "revision": "ced8e0201a875624323135165a3e07b7"
  },
  {
    "url": "assets/js/21.c59b04ad.js",
    "revision": "3d2c33224c6cd3147e93ac7b4bba609f"
  },
  {
    "url": "assets/js/22.b2610ea4.js",
    "revision": "94bb7e2053bb8a1d425dc0404c455eb4"
  },
  {
    "url": "assets/js/23.1f402c4c.js",
    "revision": "7e51462a10c9904c5d0b1d50255c57bd"
  },
  {
    "url": "assets/js/24.61800ba4.js",
    "revision": "605b26f71adb509bf5f6a00ff2a0e996"
  },
  {
    "url": "assets/js/25.2ba7406d.js",
    "revision": "d82e6d8d67a8a1942aec4730e78d07f5"
  },
  {
    "url": "assets/js/26.5f6e1246.js",
    "revision": "e03b539512e84022d713779792accb5b"
  },
  {
    "url": "assets/js/27.5379b8bf.js",
    "revision": "468e5b0058917fcee728d742ebf27d07"
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
    "url": "assets/js/32.fdc4b6fe.js",
    "revision": "58016604a6ed209a672945b91d645991"
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
    "url": "assets/js/37.14f8d04c.js",
    "revision": "9c0612656ed8feb0322ffe3de2d934e9"
  },
  {
    "url": "assets/js/38.5c3f246e.js",
    "revision": "c8831efa6acbdce2796de0432248e186"
  },
  {
    "url": "assets/js/39.0e438dfd.js",
    "revision": "36ba98b51ab4a8075feda21e3b0fc66a"
  },
  {
    "url": "assets/js/4.80caaa44.js",
    "revision": "9a1f569ae81b0c90cbddd8fe7984b3b0"
  },
  {
    "url": "assets/js/40.14a7d013.js",
    "revision": "d13500b0019e84010ecdd1cba69d7048"
  },
  {
    "url": "assets/js/41.adc12275.js",
    "revision": "221e0e3653a8d1f045eea972bea34e04"
  },
  {
    "url": "assets/js/42.598f200f.js",
    "revision": "f6e952fb7be9dfe7dd4615717e35517f"
  },
  {
    "url": "assets/js/43.5b71c68e.js",
    "revision": "7c80a3395e3421aff4a42416366012b4"
  },
  {
    "url": "assets/js/44.442bd4cc.js",
    "revision": "5a63797b64816f64d4676f51ca834b9b"
  },
  {
    "url": "assets/js/45.4d90170d.js",
    "revision": "c2ef5dbf73b1bb026993fb7cdb411859"
  },
  {
    "url": "assets/js/46.9d6d33a9.js",
    "revision": "64f860e1192434395cae8f4560702d78"
  },
  {
    "url": "assets/js/47.d7022ff7.js",
    "revision": "cdcb1ac427beb8e49346e342e3424ba1"
  },
  {
    "url": "assets/js/48.1b931665.js",
    "revision": "b32bcce0a552ee15ee681d60fc20952f"
  },
  {
    "url": "assets/js/49.68f3e181.js",
    "revision": "145a846b5514cdc7932200af2f17e150"
  },
  {
    "url": "assets/js/5.9fa39efb.js",
    "revision": "35bae2f8dc4d46985f5f6ddb8dcabdc8"
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
    "url": "assets/js/52.c36bedc2.js",
    "revision": "cbe397ac553839c7a51e153f95d63d26"
  },
  {
    "url": "assets/js/53.b9892d4c.js",
    "revision": "b3ac87c7e0f0a4258035324746f6b0e1"
  },
  {
    "url": "assets/js/54.6b787572.js",
    "revision": "e8beb8cb68beab7fa86b3d114bf88772"
  },
  {
    "url": "assets/js/55.5ce341e3.js",
    "revision": "350d48c0ba7289f4ad534ffa64c33edb"
  },
  {
    "url": "assets/js/56.3f2da5d0.js",
    "revision": "2d7f2bd4887a7f075e9152a250b010b9"
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
    "url": "assets/js/6.8d8e3336.js",
    "revision": "915df05d93770a59a9c83e35dd522df5"
  },
  {
    "url": "assets/js/60.141e43ab.js",
    "revision": "63e8f8dcb550c357a09eb813f894439f"
  },
  {
    "url": "assets/js/61.66019b7b.js",
    "revision": "ba13b319f995ad60887a27843cbab00a"
  },
  {
    "url": "assets/js/62.53f8b9e6.js",
    "revision": "96438e26b200867b79f98e4191129afc"
  },
  {
    "url": "assets/js/63.e4fa3cad.js",
    "revision": "2e55aac025437088fd58e9180038b79e"
  },
  {
    "url": "assets/js/64.bbaa75d4.js",
    "revision": "a68cc14a313a8187dfcf807a9c06a5db"
  },
  {
    "url": "assets/js/65.51529dbe.js",
    "revision": "b8468ef752ce8224c905dd21698b26eb"
  },
  {
    "url": "assets/js/66.e116051e.js",
    "revision": "bf786e66f109dd8490cbdea940bf8ae6"
  },
  {
    "url": "assets/js/67.87d4812b.js",
    "revision": "0c09f0bdd974a9095e5c3f3062119413"
  },
  {
    "url": "assets/js/68.d76e0e24.js",
    "revision": "9ddcf6052210efaf41c1f12525276c06"
  },
  {
    "url": "assets/js/69.8f12ddc5.js",
    "revision": "dc721376741633d66c5bf60f13681a94"
  },
  {
    "url": "assets/js/7.77112b62.js",
    "revision": "c7d46e5612930cbb58fd8930f4f5dfc7"
  },
  {
    "url": "assets/js/70.eced84cb.js",
    "revision": "4a2494736161d5a54ef55715e6842cc1"
  },
  {
    "url": "assets/js/71.498f8137.js",
    "revision": "7ff4336584a9423c32e821640aea4325"
  },
  {
    "url": "assets/js/72.1ec52b07.js",
    "revision": "eaa65f32e7e5d81af1d258c81f53eb73"
  },
  {
    "url": "assets/js/73.ec791e40.js",
    "revision": "ce88d3374f96bd1afa32532bc76e9517"
  },
  {
    "url": "assets/js/74.ebf8b686.js",
    "revision": "bcc5f6398efe59ad7fc4af4c5393c19d"
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
    "url": "assets/js/77.1ed8fb4d.js",
    "revision": "45fe3f8ff4845449c1c3cfc2e57858f2"
  },
  {
    "url": "assets/js/78.66bee85a.js",
    "revision": "457f912b341b594083e3e0da71afdc8f"
  },
  {
    "url": "assets/js/79.7e3f4b5e.js",
    "revision": "795fc6f59af60b964f126383dcfa9a4a"
  },
  {
    "url": "assets/js/8.bfd9bf8b.js",
    "revision": "fdd4c5fc1aa92aa3468364fb4f09298f"
  },
  {
    "url": "assets/js/80.4c65ba4d.js",
    "revision": "8bf764280b6a48a0ed35f69997b91afe"
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
    "url": "assets/js/83.3cdf9ae7.js",
    "revision": "81698e8d162c5a3401b3672bd5da0d61"
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
    "url": "assets/js/86.8d429404.js",
    "revision": "fbfca793468b987c99ad6bf17731bf7e"
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
    "url": "assets/js/app.825faf42.js",
    "revision": "10cb96980e79755f2f7f44ff37f74fdb"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "5023d2ea6cf8769e6f07ceda3ef8a8df"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "19008f946e4606f5cdb2a27ad8454743"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "53db36996db38e9a9d1fdffa973e0673"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "2d281b82096a2131379eb20191aafb54"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "8593ef77dbb1da97af11a922abd5bed5"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "a1c9787f84ec3c8577b57873b2fecc43"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "a1c63b6d1f84d8c1ab7ec580be18db73"
  },
  {
    "url": "FAQ/Console/A007.html",
    "revision": "4cbe06f7dd008d0882bc15cf06124771"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "699a83e10c7d82f8d049e27ca3cc283e"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "322e30811a3bac8cf50933c3d37445cc"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "f7ec3ac6b86d1972ea6081b7ced42b45"
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
    "revision": "84b1b9a27ab2b7bf92b37571baf50bc6"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "97e58d1c2023cf43ee69fc8d5730def6"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "ae4d14d0ad9d3a0c82c04ad163d5d7ef"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "bbe1680cf87e16945072b7b63d46b559"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "fe59b68d8aa6f92a07d30b2c40f2b873"
  },
  {
    "url": "Store/index.html",
    "revision": "d3242fae650bca83a750d2dbcd340df6"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "afbab92b06e06375a0977a57d8363564"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "c4ea6808223d70c0597e4c3e6219a1c1"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "45f077afd6efb7daf7096c0ca3925253"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "085855ff5370ff4bcd02485fd6e414ee"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "9001dbfa9b21340318ed7e1f43f4036a"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "567bf5ebf24436de524839449ce15e8a"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "c0fb63e2f0bb2ec4d42da25329a74b92"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "ce19caa33b421384699d930694c6ecee"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "33eae8fb23c1fdf5ec72c3ccf1f895bd"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "cff7bd294bbe9a944fb25cbaaf0c6cbf"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "086efe59baa51294cc349190c671b37c"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "c9348ed8ff9b809142c335dd0e29514d"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "275600adc10c2fb1e20ba4c965786540"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "01e29472675ba55cf5de46aecdcf688c"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "90f5d2e61468107365e532c769732d91"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "ea1493a894a3f7a40ea3cacae1ac830d"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "97c55765f13af06dad39a38d61392aef"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "9482cce0ace11d7c00ee503dbb9e276a"
  },
  {
    "url": "Store/Wiki/index.html",
    "revision": "1df49105469c38b6cae49331d03a84ce"
  },
  {
    "url": "Thought/index.html",
    "revision": "84d33e6d88fd2b3162690f5253d07656"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "1cfcf126cb1bca4b38cda8fdb24a534a"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "ae0b74182a5844c8bfb1c85958325118"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "67304ba6fa800fedacee328a69a419fe"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "5c31f79b72fc00c64891db40cf964b21"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "8d34f00d2e34520c61bdddaf341e6f32"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "86dfce2d261192a0550db19f3125e922"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "175116789bcb848822da24357a984569"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "07896593334b8ac673f0e46c982b5ce6"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "ec97a24328132b951412a5effe84e749"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "aa9cf1ea4ae6fcb6f96c1953265758ed"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "210c11da0b18086ad371f7dcbebaa4f1"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "7c85a4c8f74f05b037ea68627afbd036"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "ad46d250a6575d0adf2f3d6258377a39"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "63ca1d7a2049068524e759f7780d449d"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "22ce59bdb2aa8523d4ecea137af5e1db"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "df97aafe786cf6f9c2a1cd0c03401ee4"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "6fa22210a987abeeb409f89935cb8d7a"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "d77ca930438241329a194ae7d6d168dd"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "aff6aed0f5a103949536613784c827eb"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "094bda45e12f59cc7bc71f630b787f9e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "477b8fa75107210141e8854e9e79ab43"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "453bdca4c36580b472c95842027f0ab5"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "9f307c782c267594eedd188a95c784b4"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "6c5413b31403a2145fbd6241956128ef"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "35b2208fc44193daa6869cd515658428"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "3b381c60de73d947838f8b235f2ed419"
  },
  {
    "url": "Thought/Words/W002.html",
    "revision": "9ef885642707775b2685fc138200b9b5"
  },
  {
    "url": "Thought/Words/W003.html",
    "revision": "d42ea405635596cf474606b27acf003d"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "27d037c0300246ba1018e8cbb22492cd"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "25e3f660cb1d6f5694317cdb48afcd9a"
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
