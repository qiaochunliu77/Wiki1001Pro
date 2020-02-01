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
    "revision": "d22348509f0de1dec1fa490c577a3a83"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "388986f5d1593e3eea1f7dbb2efa09c0"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "9050c2ad5f8af961292963ba1415aaba"
  },
  {
    "url": "Another/Review.html",
    "revision": "a108abca5610ad099c9ce3dd15d2c644"
  },
  {
    "url": "assets/css/0.styles.3ad0e72e.css",
    "revision": "7b5b831d8167e6d0b69533dfa8d38f6e"
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
    "url": "assets/js/11.82e2ff68.js",
    "revision": "1f58b826cde56234bf0c2194ef625c0a"
  },
  {
    "url": "assets/js/12.31355fda.js",
    "revision": "07765a331ea99b0b28d716a57a33e444"
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
    "url": "assets/js/2.9fb2e746.js",
    "revision": "e28a721d6d493b48cd8d8ab15e4de10a"
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
    "url": "assets/js/23.2fcf2034.js",
    "revision": "3092a557bc61bd74177668742e484e46"
  },
  {
    "url": "assets/js/24.19883122.js",
    "revision": "20954eb7707727d16458925b5c037878"
  },
  {
    "url": "assets/js/25.8eff95f3.js",
    "revision": "218af9e4ee02ba6e5c42528d034a4ced"
  },
  {
    "url": "assets/js/26.5f6e1246.js",
    "revision": "e03b539512e84022d713779792accb5b"
  },
  {
    "url": "assets/js/27.54f219b1.js",
    "revision": "2d6e56ce169b9cf71a928844801101da"
  },
  {
    "url": "assets/js/28.bbe3bd8f.js",
    "revision": "efc215572ff5df531be9e0eb0dd6de3e"
  },
  {
    "url": "assets/js/29.5cd39ac6.js",
    "revision": "3b0cb80f9d518f05d70f4f3990f06955"
  },
  {
    "url": "assets/js/3.77436844.js",
    "revision": "de160c32afb4c57dc40fcb4b532f57ec"
  },
  {
    "url": "assets/js/30.de93b336.js",
    "revision": "f1cbfeb63408821e0d939fa3df8cd4e5"
  },
  {
    "url": "assets/js/31.16fab368.js",
    "revision": "02471f9f4129965211635b815d62c16e"
  },
  {
    "url": "assets/js/32.60f18376.js",
    "revision": "1014e485bce496409a18f25c815ffd35"
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
    "url": "assets/js/36.fbbf6a9c.js",
    "revision": "c9cc34b07e9a2b2211660371a40fc2dc"
  },
  {
    "url": "assets/js/37.280986ed.js",
    "revision": "d36a3750fe4b9762d841043a6bb8ce99"
  },
  {
    "url": "assets/js/38.75995f09.js",
    "revision": "50311c79b7d723c54e196927b45982f1"
  },
  {
    "url": "assets/js/39.ccbbc0ab.js",
    "revision": "49735972e94bf0956fe4d2e3d6a0560a"
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
    "url": "assets/js/41.b4f74378.js",
    "revision": "043f6a8d36af80eabffad6c289c62131"
  },
  {
    "url": "assets/js/42.d19584c5.js",
    "revision": "7d08c8717d730bd15cb87a12a9f51649"
  },
  {
    "url": "assets/js/43.7e17a784.js",
    "revision": "001b3621a96ca20fd6cd6094bfc6303f"
  },
  {
    "url": "assets/js/44.6c3004e3.js",
    "revision": "f79bc826bf6488e2763a3e7e40bceb69"
  },
  {
    "url": "assets/js/45.76d4f086.js",
    "revision": "cdcaba23d9c9f02de024eddfedb6c127"
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
    "url": "assets/js/49.19e19fd3.js",
    "revision": "6070ff6d0b17e3b17edb07ae65cf3e86"
  },
  {
    "url": "assets/js/5.bf6bae59.js",
    "revision": "570d65438a98e17cf8fbb98619f2a12c"
  },
  {
    "url": "assets/js/50.10fff9f3.js",
    "revision": "6a026620d501491a36299dae372221f6"
  },
  {
    "url": "assets/js/51.398031be.js",
    "revision": "576b2997135a19dcda982f6224c969d6"
  },
  {
    "url": "assets/js/52.2ecfd71c.js",
    "revision": "f1ff3ae8bbb2fda794191d026f91ee73"
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
    "url": "assets/js/57.0ea15c88.js",
    "revision": "8f2c9cda69d528fb4b95f147bfb419d7"
  },
  {
    "url": "assets/js/58.eba50738.js",
    "revision": "af661c1cd26f32a56ff4b5109ebdec2c"
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
    "url": "assets/js/60.47ea2b1b.js",
    "revision": "a5a6a7e90afd9954bf6d2d1cf079f0e7"
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
    "url": "assets/js/64.c48b5581.js",
    "revision": "ab0ce59ce0b3348045fa9755b3c4c458"
  },
  {
    "url": "assets/js/65.75a08c19.js",
    "revision": "fae2e54c216641048fcadb2c86199d06"
  },
  {
    "url": "assets/js/66.22fecb1c.js",
    "revision": "9638b8b9625f1f8a1a6b86147279cdb2"
  },
  {
    "url": "assets/js/67.b7a00d0f.js",
    "revision": "7acd359b38474f6b9d5cd2b647a6d197"
  },
  {
    "url": "assets/js/68.71e5f77b.js",
    "revision": "9ba836c38832c65ebafc4abfd48dd48b"
  },
  {
    "url": "assets/js/69.0d00e4aa.js",
    "revision": "fe8bddf1f72ce9744487dd3cbde6e143"
  },
  {
    "url": "assets/js/7.38469e7c.js",
    "revision": "1ce1447fbe91fd8040826a0025be0a22"
  },
  {
    "url": "assets/js/70.8e44eb53.js",
    "revision": "4dfcb174782403ad748c9dd480018302"
  },
  {
    "url": "assets/js/71.498f8137.js",
    "revision": "7ff4336584a9423c32e821640aea4325"
  },
  {
    "url": "assets/js/72.6b8c0057.js",
    "revision": "c3dc1da0af1bb61c187c771a2f4ecb33"
  },
  {
    "url": "assets/js/73.0da4cc34.js",
    "revision": "95b4acb65e99915daf01872fca1809a3"
  },
  {
    "url": "assets/js/74.6e6e66c7.js",
    "revision": "cbb880dcf152410b70e8c04445a164fe"
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
    "url": "assets/js/78.f76961e2.js",
    "revision": "d8a1032ff9906701c50d4bb1ad52f301"
  },
  {
    "url": "assets/js/79.3fdb2a80.js",
    "revision": "548317d6262912f2702641aac0186f65"
  },
  {
    "url": "assets/js/8.30fe68de.js",
    "revision": "730fbf1bea1bba0040236aa337becc8a"
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
    "url": "assets/js/83.3cdf9ae7.js",
    "revision": "81698e8d162c5a3401b3672bd5da0d61"
  },
  {
    "url": "assets/js/84.1483bf5d.js",
    "revision": "f6319de51d945bc9ee3d715a457def34"
  },
  {
    "url": "assets/js/85.b5755e3c.js",
    "revision": "7503d00b158a7d9e8f152cecf20e804e"
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
    "url": "assets/js/app.ca3831f8.js",
    "revision": "9003260b515b45981f506b4db581718b"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "032d14d00a383f47a7c9ef7a97ea5650"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "fe104af924e7119f4a7cc5d776c4d8e4"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "b1f1f395dbdc40d9e1e5e4d6417e7489"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "de30d497abdb1041d2fd4dda3ac6ceaf"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "027a8039428f318e970406bbf392e237"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "cbd14c81c347884fdb460b32355a5648"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "2001af6f07c0f7b9652ceb06b1f3967c"
  },
  {
    "url": "FAQ/Console/A007.html",
    "revision": "f7d659800a770c67d011e7da15ecf5f5"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "236f0d75949f8e3a129c29e030c5fbed"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "cdd3fff15e6c877fa267731dd05dd5f6"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "0cdea3a84eb33c25e23075a0c9c1adf1"
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
    "revision": "33017f2949d66817e9a07f291ea3279a"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "490201e7340dca4389324808a2fd2c2a"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "abaf39ccfc7c74b46630e1654022a4f2"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "741cdb1b7f6d75b6b167d6d0312fcbf9"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "c64794f0e6ac638a41feec7ee93a25c2"
  },
  {
    "url": "Store/index.html",
    "revision": "66f968b0c64790fb2f84a424e66719f4"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "0a276de12fffea493754b499dc811194"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "319ab14ccfd6e916b6885fd7902077e2"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "2aef00e36523de5eef05d435173d426b"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "8809f67afe2bc8776d598e568999d8ca"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "5139b41b5b52dc5783a597d97213038a"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "1b34c61df8acd608a7597dcf44a1b6be"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "47c43aaf729a7295840ba739f0fe963b"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "49ba8b8dbcbc778fa3438c40de6d0bdc"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "6abb028dfd45fd22f9be26b994c263d5"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "dbc05bee8ae1e4588cd334d5f364b2ae"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "f2c4ba16657ee500884d01de265f53b7"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "5073c813a38726ff4b5b29ed53465ed6"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "b75521dd9015dd0f9bd5e27f7c964dc5"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "74c944469d5e2e3f577b980020bde45b"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "a82f00c1e02c08a14f9f7f9872aec993"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "aeca64b1e261373d30a3d7e3e8acb1f1"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "67b4ae2c41c84bb2266cc38f0755054e"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "d7ecf8ce5ec477b4790ab973400f6288"
  },
  {
    "url": "Store/Wiki/index.html",
    "revision": "ff099c291b0514d5a33a5c2efee975e8"
  },
  {
    "url": "Thought/index.html",
    "revision": "9cb0f452a39f8a1819b76134f429da14"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "2303defd031a0543c4aae28b1044e5bf"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "4e27afa3d815873f1b8ce37c9d29b8cc"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "5da2a8ab7d7795448c14e5ca0efbd84d"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "c915e9b9792ef80c873c5b69227bac67"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "b484ef239e60065026daabf9b72638da"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "dec407cd0e50ddab56a0880cf813693e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "28e76fd54106c4c418d991dc735fb778"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "414a28e2a5c67f9fc0fc2edb4d87c89f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "3e09acc2a3670699a44d57154c35f27d"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "45821966524522c114cb207e91e89ed9"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "1ddeb7e37f0a3a61830d3f259470d27f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "beddff103674674c4186db9b25adef36"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "49a8164a076624216ae20cec7aca4bf2"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "6607ced17a932047e5b13e28dea60b6e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "2866fbda021ce8fc133846a65a3ca9dc"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "e3501147771a2ff792cb76d4ed011cd4"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "faa81113b925009b7e71abba4de6eafe"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "6b64cbcb46b04b77f23905d31cd1eebe"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "1837a0d0713560df781c4dc4e63acffc"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "3858abe94690fd659b8b408507467e4f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "1eab9b5e7543520617040bbe6f37e022"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "e9ecb942187c020007ba65f1a9b5fa98"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "fd1abd26dec8e996ebc1c81dcc17669a"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "495053a81eec4ca19aa180a47fe224e0"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "026a037df1b92030962c9c33eade3cb6"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "db472b2210ba8691aa06884d96aa3956"
  },
  {
    "url": "Thought/Words/W002.html",
    "revision": "4c50117920472d5e05f718c8cbc3e594"
  },
  {
    "url": "Thought/Words/W003.html",
    "revision": "d8141e2b6405a10bb8665d4385fc709c"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "c5293a6235a4031906959c7f8e9843a6"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "a96346bb02a521056c6c7600ff85e11b"
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
