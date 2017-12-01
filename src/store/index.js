/** @format */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { blocks, route, transactions } from './reducer';
import consoleDispatcher from './console-dispatch';

const isBrowser = typeof window === 'object';

const reducer = combineReducers({ blocks, route, transactions });

const storedInitialState = {
  transactions: [
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 488,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 298255382,
              type: 0,
              addr: '1NmHqV2MYcU6s22dRhHhr6yxgEpLRGD2un',
              value: 37000000,
              n: 0,
              script: '76a914eebaff68d6b6fa96f2afc2015969278f91a4e6e488ac',
            },
            script:
              '483045022100949c6651c8aba1b70e65f8ac427acf13c39a1294cfe8276de2f5c86f5329539d0220547cd3d0e0c644fe50e2d3353b997b4f7fbbfe76e2e491219de0a27c108170cc0121030685af4f5ea6b9933d5c32cf76509953b2ca640daebbda8b2df0f1488edf256f',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 298382542,
              type: 0,
              addr: '1Hvkydjoe5LwMzY9D6zepCCuarfPfDCv4k',
              value: 11378700,
              n: 1,
              script: '76a914b9acc4a891dbf6c1b0638282beae00ce96530d0c88ac',
            },
            script:
              '4830450221009f36508894c2007867fbe810516e8d1a8fd37319ac016d1389084f41ded3f68c02200b37d792e79c8cf5913182f2eeb0507df4e328dbce3108bb467b42ffb595fd41012103dfd086e7d1f6bf8e12210272e8bbce9f56cf7f4af31e6db5a9ded5fe81abaa20',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 300948445,
              type: 0,
              addr: '1AovQQkzAb8YFbjFdeYN5cLPWuiXpRNrkY',
              value: 11217900,
              n: 1,
              script: '76a9146b98d86b618202b495eb01dd0745636b214254dd88ac',
            },
            script:
              '4830450221008c39fb1b2023b3d7a51a7cb622285b8d766287e217f5f665b5b911d5600832cf02203cca091abb5485d21494d72e14183debe828ee3a372cdd085b2288756b70e25901210393c4997106c10721566f50b61a1dd83ce5aeb378d2a4023ce8e14ed770108a1a',
          },
        ],
        time: 1511024112,
        tx_index: 302378386,
        vin_sz: 3,
        hash:
          '76a6132849b7ca7da938adc1ac0c0ecb4024f753bd95a6d71a308e609d111b8c',
        vout_sz: 1,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378386,
            type: 0,
            addr: '1PKMhvEK191cVA3QVr5T4oKbKRzhqxvcYs',
            value: 59490000,
            n: 0,
            script: '76a914f4cb89e2e39478e2dafa0215c192b19916ef7a9388ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 191,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302378346,
              type: 0,
              addr: '1AbiwqMCvzZtNsMeXwRBMqXoGzYKuJ4Lgg',
              value: 3889867,
              n: 0,
              script: '76a914694a49fd064e0bda4354a33f8923db72d0a8247688ac',
            },
            script:
              '47304402205b6f7cafa3ff9e2f732b291c701c81943227b5f785b6fe38cd19993474de436b022031e47dcaa18e5f51d391a8d27c33530f5d17f426db6f7726f61254e6a9634559012103bad52257341aba66ef249c174f880a93edf3a84d62f8a26723c8197ff4e6b29a',
          },
        ],
        time: 1511024112,
        tx_index: 302378387,
        vin_sz: 1,
        hash:
          '99521c9992846d77b9dee5c6a744d57f22be39ada7fe321b8cc6a7b9e7fae8d7',
        vout_sz: 1,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378387,
            type: 0,
            addr: '1HKn3fSoPFg6kg1sWQDk6GLBHC8AYDUsFh',
            value: 3880734,
            n: 0,
            script: '76a914b30f1a2f62f19a2480172162183e2dbe84918cb088ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 1551,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 300757387,
              type: 0,
              addr: '1MdHCUzx57FoC5h6qGr7Gkx4xomkDshAS7',
              value: 29503,
              n: 102,
              script: '76a914e23f02fe344ebfea3e25d6fcc9060ede180fdee188ac',
            },
            script:
              '473044022078cf25da809f25ec62e9ac4f60bd33e2a37f057ee67ff9c717fe64feeba044ec022058e6bfe3c909c10a7b6ebdd1be42e1e1fb2219a28006ed8d0d8f99183881d644012103bebe88a69fcb1bb5f1becb6cbab843a57014c6139772e1991037a14101f391ae',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 298741394,
              type: 0,
              addr: '1JqGMBi16G6qy4BhJa95hQsoiLqFdk4xf9',
              value: 29504,
              n: 0,
              script: '76a914c39aea96d440511cecd09d0ae3570fa16795b70988ac',
            },
            script:
              '483045022100e461de8dcc30d2b4ab5a4755b293cc6d84f221ef62fbeb811b6dbf6c55b19b7b02205d00d260d2a7f0368c9476d3139ca327ba21fd1aea22e5be16a9884679af84990121038ecd9ffae43ea4ae690a67ee5de7e575c5c259551e935d4ab671726b56ce3ae4',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 299763110,
              type: 0,
              addr: '149VdTgjwxk1Kn6B8CcyCughfYZxBibHUp',
              value: 29505,
              n: 0,
              script: '76a91422839a5f41884dc3c07f42ffe56eb391ea8b35ae88ac',
            },
            script:
              '47304402202ddc601794e78d30db91449b8f52a59133394890748f5085ac97ef59bc18079f02203d0bd90fcdc0d668a4f0be549b590f514f3d1bb969f6ab72939117f376cdbca2012102c0352f2ac7ce164f9020318a30ba54228b0ecd15cdc088a1b73a5f5e742bb161',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 301277090,
              type: 0,
              addr: '16e1sBrBJbHWgP3qorQxfS6CppNGWpKRDA',
              value: 29505,
              n: 1,
              script: '76a9143dd8bde7a50b11566a1b3826dbfad31ac059178c88ac',
            },
            script:
              '47304402203be46ba287b62fa0885c2fc710134d70c3e0b254af431ad0c38449823779f0180220776d587ac7cdd033d1503e41dc80aa3a7869f0e1ba667763c0b04792895975a40121036e1b25ed24f409ac14f7699cdd08190695b36971a97719c734b754b4cd48bc6e',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 296504900,
              type: 0,
              addr: '1CjqhPmqxErcXQVnEFud3hfg4ZCR7zjL4W',
              value: 29503,
              n: 0,
              script: '76a91480c380f56f9e2debc0f31ebab039ad435900124d88ac',
            },
            script:
              '483045022100abe994a3d8d7efc2a17a553a455d07b4c2ac3412d37d65b2b606fced87507e8a022002cc5f8d9fabfb5ab88312df2239e7e15f47b148ad5de7a0e755cf4faebd7869012102f404f9cf6497877c41efab49e5985a3bf3737f4b2e9cc018e0af65fe4bae60e8',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 296912176,
              type: 0,
              addr: '1JxpC8vT6WxHayxns6rJczPDWLSowV9uwu',
              value: 29504,
              n: 1,
              script: '76a914c50868fe31a6c0681a082aea21ddc6abcb9febf688ac',
            },
            script:
              '483045022100d64f24615e8eb54cc3c8d87f517628dd2ff07d567b00b52b970e9049185efdb9022028e7a77d46f7100dd88d0cd1f653044804ec9cecc72730d84524da82fb5269d4012103ac129bb85111cc92ddab7f43183ee51d38c1ff219cc39b36fc002c09aa962d56',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 296820877,
              type: 0,
              addr: '1EQNCG54PZoYPWwC6T94LBxPdibomFGoqq',
              value: 29503,
              n: 1,
              script: '76a9149304e4efbdb1e7140917f2291f10a9d22fdacc1c88ac',
            },
            script:
              '47304402206befe10b8ea1c0d7cf72a76d77b5873d990c75c167de6f7ae66abe1332ff7cf802200095fc2886f1ecc2b9f28055647f8e0b47a943cbde0acfa79439732d6512acee0121038b4f45a7591b8c09695f07726ac2437a921c5c71449bcc7f609161ae2dabb785',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 296927223,
              type: 0,
              addr: '19TYDQzVoz9eGTJe5shSoST2zM8GTDsg4q',
              value: 29503,
              n: 0,
              script: '76a9145cc5e09f9b88d2f6d5858deb3efc28d6168e75f488ac',
            },
            script:
              '4730440220618208c8c7a8c7a2b15c387b3af9e04155f010068a5eed9c25b57a756448b669022051a4db7161e9030bdd509e473a079f19417d19b1aa9d41805c0659f74c490a000121024ffebc7fab198a77f8c3c75cfceb1a8fc321b1b1e7ccfd568f8cacefc1ecab38',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 296060185,
              type: 0,
              addr: '1XXTFzwvpX2SoVn4khH7bcAzgvVByGE4R',
              value: 29505,
              n: 0,
              script: '76a91405c5e646b398063799e09e52cbf7b3987e13347188ac',
            },
            script:
              '483045022100f7bac0658fd83bccb7326d7ff8979048858dba6b60d3bbcf1ee92bd9d6582ecc022053bff7804dcb05cb8e17b3b18dcdb644cb270b63bf8ea425484e8312488838d0012103d48e8522554ae8d71d2bc13b7673996c25f400b90eb59e9502dfd4a9aae09e69',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 296927075,
              type: 0,
              addr: '18cG2BBe6WTbASM41s95Z7peBXfYiJDKZU',
              value: 29503,
              n: 1,
              script: '76a9145373fa395dc0c607cf45be105149e7408bab5c2488ac',
            },
            script:
              '4830450221008f8236adcedd9ab8a46a3bf784c15a3c1e18d73ef31a3a049c11546ce47521a502201dc4dd48c8e12adac437b69a30a1a55d002c4b7bd95fa52545a1c8dc43c6383e01210272028a1a57c167bc611bf1df1df2db528cd6a2e5abdfea17ac9b29cd27ca1ab3',
          },
        ],
        time: 1511024111,
        tx_index: 302378385,
        vin_sz: 10,
        hash:
          'd6ba22ab353f46df887a3ae5a925a92d0ee9cb7691f3549af8ef0ea82e56acf8',
        vout_sz: 2,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378385,
            type: 0,
            addr: '33dDEM6nW5CwXqTAT1HSE9WNXYA8aX6WW1',
            value: 10000,
            n: 0,
            script: 'a914153806bb38bbebcd099dbf990dcb8da6eefeba6687',
          },
          {
            spent: false,
            tx_index: 302378385,
            type: 0,
            addr: '12hdLL8Cu6SYhke1HBa6WagKAxYxp3pRFM',
            value: 620,
            n: 1,
            script: '76a91412a717ff8638ee45fd92fa7d764a14bdbb8df63488ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 224,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302377342,
              type: 0,
              addr: '13JxPXu5eHQC4gUuDoaTgCEFmGvPJudXmm',
              value: 949300,
              n: 1,
              script: '76a91419558f146be79fc22bb4a04c2b5bfed1568c069f88ac',
            },
            script:
              '483045022100e522d3a7852bb62678c5048d9b272d6ff7355bc13c27c335710972f1df97e535022065c456d81394179acf88c4e70a5ab923bdb9047c8a90366d46c7bd0ed58b8790012103a76b833ea6fa5fc5d48501ea07d3725c007fc0944a4de4dda3e23cd32d8ae329',
          },
        ],
        time: 1511024111,
        tx_index: 302378384,
        vin_sz: 1,
        hash:
          '1fc57dfc510a4ecbec8cb5c70b2b1d8119a674fc9bcbeb51834a86762d75c252',
        vout_sz: 2,
        relayed_by: '127.0.0.1',
        out: [
          {
            spent: false,
            tx_index: 302378384,
            type: 0,
            addr: '15xYnbwrWarTxjUA3S9KSs37VcpGFfYLYm',
            value: 154780,
            n: 0,
            script: '76a9143661ea343298d7c5bb557ca9188f322f6bb22f5788ac',
          },
          {
            spent: false,
            tx_index: 302378384,
            type: 0,
            addr: '3H22Ru9uhrhrH6HjJEDDAYed2WNqp7brSb',
            value: 790000,
            n: 1,
            script: 'a914a8223668d504d19c845f634736a852f61ede1bbe87',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 225,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302373371,
              type: 0,
              addr: '1NR7Tvkcd2qJ2tgrkmLd1DP98qcJcM9iNr',
              value: 4770255,
              n: 1,
              script: '76a914eaea054804589a330072007e4fe01e300bbf5dab88ac',
            },
            script:
              '47304402202af0510e5b4ecd6def1435f9eff9d060d610ff27295d71b1a88b9a51eddae4c4022077e5d605ba1938b1938d40bfe76cfaa52d8ec5dd2f70c712ec6fdf5c5d275c8d012102d54a2e60d9f7dfe496bb5f515d01cb455884d53cd02dac2a0cfb3d94ba238429',
          },
        ],
        time: 1511024111,
        tx_index: 302378383,
        vin_sz: 1,
        hash:
          '904c336c0aaf060ade61f5bd11d9d3a2a8bcb19ca04d06291c39281ec45c717f',
        vout_sz: 2,
        relayed_by: '127.0.0.1',
        out: [
          {
            spent: false,
            tx_index: 302378383,
            type: 0,
            addr: '171oXJCb5jRhMroje6qD1919TTfgUWERX1',
            value: 905120,
            n: 0,
            script: '76a91441f796f091ddc1ead64893e35bf431ddc2c52ec388ac',
          },
          {
            spent: false,
            tx_index: 302378383,
            type: 0,
            addr: '13CSqW82vFFnwy9bTS7qgdS6gjBqBTrgkr',
            value: 3860615,
            n: 1,
            script: '76a914181a64e774bf33c210b39a31aa7fac915cf9720a88ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 1258,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 297977012,
              type: 0,
              addr: '39gcFpj2m3YJJc88tyNcLuxQ8U61KaUuPu',
              value: 4100000,
              n: 2,
              script: 'a91457ad3fe358b98c30f4ffeb698f954a6670b7b6be87',
            },
            script:
              '220020e283d92233479184f833d8f2bea450168382f3a8bee32eff5b0dcef6f8a1773b',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 298173727,
              type: 0,
              addr: '39gcFpj2m3YJJc88tyNcLuxQ8U61KaUuPu',
              value: 900000,
              n: 0,
              script: 'a91457ad3fe358b98c30f4ffeb698f954a6670b7b6be87',
            },
            script:
              '220020e283d92233479184f833d8f2bea450168382f3a8bee32eff5b0dcef6f8a1773b',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 298214440,
              type: 0,
              addr: '39gcFpj2m3YJJc88tyNcLuxQ8U61KaUuPu',
              value: 8900000,
              n: 3,
              script: 'a91457ad3fe358b98c30f4ffeb698f954a6670b7b6be87',
            },
            script:
              '220020e283d92233479184f833d8f2bea450168382f3a8bee32eff5b0dcef6f8a1773b',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 301179259,
              type: 0,
              addr: '39gcFpj2m3YJJc88tyNcLuxQ8U61KaUuPu',
              value: 9600000,
              n: 7,
              script: 'a91457ad3fe358b98c30f4ffeb698f954a6670b7b6be87',
            },
            script:
              '220020e283d92233479184f833d8f2bea450168382f3a8bee32eff5b0dcef6f8a1773b',
          },
        ],
        time: 1511024110,
        tx_index: 302378382,
        vin_sz: 4,
        hash:
          'c3b557030002bf7f1fba4f02405967634ef76361f91e3e7ca711d81ef53ad879',
        vout_sz: 2,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378382,
            type: 0,
            addr: '16kVQGceXwygf1k9BoKhaZCLBKn4jaSNcM',
            value: 21262000,
            n: 0,
            script: '76a9143f1239309ef4856c728c001053b1c80b9d1a6adb88ac',
          },
          {
            spent: false,
            tx_index: 302378382,
            type: 0,
            addr: '39gcFpj2m3YJJc88tyNcLuxQ8U61KaUuPu',
            value: 2100016,
            n: 1,
            script: 'a91457ad3fe358b98c30f4ffeb698f954a6670b7b6be87',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 374,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302100117,
              type: 0,
              addr: '3BTiBAEjmsP6aAkECJjb7qmqCT1srYesM9',
              value: 70038,
              n: 0,
              script: 'a9146b2d08f959edd56130ba9112f68a6d8f7db8e54187',
            },
            script:
              '22002078272a5cfce8899b051e724a0bd058861da1b51fb154bb5d6e29a82ffec72ce5',
          },
        ],
        time: 1511024110,
        tx_index: 302378381,
        vin_sz: 1,
        hash:
          '762b940bb811a90badb5782e051158e161878df41c286482312e68e81c77efa3',
        vout_sz: 2,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378381,
            type: 0,
            addr: '1KU2qo1GMyoMxNKM7U3QPiKhpk3uX1hjXZ',
            value: 20089,
            n: 0,
            script: '76a914ca8f0836abf03d5fe0d06f03a0d34bf66fb5bcaa88ac',
          },
          {
            spent: false,
            tx_index: 302378381,
            type: 0,
            addr: '3BTiBAEjmsP6aAkECJjb7qmqCT1srYesM9',
            value: 1565,
            n: 1,
            script: 'a9146b2d08f959edd56130ba9112f68a6d8f7db8e54187',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 436,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302307869,
              type: 0,
              addr: '3JXRVxhrk2o9f4w3cQchBLwUeegJBj6BEp',
              value: 72719679,
              n: 0,
              script: 'a914b8a9a8ba8cf965b7df6b05afd948e53c351b2c0d87',
            },
            script:
              '2200202035e78a6b34d583ad0a874b80ee41a0507b92cf0b671656108f594c7f75ca90',
          },
        ],
        time: 1511024110,
        tx_index: 302378380,
        vin_sz: 1,
        hash:
          '9ef7fc67ad3f6e6e3b97f766329583100b9f4d34cc054ee4ddcc0c09f943ef7e',
        vout_sz: 3,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378380,
            type: 0,
            addr: '3CdZtbbD7qeAskfhsDxwi58yr9ed48BVoX',
            value: 13448,
            n: 0,
            script: 'a9147802676d6e4cc12d2070159f2c8aa69aa11408f587',
          },
          {
            spent: false,
            tx_index: 302378380,
            type: 0,
            addr: '35JMXQcBLw2rvrbBk8N677vePXBZoG4Cc3',
            value: 146162,
            n: 1,
            script: 'a91427974c56523a65424094948e26f79128a2f4b08a87',
          },
          {
            spent: false,
            tx_index: 302378380,
            type: 0,
            addr: '3422VtS7UtCvXYxoXMVp6eZupR252z85oC',
            value: 72522773,
            n: 2,
            script: 'a9141988a27e3c2df4ddee7fad5a2303d086179b2a3087',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 494951,
        ver: 2,
        size: 521,
        inputs: [
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 302354070,
              type: 0,
              addr: '1KCvzLxdqjuvME9XBF2Gn2eLvRR8U4kf4v',
              value: 52900000,
              n: 32,
              script: '76a914c7b3e83cd17d0feb6357e4d4d0e731710c53358788ac',
            },
            script:
              '483045022100a816e466b69b8315730da7c3c7e08ea6d860868ca34a4bb44f61c673fcf5428002206fe748e68fb191a246b1d8ba1f21ab4a9364d489dd28e007f0b4f8d9b00130260121028e8b8ca11bb0d20541abcf01bb8b6e663e0766134ae14df373f64aa0ece3679d',
          },
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 302232540,
              type: 0,
              addr: '17KnWt9aUyPKbmsNrM5LaMjxKy3qxq1FKq',
              value: 72547000,
              n: 25,
              script: '76a914455e3c773926988b0164c1b1179e76c19025819288ac',
            },
            script:
              '47304402207f2a7b6bf409920fbc09acc49956d3e81c45653793d6dedf65f8d4bdbd387830022060f20980b69e88fd207ff6ca6da49b15f9594707ca79c96eee86b5ad5128e718012102bdde9d3f3c824e2d0fa093f67bafad3c64e7166016b5865b5864e1718cdbb8e2',
          },
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 301913928,
              type: 0,
              addr: '1M7xF1YzmZzQyCWJd1Y8D23pSbYYT9FvfS',
              value: 8466366,
              n: 4,
              script: '76a914dcb31ff08f00878e253090743199fa021dfff7d088ac',
            },
            script:
              '4830450221009f50080502912ffd70d6459000b7e61a79cc5d9111e059ccf06ff9d9190796310220301b4fbe926dc510f0aaba449c8792b56a30a971184584b34a9851fd43f48b3d012102e4895e9ef21e4e941a70e8bdd173d2e461797f29a0e75882af2d14ef231d368d',
          },
        ],
        time: 1511024110,
        tx_index: 302378379,
        vin_sz: 3,
        hash:
          '477a758b47431313c35db491c9d6260183374376d900e1c1a3036704e84d61d4',
        vout_sz: 2,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378379,
            type: 0,
            addr: '1ANMqpYGNuPd43VzXyo1bD3rxEtS7dsmSD',
            value: 992825,
            n: 0,
            script: '76a91466c343d9c3269780e21269c471b8f50b35af219488ac',
          },
          {
            spent: false,
            tx_index: 302378379,
            type: 0,
            addr: '18AUH3xVhrtn7HufKBfWCjBSBcDdrshYHE',
            value: 132800000,
            n: 1,
            script: '76a9144e9364c43be13c37a740aa22271d44f9005400ea88ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 249,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302373232,
              type: 0,
              addr: '3CQ7V92TtSauok9r7PpL7JBCZPL8M6QGfv',
              value: 1277217566,
              n: 1,
              script: 'a9147576f4871d9d7c824e040fc94fb5c7f8b251dc5687',
            },
            script: '160014025943b70b3bbee3e9a087a68b437f73c5c2b90f',
          },
        ],
        time: 1511024109,
        tx_index: 302378378,
        vin_sz: 1,
        hash:
          '2401a9bea292af4e06be1a34e029e509180d80d5b40e1642e00e9b22c00cd229',
        vout_sz: 2,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378378,
            type: 0,
            addr: '1JvkCUD6UzuJ8cEXMpNB73noACuBhr79zM',
            value: 100000000,
            n: 0,
            script: '76a914c4a43e741c90500eb655f0d3ecef816dbcf7bc4b88ac',
          },
          {
            spent: false,
            tx_index: 302378378,
            type: 0,
            addr: '3Ai5mfUNfGzGLxw9AMv6ikH4KshNmpwf96',
            value: 1177155902,
            n: 1,
            script: 'a91462ecc25e1efdd1d6c6a3e61a48ddff3f9c617cbe87',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 225,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302377959,
              type: 0,
              addr: '16KqmbL2o84tECevbaH8jvurZMnSq112i6',
              value: 34507579,
              n: 1,
              script: '76a9143a68d38eb48957b3a5ee5b76c2781cad5b351dae88ac',
            },
            script:
              '473044022050ce0a2577dbf38e4a9ae7328d9dffae56edf9e5e6ba3850195951d690aa37ce0220527d51bb2f415165bb6b230bc7a93ca5b3a2341998480459da55966bffb10b79012102f3fc3bb52150b3b89ba1951a5d138de46652e972057826a72804858d9eba7fb8',
          },
        ],
        time: 1511024109,
        tx_index: 302378377,
        vin_sz: 1,
        hash:
          '2a825e2c35d96d0fc63592d9693fb78c0673114c3388db899f292750b28b31bd',
        vout_sz: 2,
        relayed_by: '127.0.0.1',
        out: [
          {
            spent: false,
            tx_index: 302378377,
            type: 0,
            addr: '1Ed8kM2kJLRVgSt2eqApzF3V3FaKvpC8xT',
            value: 14913059,
            n: 0,
            script: '76a914956f13b3c66955bcc41008a37717a839f56e1f8088ac',
          },
          {
            spent: false,
            tx_index: 302378377,
            type: 0,
            addr: '17Tj6RpwxiEMgPonYnJcRqjdCcHM89um61',
            value: 19590000,
            n: 1,
            script: '76a91446deb5299aba622237d76c5259cfc6b6f511e77d88ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 494871,
        ver: 2,
        size: 423,
        inputs: [
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 302369196,
              type: 0,
              addr: '3NSfPC8HR5PQr3N4g1tveyAPekmM4baPNx',
              value: 504799,
              n: 0,
              script: 'a914e3a3abef268226d7d5ada2c5013ad9d712485d8087',
            },
            script: '160014447f484160b758d054bd252606f9588324c1e731',
          },
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 302289277,
              type: 0,
              addr: '3EqSZ3z7maa2UPM9YkXymPJXWHffoSZzuU',
              value: 61039313,
              n: 0,
              script: 'a914903185c3ce6598e80a695b439501e8de427a3a8187',
            },
            script: '1600143d46a5ffdeae73b6069f307c737f1ae8cf3dcec7',
          },
        ],
        time: 1511024108,
        tx_index: 302378376,
        vin_sz: 2,
        hash:
          '04d562116d1dcf9309ad16fe7e362fd2dc8c4360eac1f534386cea15ea1437f6',
        vout_sz: 2,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378376,
            type: 0,
            addr: '15nmGotm32fLZPfoCZEiPfw1oF7oBNcMX7',
            value: 923752,
            n: 0,
            script: '76a91434882da44395235965faff044a6abb59a5503f4788ac',
          },
          {
            spent: false,
            tx_index: 302378376,
            type: 0,
            addr: '1Aao6QSE2iMcMxkhoP1rr3xu6WF6EqgvPb',
            value: 60542060,
            n: 1,
            script: '76a914691d55df29636423e675f512b6ed0ef05b3b4b6a88ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 494951,
        ver: 1,
        size: 257,
        inputs: [
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 53709933,
              type: 0,
              addr: '14RGaKLewUDSLdLHeNiuQj4cuSrvmay2gr',
              value: 24990000,
              n: 0,
              script: '76a914257f5c7e5892393da716014680f4a11eb4d2be3388ac',
            },
            script:
              '4730440220220f992e937efc2a5d16d8cf3cf937a20291805d56233e30d2975489cd4286b002200d46868d7efda096f616eb45e85a4d049289efc511e6938317665c6fc9bc1e88014104975abe77a0991eca4779cd6ca89f60a3eaf29ff6e319df5014c00d3f8a0a0b1dd166dab9d0dda09c5e96c81a911ec48f912ac82d0b5ca6843fbcf8db08655368',
          },
        ],
        time: 1511024108,
        tx_index: 302378375,
        vin_sz: 1,
        hash:
          '6fda33d75281680e43b68f4e1b15ca211e9039adf4afb945798655dbc41a5bbf',
        vout_sz: 2,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378375,
            type: 0,
            addr: '1EUQUMnH9SWy9xXH5tPcn1LtN1C7Cva4Sh',
            value: 3199326,
            n: 0,
            script: '76a91493c87597656bcd899accfca341915760a097b22688ac',
          },
          {
            spent: false,
            tx_index: 302378375,
            type: 0,
            addr: '1KkBfEdGwjVNrAjc16suhJo4EDCwcQqrdw',
            value: 21696974,
            n: 1,
            script: '76a914cd9d0c5fbfd119de12df5f8d6274007fc9e22ec888ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 488,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 299312902,
              type: 0,
              addr: '15KwbXrrwes7qT72Hb2U22pGLgi5kypa3h',
              value: 1198656,
              n: 1,
              script: '76a9142f75907aee8a0cdcbd88b34511075956434ae2a888ac',
            },
            script:
              '4830450221009bead2a4e9962bbf4da9e5d53ffb18fc69b91aef1ece7bb2f2433e0549e01af6022001f1268957fa8c9d28ba3785589e59b5e6d13fe7c4deb433ce5000ae18956f48012103a2291eeed761e756b6f96e3cbba4e7b76d7d111a1030195b00f29f95a1e4c31a',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 301421106,
              type: 0,
              addr: '1PG56x87qTdasLjQYgrBPAt8vvSkMZqCru',
              value: 493566,
              n: 0,
              script: '76a914f42c6e6c6f5644cb07aed587f482d925f33af0f488ac',
            },
            script:
              '48304502210095cf86d450f3b75b4187de6a16af909a5e2ad0fd78f35a6a517ddd024cc1e7650220418616a5b1663977656e424410e07476b0b843f0e39fe32116cce968600d8fdd0121032989be1c03adac5388460bd00b78b238dcdc5e7e336a5e286f294b9fb6239d9c',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 297974677,
              type: 0,
              addr: '1L1K85caRmXsbdxU1CRTqJ7v4Lv74gk3wk',
              value: 315418,
              n: 0,
              script: '76a914d07984761093a80510c9c399086ceb3eaf11c59488ac',
            },
            script:
              '4830450221008803eb8e90e936bc3c59eb00057814fc40e62e56f8ecacc5fb1f3dedd1ada69c02201d8eac12b2978a3b60d0d43f3ec902c3167955acfe8ae340e5c5080ce1c2fdfd0121034a497b2f1f41b76c5c0d0a0bbc8408da1dbd7120de191dfb4e655f5f7d3da163',
          },
        ],
        time: 1511024108,
        tx_index: 302378374,
        vin_sz: 3,
        hash:
          '87b2e42bf6d3cfa526e1179ba0dc86680483319efdc9711b1b7ef0d57b50056a',
        vout_sz: 1,
        relayed_by: '127.0.0.1',
        out: [
          {
            spent: false,
            tx_index: 302378374,
            type: 0,
            addr: '1EHvRFHAbz4GmkvVYSfRveQyVNFPKDh1VS',
            value: 1997200,
            n: 0,
            script: '76a91491cce1b7bef0bdbc56d2aea8d356386b981fe87688ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 225,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302377560,
              type: 0,
              addr: '16QtVMLgGZUk9vqdmBC62LpPcNxNFfZRgD',
              value: 3205301,
              n: 1,
              script: '76a9143b5d2d3e2998441748fcfa00014d48ca6db12e0788ac',
            },
            script:
              '47304402204b5dfecac5d5173d123aca5e30de0bdf5222cf8fe65b8e0d78de0522f0378dea02200701c4c4a8973b7c4ce39ee3bba282a21a0f8e26b84248f02c75bb322c44643c012102b9be9f23f07fe45f49692b0b3e5df166be4077ff68d8fea077c8e9f95f376966',
          },
        ],
        time: 1511024108,
        tx_index: 302378373,
        vin_sz: 1,
        hash:
          '47e33188a9ba6e53756a29f30c253dbc552a98aca4435d73c6f6bb7b13246a3b',
        vout_sz: 2,
        relayed_by: '127.0.0.1',
        out: [
          {
            spent: false,
            tx_index: 302378373,
            type: 0,
            addr: '17MaQe5wfasH1UNmbhuvjeoPABQCQYmh88',
            value: 1501785,
            n: 0,
            script: '76a91445b4f60fc983dda164eee872f7bd65dc51095c1f88ac',
          },
          {
            spent: false,
            tx_index: 302378373,
            type: 0,
            addr: '1Cm9QXL7zeq2o59fHkfpoc6HrGbLjk4R9v',
            value: 1698996,
            n: 1,
            script: '76a9148102b3daa2095fd82d7a45d61e4dbaeefee80f1b88ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 225,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302307132,
              type: 0,
              addr: '1BCvtNe4JA2qw8Sbxg6NeEdFkhG3vBEVA6',
              value: 7798870,
              n: 0,
              script: '76a9146ff2d0a1e52da26017503c3d46f2119873606b4b88ac',
            },
            script:
              '473044022044a0a10e3b3d2351c89b28883c6f72d486d8187b6666a7fc9dc742f60bb37e89022026cfc79231cd8768897c1c5d24343ce418ad9b289177ae1e4bbb5e04895e1f6b012102d1e41c4750ecbc66358b4d5253cff65967dcd4528bcdd525078f859d038b450f',
          },
        ],
        time: 1511024107,
        tx_index: 302378372,
        vin_sz: 1,
        hash:
          '13c1ebe729e617c4393c11e3a403af363a7cb7acd58ed19a60f113b925337df9',
        vout_sz: 2,
        relayed_by: '127.0.0.1',
        out: [
          {
            spent: false,
            tx_index: 302378372,
            type: 0,
            addr: '1BCvtNe4JA2qw8Sbxg6NeEdFkhG3vBEVA6',
            value: 794350,
            n: 0,
            script: '76a9146ff2d0a1e52da26017503c3d46f2119873606b4b88ac',
          },
          {
            spent: false,
            tx_index: 302378372,
            type: 0,
            addr: '1PJdUTWD3F4QsD4GGUtzdN4bHjayEaBwSw',
            value: 7000000,
            n: 1,
            script: '76a914f4a848f91bc1844ea61113a76d9fe00ea66ce0b688ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 494951,
        ver: 1,
        size: 224,
        inputs: [
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 302363009,
              type: 0,
              addr: '1Dnb9ZAnuhUmjj7yX9XdnxtC4Py7CRniVK',
              value: 58849361,
              n: 0,
              script: '76a9148c40bb8a3cf4adfe156560a85c813808c33382e988ac',
            },
            script:
              '483045022100fe61017c2d84335d2ce57f94cb4d4986c245409cf2b1b810bc260a055e953862022039baccc81b40a66f9767432ba1fe5b839370ae20ac9b0e4a23714522695c27a301210341f14cb71895b1bad4ee0c3fc4c47844e7f3579ba63379f71044f89f049a7fd2',
          },
        ],
        time: 1511024107,
        tx_index: 302378371,
        vin_sz: 1,
        hash:
          'd888ba68b9ad4cb71b9c7d4835286c0f809c7f6eee81234dd8970a4bce4ae3b7',
        vout_sz: 2,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378371,
            type: 0,
            addr: '19EJzfHn5V4jPLdquKTF8d67H6jKYamk4o',
            value: 55033525,
            n: 0,
            script: '76a9145a456f3d13460ce7ef3ac3ba0da5ee4aa7ca308188ac',
          },
          {
            spent: false,
            tx_index: 302378371,
            type: 0,
            addr: '31hHaqR7cHfCqaZxQLJj3Uun3EykG7SCYt',
            value: 3767676,
            n: 1,
            script: 'a914000d128e08a083eda9ff72bcdd1f65fc1d6cad5287',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 494951,
        ver: 2,
        size: 669,
        inputs: [
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 302367472,
              type: 0,
              addr: '1CmsUHuzmnHaZyKa4uPgePimvStc25n3FX',
              value: 1921523,
              n: 5,
              script: '76a9148125d10ea3f9a27ec4e7d402da9f2eb53100a0aa88ac',
            },
            script:
              '483045022100c153eaf71a5b2ac0988e2b7cde177c438f62dd7071f2257a7849f1de030d326002204289e7ae485371767b7914ac3b96edb5e15129d50d3b31c8ee2d2f2c15696c02012103ceacad524f8b5ef8c5d58bfe115c3c752dd29e37d8a6c223e4896a0da5f10da3',
          },
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 302369096,
              type: 0,
              addr: '12GXKC5nJspJnfpRq4KAuA55fftKAoo4tN',
              value: 2762560,
              n: 2,
              script: '76a9140de7ab758b56acc28414a951cd8ae08acc405d0c88ac',
            },
            script:
              '483045022100ed68e64468f2d7ecaf2591fa579c2f255a5bec88f781e855282adb6ef0bcf0f402206e6e7be14df9bc96200c4db9af655773c3e542069c93f41d7b200829a2497290012102a5326049cd5c8ffaf3180f3a95c362a2ffac25cdec438b6bd4ed19f88a08fc6c',
          },
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 302366599,
              type: 0,
              addr: '1MAgKnqYmfpRp7wtq76ThRxb9b7LLQyujT',
              value: 2150204,
              n: 1,
              script: '76a914dd3715d8224123062e36be1a49ce5cf9db89e74f88ac',
            },
            script:
              '47304402200f71e8373f9e96d013998d263aa720c15f24c11202191ebf547caacb5cda2fd30220330e6df414446f2562412c4160d09ba6f753ebd6535d696138dad91f78480d8b012103b20c85a92ff5befc8c89e122518908b8294c0eb16e8be651a79ff6c4355c1ea2',
          },
          {
            sequence: 4294967294,
            prev_out: {
              spent: true,
              tx_index: 302301335,
              type: 0,
              addr: '1JoB8RkMrxehpdQa18LKsMx53FzssX34Y7',
              value: 252671,
              n: 8,
              script: '76a914c335ba1ee29abed60d7439b847cea53903a5f5ef88ac',
            },
            script:
              '483045022100a27a5a513fc71db63793b5d61be84f59f70a83ef81e987c00910ad6d2c00090c02205f18b3a0a47b776957dda0d0e20e64b25c729bfb1c333c60d21b1693c3c0c21901210277d4fd0de287bd7319cc666266dae5f6ddcecef6886bd02e40671678077e3026',
          },
        ],
        time: 1511024107,
        tx_index: 302378370,
        vin_sz: 4,
        hash:
          '7890ca86e9381738896432ce03e3a9c3295324a1ed4449c9a62799f9cbe7d003',
        vout_sz: 2,
        relayed_by: '0.0.0.0',
        out: [
          {
            spent: false,
            tx_index: 302378370,
            type: 0,
            addr: '19Tzo7k588WFzsNd5Uj2Dec51mqiMwP6J8',
            value: 6000000,
            n: 0,
            script: '76a9145cdc10f2b02b3ad67c452f1adcccacab6c224ee688ac',
          },
          {
            spent: false,
            tx_index: 302378370,
            type: 0,
            addr: '1PxPCzUHjbzrF7xghg7iSHxuVZBzxkMA2M',
            value: 995358,
            n: 1,
            script: '76a914fbcc2eb15ca71802a22b085bd0ea7f333a17fc4088ac',
          },
        ],
      },
    },
    {
      op: 'utx',
      x: {
        lock_time: 0,
        ver: 1,
        size: 372,
        inputs: [
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302084019,
              type: 0,
              addr: '1Lu793FGaJs86i3YGicnyqSqjaLHL8W9Js',
              value: 18291841,
              n: 490,
              script: '76a914da4524e6f21a83679650b44f625f9c26bb10192b88ac',
            },
            script:
              '4730440220452abde950ca89307978b9fb32a4259aa54a0d9bfec171040873788084b061300220172218e86ea4c7c4b259eae7ed56ce219a9af47869aab97ad2eaab67b02c7e5e01210219192abc58418af25558bcd8313e9cd7f66a719198c3af932e987d15885f92d4',
          },
          {
            sequence: 4294967295,
            prev_out: {
              spent: true,
              tx_index: 302333552,
              type: 0,
              addr: '1Lu793FGaJs86i3YGicnyqSqjaLHL8W9Js',
              value: 2309835,
              n: 425,
              script: '76a914da4524e6f21a83679650b44f625f9c26bb10192b88ac',
            },
            script:
              '473044022055f5de3edbcf677f1409b603a9a3f008fe0eaaa261a6d638f5ac31efe6489c9c02200346c7ef294753c1e340358ef6585290f7a5d72d48c0eed764336687a418954201210219192abc58418af25558bcd8313e9cd7f66a719198c3af932e987d15885f92d4',
          },
        ],
        time: 1511024107,
        tx_index: 302378369,
        vin_sz: 2,
        hash:
          'ff3f44daf56d129a4d88e76c8897917df6ab542178b03bd4d4e9a3d0464ca3f5',
        vout_sz: 2,
        relayed_by: '127.0.0.1',
        out: [
          {
            spent: false,
            tx_index: 302378369,
            type: 0,
            addr: '1PdqFBwbsv37sZuPCUyF73vpVQMnmbSRUC',
            value: 299312,
            n: 0,
            script: '76a914f84a03b385ae78cca91c3dab01834e9e288c0ea088ac',
          },
          {
            spent: false,
            tx_index: 302378369,
            type: 0,
            addr: '13gcbhNdBP7DZ8wyThLevAS5o6uaMRJizf',
            value: 20294884,
            n: 1,
            script: '76a9141d6e30a18eadfc5972b8a06d6c207efb4b9c88c988ac',
          },
        ],
      },
    },
  ],
};

export default function createReduxStore(initialState = storedInitialState) {
  const middlewares = [];

  const enhancers = [
    isBrowser && process.env.NODE_ENV === 'development' && consoleDispatcher,
    applyMiddleware(...middlewares),
    isBrowser && window.devToolsExtension && window.devToolsExtension(),
  ].filter(Boolean);

  return compose(...enhancers)(createStore)(reducer, initialState);
}
