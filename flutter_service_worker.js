'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "531bd3f54182cf7624a093b8932e258d",
".git/config": "ea0b14179d7d19ff399baadd48c2910c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8c15ce646f7c04b3a79b44ab62df3b02",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "03d980cf17269c0695eccf237b6ddc01",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7270027d6a538fb594416dba23e55818",
".git/logs/refs/heads/master": "7270027d6a538fb594416dba23e55818",
".git/logs/refs/remotes/origin/master": "0329bf5b020049921d4cfc6c1ba197a1",
".git/objects/02/7f507a0ecfc894ab1f5b069a99bc1ce0c774d3": "309b7da4d6bb02546b9b21a55a16fa06",
".git/objects/02/e3a5dc7ebc6f27646f34a406bb47cbe034d485": "6428146bd8e2aab3803dec06b95342bd",
".git/objects/03/7fe8e0a16d0510eb22d31a8bc70b7133018e10": "871a7c2e349f62dd0de53cd3a4411391",
".git/objects/03/f6ce758d5bde387837cd7498632943db8e9c6a": "b9f287fdaf3f10d02bfbf606dbaf9c52",
".git/objects/04/b8aa7a18d4767d8f480416ad5600deffa032d0": "0b644ce10da7fe4432afc04adabf9bdd",
".git/objects/05/2de3fbab512d09cf4386e5fc8e5d04fb395b42": "3afa2dee39a5596fbb8000543e3ab917",
".git/objects/08/9c5188763af8a95529b448515edda210b999f6": "d41683bda4a6e7a6c590a594e62724d2",
".git/objects/09/5d21d09554ad3956b9217ec56c53d9dc9ca8cc": "be3d2b858f72c5f848f4702e8b8f55ec",
".git/objects/0a/1c57d76369e494bcb325b35b51911c3b2a7d06": "9ad95e116af0f9c8c2ab35349787057f",
".git/objects/0a/49a3b175bb045b8304e2bccec549b6c5bbdee0": "47c65cf4e492b39331070e8536ba4851",
".git/objects/0b/2cc03eaf442fd0a726f28cf11126e298a8db73": "50a17cf3c688ee3f01fd40fdc22112f6",
".git/objects/0c/15eb8cd335e5a424ebabea3c1820c56a5ff647": "4aaf7ac6e6b7239962b56c0c4d97dad7",
".git/objects/0c/1b451e1ca06784267b80c3c349cd4c6567c407": "4feb38f82b030aef3b8f85fab27e5246",
".git/objects/0c/cd2cdc30fc2dd78d3156f3b218417e6bbb32a0": "cc1173639fbc501d56abacdcd94bf8fa",
".git/objects/0c/d56d647740fab15c090448225e7d0cb2be8036": "357be7c111ec2c3780cbd65f69a01c54",
".git/objects/0d/c6bcf0bc5945c3a32d218102f925e670f925c9": "1093c9bcb5302d97a2cf8e7a20667ebe",
".git/objects/0e/5a0f1791b31e5959ec12e4347bc372e769b851": "dbf45f870da4f41b823a7fc401ef04a3",
".git/objects/0f/a78ec32c7929644f0854746f231729996b89d1": "7b0cc1b40993e0fe2fb5d9bcd0033b1a",
".git/objects/11/0f593a46b99097db4c84f90910da5340fecd62": "69a3eb9c5c12368e8b4f1cd8d15e95b8",
".git/objects/11/3c06db44b5cf332264a261ac918713e89e4135": "de1c06f0cfcdd6ec9e9f8c5632680934",
".git/objects/13/58a440b7fb0dc0ae2ffaa0f19c6d1b9f63b47e": "2abc87e1af00813d22521df1919361f7",
".git/objects/14/dde45c34e4cec6bc907262393bc3f6150294a8": "941b138ca1d57b25c2dee8ff40a04585",
".git/objects/17/1db0ba81b9fc62160d72f393e6cc6c3cbf3dfa": "f6835ca978c07a70b35bd2d5d5a74dcb",
".git/objects/17/2450575c9ef59c710598e3d802587e4f377d8a": "e2d41b44aa408d59bc52c4355a71d9be",
".git/objects/18/87ca4ff2274572365c6a72d9be0d270100006f": "eeaaa934c9951f02456a6c839687755d",
".git/objects/19/9ace9a166d4065fdb6d57392f6bb948ba330ff": "78e1535d6097df18970532be401b2567",
".git/objects/1c/9b6b5f15e938ced68fbd13d488f5eadb582107": "dc34cbe586020e59d8a9a445457302e8",
".git/objects/1d/6efa988f7df6c7ac22685ae5e34acb8819a22b": "fe82e02cd43632e40dbefc7cd028190e",
".git/objects/1f/8fe11a99e7a758796b70b3fec99c1eaa49faf7": "83f263b33f06e2817250834ea8843f28",
".git/objects/1f/c908817674f59f674fae04690289c8bd5f0c8d": "38288f7410563031356d401cbc89b2c1",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/0e4b3a88ebcfd27df35932d7e7397debb72b55": "688534258d823f9d6c26942e6521791a",
".git/objects/22/1cbc0aa00cb6f274a6c152832593fd47c93cc3": "66a2b748ec6155d053feb074edc3aec9",
".git/objects/22/9dfb86776eb79973f8106957ee9fc28f9a1f91": "6f2863239b3e31167fdedeeff7153f72",
".git/objects/8c/87465b4507d255a6d4448ce0a60872c64fdcb6": "546bf6b625deafebc70970e599817d13",
".git/objects/8c/b05a712f5edc202aef99e73b68c51f3d52af94": "436fd230426927a6f3b4fc0560c22be6",
".git/objects/8e/21e73cf97f98ca0f45e86ce87491914e946980": "1e4ed9c9238131c4b60f0c393a61f1bb",
".git/objects/8e/c719e25e86403e7d9c54593ca4cc321883bc2f": "22170480bc3798c856aca7f58e225aa9",
".git/objects/90/860f874b8195865ae442e82c2db3f3fd052708": "9aec9e8e29ac0ff7e5ae6ccf1371c234",
".git/objects/92/8224f884da4a5d0dd96fce4d9f787bd08d1f1b": "400619c16a8327b1e00601e7d007a82e",
".git/objects/92/e7b2f2e38e95deed9e09b310c79c967b317610": "fec72822400caa8c6552aa166484cbc6",
".git/objects/93/b2de6c55512aa80046f5cbe6e511fb9a47c61a": "0b37222dcb1f2bbf558ff9489d329e78",
".git/objects/95/96a8cfe5e300771676f3976a8e1b34c5b2638f": "6499dbe8ef56d5a943e674321ca356ee",
".git/objects/97/3a2709074fd9aa23ceea6a5b13c99331c3a052": "2b16c95ce6e5f448bea4185e0aada7e0",
".git/objects/98/9f0c7f76cbdb9c09db5fb711f44bb39731ac1e": "ea82533e12644be2a39cfbe5c94f8ad5",
".git/objects/98/a3a01785be7f921bb380653a141ad3598c3306": "33ef55cf7cf7dc95b73eb4e16c7100bd",
".git/objects/98/cfe707d90f1d8cdec018321bec747f8533bfb6": "3ed847e75acf759e994871bd5ea176a5",
".git/objects/98/fe5169fc61819d4c34493fa275fe07c7c40022": "621ca56e99ed024959d4edc0280b918c",
".git/objects/9a/2e20a7ce8371bd68cc167360eabd4e4eb063bd": "548063e540e0bfffcec3d128846f8e22",
".git/objects/9a/53e567cdaa6fd0b62646e3f46af9a8ff5e1629": "65f2bb3fda80b5d285df223d6ebcab5a",
".git/objects/9a/62ea7489c2e6720c5156a04d411bd14d062f30": "2167a90ef883d4021303141bc2c5806b",
".git/objects/9a/c7ddcd75206067fed8373dac89722713fefd44": "7443cdcd57c8f46b15c4b61d3bd3b66a",
".git/objects/9a/eda8effd84fba764bc51664a5945b3debfba96": "7ec4177d9ee73bce448449df08403d1a",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/9c/bdd43c610e1f98be256cc128d1409b1b3973e8": "76d820babf6d353c2a6754718fe9e445",
".git/objects/9e/b8a27dfeea2390adbf50d9e92e7ab21359259d": "902861b98acce4e15259d42c4fd2373d",
".git/objects/9e/f463193effad42680d6c82e37ad5d1a7094e9a": "3898bea349a08cb10d03a55950c6b5de",
".git/objects/9f/d3fc698ec0c2d024cdeb2553b51bb320baf72b": "b63f6a0379218e80ea733642b221c34c",
".git/objects/a0/8fd505c9cacb8b91c1952c7d6a4357ca7afad7": "cee0238ffe0582cd2e452c6c70dc16c7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/449d34d80366b31bfbdb114807ce2da687bba3": "6854853c2cc5dc63f279522b96dc8e5e",
".git/objects/a3/3b197edf2c29c73906a310a604a7074fe8dd91": "589091771ff95994ef4e04a09fe76a26",
".git/objects/a3/d6ff6da0284ca8fc3a8e2d0bb709a7346a7091": "78cff14d95906faadc94b94e2c6818eb",
".git/objects/a5/128ea2e4eaa5f7cc4aa3968f82653284b646da": "77b860154922c3129cf62f2c3dabee80",
".git/objects/a6/28472d98c9c30419a510605572991d4f753077": "0a85725ccd288963b0e31f6a1e055a30",
".git/objects/a6/2efe53def2c3c48df6c01e63226f0056966a96": "dc5a0d9e8cb60ea81facd51a7206b0e9",
".git/objects/a7/3b6880c43d2d7dd278d206d5b455c0f837181b": "ef0435cc074a88e339d119673e0812f3",
".git/objects/a7/cd10d0c70ba19000fa28ceb280e821eb46a9cf": "db339f6e831c14493b1d93161178573e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/a433bbd1d429cf469e007e013ab99c9c3f271c": "429835c18482a7f9a505dd26ee78e72d",
".git/objects/a9/4efe1bd61df62e6a9ee8f169ed38a74dcc707c": "b004d16dbf2cd648c08e2c158328f709",
".git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/4663e1d2c8db12b2587f4facc32c28c13ed152": "59306c08550c320416c8690ee74fd16d",
".git/objects/ad/4fa8a6c14d0e15625e138e3c9db4f8ae348dfa": "d8888ac16747e7bb5ab2c1eed8565fc7",
".git/objects/ad/553c79d0e7a7abcd6077e00138e87d4ed9cedb": "dd5997e2c1b0605e8749e450bf7edd4e",
".git/objects/ad/c808f3832c629676b9fc962a842a4152eab5ca": "ffdb5fe7b72d4c1a7a1653e69a66ddc0",
".git/objects/ad/ff84004357f81b48bb9b94a4c740695b6ef086": "6d1034b191dd43876e905e89f01d7138",
".git/objects/ae/baab4c11795e277a598f3fbd772262c3362190": "24045b5299ce5757d671ab7b557b4ce0",
".git/objects/ae/fef8e98da25b1f7d06b7184ff196c6db1bf6af": "ffa41881c378a4d4d56c3be7bf8698d6",
".git/objects/af/139d97df238d74ee3cc639cc9c76fcd566b25a": "86d6375afce9dd5682b397f102b1ae7e",
".git/objects/b1/2cd1ad6e6bac821aad2f6cdc72a47088a17d73": "96fcb9ed3af99a7a9e4006e54df760af",
".git/objects/b1/d946bb081f7433ad99583bec3db253a15a60bc": "d6a97cb51c10ce9c74ebc4f4c7b328a1",
".git/objects/b2/5be41b7c3773a09588b73a1a8d8e023780951f": "861e9df2a681b1be9396ca6e51f26e85",
".git/objects/b2/6539ff07e572943d139c50a75a566eca30bf9c": "161e07c05f1247c1160d0345272efecd",
".git/objects/b3/09e56957c1b0b5f014f81a89eeae526529acc5": "f124014baf9bec1fb61bad68e4cff906",
".git/objects/b3/51b9486a7db4c134a1bea653a1eb007ad68d77": "86824343721c6d312258b07eba1e25ed",
".git/objects/b3/a74ad54db0507b630efe2077f1bd1d4e6cdb49": "7651ef593bc6d1d0c2b67f0c573ab6c4",
".git/objects/b4/e9203938007e77ccd95be56f49151d897cd143": "647e8e17fcea7308b1245d1a2bed2a32",
".git/objects/b5/1150a0144aa3fdf4a2365e812a5ed4c788d22a": "3b98eb44f471fa41fabc1aaa2e1a147e",
".git/objects/b6/44296d4bf0a9df9e84c2d37830ef6951c26743": "ccc0387812cf3bbfc23eba5ee61f28d8",
".git/objects/b6/5982e8d789f0ed9c40b0ba464a0c376c055ed2": "7f0dfae5a5ddd48454d645b631cf3c92",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0125b5890d2bf766bf5307db0678b1f00c7840": "5b58dffaef67c2f099a0bf364642f8bf",
".git/objects/b8/09c3c3261a96fe04a2f3663a0489308acdced2": "be4bc4c6c7a192c6e4b23605c7507df2",
".git/objects/b9/2f9493fe1b5a6ad85179aa48204ed672a52dce": "42a12874f7ffa799e21f4dd4bd49d094",
".git/objects/b9/4d41dd483ea6f999f132a484f08eead7d9df47": "31cd9ec6dab635656d99c737f5bc8f11",
".git/objects/ba/18e4d160c331fe7d812daac492796a4d127a36": "c16bf62b497f35223846fdf0369babbf",
".git/objects/ba/a54bb726a2ed13b8db39883ef2fe266312cfdf": "3f72e28b58e69e1f9e16492725b56487",
".git/objects/bb/91247198193e7a5c9f9951ebe13fda8ba74ce7": "49b5804427ca9ceb6d826651014c3542",
".git/objects/4b/4dda4053048f3fc6361ee02862781df947a3c8": "08d6c911997191afa79e23b9e8e7ada1",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/8fa3027569e3ef1f3ac2b6224fe88703fb9a1b": "023ae7a28e4a4436b3d6d968ef587e9c",
".git/objects/4c/e02439acfd23ee0524017a2c66db7c4ba0828e": "797441039d4aaf73e4182223e20a2fbb",
".git/objects/4d/db4a9d6a6994c07181060316500c34ae635036": "b9e6deee8afd1b1b3f62284a46eef9cd",
".git/objects/50/802ac1483094b1909105122a5a5635f2caff2c": "8bd87ac80a9e288707f0d0b6b5fca78e",
".git/objects/50/cf0ceaf3fe4f84246e58f4fe5add58d9fc7e19": "53d7b055f9314e24e0a13701a36b7195",
".git/objects/52/a4fae81823859320fb9992b4c46fe22f2124bb": "34c7de2e9095bd4c98328df117da9e46",
".git/objects/53/9566fc6eea8c9d76c5b3e67e994ff751816a91": "1664c303d6dfa8414c569bfba1ca42fe",
".git/objects/5b/fcb2ceafb85f339a674a2174184bddedec62bb": "3f13dea6f87837f12470124d93754567",
".git/objects/5d/212cb2c3939fce2218c03e2bb78f7b22d69012": "45cb1a5054784eb65e69e23645dc9d47",
".git/objects/5e/2d8dd44d9663e6d9cdd61580e0d2910394ab59": "2255d3b06febd089e129465294d9ed4a",
".git/objects/5f/57dcb1726df48f40fc244fda5d52def5234513": "9ccbc3ffd7fdc908c550db5f0c7bf34e",
".git/objects/5f/8ded95f58302f52f13bfcddc847ba75921f8d2": "b92a3a77e80c5f34f8d61afb6c4e0691",
".git/objects/60/10a0cfbaf1bae882c43589bf9722950a48d957": "25f399b6ded8d6b023aad8e1592d4b87",
".git/objects/63/cb2babf35ae526694a7f4ea3c26b2f65fe242f": "063c655dc706a690c25e222307ae72d6",
".git/objects/65/88119bf14af7299a2658715648b4379166e09c": "6948e955f308ea79dd90e4c0b56a2789",
".git/objects/65/914c7995aebb8471e7362f6663b6d8a70001e5": "a66acc62b7511351c9eeaac499448741",
".git/objects/66/17c9afe2b8b9b9d60ed2108c375b7b03c02b79": "20c274630ab149706dee99093277b293",
".git/objects/66/7f6c8ee3de73780629bd92b4ae8f10dc95833a": "42c388e8d15e3f24c0db92d3c8ecdbb3",
".git/objects/69/60f035e5a2dd91f201172c9e0804b54da0d71d": "4a33895cf0650556ac6a604e97dde932",
".git/objects/69/a3548178819e5f368ce8e64c7d63f6ee17243c": "9ed70c9275a3b6ed47f14348a4e7c797",
".git/objects/69/f2942bc64bed2fc9f57d0bc7d4d64d688f5933": "59bd7e9849152e300ff17ab490bfba94",
".git/objects/6a/129c6e8d8774bc5ae7fd98fea98b33910fe7ba": "d06643fb86735be536ad75c03490d44d",
".git/objects/6b/8dc70db8a5890037c5189dca7029d1aaae4bf6": "66e5634500751a2dd59b0a35297bc314",
".git/objects/6c/112eceff11fc2733c12701703b51ffe9d21b8d": "52acda5c78ded7dfa868758d5bbd2808",
".git/objects/6d/89a317069ccca92631a66081b5b46216f33e92": "2c0969d48e5ddf92b4c6d84835e55bb1",
".git/objects/6d/d66586fc9e0c654fa21b1013a83899e34c6023": "48344c6d1b7461b9f8b2f1f6b00923be",
".git/objects/6f/8de8e9f31ea1d0a8c1f667132e007862812d26": "2b42ef97ce258d7729a7d58b0f3d5397",
".git/objects/6f/d15fbb8bd3561cf4fc21313b94bcda16e7701b": "4c420baad52eed4c57783a3c45531924",
".git/objects/70/129d66744badb4ef6859abeb6b1b637e3b9b1c": "a88f03bf3b6fd6e8a164d6219d46dc52",
".git/objects/71/2398b3c562bb369ebf91f504d4021e650302b6": "1dfa7e6e0bcb5f6516de1f1e01281626",
".git/objects/71/c1d1115cf276c500872c6f9cae8fbff0d8e69c": "83a186baf84449bf0229fd7a789b7633",
".git/objects/72/957f607a33aebab57dee9093c7f84f525d57b8": "9176869697777ef3e50a99122f433890",
".git/objects/74/629113a69dc6c29dc8311cf8714a6d0c5b49b6": "246e19f5171cedbfd8f984488eacdcfc",
".git/objects/74/756e95bb13e732f05d68d36a6cd9ca4f069a4d": "402c8fd2b700c279663cb58b5dbacb0d",
".git/objects/75/47774debacad5190f00bf04196f4bc08f9dc52": "3e00f28d4f4a88859e6cb9706199df49",
".git/objects/76/d66382001b92c4b91e5ad445b2eeec0383c818": "b67c09538f9f5bd645ea5bed86d78f4d",
".git/objects/78/6a482b579ff3ad88b779147d61a26ae4ee5353": "978bf9131dd80491e0db5f046e33614e",
".git/objects/78/e70248a8029f0aea302c9616b0ca961ce23280": "ea38363c7380f5bb025e0b74e0c07280",
".git/objects/79/ae9ee37c7706107e0f5fff9887fd31ca5f9564": "b478e2d97fd6e0aa343059a4f17cd293",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/37c7e13f61dab4b485aea6eea340ab1fabafda": "07523aba4e1e38630f2ab33d91551c79",
".git/objects/7c/b98bbfddcb4b34764ef19dba54813783e42b0a": "eacda88d4af9931f343e80da460cc652",
".git/objects/7d/3342d68eacf7fd093d596059c4952aca06b900": "a7eb11c1c85fac467e964b602e96118a",
".git/objects/7f/8d63e6c8017eb165dc12b36d267117d749d812": "cec4aa69985609f2aa21371871093aba",
".git/objects/80/53ac0d791cd7756669da26a52e109c7f6cd977": "226503dbba15c51e5000880a050b6b7a",
".git/objects/81/bd2b05a8794de0f46f7b26b9bc37cf6bcfd194": "6c505f8ab054d11b603bb380e36e34e8",
".git/objects/81/c9b930611f1e79a9ddee83b496a51015d4cc36": "f0ab1ffc4dc27a1470e842189698a3f4",
".git/objects/82/56b7493f6121e00da21673e3bab5df6976f167": "d6d201a162927391e9d2efa39d577cf2",
".git/objects/82/8a082ce2180c7e9febc99a0e4a4403c9325d83": "10440c127e9b1e17ee80a586bc2c6885",
".git/objects/83/00210bfe545bd2ce3280eb9ca19f2428299894": "2a5d9077d08b890cb4afc868f6401358",
".git/objects/83/d1794ea4663f1b09996147f239df69c61f22de": "81dccadf6756220710843855c2683005",
".git/objects/84/196a41f67b1ae3ab27e9a319a43e740e6bdfc4": "0c6009dd491b15cfca5ba1c23d3aeb08",
".git/objects/84/7666fba51ae089c138503c96eefdb0065ac10f": "7631f221b7b6ba5d5dd25c3e570d4009",
".git/objects/87/33e85bc74568ce5281a01fd9ccd5be173bfeff": "052cd79dba264cd10160eab118ebd11d",
".git/objects/88/12980b4bd33b71f9f2a5350828d68936ab9c20": "21c9a922762c01f8cedfb09056a17bf8",
".git/objects/88/27d4a7a4804471ef8e29b197c8c2a064ee4972": "d6ec0e88b55e8b9c604b5e06973b2a39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0c7c1908cc779cdf7aada7c6324b4548173879": "231134f796035f2325b95e5968b53760",
".git/objects/89/d48a8ac5b1135f8daee8d0f3b282e9382ee4bb": "475dc841392b7800dbfe0894d35aed4e",
".git/objects/be/655813e1481e7acfe7d8f6ad556cb8c219e1fa": "8926b54fc8390841e81ceeb6ab8dd3f8",
".git/objects/be/b3d0e938de0f67298f2b6b99576344503bdce3": "7268e3d564070cc225e7870559206b82",
".git/objects/bf/80c97de1c4a3a6b4aaf275dc4d5d0659626e02": "eadfaae6138c9c02b9224e13776bb84a",
".git/objects/bf/a3a76869d91078b2f159d8d1308d0df18085ea": "68efebbe29bb8a2560d823b8ca7784a9",
".git/objects/c1/dbcb3027a7c8b168cd5e093ff23c595fe3657e": "9554877e91cf4b1f72c56d17bd506940",
".git/objects/c1/fd839df6f3ea82c3a7aca53a643d5c0e864ab2": "3e1612d98162973398c6bbed4285f871",
".git/objects/c2/1ee21624c67f3bbfdca67053eda0676c095348": "30dfc659fb539ed1402f1852ac280966",
".git/objects/c2/959505c7dedf969c324a442d80b41a3f7e77c3": "cfb03f7fb8255078c7a617a3db988678",
".git/objects/c4/69b3b6ab21f1c9cdcc4a22ca5e3581323e4f53": "0fcb4e2e7dcd4666dcef67cb40e89922",
".git/objects/c4/bae34b325c6e26367ac061f1186cacad2b083b": "8a49a332cff60518f0b4250979851145",
".git/objects/c5/2598c7aae9374b50c508b66d020f555546b6be": "ea179f3ad3ba282fbec2757c337813a1",
".git/objects/c5/503bfab3cfd652ccdc12efd3c9806c4a02fbf6": "7defc2188d22b1c8da24e907c314d75d",
".git/objects/c8/119a4b08fb2c081a5bf17da05398a401a7c4ff": "648b86cdf7afd5eb7c2ed2e1e1829fa3",
".git/objects/cc/6f2e8809e2893bdd1d0e9d87f7305617bb878e": "779ab54a6af4f4c3abf1d3fe30683a01",
".git/objects/cc/738c8f345d75aa9cd9bd439a21dfc49db0944e": "67604add48654477e2dc785a276ea7a1",
".git/objects/cd/5dd534825d79e57537721a49a1d7e19061e27b": "2d7b35718a07c395c40f6e8aec2c8d4e",
".git/objects/cd/d0bf1a4661d32270a7fa6359e2ca76d2478bf7": "54df8984ab41f5e56dfe6b1df567f492",
".git/objects/ce/76ab6621eec51ec8a31fa5952169857112ee2b": "7e352e0b9e8d8d91f080e04afd5f8339",
".git/objects/ce/85d258d53c95b0000a0908908f04f6fd942d11": "3336c7483e16e931288bfb8a43046f21",
".git/objects/ce/dcbb53dd69027b0098068b42977edab91ecb75": "9e6a63b3527a2ee177082b1f1b0d89ec",
".git/objects/d0/7b0e9df98a45698befe0acb478ef8d1c33d2f4": "e6eacababc2568b5c9ea9df48da9bc81",
".git/objects/d1/14ff274547c69d3824285ba80366475aa75bea": "71b40ed01104bfe21b25d2ee9936b9f4",
".git/objects/d1/b05b3d1703c7af35370dca4a502103fd2b12c6": "c159124fa4d73546ea9a94faf4c51bbe",
".git/objects/d1/e7f39497e3cd8e2d4f665dba5617fbff53a7e1": "4d1e1a2ef8a903abca586cf49e947203",
".git/objects/d1/eadb5c95e151c5316d655b372d4f0ee6815de4": "0581e00064a4e8a949a641c262c425bc",
".git/objects/d3/af6982e64c6833d7cfd878788c288c38dbb1ed": "086a005f9ca8d3312fb8ab5927ed64ad",
".git/objects/d4/52a7543bd763475a78917645fb5939144ad547": "be950ee4d54e2d17879adb2045476947",
".git/objects/d4/810a2f131ae01a26d42e0bf970cc09f36cacde": "46e50d2750c7ee73454beeb4fdcb1105",
".git/objects/d9/18911027c62225d1f36a3290a3a488912e7c7b": "d57fb5326697ffdd32d85ed4b17c0a22",
".git/objects/dd/8619077633722eb338f6b16c71bebfca68452e": "6f9166bad70e78258e273b9eb404d287",
".git/objects/dd/c56e5980f65d127cddc3b8ab0af8b9f457778c": "90ffc0023a44a8f48c8a2a5fbe35eae1",
".git/objects/dd/f8fa6fe2df8655f1673d3997f726c2c93e9e02": "81cc9af8904cc8c60a5685c944226463",
".git/objects/de/f29e54053e33da1663e96f0ac9a581fd1f45c1": "f35b802b89012532eafb628320b4b89e",
".git/objects/e2/d2f2754daf4709b72331bab1a06340591d667d": "d663bffc99c47b965c7bc3e819e554c0",
".git/objects/e3/2bca4c190ea07c995d129e8e0b4d66b9489d6f": "90b0d15a15d798b26b16849136e1f553",
".git/objects/e3/f1035f3520a8a0224efc34da121c101b9f7810": "6a69a6500ee39f0d05f9b3649f3d4c4b",
".git/objects/e4/61ad15faed279606dabd8fe70c076fb37fc14d": "6f9f4665a02e400b69e553b8f2605dab",
".git/objects/e4/6deb14763c8f3ef6c2cd6a68cda169036f2acd": "7fe9c66c2ed91a68ec167da46aac39b8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/3d7d775f194404fe4e9ee7e6078bf40390b4d4": "231ca7ccf146199e28b26bb05a7d8b34",
".git/objects/e6/63e07a7ca7650d23ecb9c3b4082607ebe2ed2c": "82bf3963e1f8a2355757aa992c30ecd1",
".git/objects/e6/dd9ae7bd14eb98ef2c92e4ed4306b29314dceb": "83c82b8467d793df7e21119b40345af8",
".git/objects/e7/a8565b32fa9e71732f3e68fd1252fac0559a9d": "7f5210647872fc2d61fe1895bd6bc78f",
".git/objects/e9/67c2beae14192e3ac00d421d92c86108455e2c": "b54c4f9a648fe9725de79576b6529a89",
".git/objects/ea/10fead4d1e53e0878756c2b6c172dea993414d": "9f2189554c9a62d22ac77d42f50ff37b",
".git/objects/ea/82cda10705e774fa80c3dc2b6ae3ae25e8117e": "e0e977f1324e8d31cbcfd7657c68f76b",
".git/objects/ec/0c030b986ab6adf733125de103821adefa3bbb": "372958ae5168c2c730b267f9ce02efa8",
".git/objects/ed/2bf11b5b5ab8471a07a8334c1b850533622183": "78e7b7078097189b2248fbe505d366e0",
".git/objects/ed/ef29c8b29b525e61aa829c2769c1f1530bb312": "47555d9226e49bc09f8a1fce5d088165",
".git/objects/ee/222a66af62f448f2a15569c48339c5ba8f410c": "4a35e795b44b607890a2d519b95c2520",
".git/objects/ee/61a4ad9bebc5435bcbbc491e9576b529d65141": "cf378900d8df280074e038fc2727d031",
".git/objects/ee/dc38670cf09176ecb7427c2266e81f2ca0869c": "52f43517cd32959a1b4ea58667467bbb",
".git/objects/ef/42b9ed05fc47dc00e555adcf397b0b6c9d626a": "1745a59663348912de76935dff36e4f5",
".git/objects/ef/e23e4b02a82dd1cc0ff5f57916412c1d0939d8": "5b60791b9df796cfc889beaa14b2f735",
".git/objects/f1/39afdbfab5083973dec29e7b2bdb6193bbc567": "2ec980492828a138756d63137b580d0d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/5f9f9dc0d7494ca6b04cf39e65f3a422f8808d": "b707e5e214160ed481da25bcdbb65e7c",
".git/objects/f4/c3eb63707ea55833147b4366bb609157d66a01": "8aaa5d7bc5157159589b21dac557eca8",
".git/objects/f5/50946977022edc5159c94b8f0db913d1ea406e": "6a150ac265e77ee4285f577cf45b3bfe",
".git/objects/f5/89b01f1945607c18f3620f0b8eac1ef04372a4": "8abcbd9a675e44d0323a0f91677d5019",
".git/objects/f5/d306e83894c44fa6ebd151e8a0054f4cc8dd26": "0ed5006cf0260eb69704b79fad548092",
".git/objects/f6/7761529afd0e3ebcecd9ed7882d8dbdd26ccfc": "46fde14274609432f68732c9ec227f90",
".git/objects/f9/be5ce8e26040a88d9f0c6ef2f978ef8a2187ba": "3a5e97d5dc88813ad59239f970ea7670",
".git/objects/f9/f40f4286a4e3fd48e546fc107b6d757fb1b509": "d68e03fc9c6705bbe6e47f71bc7c8141",
".git/objects/fa/c2e9a2bb728019eed32f7d59e2e3e2608ea9a8": "9a09240a863419982e24c9ba15d00133",
".git/objects/fb/3f88f2ef6c20d888686b1b9f4fcf0f551906dc": "8b899a32f336a35445ee4926c20bb3d6",
".git/objects/fb/99c01ca1e0e00bdf280fc3fdf17cebc1073e2c": "ce60f813b2265ba1a0cebf1fc27189d9",
".git/objects/fd/7b1085917259d62356254cd06b86cf472e4641": "d5a804bec93e62cdc48507dad51e02ee",
".git/objects/fe/4621fc4b25b6fa1a6ca4a616c9cce667210a05": "635c3bbf87553e31534ba2f1a3c09154",
".git/objects/fe/c93a41b605b3e9f65bca281c87c646ec89c2d2": "620cc75671038cae7b2630a93a9812e5",
".git/objects/fe/d0a9a3024367e73704c189b56bf1401d263e2d": "b1ad1bc39031d5f7ba16f617a4bf31fe",
".git/objects/ff/a4f10185001f6089bc8fa885c4ce68f6c1e239": "679ad59648bc04cdeb53b90f0ddc9e3e",
".git/objects/26/db9fc0da1108c9c6ca4b2f423bc6796ddfe765": "faf4b61f42f14ca913d19511eab0da5c",
".git/objects/26/e691ec4bf0f9c97078ebb6d9a83c7450b52fb5": "909a5ff89b5234a2d8a25298fadee5f9",
".git/objects/26/ec8e7c20d93d00235e3aad0e3bb55a9ac20caa": "d2c53737cd208e437270033f3c6c1ab7",
".git/objects/27/5c82eda1ccc01c7575491b8a3c7d6097171097": "2a5d624493ec6cd23bf6cfb196e3601c",
".git/objects/27/e9971061232aeb764a7a84bbd6ef98a347625d": "6c5c0cd01cace47c96b7b97ed527ae75",
".git/objects/28/127d2332c870e54e217f1698b25d81ab4f9c9c": "552dbc6a5bc3c8218bd7ba25c0701fa4",
".git/objects/29/219c049a011aea43bff7e45d06ea558efbe909": "d8b84d536cc8015039e289a6cdc6e3a7",
".git/objects/29/837e51f5bfbab36079b9c628a0d68dbbd1153b": "b19eecfc70c07c59742c036c8883b553",
".git/objects/29/fb516b0e5ead9d769636718092a7fb67461da6": "9d636cd68e06320548a7560e2bc7d1f2",
".git/objects/2a/7b2c7cf553e97e829ca2d7bf88a9eb75f77ff4": "63e7000654a4462927461890f0c3025f",
".git/objects/2b/07121c6a0b347a1eb114237608e3a2d818acad": "ec1319920402aa2494fb2456fb396072",
".git/objects/2b/b95143e7ba06e97890d4184c7735ce3315aea0": "73b7b14f166a46c4e0da604e48e7d40a",
".git/objects/2c/1ec25a000e3ddd1c18ee50639cf203de36377e": "42aec26ab7ba1e2fc5cfbc5924e27fc4",
".git/objects/2e/4925908843c1c7728623527bea5198699fe602": "6f878a8d26053b4f36a46cfbd345a2bf",
".git/objects/2e/49bd530148b88edc0cefbff038821bfc10025b": "dd9e6cf9a78cfb8215df589b3d57db55",
".git/objects/2e/d751cb92fd1aff06a88197efcf43d21416a426": "6188540f67e78f97c44b36f5ee3cb5d5",
".git/objects/2f/48a30578ca1881d717beefa550a1b5752e98cb": "1602bbb56a3eec53dc8cb3b59ea65c30",
".git/objects/30/86172edb0b70b1f819ae5ed9284ba39b89a196": "c32e3764c6b0acf03c6577e4f9965e53",
".git/objects/30/9fc410e90acec1df838bb465b9ec593e32be8d": "bb2f4e75f87b308dc2d71324af50e366",
".git/objects/31/4a1283a597000ea56e90d2c8e6429295164e7b": "f821fe18ba8e5fcfe7a5484a7942a72c",
".git/objects/31/854a3fcc29743b7b08b4ca980cc4d30cef2223": "d5e49c052e0334c23fb2b5ba5e6cd971",
".git/objects/34/1efba7c1a851c0d174866eb4e6049059e9cee0": "af0125bdbe1db01fcb844813201b136d",
".git/objects/34/6cabc48b0d1c99241511349061f9f40aeff52c": "90df922417e463b0c9a5a4eebbae89b5",
".git/objects/36/17d26f79c5274656a34eb53030639c6a82dc2c": "0e3cbf8a647a1762873670a863a288f7",
".git/objects/36/342158abec8462aed3145c0598a0efeb1a58b5": "3c13689499ea8ee850f0cf5eec3fbe35",
".git/objects/36/a2a58ea3f5e31ac6b220a7285df3683ce4b68d": "c585599f8006a346617bb5eeeb46ef86",
".git/objects/36/d190412e3f1293605f70dd0fef3c383f4243bd": "69da4bb3db3712f8aaebe3231d1c6f5f",
".git/objects/38/0ca7022e947b919c20cfd380cdd2f90b8d676d": "93c6f8922fa162bd9ecc7e0ec712f50d",
".git/objects/3c/c3e0730eef262f594c0b822ed94bdcd989d5bd": "e8f1155faa6cd6d673d09910658ecb85",
".git/objects/3c/e99ce55bd042fb571f95f86c58f67a4bd6d0a6": "e35b4e7587f31544ab7897eb26794da1",
".git/objects/3e/0986405e56602665d1ff6dc559e24133213a66": "2e4c25c12c76ea312020e5f97ca23463",
".git/objects/3e/22c1f0a965e696214b0c204c0a05c94dace64b": "f340db7694b9890511f344852170dd48",
".git/objects/3f/2023bfaa605bfe088259ba4553d17662df1649": "83104508bb218061c19d75b89e9f3d3e",
".git/objects/40/73be595ead6d29a5a02d7edfcd0ce2a1d9b6f1": "063eec02d67e3147a7754d3157cca229",
".git/objects/42/2da2367287e779fb8913977a4336377c1395e5": "13af74f2670372d1b911fe06a81a97e3",
".git/objects/43/0575447fd19f32fc1f801a1d85781d9f74397d": "92ae29a896082aac67de9c541eadfb98",
".git/objects/44/a9afbf4c2c9f6024dbf81ae1303ce0dbc4ff96": "0658c2e29ddd01de4a9b6a53b18b1bdd",
".git/objects/45/b184ee71dd97ffe4e3c8ede0fb91184f7015ba": "814e860855c04d780bff91adb2444a46",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/24/4dc8337b4fc06680852aa40dea22e376181293": "c069348522b4d6ce7336143070370f43",
".git/objects/24/cacf436c53004069f9f151281fa8b52439ff2e": "c69c7a8ae406f9a2e2a35c6d05623744",
".git/objects/24/dd649f4e61fd57bbe836a419de728498e73bd5": "a763977040d8e772e5881f9b3fa4e5f6",
".git/objects/24/ee7f9788a2a61a2da7f207ebbfdb6c6a055ddf": "7b55d6dbb0911850f652ffbd213ede36",
".git/objects/47/1beb3c025b769f0984a052164f00aaaaac4b87": "9672afe8af8b76e557a092d42e6e6e6d",
".git/objects/47/4fb82b7563f4b68c33e10f1d59a53dd17419e6": "b6a98bae5aadf119e6b64c84c67fddbc",
".git/objects/47/f4d3eaa1f0f6520c5030350c5b764cba38d1c2": "131cf33b6bf4cbb4919544405a9b2270",
".git/objects/8a/794c2d0d24e6637d7c336937e7145dad7ba932": "27ad047a7652e865f52c22ea11608e0a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e746f745d091f7057f8f8815e307cc9c8f9973": "7b7dd433115c55f4d4fb5a951e7eff17",
".git/objects/bd/c3746baecc4ab732aa8764ae42e67418c5a2b5": "332ea30e7b06d90bb3512f3d3f573574",
".git/ORIG_HEAD": "68d1b7628619ba7e6558a38892f110b7",
".git/refs/heads/master": "6d1d267c70091b62c325ba1fc65329b9",
".git/refs/remotes/origin/master": "6d1d267c70091b62c325ba1fc65329b9",
"assets/AssetManifest.json": "f7e807c737fdecb71c37a5ae1921740e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "971bf8ca394f8296a661c4102ecdbfb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/res/Cardgame.png": "1266d1c200ea660705d7dea8828249fc",
"assets/res/CleverConvert.png": "5d1b7a4ace72b5fb3cc8b2913bdcf39a",
"assets/res/NYC.jpg": "4fbc6fbbb07d6b0df2b3cf771c118c80",
"assets/res/PB.png": "c0164b6a28d29d17fa415c72171bd57f",
"assets/res/PB.xcf": "740b9ac3fdc4a552cf5c50d050fdda61",
"assets/res/PBCompressed.png": "19d1f2e4b42ced69419c2e48503accc5",
"assets/res/PBCompressedFaded.xcf": "67a537d8280127ed4f86df0797b28a98",
"assets/res/PyNN.png": "77310fc760ea9a46981ac1cd0df42f27",
"assets/res/RGBLed.png": "c8fbdf9b5a0d8de5f3fcf39ad1d949b6",
"assets/res/TUM.jpg": "81652a0ceba55b2ebed9f88db0a51740",
"backupFavicon.png": "5dcef449791fa27946b3d35ad8803796",
"backupManifest.json": "fd6494b37022485e5afc7fd40db2392b",
"favicon.png": "e35788de4d37b8a911188f82bc655d9a",
"icons/favicon.png": "e35788de4d37b8a911188f82bc655d9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3b5a374da2ec75fe00039b797d775f61",
"/": "3b5a374da2ec75fe00039b797d775f61",
"main.dart.js": "8ab9a80389b56b66faee9d67b33487a0",
"manifest.json": "c580e06a2f19677acc6181f9793745a2",
"version.json": "281f2a7b1646c3dea6feea25f04fa556"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
