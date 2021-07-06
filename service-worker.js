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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "128.png",
    "revision": "74503409d31b8770f9d863de8ac5fa07"
  },
  {
    "url": "144.png",
    "revision": "c47589d7555bb4aabf200c78bad5d95d"
  },
  {
    "url": "192.png",
    "revision": "4a23415f4eec8118dfbfedf423139f04"
  },
  {
    "url": "256.png",
    "revision": "a3b48db4db4bc0d42a2b37f71195a69b"
  },
  {
    "url": "404.html",
    "revision": "61c21c8ee258dd26c6076c476414510b"
  },
  {
    "url": "assets/css/0.styles.35c98933.css",
    "revision": "a55f5ea87c5841011dacbab0a91467a2"
  },
  {
    "url": "assets/img/1_(4)_10.f2a96407.png",
    "revision": "f2a96407f3a970fc2f821f8815b48459"
  },
  {
    "url": "assets/img/1_(4)_11.75492508.png",
    "revision": "754925088ecbeee86ae6ce8e979ea243"
  },
  {
    "url": "assets/img/1_(4)_22.69724393.png",
    "revision": "6972439310e9734210216087702b56f2"
  },
  {
    "url": "assets/img/1_(4)_8_1.737809cd.png",
    "revision": "737809cdcd56e694a368ea6918f8d146"
  },
  {
    "url": "assets/img/1_(4)_8_2.607724d5.png",
    "revision": "607724d5cb5a6120908c2cb7d7dee74d"
  },
  {
    "url": "assets/img/1_(4)_8_3.e6ac9989.png",
    "revision": "e6ac9989e883a1eb5c30c80db8269b40"
  },
  {
    "url": "assets/img/1_(5)_1.0ac24a55.png",
    "revision": "0ac24a55e61d6bcba77f263e9a2f0ec0"
  },
  {
    "url": "assets/img/1_(5)_14.6dc2cfd6.png",
    "revision": "6dc2cfd6c9201ff0818a4a91d1356f8e"
  },
  {
    "url": "assets/img/1_(5)_16.3914fa48.png",
    "revision": "3914fa484c6dd96214e7a5bb75357b59"
  },
  {
    "url": "assets/img/2_(2)_5.6e478c60.png",
    "revision": "6e478c60810e74f16c359d301ef02696"
  },
  {
    "url": "assets/img/2_(2)_7.727c60b2.png",
    "revision": "727c60b24d356c12001c8cd0ed84f811"
  },
  {
    "url": "assets/img/app.649e47ea.png",
    "revision": "649e47ead4743eacab867b254d9c6068"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/direct.534ba65d.jpg",
    "revision": "534ba65d52b6cea6e12b200dd3efb571"
  },
  {
    "url": "assets/img/files.7c808549.png",
    "revision": "7c80854982943cd1d6d7d3f910e6d964"
  },
  {
    "url": "assets/img/form.101e88a2.png",
    "revision": "101e88a22ec1fd23164832c1503552e1"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/jenkins_0.62b602ca.png",
    "revision": "62b602ca7d386aec0bd7e96c0494eedc"
  },
  {
    "url": "assets/img/jenkins_1.fb898008.png",
    "revision": "fb898008f6ea87ba1f9bb782c40bd3cc"
  },
  {
    "url": "assets/img/jenkins_2.f1e83ac9.png",
    "revision": "f1e83ac9c3be24562c3883236b7f3e7c"
  },
  {
    "url": "assets/img/jenkins_3.f3821d04.png",
    "revision": "f3821d0439401469a9aef69be2a9c253"
  },
  {
    "url": "assets/img/jenkins_4.eb1cfe6a.png",
    "revision": "eb1cfe6a341bb2df6cb0584500bb48f5"
  },
  {
    "url": "assets/img/jenkins_5.1e108e4c.png",
    "revision": "1e108e4c0494ff490be4e164971d6d4f"
  },
  {
    "url": "assets/img/postman_1.63f76ff0.png",
    "revision": "63f76ff06cc2a4f7d09fef2ce046dbd8"
  },
  {
    "url": "assets/img/process.7d797e3f.png",
    "revision": "7d797e3f23877df18c61475aefecd354"
  },
  {
    "url": "assets/img/strategy.cd93adb9.png",
    "revision": "cd93adb91c5e4948a4a7a2c5addbe471"
  },
  {
    "url": "assets/img/structure.c48d074f.png",
    "revision": "c48d074f289d0b74b4b171fe60285b6a"
  },
  {
    "url": "assets/img/topic.7009dbe9.jpg",
    "revision": "7009dbe944cb1af83d38f47a21bbc031"
  },
  {
    "url": "assets/js/1.f6a8b445.js",
    "revision": "7048b86de41895b6ab592ab5c07aacef"
  },
  {
    "url": "assets/js/10.0fc7cb11.js",
    "revision": "c8a91e32cca7445eda69f7796e9849b0"
  },
  {
    "url": "assets/js/11.7b2d510f.js",
    "revision": "0c46a4198c593c959fd38280383f323a"
  },
  {
    "url": "assets/js/12.ec622801.js",
    "revision": "acd0e526e0e2a09164a2d48ffeba9dbb"
  },
  {
    "url": "assets/js/13.ffdc0f6b.js",
    "revision": "3375381b64661492755d4d0517f3c924"
  },
  {
    "url": "assets/js/14.207558a7.js",
    "revision": "9de02e1fb8befaa2d813c01f9ef0d539"
  },
  {
    "url": "assets/js/15.25fd8871.js",
    "revision": "eef6c6485ace4e8f8e05bc504e9fece0"
  },
  {
    "url": "assets/js/16.e33a4cf8.js",
    "revision": "cd0dd280819194cf0d80c154d494ace8"
  },
  {
    "url": "assets/js/17.726128d4.js",
    "revision": "490782e5204a01b730dfd0b16f1fbc9f"
  },
  {
    "url": "assets/js/18.ccc41572.js",
    "revision": "19ee52610713e63569cf1fee0234302d"
  },
  {
    "url": "assets/js/19.4821c514.js",
    "revision": "2ea9765c90e05f2c86cf7720fd55fdb7"
  },
  {
    "url": "assets/js/20.3778cc39.js",
    "revision": "a2600445578fe267c64d9cf8f3916fb3"
  },
  {
    "url": "assets/js/21.b8f43432.js",
    "revision": "5a4e1ee842593975c41fdfca4971d31c"
  },
  {
    "url": "assets/js/22.137350de.js",
    "revision": "c34bb7871de51e7db617188b4a1dc045"
  },
  {
    "url": "assets/js/23.b76cf5ae.js",
    "revision": "a6ad3758f4f915c84f57a0aa9c15e43b"
  },
  {
    "url": "assets/js/24.43a62fd5.js",
    "revision": "f7ff2d4eca29257fe25753493a1144a6"
  },
  {
    "url": "assets/js/25.e1b67ada.js",
    "revision": "e4905807478d8756ae37032b3d845a2f"
  },
  {
    "url": "assets/js/26.721713d5.js",
    "revision": "b8a196c59c1175f3a6131468411239f8"
  },
  {
    "url": "assets/js/27.19d254ec.js",
    "revision": "4a4f5d4ab1c7434937b4314c7daaccc3"
  },
  {
    "url": "assets/js/28.ce930fc9.js",
    "revision": "55437704b79ca8dca6f79af032df4954"
  },
  {
    "url": "assets/js/29.a5a57a34.js",
    "revision": "2fa0da83c49e6ad5128375e5488d9703"
  },
  {
    "url": "assets/js/3.798f6308.js",
    "revision": "944ab41450b5758495a4a01f55aad4de"
  },
  {
    "url": "assets/js/30.4a3b123a.js",
    "revision": "b36719c1befc87d5df49393e14f02051"
  },
  {
    "url": "assets/js/31.abed6b2f.js",
    "revision": "7c88b22c99eef67853b5c7ca2504d1dc"
  },
  {
    "url": "assets/js/32.184d8e13.js",
    "revision": "27dbcbc6dbd1438503288e4721bde17a"
  },
  {
    "url": "assets/js/33.9b825dc6.js",
    "revision": "547bfeba3e1ab386a19a1b5cb133ca72"
  },
  {
    "url": "assets/js/34.9c3cd5e8.js",
    "revision": "7015f6bfe1e0d7756e6bc32136aa0ecf"
  },
  {
    "url": "assets/js/35.3e677f3f.js",
    "revision": "e2c8ed73d133d1475fdd795ae63acc9a"
  },
  {
    "url": "assets/js/36.f92168d7.js",
    "revision": "0f86d96a6164fa92b8565d503dda6990"
  },
  {
    "url": "assets/js/37.05055da7.js",
    "revision": "c9cfa2cf7b2aff959dbccbbe5840368e"
  },
  {
    "url": "assets/js/38.4a62ddc0.js",
    "revision": "41b8d28639f661049f34bd1771afa3d2"
  },
  {
    "url": "assets/js/39.c017f20c.js",
    "revision": "afdea694d28675d080d2069469e1ad1a"
  },
  {
    "url": "assets/js/4.3adcd803.js",
    "revision": "523713163bf8d05443983bd62673d84b"
  },
  {
    "url": "assets/js/40.09f51faf.js",
    "revision": "f44c033cde7395876ab1cb28080a759a"
  },
  {
    "url": "assets/js/41.184e1e82.js",
    "revision": "e0b6b9483e759de1fdebf69cf572b652"
  },
  {
    "url": "assets/js/42.d2955c60.js",
    "revision": "d673608138f3b9d310758c9d9cd03a52"
  },
  {
    "url": "assets/js/43.78c217e4.js",
    "revision": "cc40c61d6af99c8a94504b92ddca7005"
  },
  {
    "url": "assets/js/44.0e3833f6.js",
    "revision": "186ef8499416c7d9119529fd06627e52"
  },
  {
    "url": "assets/js/45.ebd473e2.js",
    "revision": "e0c7fe05bbd7f2cff5fae1492b5a0cda"
  },
  {
    "url": "assets/js/46.d3cacbb7.js",
    "revision": "5e6ec13bfda881fce1f8a77cb6e7c26d"
  },
  {
    "url": "assets/js/47.b655a882.js",
    "revision": "a37debf2ab6d9c30a38c3c6fcc253227"
  },
  {
    "url": "assets/js/48.b49a2432.js",
    "revision": "eb6042024c138ed41f1eba3a44823d9c"
  },
  {
    "url": "assets/js/49.c103862b.js",
    "revision": "edb8ac6f17de5add168ac08ff3449510"
  },
  {
    "url": "assets/js/5.25e86a13.js",
    "revision": "1a65cec3df246e9d5d55ae2516af6f24"
  },
  {
    "url": "assets/js/50.17e0539b.js",
    "revision": "1d48d1bba46ad09f3fc9cdf1f9af0a5e"
  },
  {
    "url": "assets/js/51.fe52e011.js",
    "revision": "120405a2782390876616aa321f78fa36"
  },
  {
    "url": "assets/js/52.d293dcaf.js",
    "revision": "dddccf614554c7de740317ac5cff1c38"
  },
  {
    "url": "assets/js/53.a4f62e0c.js",
    "revision": "1a59bf68ec7816385fb43ac4e97b1ab4"
  },
  {
    "url": "assets/js/54.77ee217f.js",
    "revision": "553e7e4e53f05d70dfed30552b0b29f5"
  },
  {
    "url": "assets/js/6.fb5d1e9e.js",
    "revision": "75bc15f560b16f15e9c702bb2ccc2155"
  },
  {
    "url": "assets/js/7.6ef328a2.js",
    "revision": "3ffbd6a2d4594440e65d5df46ad7ce58"
  },
  {
    "url": "assets/js/8.4819a6a6.js",
    "revision": "ce6a4f2b91ea39d87ba51b0255caa273"
  },
  {
    "url": "assets/js/9.34f05297.js",
    "revision": "56199009b3af801acde5edaf8afef8cc"
  },
  {
    "url": "assets/js/app.7ea4cc6a.js",
    "revision": "d5a57d6da3fc7422fa39c72e332b8350"
  },
  {
    "url": "bak/128.png",
    "revision": "4c4659be6b015670bcf0cd58cc5a77bd"
  },
  {
    "url": "bak/144.png",
    "revision": "36935639891bf6f2582a7723cc9e7da5"
  },
  {
    "url": "bak/192.png",
    "revision": "d232993ceb47e017ebcaec17241b02d1"
  },
  {
    "url": "bak/256.png",
    "revision": "29f8c952cba976698e7d9155d3933222"
  },
  {
    "url": "bak/512.png",
    "revision": "8dbc35431ddf89fd601281db2cae7a80"
  },
  {
    "url": "bg - 副本.jpg",
    "revision": "031e7d35de87fc29bd607f40f3b2b532"
  },
  {
    "url": "bg.jpg",
    "revision": "d8c9e1ae281e1fa80faaf8bd663d6a21"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "d49c1719058f639622d34ef769288802"
  },
  {
    "url": "categories/index.html",
    "revision": "beeedd049c55ada6a6701793a3b97eb5"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "efb758e530a1280b95928f7bebcc5137"
  },
  {
    "url": "categories/Java/page/2/index.html",
    "revision": "46c51182836ad5ce7af93fae08fce33c"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "5537c883eb4b532c3f858997bc930df8"
  },
  {
    "url": "categories/Novel/index.html",
    "revision": "73bf4c2a835e775150e8917f72061f05"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "b23401d98fc45dc8f5b78166ef6714f1"
  },
  {
    "url": "categories/Spring/index.html",
    "revision": "213979f5f60b85092d5ed79bbf634188"
  },
  {
    "url": "categories/Technology/index.html",
    "revision": "ded15977af46a5e2e1ee5827e0ad8d11"
  },
  {
    "url": "categories/Technology/page/2/index.html",
    "revision": "48aa31a915285f1da344ed1aff990114"
  },
  {
    "url": "head.png",
    "revision": "421866cb87e144c34f5eb83d4c0322f7"
  },
  {
    "url": "index.html",
    "revision": "de7af6719a1732ef72a9d9232858d114"
  },
  {
    "url": "tag/注解/index.html",
    "revision": "1cd4eb5218a61007feb64788d49f6d8a"
  },
  {
    "url": "tag/Activiti/index.html",
    "revision": "8517add9865d0d2ec23a3d64a7feb2eb"
  },
  {
    "url": "tag/Article/index.html",
    "revision": "37c1949b2808a5abb056bb7b76ef66af"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "c37a72ccbedb2df7f8c1d8e56664f296"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "bb1e1f5a43583242f144c11bf1882267"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "4d6e50ef82957241507fdc07ec0ea3e8"
  },
  {
    "url": "tag/index.html",
    "revision": "0dac4615dde9f1ef71042994e38ebf5c"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "5ea98a7e0075650bc52068f3f479ff16"
  },
  {
    "url": "tag/Jenkins/index.html",
    "revision": "e9ffc54bb0f918838fc5fb3943800c8d"
  },
  {
    "url": "tag/Lambda/index.html",
    "revision": "a896fc191fa3149045ab88ae8edf73e4"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "96d4d56560c592af352939b1c1808789"
  },
  {
    "url": "tag/Low-Code/index.html",
    "revision": "edb7aee2c5ee102fbd0e4f1f660bf9bc"
  },
  {
    "url": "tag/Maven/index.html",
    "revision": "ee84293d9267b1525f2e15320dc2c8ab"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "c406e6c3153e8131c645849920730f7e"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "55f1f2f87404478acbf1703980679e74"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "bac9b74d58667684b32572df61ae381a"
  },
  {
    "url": "tag/Novel/index.html",
    "revision": "ca9e1435b38305193ad10f5d65c50d18"
  },
  {
    "url": "tag/Pinpoint/index.html",
    "revision": "78503f39302fd8eeb3493809da3bdb2a"
  },
  {
    "url": "tag/Postgresql/index.html",
    "revision": "759d7e2201322a5a6bfda279680672e6"
  },
  {
    "url": "tag/Postman/index.html",
    "revision": "580a367a92f98d43c3354f67a2c1c964"
  },
  {
    "url": "tag/RabbitMQ/index.html",
    "revision": "9db2f8b003ea6b95f6fb0ba60147e59a"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "5af236149ee87e9e39db558a11082a74"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "e7a98b967b207354157f6068e155f31b"
  },
  {
    "url": "tag/Seata/index.html",
    "revision": "f1ed177769d580b5343f9ce11920799c"
  },
  {
    "url": "tag/software/index.html",
    "revision": "644b1abc85dbae481c19f51e739b516e"
  },
  {
    "url": "tag/Spring Cloud/index.html",
    "revision": "50edf55ff41016e1fb434654e0da489f"
  },
  {
    "url": "tag/Spring/index.html",
    "revision": "794a1ad835537da07c89273a21da54e4"
  },
  {
    "url": "tag/State Machine/index.html",
    "revision": "cd621b350b063ee53525b725aa71d1cb"
  },
  {
    "url": "tag/Swagger/index.html",
    "revision": "6c47b045cdc14dbd6304cc5e0f21a8cb"
  },
  {
    "url": "tag/todo/index.html",
    "revision": "a9de43975eb70cfa36039940569c6d6b"
  },
  {
    "url": "tag/Tomcat/index.html",
    "revision": "19de4a1ed1cde344fbb6cb830412b3c7"
  },
  {
    "url": "tag/Web/index.html",
    "revision": "81d1caef5b79f05e77fc6e1dfe1efa95"
  },
  {
    "url": "tag/Workflow/index.html",
    "revision": "a2406932a3a1f8e794c0507909738494"
  },
  {
    "url": "timeline/index.html",
    "revision": "6a59efacc2ac214165340a4319a9761c"
  },
  {
    "url": "views/article/文章收藏.html",
    "revision": "76b4f3f9a88af2a5a7fffac732047e6e"
  },
  {
    "url": "views/java/常用库及工具类整理.html",
    "revision": "1c9caba2491afb113411d2ea3781cb9d"
  },
  {
    "url": "views/java/远程调用.html",
    "revision": "bacc50874aa93c2229132fbe7d5ff101"
  },
  {
    "url": "views/java/CAS更新（乐观锁）.html",
    "revision": "add805678a4e9f82a70293dfe451f695"
  },
  {
    "url": "views/java/IDEA插件.html",
    "revision": "ab6c33c5798dfbfab89908d0faaa8aa6"
  },
  {
    "url": "views/java/Java代码规范.html",
    "revision": "b49ef8234a967b49aa935e635fae3aad"
  },
  {
    "url": "views/java/java注解.html",
    "revision": "6ad47b42d1f9d25c90283ed4344cf9b5"
  },
  {
    "url": "views/java/lambda.html",
    "revision": "bb3c2f15da0ab6f20bef1c4d47701f22"
  },
  {
    "url": "views/java/maven.html",
    "revision": "91ffb40df75c2215d32981c06a9cc8cd"
  },
  {
    "url": "views/java/Redis.html",
    "revision": "89c7fa9105fc34de7eadcb6269bf8fee"
  },
  {
    "url": "views/java/RSA加解密.html",
    "revision": "1a40d722e16bffcaaf7d9a408cc8096a"
  },
  {
    "url": "views/java/Swagger.html",
    "revision": "6ef62f6490f095883a7bce6dce30159f"
  },
  {
    "url": "views/java/tomcat相关配置.html",
    "revision": "add957b6cdd6c67f60c6ed98d7c28817"
  },
  {
    "url": "views/linux/CentOS下开机自启动和服务安装.html",
    "revision": "c5ff832054a2d8933d7697ca49e0ef8e"
  },
  {
    "url": "views/linux/Linux工作中常用命令.html",
    "revision": "9af57285f18cf538fe71a26508d45b66"
  },
  {
    "url": "views/linux/Linux命令.html",
    "revision": "3f0c822306dcbb5d9f4b4646faaea27d"
  },
  {
    "url": "views/linux/linux下postgresql安装.html",
    "revision": "957f4b79e31a06e699b0cfc3d04d4328"
  },
  {
    "url": "views/novel/将夜.html",
    "revision": "2ff7dc9f39cd844807d0d9a47e136169"
  },
  {
    "url": "views/novel/书单.html",
    "revision": "1985368a5a13b7e1fdae761a20442b91"
  },
  {
    "url": "views/novel/雪中悍刀行.html",
    "revision": "8cafa3ef6342f1ec6cbe925c7889a57a"
  },
  {
    "url": "views/other/出门回家必带物品.html",
    "revision": "2ae0a35ff0a51057f3172d66ce74bb4d"
  },
  {
    "url": "views/other/待办.html",
    "revision": "96cc96a87a239269c94eb94e21fbb10b"
  },
  {
    "url": "views/other/开发软件.html",
    "revision": "c5488cf115cb5ce524c07db1a166d4a8"
  },
  {
    "url": "views/other/魔方公式.html",
    "revision": "229215b37ecb845684904d79faaa1073"
  },
  {
    "url": "views/other/收藏的网站.html",
    "revision": "cecac11a9f60c3a70be28ff0ec9e43a7"
  },
  {
    "url": "views/spring/Seata解决Spring Cloud分布式事务问题.html",
    "revision": "340e3c36205ae173c8c782e9a850caea"
  },
  {
    "url": "views/spring/Spring问题合集.html",
    "revision": "641ec182b5f964da11a6dcfc570a6768"
  },
  {
    "url": "views/spring/SpringBoot整合MongoDB.html",
    "revision": "97413ecbe8b17a2f38b09e0592bf1848"
  },
  {
    "url": "views/technology/工作流和状态机技术选型.html",
    "revision": "3cad4ff3f4c9bcc86d542322ac102031"
  },
  {
    "url": "views/technology/构建工作流低代码平台.html",
    "revision": "fdc604ea999ba30b648f92d44843f1ee"
  },
  {
    "url": "views/technology/Activiti工作流使用.html",
    "revision": "83e9306a8ec1feb1deee3a1adbe54add"
  },
  {
    "url": "views/technology/Axios Post请求下载文件.html",
    "revision": "0217770536f29279a5c69284d25f934f"
  },
  {
    "url": "views/technology/Docker Compose.html",
    "revision": "a2dfcdf796702392fe7cd45b156e2054"
  },
  {
    "url": "views/technology/Docker安装及使用.html",
    "revision": "0e6e73e76136a67df6c559d4c0de658e"
  },
  {
    "url": "views/technology/Docker构建和发布java项目.html",
    "revision": "c26bb31cf694a5d35a4d4f372dbf122c"
  },
  {
    "url": "views/technology/git.html",
    "revision": "32748b5e2affa74f3725909d64c2f772"
  },
  {
    "url": "views/technology/Jenkins.html",
    "revision": "7355a595f3fecb13ff3b11d5e5e06207"
  },
  {
    "url": "views/technology/Mysql优化.html",
    "revision": "57cd4550702fa00b82a0a4757b9c9420"
  },
  {
    "url": "views/technology/Nginx中location和proxy_pass的斜杠问题.html",
    "revision": "18378220916383cc80edf8b71e904078"
  },
  {
    "url": "views/technology/Pinpoint安装及使用.html",
    "revision": "5b6245c0d61ad1e60b10759d7bf65fc4"
  },
  {
    "url": "views/technology/Postman环境变量的使用.html",
    "revision": "ecf11f91f07658a933dfbd951c5cab97"
  },
  {
    "url": "views/technology/RabbitMQ消息队列的使用.html",
    "revision": "f8d31f569c18c8643b5aa118a7ad1b71"
  }
].concat(self.__precacheManifest || []);
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
