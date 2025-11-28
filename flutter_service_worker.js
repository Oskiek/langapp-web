'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ee3d20e2105c01428a12aa54fbcf6c4a",
".git/config": "2ee02edbd783dccc448b03b1eded579d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8a7566ae1702672b4297ea44ef50e1d0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79493b7851cf238a4a02192529785bb7",
".git/logs/refs/heads/main": "79493b7851cf238a4a02192529785bb7",
".git/logs/refs/remotes/origin/main": "4b3638be9ef46fd8948b5e2ea81d830f",
".git/objects/01/08fff504de913bd6ed46885a87a797322b0592": "7f054ce0d5d579f5d727b7ac8856e3a8",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/e930af690100802a6c23ba822e2a0822d768c5": "7936066be3dc700c8895a4e831c7ffea",
".git/objects/03/e37854fb76bda30caa64ef246541368d6792b0": "5d6dff0ce31e3bbc25dd21a63b6739d4",
".git/objects/04/29c7d960c7d2047d3c1ec3137796163090a106": "1815b88faf98f4e171c594daa3ce3a67",
".git/objects/08/4e452b033ea834dad2e5bae083824d5df8bcc3": "f7ec67486f0d428b1b494c1e1e536571",
".git/objects/09/56b32662983fdb0163b73708157b3ca3c27224": "26e13957d015c36ddaa780036f76de1c",
".git/objects/0b/50b95bd7ce43c78ff95946a21ffb9b7c51d853": "546ce6976df782f9bea5a76be537cebd",
".git/objects/0b/515a0bda67a847c86bc438f0ef6e6db2b169be": "b24c3df469efa036a9cd1d17277073a2",
".git/objects/0c/053932a25ab0222e17c3b5d111cf580eee2a90": "1f00bc032083c10e20ed4620457b39fd",
".git/objects/0d/39e0a129df15691055b95ecca574210a53abd8": "17c94457f63ae3d3a16fa0891a563c38",
".git/objects/0e/2e1c1b7ba0d605a0200a53d3c6f0b7dc60c74d": "16b7bc318aa9e38434b5ada3e9d56afb",
".git/objects/0f/8a6f423a0f777f5b8505a55c9b58166e07a1fe": "0c970c9a93110382fe396938b276fdaa",
".git/objects/11/885e5b11a5239bf74eb0016c2fc2b0d3f53a65": "9e7b91aa9e46c3e3669d6a5dad64901e",
".git/objects/13/fc78613b269376d6f470fb881893a3091c6645": "6cf37c1763cf30e814bea3b9080c99dc",
".git/objects/14/44f2996899e2ef5a26fa00bb239d4d1a8be406": "60015d67580cfc5e38142b262713df13",
".git/objects/16/5bd8061b245921e38678f161c06540ab35b6b0": "e3d7750b18a2e36e10072f0bf3aed05d",
".git/objects/16/73196a99fb5cdd290639d341f17f1c29962506": "8207c8a09c6e34efd3effba0c0c09ee9",
".git/objects/18/5ac942dfd4f7d111505ebbb34430a76eefe9e3": "ea68e14ce342c1ab5878bb4b8b42ffd7",
".git/objects/18/a0b9a6714db333f4d399eb1a45de9bdd66573f": "3845abdc93567d814b3660d22038da7a",
".git/objects/19/09bba9c3cb3e1f89226e1637d98f5880655f66": "e0c570b56594a704d7464bb37b7af907",
".git/objects/1f/4b06ff1f792ae33337a2798d038ff8a4ef31cc": "e6c5ddda4bb1316c7a69ddff9b3d9bc5",
".git/objects/1f/aa9757b86ad1cca93ad9b72a722e42dcf6a6a6": "0fe24e5f993433a9244c5440eb7c189b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/720749d6b684fa57c415aa0c95d6f6458ed716": "c996a1c81cbe988a7d64e7207d48f483",
".git/objects/27/22cedc89b2a5aadc991f8d86367434abe97b61": "7dabf23ce7995129468636e87d53528a",
".git/objects/29/9b59c63a5fbd7f2766eff689373ab27bd2ef11": "d921f7ecb1202dc7355ba81d52141ca5",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/f22d488e192b98a20b748a7dc06101948eaa30": "70ce8d65273aab9f64dc396e6a730886",
".git/objects/2c/cfaa5ccf408943f64c574759d3db2d5f745e34": "a61da9996cee36623b8daf511effa398",
".git/objects/2e/23f6c06384bc7ad4045383cee04d6f2d0f1168": "3d791080c01ebbeeba3bd356ab67256d",
".git/objects/2e/5843004d74233efc2035131341acccbe382475": "6262cbf36a47d3de2f6e1cabd9e61fa8",
".git/objects/32/4ac590b5438694afb089905e09fb764c235bb9": "a16d0adedf907d85d39a8f59048b09cb",
".git/objects/32/63692f493f03cd45314f3e6cc57837340290ca": "216a3e26adf1d688d65cf87a9aeab67b",
".git/objects/34/fda6789196aecac681921356c34cbe40992d06": "cf5778991475a50e498dd5bff23606dc",
".git/objects/37/4f19e178b86bc393bf5d7568d9e60dda47afd5": "3dc9998706a8e8c469e12750e12875e4",
".git/objects/38/22aac9c28d7a5dc33f00d7d18d7685e16a5612": "1bcd74a5d677dd6fec21d93e4d7c1323",
".git/objects/39/79c4cdb999de2bb79bd6baf2efaa34f2ddf956": "fc3bfa33501669682f4f559a5d6dd169",
".git/objects/3b/c726161f9d6133d1e3a11b6d25480cbe348a38": "35d4588e54ef8e03775c939edfc2dafe",
".git/objects/3c/55563a36256d245dd6f3f8ab2b6d98e915335e": "c30be085a5985f970af746eb9bb27ce8",
".git/objects/3c/c2d8f4870791dd563e5fa7b5e9b46e210703d4": "1c3926cadd36a33d758127f0833a800e",
".git/objects/3e/222eccd16afb62255f511cd3639cdafccf5621": "6bc8a9ebe0232de47d759f0492701c8b",
".git/objects/3f/41e838a2e83cdd138b36653f815f868606cd75": "a723fe2d2ef68c9a9e485eafc93e7fb4",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/70574c0ae92c6182a42c49f39f49262de9cd68": "f30d23e339ffe3a9d905ee38c3c8ae97",
".git/objects/43/9c9ba950b6b5b93e00534da6ee069d7b34f9a2": "56998d7391b01da2422b4ce92216175f",
".git/objects/45/0b505b3c76e058134b609ca8a732ca30bfbdbf": "ab0ea1331662129add939f1cb96fc417",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c2bbbf6967d49249c137a289de9a364ca688ad": "b7de7dc0e3f1fafbd45a9a2d2229c3f5",
".git/objects/47/68d83d6ce0fd43935c1a48d6a13c515def1ccb": "5447dc717b6059bf7f5a34ea1dfd624c",
".git/objects/47/dfdf1bb9430779dc350cbeca2916a0e93d5cea": "577560d67a646addd8312b62f4d16c0b",
".git/objects/48/fc0ec0d7bf3ae18a5146f28e94a028fd09ded9": "dabef6dc2d3ed9bc5f21df10aac47a7a",
".git/objects/49/c0c39a7e4e6287597ea884cf58dc73691e2aca": "6a406651b6e1ba32a30f52ee30ed219d",
".git/objects/4c/3820f72f34223a0c684c421d64c8fa6a8766e5": "e7eb4b6a983237a2e15fbfb4b4cedd91",
".git/objects/4d/a2187b46270d8a8668d012f3167638d58f6ad7": "144c2fc11ae27f4cf4ab965c76e556f6",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/2767130482509a3116937f0aeaeb7c3d89de80": "a8512a07d2b0669f0969defb400160d7",
".git/objects/4e/7e647c34cb4175b178a57040e2ddbc4c5d42d6": "384df596a070c6d5181e55a754e89e54",
".git/objects/4f/c8c3e3a36a04fdc16a04a359189edb6a49a095": "6c31ffededf7fbe4a7d8911437b665d1",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/1d1b6345425b052856e1bd6a91ec483be8f946": "1ee36874c9fc1cbaa69beb894ec38931",
".git/objects/52/ca8c911767dde299a5bfa1f6d50bfb337c86b6": "0511a23d7f4501bd0cb1d41379182390",
".git/objects/53/6cc51252a7683426fd191880c1aa72c509da7f": "a93403a80a972f26e2fcd1c0da9d7e44",
".git/objects/53/ca9e50fe0768201fa449c2c99eff540135b53b": "32f609c16cebfd716cd6bd89c71a02bb",
".git/objects/58/469b2c8e9b74f5e4a371acc3bcd11ecdc40640": "3757f497f1ca6dd1bdddb66025289125",
".git/objects/5a/5856d158a7e79d7dda0088415e6024cd23fd2b": "6b14219df5f98dee51e3ca6efae0e14c",
".git/objects/5b/ab7533080a831766bb921175d649a364f145a5": "1187476433c481cafb59f65f6358c857",
".git/objects/5b/b0ace4bc2c8cf71bea29684b8b5804530c8865": "7f27beb374a92a6691bcce519680d5e3",
".git/objects/5f/9da6d4695de60c915139d9b85db5bd7e4ad977": "167effb17227a8882048ffe457bf0a81",
".git/objects/64/48e63bd320816a256716fd2129efe6b66decfe": "34ca18188138cf1b5cb5b0d354c841fa",
".git/objects/66/0237d39c7dd25024a93cded70d1dea125637c3": "1aa6947028bf1e1e4d4d717494b0f2d7",
".git/objects/68/3181204c9621f90666cc90e9aed3b4b698335b": "5488b1aadf4fb74be832b0fddefdc344",
".git/objects/6a/2e9d74d689fad3a77f6aaf411e5b68b797e1d8": "9f672a24a607325b30986f3248823a85",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/e20175b9aab555c9b67336d0b85c319ab43f4d": "69d9bd9793a1e41e3bd8c0954e828458",
".git/objects/6e/23c3a9f1541850bcba535a3a34aa5e3bed4126": "45bf9238c99d1a3bfcfc549cbbb1842e",
".git/objects/6f/8c03f5ac08eeb1af0e455c9d10363ffb83900e": "880aa81ae5088ab1c8fd97f6ac09a299",
".git/objects/73/2bbf9461d9696291321506fdeb57ad6ace4b9b": "7df0fb0d48e4c09e6ede07f088b5f467",
".git/objects/74/05f185e4a86023cbfa1205e1222a661897d881": "f51a438c85ff1a8d905a045524c98df7",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/2e8e0c6a87b4b87acfac4295dde73ab0629915": "3388bae478c2d14cc840bb5a74a61e8a",
".git/objects/77/1617eb1380e21f19e3bcea46e285f90d2f8a1e": "40d4d0bf171bfc60ddfdcf61014e45d7",
".git/objects/77/a7cdf2edf585ce3f8a046fd88e102dfa793d7c": "c9f3d358cf5b65b87fb64feadb2a201d",
".git/objects/77/e60c079d45a0ae1f303ecf8588933ef421dba3": "e0b14982795f94f28049cfc1cbe18e2f",
".git/objects/78/177c38834513ae6c29037949a959642483cf96": "e0692fdd3f8c1fec8251c6bdb1413167",
".git/objects/7a/5efdff243f0a413816e0592a08c81ae519e233": "7a23e9ec18d06e718926a5479c51fa72",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/9a44740b4c671a7868d5c06560f32007c218d0": "092c4f903469dce070bbd6a9a5dcbf61",
".git/objects/7b/fa4db0c2271565c938d69d88bd03b1c27c195b": "1854ce68ee779fd979114869e7aa54bc",
".git/objects/7c/9d7a0dc8dd9597f2afb5574d46343b2db35b4b": "1b41b85d5aa0e877cc29754732b66131",
".git/objects/7f/8b7e11d7f8c1c3952f5bac2da685c855bc4e2c": "424ccf9c1db35cdcaee8357f3211e5ef",
".git/objects/84/54c91536abe2d5235edcb58a9dfbfd2288f081": "d16ae14afc1eeb31e7b2a364b754771d",
".git/objects/87/325a5d5cfb4b9ed51a763aef87ce6a29e1969e": "7e2093ceabc678595e1e57e8055304c3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e826ff307594096a1f310f3c55e0fce68c3b5c": "28f2bf18ac6045eb4b56be4555b1dab9",
".git/objects/8c/178c6b3e237f58390984244bb824fe129b18c5": "ab84b68363743b9f6b2d386062b51f0d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/3004573cb8fa938ebb70b14c2031dce7187c18": "0ac25ce40df191e6bf42adcec2317f01",
".git/objects/8d/87ed21d00de4b5780670baa8d94c01d233ae3e": "a066162771252f08964b64213c932270",
".git/objects/8d/eecf61c31e246709cf7505604a3531c5f15c4a": "4ccb0a743ccf3d59540480025bfc3067",
".git/objects/8d/f52544ee72266efae7f982353bc227f804cf83": "38c3de7eac893a183130d64ff32efdde",
".git/objects/8e/af3989774515479c2fa63b06f13cc3c8c7c53d": "ed2990bd51537f6c1e75a5104b7f828b",
".git/objects/90/d539be43bd7c1970003b69e360c67d1d04e5ea": "a6d6d0d4415f238806b6aa22a7849820",
".git/objects/92/4ae85895c44efd0636c83de9cb922a257466f0": "2959c211fbcf795e5244b4dfb95937fe",
".git/objects/92/55ecf792de796b2c2e109d99cec2dc9dd23683": "6d3e797f7d1271e4074cb434f21cb0de",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/95/2bd188fa559b7895ee856a36df5cd772290a16": "8f08a204535cf5f6940e3539eb010df0",
".git/objects/95/631d071c72ffeb9bb2ff3efdb9b1f791bced04": "d023a92c36bd3e3bafec44fb3ef2c4ee",
".git/objects/95/fb11f0d325d9d62c73169d52fd5f1e3c78179f": "9cfa4ef916aa3882618cc6a71b7ab10e",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/2058e2d4f407493565ed98907213ea99208535": "8c23824a13c86e9ecdfe0f25bcbd4250",
".git/objects/99/b00d422270b9777b656caabfa11eff712a3d93": "ce3b73d254cc84b475a46ceb49b6d30a",
".git/objects/9a/72ab89b863f7b334a2387dcd9b95854b2a5463": "e1c5f836cb5fa125aff9138586e251e0",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/5c358d53b38ebe3ac6291de4b54326388461a9": "6968fc86b7a1495b6f521d49d3b6fa63",
".git/objects/a1/a3c8bf3805c612cd262ab112585bd69124445e": "1b4d2f5f3634410fbb72b7b4d7ecfe35",
".git/objects/a2/f4f1d21d70bd19482e2ef394c982267b8e5e3b": "fe82b867b8c1b3e10545d906b8ffa6d6",
".git/objects/a5/db583d99154346fb4e1f9afbd73eac1b1da142": "18dac294f9e1425d24d05930a57a5de3",
".git/objects/aa/ffd4fe192a0d0c58eb758f1c8adefc7e044c63": "7dc06f885edb8e2f5fa37dd1098b7240",
".git/objects/ab/010c2deff319679b0b627eb28ce9168fde664d": "59fa33b9eed0c6a40aeded7ba6523a75",
".git/objects/ab/d65d958b477c7136a2ebed5e6e8a40e8ff2798": "cf5bec829bd70ee63a3509a5a0c8a1d2",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ae/d8271a010da447a256624027b555b2578e09df": "e23cbae3a182aeaee37cdd1502970aa5",
".git/objects/b0/9b46dd4b9ecc3827ecc60069cf807bab778c84": "b4481311fd95f3e35c23d7da1f06e095",
".git/objects/b6/00d957c5839f24055a8e5483bd3c72244d40eb": "9569ca7e538c97b8e4d5165f2a5cdd2a",
".git/objects/b6/5a4cf396742c3295bec986fd34c299859a6a7c": "dbe895c26519ec9cd48f147aba164fc9",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/578ba6554d2a43463d8dd6dc8486b926e8f0da": "509bf0faa1777aa51576eb01b4d20337",
".git/objects/b8/281a84be50bc2d2d8b365edcdeb4e4d04c4e67": "3fbbc8486471d5a587930f29dd82ea45",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2e00ee7bcd99363fa0adc8a7844748dd130c3d": "c6dae22170338609a5bbc17120a80bd4",
".git/objects/bd/fd48793c92c5ca5e14c349da61ba4e4230ef2c": "87df336cc66e60edede261030d90a0f8",
".git/objects/bf/190b9f50347d8b287bad48a56dac0e88674bf0": "8eea96d5062e025a85a5223a8b507493",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/913785d47a68eda49a3e0d39ef9c4198c8cbe4": "26509b24871d2c285cb4db450df9ad7d",
".git/objects/c9/84fd330426662eefe95b8f274ed43f29bb2a84": "0c8078b5bae9777b5dcb7cb29aad32bd",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/e5f2b218809920dfc4771dd8933b4b394f1aeb": "75075f303da4e3ee27bfbf6306fd6677",
".git/objects/cb/f47e789a840fda10258fc3bdc1680a91c57837": "0dc16841bdfbd87c5dcd1419da0407c4",
".git/objects/cd/69f9b9cff35100737b04d90795f95bca4c5eb9": "ac8ab3c46b254e48269cffa9cb69cc88",
".git/objects/d0/82a51cb174161ef92f9de5aac05a41725d8238": "38cf47407cb335feb38aa4db17e6be61",
".git/objects/d3/3258b96cdc66057f810392892227f9d1de0e59": "53a977941dfc8d0871ddd0bb17ccd34b",
".git/objects/d4/22c943bb7f99502ff6d155f5aed7e32e59260c": "fa7c0849e282d0edcc836c6e4d5904b7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/2559eface3131f6e6552f88a1a2a3f196834d4": "c667314cde12aa8b9bc217cb4da4398c",
".git/objects/da/97fac575c6f69f610611bdab44910e67e3608e": "6e815116f5e1a222342ead3514867879",
".git/objects/dc/3f716ac2d64e4ed2172909b5506b57447d7145": "ecf430e3b032c72b2fdd6c984a06cbcb",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/e0/1f19f69dd9e6cc122fe07d0ce6ef9be8e55cbf": "101f78a34bea44ff02bde8bab5db4601",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/e583556d889a1dd0d944ce739e946bfaf0a69d": "8919f3f310489b039a47ec97f0cbf435",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/25242b8b28029498afa8a2d81cbbffc6807b24": "6b076c8ecdb69252051f4dee461d9a0b",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/3d293d3910934f9947fc132e2d9671aa7b0ace": "d31863d835c89fe980e0c50d4b5ef73a",
".git/objects/ef/75b8c8072c373bf5ebc035dbe4b18345897f30": "5a45b9abe23ec3617bce983a4f47b31b",
".git/objects/f0/fe1e854e3c6e7720d955bec07123969c7fc896": "d6dce3364f71f6cd64f7adb702ea2f69",
".git/objects/f1/df768b78189d9695bc5baabff70414aba16fa4": "e174d99f33764f17544e0f68e92c0eaf",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6ca40a8d99fb85671cf033efde100651604a4f": "e6ee2d3dcf93d288cdbb47677f1ca174",
".git/objects/f4/6dd72ed57c25c7854c75d7ca8343a4e5512291": "6997f6d8e8ec0683b949479e93d41ebf",
".git/objects/f5/14b50dc691a4eae966f3b31e3014b4a241891a": "1489a3a6720ec2903f645647243ac725",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/973a792bc1f3b0a68aea66c07157c98b44bd44": "02b714f6ca4f1a6c8956470b4a9075fa",
".git/objects/f6/5cb682999fff1a54ec623a30d10883b16c638c": "c71080f0eb176463d722ae650455f5a8",
".git/objects/f9/a5299c50460ccddec64aed5976d2394b92831f": "617eb67d752142dcdcb89a52463b7b36",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fd/acf102c01beaddbcc3905afb653ddd1820044e": "d3285f0f4317360c5423fa9359b8ef1d",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/f0436e07d344a0429c6c87964e1c0298640aee": "947415586f360fad4449e7d84818bcee",
".git/refs/heads/main": "c64e79fe59f43245834547fb382284eb",
".git/refs/remotes/origin/main": "c64e79fe59f43245834547fb382284eb",
"assets/AssetManifest.bin": "ca46c41c68666b967aa02fc3d55e8ce9",
"assets/AssetManifest.bin.json": "b9a4e0da19b0803f1e520750d1634416",
"assets/AssetManifest.json": "81326312c8900075fe3bd93e2338a8e5",
"assets/assets/entry_img/apple.png": "0cce77e971ac78deb11f7514e6ea8327",
"assets/assets/entry_img/banana.png": "8982e500d299cadd2769f8144a480c4f",
"assets/assets/entry_img/beer.png": "5c9ecb8a93b7e65aa63033928656025d",
"assets/assets/entry_img/boy.png": "556f74834debadce5e768d5a927a6577",
"assets/assets/entry_img/bread.png": "e2915b75f9ab8672137fde0837710744",
"assets/assets/entry_img/brother.png": "71831e57563b3386f9dca573e96551aa",
"assets/assets/entry_img/butter.png": "49afeda3ae8aecf278c2e7a235d5ace7",
"assets/assets/entry_img/cheese.png": "3f371cee8ec798fc81cd4abf65de8923",
"assets/assets/entry_img/coffee.png": "118cdebf4aae8d1480f35b21e88b06c3",
"assets/assets/entry_img/dad.png": "d6ca640d5958b3ab789f908e85f58d36",
"assets/assets/entry_img/daughter.png": "c7e34100b2200c155fab3794563847ab",
"assets/assets/entry_img/girl.png": "824504a9106b939017887b2dbb18e986",
"assets/assets/entry_img/he.png": "7103af1dbc43c44fabaac1eb29c0755e",
"assets/assets/entry_img/juice.png": "fb32e6a3ffe621efb5fecb51b3c945e6",
"assets/assets/entry_img/me.png": "00a90fd837dbbf2737700c9fc9a3bc1e",
"assets/assets/entry_img/milk.png": "252577b31d5a489d4177be3ce57bab86",
"assets/assets/entry_img/missing.png": "deb658e016179ef1bb113712e73fe5da",
"assets/assets/entry_img/mom.png": "2ae2e6f70aba73038a4f8a614b5bcb09",
"assets/assets/entry_img/pear.png": "35ac28c041cf2a2ac54c716b084f4e83",
"assets/assets/entry_img/pointing.png": "1e57926e300c013b1e3c6cc4a9dbc946",
"assets/assets/entry_img/she.png": "ce9533e83ea18883243c24e0b39332d7",
"assets/assets/entry_img/sister.png": "c80e27184c8eb968039e4005cc79598c",
"assets/assets/entry_img/son.png": "24d70b1583dc0ca42e2d230716b5d3de",
"assets/assets/entry_img/tea.png": "25f80b195bc50d0ee3c9c14e2a4695fe",
"assets/assets/entry_img/they_fem.png": "bb74d3888b28115882fae091286c1a4b",
"assets/assets/entry_img/they_masc.png": "71a01e3f7e54834c99cd7c14eae14735",
"assets/assets/entry_img/water.png": "1a9f81c32645c500dd2d043288127256",
"assets/assets/entry_img/we.png": "bbfca50fb1f9cc2f1891052dc0d91b01",
"assets/assets/entry_img/you.png": "2d57a4891e026cd4340111035132af7d",
"assets/assets/entry_img/you_plural.png": "6c24a95c9b68ce3b0a9a11131dc13ec5",
"assets/assets/langs_img/eng.png": "84b8080deb7b0b08e00206951933e271",
"assets/assets/langs_img/fail.png": "a1a480050d3c76b70ccbd0b5506af874",
"assets/assets/langs_img/fra.png": "e00514dbb3505bcf781f9a796307d9d9",
"assets/assets/langs_img/logo.png": "2f34eca35270d648d2efdf7ecf5bff8c",
"assets/assets/langs_img/logo4.png": "891107237b552bdbf0f80062eeff3fa6",
"assets/assets/langs_img/pol.png": "0c7fde7505d268a24339ab807bb4dc46",
"assets/assets/langs_img/rus.png": "7b1c8157fd7a95fc224cb479c2e8d55f",
"assets/assets/langs_img/success.png": "3675bf5a6f47b8bda27f3a4292805665",
"assets/assets/langs_img/tur.png": "c2d19c7b449591ae1213f88a82e3e0cf",
"assets/assets/languages/english.json": "6d5e30066b9efaafc1c577de4d3a96f7",
"assets/assets/languages/french.json": "6b8d6d3f6c875edeb08ca2678715f234",
"assets/assets/languages/languages.json": "d07750d26a561f267b52e4e0fd4d12ab",
"assets/assets/languages/polish.json": "5a797cb1ef873fe4dec34cfc71e40a57",
"assets/assets/languages/russian.json": "bf8db0a0ea6bd4049c42df1f7995d5de",
"assets/assets/languages/turkish.json": "c2de80fd2aea3444fae0bb4c10607bfc",
"assets/assets/lessons/lesson1.json": "821ff3607335285385ee6d9bb3618668",
"assets/assets/lessons/lesson10.json": "2df0b45dbd9cedef29c3a3f93c5d420b",
"assets/assets/lessons/lesson11.json": "b10d41949ab141e5160c4eedbfdcbb47",
"assets/assets/lessons/lesson12.json": "b5d4f3b7d7d581b164088e992b420514",
"assets/assets/lessons/lesson13.json": "c0c86f5e24332fd3f0473f384f028cf3",
"assets/assets/lessons/lesson14.json": "ab92a727d8114d8df2cf01898c8976fb",
"assets/assets/lessons/lesson2.json": "4b526aea144dacad86f7acc8c75cd2c0",
"assets/assets/lessons/lesson3.json": "de89e03bd7a8dd7c726fcb9acfa3ae1d",
"assets/assets/lessons/lesson4.json": "8870df650d29c0dc6a8d5388efcdadae",
"assets/assets/lessons/lesson5.json": "fc9d4184165f4557bd65feeae6313796",
"assets/assets/lessons/lesson6.json": "7a3a539e914d69323e4cd649591b933a",
"assets/assets/lessons/lesson7.json": "a4dcf5fa84d962bc7c7aa1143dc72d99",
"assets/assets/lessons/lesson8.json": "0abacfa7e3ad49bae9ee8812a06935df",
"assets/assets/lessons/lesson9.json": "5c6875b5506fc8e3c40b88583da5ffa2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "523c8636315822dd6dec1bb1bcc66029",
"assets/NOTICES": "10e2f82e901b4f39207f74f373a5f4d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "91555eeb139e96a17104bed4b8977953",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9e608f5a3ab90a5887d9c7eaf7db4b80",
"/": "9e608f5a3ab90a5887d9c7eaf7db4b80",
"main.dart.js": "1f7c2c117315317c7f87118f10102f53",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"splash/img/dark-1x.png": "0ca6f4f8bc8cb9d5bfa5389171f58677",
"splash/img/dark-2x.png": "90d0dee07eb26a51014959d8213f0b59",
"splash/img/dark-3x.png": "5612e9456323d5662fb522716676626f",
"splash/img/dark-4x.png": "19b80c8833c6bc4de5fc9c2f535d1475",
"splash/img/light-1x.png": "0ca6f4f8bc8cb9d5bfa5389171f58677",
"splash/img/light-2x.png": "90d0dee07eb26a51014959d8213f0b59",
"splash/img/light-3x.png": "5612e9456323d5662fb522716676626f",
"splash/img/light-4x.png": "19b80c8833c6bc4de5fc9c2f535d1475",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
