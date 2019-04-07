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
    "revision": "8306ad5d66773ff2bb70d3a1636277bf"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "3abff42dbe0ebd47c360bdf34d93c23d"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "a50928a67d89d39020db200d9e6506c5"
  },
  {
    "url": "Another/Project.html",
    "revision": "222268a510e3dde0176949f36a5b206c"
  },
  {
    "url": "Another/Review.html",
    "revision": "c3fc9ea10cc60beaac63430fc09f53c0"
  },
  {
    "url": "assets/css/0.styles.bcc9e5c1.css",
    "revision": "99c64a9fc7fa6ba430a006dd96f87f1d"
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
    "url": "assets/js/10.b92abb37.js",
    "revision": "c8f8adee718d3aa40e4ed8e22389569f"
  },
  {
    "url": "assets/js/11.a743bcc8.js",
    "revision": "ffd3d5deacbaa945bea4a8ad84db5d6e"
  },
  {
    "url": "assets/js/12.e9450d25.js",
    "revision": "ede1c010de316b87ec8639ea368dc2d2"
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
    "url": "assets/js/16.f3e389c1.js",
    "revision": "e65f2c7f6f8f349477bd2290b13c75ed"
  },
  {
    "url": "assets/js/17.91d4cd85.js",
    "revision": "4213bcd4c7ee5b7d7c0d89ea8601be45"
  },
  {
    "url": "assets/js/18.41cbe85a.js",
    "revision": "0f8e91ea40eada93041b041748aab628"
  },
  {
    "url": "assets/js/19.80e12cbb.js",
    "revision": "f0a4907b68617f3c5fa20e61bee7acbd"
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
    "url": "assets/js/22.e47be593.js",
    "revision": "df661e359625213ce82fa976dafce424"
  },
  {
    "url": "assets/js/23.bc7e82f5.js",
    "revision": "025a08e8201a8678c9b1c9a69f0d9d1c"
  },
  {
    "url": "assets/js/24.c07c87b3.js",
    "revision": "9eecdb5e74f211208859e12641badf38"
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
    "url": "assets/js/28.d01b119f.js",
    "revision": "ff0cad51014117e9402cfb3b886b4c9e"
  },
  {
    "url": "assets/js/29.e9eee595.js",
    "revision": "c1b942e803cb85dc011df63e2a984e36"
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
    "url": "assets/js/31.ec1e3136.js",
    "revision": "8c6440b2d1236c09728effe2754db248"
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
    "url": "assets/js/35.8da6178e.js",
    "revision": "a38fe3876c2b85b86c3180931a979c0b"
  },
  {
    "url": "assets/js/36.00def05b.js",
    "revision": "37fdc474d8035e301665033da00c3172"
  },
  {
    "url": "assets/js/37.5ed86b20.js",
    "revision": "93d50725724cf935a9d89765911c08f9"
  },
  {
    "url": "assets/js/38.698681bc.js",
    "revision": "9095d8028a2afdf0d695a8c2ea5e7872"
  },
  {
    "url": "assets/js/39.57cd4f19.js",
    "revision": "07d35ca31636878fdbc3d69da3f8a1c1"
  },
  {
    "url": "assets/js/4.6a2bf5de.js",
    "revision": "96209246f0f1216b579221b7e13d6a8d"
  },
  {
    "url": "assets/js/40.79840eb9.js",
    "revision": "4630dfe24a5b3bd8937dcba5073240ed"
  },
  {
    "url": "assets/js/41.3a955fe9.js",
    "revision": "329077f6a8775fb8e673f0783120ceec"
  },
  {
    "url": "assets/js/42.ec944ae4.js",
    "revision": "262340068394df5fff867b255f93f9dc"
  },
  {
    "url": "assets/js/43.4b93d710.js",
    "revision": "18387039fa68a85869a3f78528d813e4"
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
    "url": "assets/js/6.0272e521.js",
    "revision": "8183af838bc60b594a331ff66eaafd2f"
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
    "url": "assets/js/7.f55036e4.js",
    "revision": "e8afe9746947bb09094dcbc3809f7a1a"
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
    "url": "assets/js/74.bc995834.js",
    "revision": "c8f0d9a43a78d069212ac1621333edba"
  },
  {
    "url": "assets/js/75.63fec291.js",
    "revision": "6597dfc48b5067607aa8033b1a5d553e"
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
    "url": "assets/js/9.8ce2a9be.js",
    "revision": "01653a71682003a75606f3aee061531b"
  },
  {
    "url": "assets/js/app.cd060979.js",
    "revision": "e8cd19c52eaf5814c757e6222c386a59"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "feb076e2d182814ee78eeabf256469fd"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "e2dadc9cd68163c1a128199bb8b4ed2a"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "5fbb6365bfb7dff9a3583af60d0a1ea3"
  },
  {
    "url": "FAQ/Console/A003.html",
    "revision": "b2a9172b1e24f534f58cb1864e7d26fb"
  },
  {
    "url": "FAQ/Console/A004.html",
    "revision": "2b59e329133f8b77c89490a1ed174576"
  },
  {
    "url": "FAQ/Console/A005.html",
    "revision": "e94e92a85b7e5a82ef11ea571ec7fa07"
  },
  {
    "url": "FAQ/Console/A006.html",
    "revision": "b34907459f5324e7765f38941b59b448"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "ab68d3596adc61120083f068018f786e"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "f8527736f6e49881695d0563e427d2a4"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "03eab0928bfbd15c1c9fac67a997f407"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "cdc02ef30641b4fc88bbcdd9ef04643a"
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
    "revision": "781317ad25d5e6e8772f299efcb22184"
  },
  {
    "url": "Store/Apps/DownDoors.html",
    "revision": "8b8b48780b112ec11687c0971fed5f50"
  },
  {
    "url": "Store/Apps/OwnTest.html",
    "revision": "ac7403be3c9406f6fe5dad119cdf5595"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "0129c0e1ceffd6df12f835753ed54556"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "d631d20ed053e994b29d4e4589e4cd57"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "5d201350b9b9811f8ce4f4ce58e2bf83"
  },
  {
    "url": "Store/index.html",
    "revision": "528d68e61a401f546437a20cdc22122e"
  },
  {
    "url": "Store/Media/Anime/Animed.html",
    "revision": "1c667fc2fcfdd3feab49c582af3c023a"
  },
  {
    "url": "Store/Media/Anime/AnimeHome.html",
    "revision": "44b3e28985f2a34914d47355741aa478"
  },
  {
    "url": "Store/Media/Anime/AnimeLay.html",
    "revision": "96f3bc085f16b73d4741fda86cd72d96"
  },
  {
    "url": "Store/Media/Anime/AnimeSec.html",
    "revision": "ba261f929684cb78d8b98e41b8618e9d"
  },
  {
    "url": "Store/Media/Anime/AnimeWill.html",
    "revision": "541b01794c6e7e45dd1289f5626bcabb"
  },
  {
    "url": "Store/Media/Anime/Animing.html",
    "revision": "051b1a97fe0ad83554065f76bd77d4c2"
  },
  {
    "url": "Store/Media/Books/Booked.html",
    "revision": "9c8cc5d00a38340b063023ad760205be"
  },
  {
    "url": "Store/Media/Books/Booking.html",
    "revision": "2f55d17c7476b80b39fcf33ab8083958"
  },
  {
    "url": "Store/Media/Books/BookLay.html",
    "revision": "87bc68c4b838b6e1411d2bbee62af970"
  },
  {
    "url": "Store/Media/Books/BookSec.html",
    "revision": "1ede59071e7d59bfad7e911f5e4f6c35"
  },
  {
    "url": "Store/Media/Books/BooksHome.html",
    "revision": "eabaa0f6e5c09b569bc5a91e89538bb9"
  },
  {
    "url": "Store/Media/Books/BookWill.html",
    "revision": "e3cfbeb96b2d51280d3ae1e1f2e6023f"
  },
  {
    "url": "Store/Media/Films/Filmed.html",
    "revision": "6a2915df272863a25117533d46466c2e"
  },
  {
    "url": "Store/Media/Films/Filming.html",
    "revision": "f44faf50551ef7904bae74eda5e81a7f"
  },
  {
    "url": "Store/Media/Films/FilmLay.html",
    "revision": "8d5acff4b5489fcb07b0f4c1a0ef92a2"
  },
  {
    "url": "Store/Media/Films/FilmSec.html",
    "revision": "86088f44451384c9131d00461ca22db7"
  },
  {
    "url": "Store/Media/Films/FilmsHome.html",
    "revision": "7f9959e44f1401533e72f3e8ee7d34ca"
  },
  {
    "url": "Store/Media/Films/FilmWill.html",
    "revision": "130a68e884553eeb34bc13cf23a7b9f7"
  },
  {
    "url": "Thought/index.html",
    "revision": "b229286508364eb7417005f306264514"
  },
  {
    "url": "Thought/Novels/Named/index.html",
    "revision": "bed8ae5deeb6705314ff3d11f45fae96"
  },
  {
    "url": "Thought/Novels/Named/named_s1_001.html",
    "revision": "ea93e30eb66db6cc6319ee25589b07a9"
  },
  {
    "url": "Thought/Novels/Named/named_s1_002.html",
    "revision": "d2a234d7a4f458aa8128c602e4dd393f"
  },
  {
    "url": "Thought/Novels/Named/named_s1_003.html",
    "revision": "65d7b42f9224cd002c4daa1d9e7f81e9"
  },
  {
    "url": "Thought/Novels/Named/named_s1_004.html",
    "revision": "1a512aace9ea4171e07138984961bbbe"
  },
  {
    "url": "Thought/Novels/Named/named_s1_005.html",
    "revision": "d23c52d0c09811aeb9ed1ab855b92fd9"
  },
  {
    "url": "Thought/Novels/Named/named_s1_006.html",
    "revision": "8cf31003640358bf7ceed2a23a3c7101"
  },
  {
    "url": "Thought/Novels/Named/named_s1_007.html",
    "revision": "ee1fede9624c6920ce7718ad776d1892"
  },
  {
    "url": "Thought/Novels/Named/named_s1_008.html",
    "revision": "c3552ec905edd6b2d7bfc524d9b47674"
  },
  {
    "url": "Thought/Novels/Named/named_s1_009.html",
    "revision": "8ef14d5a1e70c8dc76e5a6feabf3064e"
  },
  {
    "url": "Thought/Novels/Named/named_s1_010.html",
    "revision": "0e82b8359ede885a83e753817ca0fb79"
  },
  {
    "url": "Thought/Novels/Named/named_s1_011.html",
    "revision": "77e9462c64f623cc9ed97adb0379969a"
  },
  {
    "url": "Thought/Novels/Named/named_s1_012.html",
    "revision": "af4f0285063fc8ff2411ec0a8b5d0419"
  },
  {
    "url": "Thought/Novels/Named/named_s1_013.html",
    "revision": "44b818d985f16cefc4f806e0f960ef26"
  },
  {
    "url": "Thought/Novels/Named/named_s1_014.html",
    "revision": "f0d19076efc53d245a5a9a0fb8f24dec"
  },
  {
    "url": "Thought/Novels/Named/named_s1_015.html",
    "revision": "33228a3a1e8d21c4c1bec7eb2a281c88"
  },
  {
    "url": "Thought/Novels/Named/named_s1_016.html",
    "revision": "99bea36a2a0bb33e5e4663e1a917bfc0"
  },
  {
    "url": "Thought/Novels/Named/named_s1_017.html",
    "revision": "af586a1a1ef335711cf1ab12e406ba19"
  },
  {
    "url": "Thought/Novels/Named/named_s1_018.html",
    "revision": "f8fcce3f2a44cb9b16bb4b1c29b1d9dc"
  },
  {
    "url": "Thought/Novels/Named/named_s1_019.html",
    "revision": "7b4afef21134314ac032b8db864c8754"
  },
  {
    "url": "Thought/Novels/Named/named_s1_020.html",
    "revision": "113a0ec19c177a05f6979d1ccdb7c9ee"
  },
  {
    "url": "Thought/TheWord/AmericanGods.html",
    "revision": "9688b576f5865bfffe612daf7362e2ef"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "98c3644200b2ba3b35a95447300a25e0"
  },
  {
    "url": "Thought/TheWord/OneWord.html",
    "revision": "875be0f3b73c6dbc8aa3057d5d590d03"
  },
  {
    "url": "Thought/Travels/beiPing.html",
    "revision": "3f34e86e7f54d7e658bf0f6bf5b68e6c"
  },
  {
    "url": "Thought/Words/W001.html",
    "revision": "adab278c675b579452b2ea76e1934b87"
  },
  {
    "url": "Thought/YearReview/2018.html",
    "revision": "b09818ed89d67d518d68c7abe6d783f6"
  },
  {
    "url": "Thought/YearReview/2019.html",
    "revision": "806f28fd05533eb17b7c3f69272067b1"
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
