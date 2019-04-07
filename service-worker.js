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
    "revision": "53300f8765a12d820cd48f1a4e2c8dae"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "6fbce6a8e2fac51056a41a3264e5f09b"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "3dd0512cc1f0d13150520ad8166a8854"
  },
  {
    "url": "Another/Project.html",
    "revision": "e7ffce2d3023960ad00cca6e3916e875"
  },
  {
    "url": "Another/Review.html",
    "revision": "a6cb0a01b19e49fefbefdbb8adbba2fa"
  },
  {
    "url": "assets/css/0.styles.6d958762.css",
    "revision": "30e831e237126e91ffc8bb74dfa338da"
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
    "url": "assets/js/10.b05e92a0.js",
    "revision": "73a75f4385d449527c4b3de654361070"
  },
  {
    "url": "assets/js/11.a72d3378.js",
    "revision": "22089bf3fdc8300744220818c1998d81"
  },
  {
    "url": "assets/js/12.5e048cd4.js",
    "revision": "62fe794fdd52d99746595c8120b5eb4a"
  },
  {
    "url": "assets/js/13.3ba57e47.js",
    "revision": "b6e3ab26036e3311d7f3c64310a8580e"
  },
  {
    "url": "assets/js/14.9febac30.js",
    "revision": "061d6c5dfeb9bd98e3595ae7f4e560e3"
  },
  {
    "url": "assets/js/15.012db5a3.js",
    "revision": "b968b864828225c544009d97ef09e1dd"
  },
  {
    "url": "assets/js/16.0cbbe009.js",
    "revision": "b414197a6a30adeac87e5e2f8620d881"
  },
  {
    "url": "assets/js/17.78df5540.js",
    "revision": "ee047f0ddc1a7f9dc138a6ac8febb4ae"
  },
  {
    "url": "assets/js/18.1833ba59.js",
    "revision": "f84cd539da00d1b80e8bee85f53f57b9"
  },
  {
    "url": "assets/js/19.ae5670b4.js",
    "revision": "c0a41898947ff8becbdf26292abe4d14"
  },
  {
    "url": "assets/js/2.998b0638.js",
    "revision": "ec60662e02a6013413ce05d4c5a32e95"
  },
  {
    "url": "assets/js/20.acf1633c.js",
    "revision": "59d8100dea2564748ef6ddb4f23bf544"
  },
  {
    "url": "assets/js/21.e0a18372.js",
    "revision": "f52b1e06266724b6fd048865a6da3f36"
  },
  {
    "url": "assets/js/22.c267e708.js",
    "revision": "f0d07720863eda58cf9b309b0f04102c"
  },
  {
    "url": "assets/js/23.18b50793.js",
    "revision": "4c62040cfdcc677943536d93a4a3b840"
  },
  {
    "url": "assets/js/24.2e67321a.js",
    "revision": "7cd3b7604710d886f7d74b8d792ef1c9"
  },
  {
    "url": "assets/js/25.a88a8cb5.js",
    "revision": "f4641e36a8f51706a9721495aa12a261"
  },
  {
    "url": "assets/js/26.6df17bd1.js",
    "revision": "ba1b73246012f8e850d550a24fcf5ecb"
  },
  {
    "url": "assets/js/27.eb4beda6.js",
    "revision": "99ccc199c44c3bb5f2db549a13bb4a40"
  },
  {
    "url": "assets/js/28.5cf47366.js",
    "revision": "1a322a150b954806965ffff3aeb69342"
  },
  {
    "url": "assets/js/29.f95ebe9f.js",
    "revision": "f2c4641d2d57d37c62060f055db2121f"
  },
  {
    "url": "assets/js/3.ef664011.js",
    "revision": "784f2c1bbd25bccbc528fa984a346d99"
  },
  {
    "url": "assets/js/30.dd3bf3d9.js",
    "revision": "b92b1da20f7d595bc98cc4449dad18c9"
  },
  {
    "url": "assets/js/31.e34e6605.js",
    "revision": "865f5e9b9bcd51d16301b88ffedb9997"
  },
  {
    "url": "assets/js/32.a55bb8c3.js",
    "revision": "aa4b8c8908aaa47a799d2a2b33bda686"
  },
  {
    "url": "assets/js/33.5b76c9af.js",
    "revision": "7f05f18eabeac16177448211415b0958"
  },
  {
    "url": "assets/js/34.daa90c0d.js",
    "revision": "731e957a6429c58c2752b5ef95c66b11"
  },
  {
    "url": "assets/js/35.c6211f77.js",
    "revision": "9b4897a6c0577d7bd34fd689eea051b8"
  },
  {
    "url": "assets/js/36.2d2cdf31.js",
    "revision": "a741f3497f24fb8c2ba1127955e2de25"
  },
  {
    "url": "assets/js/37.c3e14978.js",
    "revision": "661226a06307f65aeba0a86559830001"
  },
  {
    "url": "assets/js/38.789b27f4.js",
    "revision": "3898b57ba7207e531a15e2c5fc50800c"
  },
  {
    "url": "assets/js/39.57cd4f19.js",
    "revision": "07d35ca31636878fdbc3d69da3f8a1c1"
  },
  {
    "url": "assets/js/4.e24e447b.js",
    "revision": "fdfec2de0c492075c89c0b588122916e"
  },
  {
    "url": "assets/js/40.a4a08155.js",
    "revision": "cd0f45126117a333051b8b2d734eb1f0"
  },
  {
    "url": "assets/js/41.3c54fe6e.js",
    "revision": "ed6a85cd2317eee436e1c9d10c27ee5a"
  },
  {
    "url": "assets/js/42.b1708d5b.js",
    "revision": "98e1cdf760c02b5a4a0f7935b77c97f3"
  },
  {
    "url": "assets/js/43.61b8d798.js",
    "revision": "d38a0d731f2bb963ca1d6e3c9e918633"
  },
  {
    "url": "assets/js/44.68071396.js",
    "revision": "03cd605bb9a7068d4f71f48b5e266629"
  },
  {
    "url": "assets/js/45.356b7ec0.js",
    "revision": "9ae53776e437a0672c12828e91da3ce4"
  },
  {
    "url": "assets/js/46.91e4f783.js",
    "revision": "6664c0fbf967bcdc945302bd5735fef8"
  },
  {
    "url": "assets/js/47.1b6eff48.js",
    "revision": "d14e72a245d8f68345fe1c48492faef5"
  },
  {
    "url": "assets/js/48.38fab8cc.js",
    "revision": "2d71e9ca244c975f6d44ad407d010864"
  },
  {
    "url": "assets/js/49.dfc1ce6c.js",
    "revision": "2537ff947d3adf3781035841dfbc402e"
  },
  {
    "url": "assets/js/5.fac00b9d.js",
    "revision": "c1d6a7076b4c2a407fe145eb2abcbf3c"
  },
  {
    "url": "assets/js/50.18664a5d.js",
    "revision": "d2d842411169421258b562a1bc0fc322"
  },
  {
    "url": "assets/js/51.0782d082.js",
    "revision": "5afcc7e70253bc6e959201b5c213a5d6"
  },
  {
    "url": "assets/js/52.8d48e1dd.js",
    "revision": "1316847e85681ca8d6bb87ff6e819e57"
  },
  {
    "url": "assets/js/53.cb59cf1b.js",
    "revision": "70952dc6961ae2cdd46bde6f92c62572"
  },
  {
    "url": "assets/js/54.e90d16d6.js",
    "revision": "7b31774f20167081f36efa4559d63b20"
  },
  {
    "url": "assets/js/55.1bd87ab1.js",
    "revision": "971a12e6ebee424726b66d41a2aba0b8"
  },
  {
    "url": "assets/js/56.b3f7e6d2.js",
    "revision": "782bfb4686b3ab7dd9bcd7b10c679b29"
  },
  {
    "url": "assets/js/57.92a3038a.js",
    "revision": "5b34caa460507b6abdeb27212ccf7d43"
  },
  {
    "url": "assets/js/58.3bc1e821.js",
    "revision": "56664617383c53f408085354b2e28b73"
  },
  {
    "url": "assets/js/59.8f87c5e5.js",
    "revision": "356e035ef72b33c640e79c34d1dda047"
  },
  {
    "url": "assets/js/6.47f7a8cd.js",
    "revision": "7bf0fcaa597932f46e783e7022e4a01c"
  },
  {
    "url": "assets/js/60.3efd7501.js",
    "revision": "2e5a8e627b0a8b08b1cd9001921c1b91"
  },
  {
    "url": "assets/js/61.57fb1251.js",
    "revision": "a35de61cf8f31a4ea15a09c7f78ef659"
  },
  {
    "url": "assets/js/62.c0f44219.js",
    "revision": "1bca961be934121e376539ce4af6f075"
  },
  {
    "url": "assets/js/63.823a7c7c.js",
    "revision": "18253703f173925fddfa81a75c252a62"
  },
  {
    "url": "assets/js/64.7c39ac1b.js",
    "revision": "e15ff5e5a6cef4ab66967ef042ad59db"
  },
  {
    "url": "assets/js/65.b86e7447.js",
    "revision": "afa38d9855ff5f2e7a570d60708bf650"
  },
  {
    "url": "assets/js/66.04c45aca.js",
    "revision": "505f4f0b3e6d790f0ad6e675030a8d0a"
  },
  {
    "url": "assets/js/67.2c5e60bb.js",
    "revision": "6687bd0bd0cb9f3a3a0abebb3a246c5c"
  },
  {
    "url": "assets/js/68.39d30ce5.js",
    "revision": "a8cf47ef9b2ae5f0c065417b285df5fd"
  },
  {
    "url": "assets/js/69.2bcbd100.js",
    "revision": "5ce9559f715ca71d1c2248453818f294"
  },
  {
    "url": "assets/js/7.068fc8a5.js",
    "revision": "ffd6296ec8d66f8432bb2174ef7e5526"
  },
  {
    "url": "assets/js/70.e12c08b9.js",
    "revision": "2b16142e9152ed47040a83210fb6e8ea"
  },
  {
    "url": "assets/js/71.566ac7c1.js",
    "revision": "3eb01f035ac25878e57760ca71d84331"
  },
  {
    "url": "assets/js/72.f4169e87.js",
    "revision": "0e52fedcaf92f184693f98e6a239b254"
  },
  {
    "url": "assets/js/73.bfb5f37d.js",
    "revision": "bbc6715f0ab738354018d1e03ab68ef3"
  },
  {
    "url": "assets/js/74.8d94882c.js",
    "revision": "79c609d1b1b49857574c9ac92ea0ea06"
  },
  {
    "url": "assets/js/75.b9b39d9e.js",
    "revision": "0335753d28a15a2ff1f1331c68020d60"
  },
  {
    "url": "assets/js/76.c10ec4a8.js",
    "revision": "a88b06f3da7e42fb4ddf5fcd12a4d529"
  },
  {
    "url": "assets/js/77.3a14e1e7.js",
    "revision": "d9d46b0cc55bce9d509962a031b25794"
  },
  {
    "url": "assets/js/78.47485021.js",
    "revision": "4b8666ee2a4d9e4b3537032a560d850a"
  },
  {
    "url": "assets/js/79.25417fec.js",
    "revision": "b5be0d5983552e69d4d3f779f19ef6f2"
  },
  {
    "url": "assets/js/8.8bca931c.js",
    "revision": "f5f12970631bf2431fd5b47acf185367"
  },
  {
    "url": "assets/js/80.12d7df9f.js",
    "revision": "b9f7a365dc8cb76891f32c7de4c0f756"
  },
  {
    "url": "assets/js/81.4630672c.js",
    "revision": "b7469f848f24de4082a478ce205090a6"
  },
  {
    "url": "assets/js/82.635f8670.js",
    "revision": "e604ec214d64d0cf7afb24baa7519009"
  },
  {
    "url": "assets/js/9.f917301d.js",
    "revision": "6f9f29576fc83292eef849dec57b9dc0"
  },
  {
    "url": "assets/js/app.0e1a7a1e.js",
    "revision": "7e920b6b716f485a2d8ee2abea85ec15"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "d9a135e814115dbda7316f6b026ed243"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "2960a119d6b3091fd46715e5c055a103"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "2e267593d9b5a91a553c9206eded40b2"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "1fb533b191399c2b045f0d2abee43cac"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "6154b432e58c8da0f4536d67a0206206"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "ae2bdf27f172b7694d4c6866c0a1c941"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "53dc2ec9e574e860803de02a14cc85eb"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "53b7a942d6c302ca1fdae09d2e2a4f79"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "249149d5a7a204bfcb3fedc294c560e4"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "9f1ceead727a302b7dd2a29df6e94515"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "54039e7c3e2651f10621e12391550afc"
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
    "url": "img/modelLeft.jpg",
    "revision": "3a975195084b883117ec86d4262eb0a9"
  },
  {
    "url": "img/modelRight.jpg",
    "revision": "5b58ce3e42b0454dd42746471d22e42e"
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
    "revision": "6ae677f5a915df9f4a9f71d24ca22782"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "d6422385ea1b850d3b94da43b5ed36ad"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "2c428680afce0cd695df12ac5700a2c5"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "51601781f2cd23a50792fb4935da5330"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "055f618004e05dd65a2a0af33e2e7feb"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "8ee3f0f1dd35a3fc2efe8f4f9ebfd591"
  },
  {
    "url": "Store/index.html",
    "revision": "f201e8f32511acfa33eb04c6ebb78064"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "3eea1510dee073e908c18db8c7695f85"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "c5fb130ed90dfc055e8648fa077ed141"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "77110a0cc02d98a455f57b584c22fdaf"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "dffd8b49e8dae11cbd0593321689cac3"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "5595370309ed5b1f1a75c09253c6b4ce"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "dabb29be20c763a561c3c1e7989efe95"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "4411f4843e8f1bd5888084851fac7cf6"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "c7e8dbfe6cc59a442c7f448817af51f3"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "cfe01833c22f6e85d48ba6cea1f03cf7"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "0b0c198ff6a70dc9b5752ce4194969a7"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "df9c8fc7b3bf5cc9d33f43534f54afec"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "d9122f47cb4fde9bc43f0127e171cc76"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "c1fd8088f1252c75b322ebe63aed0df6"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "738f6b4ea710f14c889329f860f1d819"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "bebf66db3cc5cef13432184c7c84cbda"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "dae838466cf35f063caeabb778b8bc5e"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "c3cff24c3032f3d1a970d818cd3fbf28"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "b0207abfb1830ff6c224512cd16bb7b5"
  },
  {
    "url": "Thought/index.html",
    "revision": "6e8523687179cb498e53da2da0911905"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "f3aa84fe2b0d88b9e40a957fd68473df"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "a636b8a54591c78fcfabf4b666079e97"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "e41a6c14aadffaa1fd4034e76f866908"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "fb798645ffda9280bfe6e647a851208b"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "20e064cf56eb6319c806457a36f527ba"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "37380ad8ce18c33989e57a7a03a0dcdf"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "a2951d22ce6a4e454bf0425d1d3a8374"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "056968da3d26581f41a8000820dd2a0c"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "1852237704488f8240a339e25f3aff9e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "716e8f0deb64fa3c8444bfae15ea44ef"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "1c679b50ef3830f025878e27438a199d"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "8434204f3dbc9c1c76f40b798f2e24c7"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "ee700559b20cdcabf7f4f9bb9bad2b43"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "994c97f766c51bb8b23cf5010152421d"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "d9a2236ad33de2a806d9e453f2773e41"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "e741b5d0426f8c68574180ac25691d0c"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "66aef210c15bb5ab47b71fb3960386f4"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "540b0bac7763b7f8b41b491dd415db95"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "badf35a28b158333289b9e7ef15cd9af"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "3f650d2fe5ae7f2f839c6a0ad7025970"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "58f3512dcd9802d6e757d8bd0857c49e"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "6664a5136b2d8164ce4f786874719309"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "ed03a00c3ad7d8b1a8f3ed94db67b145"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "ec92a1d38151437dd3350f2d88ef4a7e"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "f25d646185378af629bffe1666bf2a85"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "62837aa0f56aaec5d6a598dfcef59d8e"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "82cd440840faad48fe5b814bddfd0ffc"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "50a7de3a843893be8711c1827623b008"
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
