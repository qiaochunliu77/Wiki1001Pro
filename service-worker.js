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
    "revision": "f63709a7fcf3b467723d9c388ec09993"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "8a026682d54091517997e2fa6896315b"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "901e2a673caad49244942d7b0ee3a9ef"
  },
  {
    "url": "Another/Review.html",
    "revision": "1aa5c39a167f6c056d817c296eab3fdf"
  },
  {
    "url": "assets/css/0.styles.2a486470.css",
    "revision": "58d7a111c4182e2d403c9a51aef91d3e"
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
    "url": "assets/img/iconSelect.6b3b7652.jpg",
    "revision": "6b3b7652a121ce0f42b35db1b935ac7d"
  },
  {
    "url": "assets/img/island.67601cce.png",
    "revision": "67601cce7a2e4105a159727105a1453c"
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
    "url": "assets/img/swpopup_demo.bddc4d9d.jpg",
    "revision": "bddc4d9dd7d3934d336a6ab1c554a5bb"
  },
  {
    "url": "assets/img/swpopup_old.1b1dfa29.jpg",
    "revision": "1b1dfa29f19c3a818a4532b97e618de2"
  },
  {
    "url": "assets/img/timeWaster.c113962f.png",
    "revision": "c113962ff19788d6ab5503dfda70244c"
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
    "url": "assets/js/10.dbaf7134.js",
    "revision": "a37dbf2d35c8d644445bb97dd722ec8d"
  },
  {
    "url": "assets/js/11.1431bc04.js",
    "revision": "3bd51d77d4d9fb2f3d61c98653c2b7bf"
  },
  {
    "url": "assets/js/12.64de048b.js",
    "revision": "772912770dab1068370c8be051d543c9"
  },
  {
    "url": "assets/js/13.e327d3f0.js",
    "revision": "15b675de9913df0801c8781c8ed0da21"
  },
  {
    "url": "assets/js/14.ebac257d.js",
    "revision": "c51da025db2f8651b6defc7329c4fbc1"
  },
  {
    "url": "assets/js/15.12888131.js",
    "revision": "93f018c1d89fc33b0399aa30dac107a8"
  },
  {
    "url": "assets/js/16.e5bbc86c.js",
    "revision": "fa6df59576167d30fbeb7a61069b35a1"
  },
  {
    "url": "assets/js/17.537dcd42.js",
    "revision": "5a353c7d6b8d6ed1782798bc5811d0ad"
  },
  {
    "url": "assets/js/18.198496ad.js",
    "revision": "6665b66aec851f9b9304f5ce8e107523"
  },
  {
    "url": "assets/js/19.ac018419.js",
    "revision": "f931193f8d1d30fac2600005132ebeca"
  },
  {
    "url": "assets/js/2.bc97e70e.js",
    "revision": "ce963fc61419ccb56c2892adc82e10bd"
  },
  {
    "url": "assets/js/20.5e7617f9.js",
    "revision": "e52c4d060620106535924fffda174db4"
  },
  {
    "url": "assets/js/21.b531eef1.js",
    "revision": "176ad2428065f9c31ccc2f40c07aab82"
  },
  {
    "url": "assets/js/22.4f9ae5d1.js",
    "revision": "b23c12e9d11b68c1a06ea313aa59743f"
  },
  {
    "url": "assets/js/23.c85302c6.js",
    "revision": "75c4ac1d463d14e06da248d0b9926ff8"
  },
  {
    "url": "assets/js/24.8e2909a2.js",
    "revision": "dbf71605c03b68b4631b5dcf335cf527"
  },
  {
    "url": "assets/js/25.12d7b26b.js",
    "revision": "18d214567972f3dbbad2bdb26ad29755"
  },
  {
    "url": "assets/js/26.88d2a3c0.js",
    "revision": "dc86b2fb7cbac365a3140eb140f4c8e4"
  },
  {
    "url": "assets/js/27.c01faacd.js",
    "revision": "6e93c461d032bfd3c8fd5ab77ad10b73"
  },
  {
    "url": "assets/js/28.568f16a3.js",
    "revision": "909234f34273ba6da77e8d9b576004f2"
  },
  {
    "url": "assets/js/29.b03c1a38.js",
    "revision": "9ef596c6342d5f567d6dbfcc7d08727e"
  },
  {
    "url": "assets/js/3.49ce14a6.js",
    "revision": "00a413321c2ea1859e8ae72067b00022"
  },
  {
    "url": "assets/js/30.cc8bdf53.js",
    "revision": "8b796a022f3b4419d4be54d714c37107"
  },
  {
    "url": "assets/js/31.347e7c5e.js",
    "revision": "a1ba62b3329d7eaa75c0450291202970"
  },
  {
    "url": "assets/js/32.07bd8b1f.js",
    "revision": "ce7999869bfc162267dc00a93312ca3e"
  },
  {
    "url": "assets/js/33.a1fb46c4.js",
    "revision": "cfb6a54f1eb10a2da18dfce27f5549d8"
  },
  {
    "url": "assets/js/34.38922f71.js",
    "revision": "78e21f662bc69ffc6730c284bdb1564d"
  },
  {
    "url": "assets/js/35.d3dc609a.js",
    "revision": "125c93c5a43c0c9a7bacb73aac6f0725"
  },
  {
    "url": "assets/js/36.2599aeea.js",
    "revision": "19d0514d073be886be70223d18591ad0"
  },
  {
    "url": "assets/js/37.a25f4610.js",
    "revision": "cb3dba66c0378dfb930c99f51f056ce2"
  },
  {
    "url": "assets/js/38.a629bcb9.js",
    "revision": "d8db199cee9ad362a30c17c58308a61b"
  },
  {
    "url": "assets/js/39.ae36f444.js",
    "revision": "46c20fd34cae0c6a547edb94cd3bba7f"
  },
  {
    "url": "assets/js/4.8ab7218e.js",
    "revision": "d8d81311c7dbee3e20f188e904ce2ef1"
  },
  {
    "url": "assets/js/40.f9d91ac0.js",
    "revision": "c33f1908308f3dc568871cf599d6778d"
  },
  {
    "url": "assets/js/41.92368268.js",
    "revision": "433cc8bf1098dfd6b100202030921f07"
  },
  {
    "url": "assets/js/42.d19584c5.js",
    "revision": "7d08c8717d730bd15cb87a12a9f51649"
  },
  {
    "url": "assets/js/43.02e3f2fd.js",
    "revision": "6fd23f338da0e1eb90b317de88e05039"
  },
  {
    "url": "assets/js/44.5f24cdec.js",
    "revision": "15d83006f46780fcdeb648b301f210cf"
  },
  {
    "url": "assets/js/45.bfe4f07e.js",
    "revision": "993f1e7041a676cc3bf896e0f2da5e65"
  },
  {
    "url": "assets/js/46.e89401db.js",
    "revision": "cabaa7c46d6305f443f574ffae4075bc"
  },
  {
    "url": "assets/js/47.1d6e9044.js",
    "revision": "9674d086eb81d0e4d9889d1fdc99d37f"
  },
  {
    "url": "assets/js/48.ceaf0e00.js",
    "revision": "c0a9db772d5cebb55f95fc3d897bb881"
  },
  {
    "url": "assets/js/49.f8d773a6.js",
    "revision": "d60638e50914c9db2fec55eccdfa32d2"
  },
  {
    "url": "assets/js/5.2f70b50c.js",
    "revision": "7cba73b3683081274fac9dde98090d57"
  },
  {
    "url": "assets/js/50.0795c7fe.js",
    "revision": "fe820d5426cf24ccef2daf9ecf66254c"
  },
  {
    "url": "assets/js/51.18adcaa8.js",
    "revision": "c0a2235a8a014d86dd00ed17f73a3355"
  },
  {
    "url": "assets/js/52.9ff34f55.js",
    "revision": "eb7336f676a38eb5e4abb33fb550d0a0"
  },
  {
    "url": "assets/js/53.fb4881f3.js",
    "revision": "eaa3eae59f27ab9f87c53ebcb1567206"
  },
  {
    "url": "assets/js/54.0769a465.js",
    "revision": "6a530aa452e9941b59eca4998bf90157"
  },
  {
    "url": "assets/js/55.bf8aaf67.js",
    "revision": "aa81e8cffd9807545d9a23724cd8f91a"
  },
  {
    "url": "assets/js/56.ed4e39db.js",
    "revision": "915f3c0321671833f9730825b6e892fb"
  },
  {
    "url": "assets/js/57.75c53b4c.js",
    "revision": "790e5c9ad4406372ae41a1a65f828631"
  },
  {
    "url": "assets/js/58.b6a71288.js",
    "revision": "8bf60f6edcf409ffc3684d9267815f5a"
  },
  {
    "url": "assets/js/59.37ac0992.js",
    "revision": "df2c5332b9a0df4a26ee87d05e5a6675"
  },
  {
    "url": "assets/js/6.5646b066.js",
    "revision": "f1e02f2311584c65b8e0222f9a26d8e6"
  },
  {
    "url": "assets/js/60.010e3f10.js",
    "revision": "d1633b8120dc00a08c0bb914f4166ea1"
  },
  {
    "url": "assets/js/61.46943d9c.js",
    "revision": "061c80c308415d1e7023527498861421"
  },
  {
    "url": "assets/js/62.1eeff2cf.js",
    "revision": "f6bb1fee0df516c153ab560083ae0bf7"
  },
  {
    "url": "assets/js/63.4891ad27.js",
    "revision": "d0e282c85c0094552181a60e38f5fd60"
  },
  {
    "url": "assets/js/64.4509f876.js",
    "revision": "1e99d3017c08e9a6938e9d2551679cd6"
  },
  {
    "url": "assets/js/65.1f8a46c7.js",
    "revision": "3cd79f6848c04521d6ab93831d9986a8"
  },
  {
    "url": "assets/js/66.42a716fd.js",
    "revision": "d8b88f7a13e3e0fce430415773cd4804"
  },
  {
    "url": "assets/js/67.68e88676.js",
    "revision": "9b77c4a1661c25ecb16e4ba77def8bb9"
  },
  {
    "url": "assets/js/68.ebfe9aa5.js",
    "revision": "d44af01b062625c9b6c77fd9d6c87c39"
  },
  {
    "url": "assets/js/69.979ce7f5.js",
    "revision": "4d3f8ef16fd9dc750190a56ac0f26624"
  },
  {
    "url": "assets/js/7.11a556a2.js",
    "revision": "b95bb024fd8939d3904717a0eadfd5e3"
  },
  {
    "url": "assets/js/70.83df694f.js",
    "revision": "60b92feeff55470a668d68636e031520"
  },
  {
    "url": "assets/js/71.69f5b9f2.js",
    "revision": "a96cbf13424f243f0c4ae75f852accf2"
  },
  {
    "url": "assets/js/72.dba08485.js",
    "revision": "85a90b25f816b8cec7978b0f32e787f8"
  },
  {
    "url": "assets/js/73.b58eee4c.js",
    "revision": "868eeccd083a6fe2af97af4d16ede037"
  },
  {
    "url": "assets/js/74.6315bedf.js",
    "revision": "d771afbeb92650a30915c105032c4994"
  },
  {
    "url": "assets/js/75.0169ec4c.js",
    "revision": "a125922d8b8c40500525bc8264f2c3bc"
  },
  {
    "url": "assets/js/76.41bfebdb.js",
    "revision": "2de3c18ff6a6c6f0d9b6f77e6590d38e"
  },
  {
    "url": "assets/js/77.5da109c6.js",
    "revision": "7555ce0592cb95667822c59acde397aa"
  },
  {
    "url": "assets/js/78.67b7d02a.js",
    "revision": "c1c55ccaba3ad8e164dbbd1eab4dd606"
  },
  {
    "url": "assets/js/79.3e1ef4a2.js",
    "revision": "6cc78e82fcc2a6603947792977d08674"
  },
  {
    "url": "assets/js/8.88eeb90f.js",
    "revision": "d57509ed8e87879c79d67858e8484f75"
  },
  {
    "url": "assets/js/80.b5c23215.js",
    "revision": "a375298629dbe5e29cd2194149d15641"
  },
  {
    "url": "assets/js/81.dbe96bb3.js",
    "revision": "89998ea3d72277fdb755c34812d017fc"
  },
  {
    "url": "assets/js/82.278d3719.js",
    "revision": "3999500893dc9e43188573bf8f2a1da8"
  },
  {
    "url": "assets/js/83.f24418db.js",
    "revision": "da67021809c73034ad7f180915a8a4ec"
  },
  {
    "url": "assets/js/84.183cc42d.js",
    "revision": "c27b38051699cef946995b8aea059c43"
  },
  {
    "url": "assets/js/85.a6aa7d31.js",
    "revision": "e3a888dd30f901c57d5960e532c48bde"
  },
  {
    "url": "assets/js/86.701ef868.js",
    "revision": "d8521fb9fdc3ad5947b521bd4aea2a6b"
  },
  {
    "url": "assets/js/9.42114d35.js",
    "revision": "6575060cf4bbea3cd5cf1567695b28ba"
  },
  {
    "url": "assets/js/app.b185ebd1.js",
    "revision": "3985b88bbf41fedc7af8dc25e1cab734"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "cb8ec468c61795939bab9b19824cd749"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "85e2f15634d8b68eeb5ad5e0e2747ff2"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "6387ead26455da43c8fa34beb6459a54"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "c4a5402a56b5b130e437580760cd6d02"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "ff9d2e07ffa8e80842de60fba4167dfb"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "c76d5de854b430f0ff0812b265dcec08"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "ffbc63ce77bf5dbbb284424920880b4a"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "df9ebdc53e1cdd150fb8bb8b95206615"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "8961a01da3a5476a9a70bbcf19d0592e"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "759f2fe7953f0292ea399e8416d8062d"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "3ab37313ad2198bc25ba571fb663dc97"
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
    "revision": "67601cce7a2e4105a159727105a1453c"
  },
  {
    "url": "img/Myself/timeWaster.png",
    "revision": "c113962ff19788d6ab5503dfda70244c"
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
    "revision": "a3222ff9d64b6586b8f50ea19a6754cc"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "87f63a20f5715064f361f197bf905c8b"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "d8c5571336222009b73295406a786c39"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "dd18d832dd5d980411bfb5ed3d991339"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "2932eaabc0b8567a13622aea5551ff47"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "d3717be73e5d480081dc5ad6c76b06fd"
  },
  {
    "url": "Store/index.html",
    "revision": "af021db0a15aef21eaaf646547c89b63"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "6eb2e9b8ce342972eee13d1c25547175"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "5c80ddac9c72de7b5bec7cf9857cba70"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "3b9b244090d72db6d984665a1c59b9e2"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "aca207469b381ecb3e0f5f1c6015836f"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "c5b6736699512f74b3c96b344dc20001"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "01cceb7fd2bcc7d40336d973acfd5d33"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "bf36a522b65e2fd7402c0bbd99d38e6f"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "859fab2b304cd0dbe4e563517d6f02a6"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "a0d1f860d4b4f327b14c97386273ac12"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "4bb0410846ed000466b852ecc5e2740f"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "8f1b813498e46a1eb79914bb65321f23"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "12a261ac80c6cbc4e2c1fdbc413b1afe"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "407725ee8a79f4e4812728d3ebf726dc"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "8f2825c56962bdcf4f964b8f7ae5a80c"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "412e3e0c4764ee1f6ecd72d945f721e2"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "b38f040cf07e34da3aefddc1e122d9f9"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "754ca505561d3f269979d5fd9625abf5"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "3258fcf23dfce1f2484d43ab08fef6f0"
  },
  {
    "url": "Thought/index.html",
    "revision": "48bbdd7ddc907f0e46cbdc44d822dc90"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "94812a644ce14ea6046996a7ae6e71db"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "7f74fa77a615a3504611c79a0905f805"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "f4045b4dff81c4e78a9cd32774f6abf1"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "6c44e9b98e5e2a913c6da323cc607d71"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "add80463c6eef7dabcf1e9032b6080d7"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "a4ae9efb1361c43933ea078e1442b8e9"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "4eae22df894998a3e1d64793612d9878"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "cf56fc41d1123becb6467b43c3ced245"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "91bcb64ffdf8b6b78592775062e7dce8"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "9f00cd6d8fc6cbdb71fe181da7d500cd"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "b2fd2be5f9036ed743deb1d5cd2e2041"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "f6e62277e0db5f8177b5a2519a288eb4"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "562db91b0e683ff74bcc66107b0a6365"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "9a6fe003504cf94e507d52346ba5e6d1"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "7df577be7fa1f77a3918eeb1bf4031c8"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "5b5c126dfc0946612bf69c73421bae72"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "3dfb769d56a8e2402cbde00abb1dc60d"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "afc454001224163ff57e2b48ab6ab5a9"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "4b2bd566f7efb99ab5c59aeb255297d4"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "aaa6086e3bd8cef282edfb4b316ab93a"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "5b54655aa16bda5ebce82367bd7b12db"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "311abd853d5a6d6e0f7c0556014cd9a1"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "383c99e8cbef9d5b7bc96bbf4537fce9"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "d93b7d05c615031e5dbfa37f1ebabca7"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "ca0c63fc875880c1ec93b4532372a56a"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "60ee958243294b3df9fe3dfe05ed6e29"
  },
  {
    "url": "Thought/Words/W002.html",
    "revision": "ee2656cdff751c3c45c8ab47355d0fb2"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "b5ab464ed631c8f85b672a87b31bd100"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "dfefca3a120f939228e13937c6a9e4a2"
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
