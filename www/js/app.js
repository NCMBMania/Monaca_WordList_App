// NCMBを初期化します
const applicationKey = 'YOUR_APPLICATION_KEY';    // 自分のアプリケーションキーと書き換えてください
const clientKey = 'YOUR_CLIENT_KEY';              // 自分のクライアントキーと書き換えてください
const ncmb = new NCMB(applicationKey, clientKey); // 初期化

const $$ = Dom7;

const app = new Framework7({
  root: '#app', // App root element
  name: 'framework7-core-tab-view', // App name
  theme: 'auto', // Automatic theme detection

  // App root data
  data: function () {
    return {
      ncmb: ncmb
    }
  },
  // App root methods
  methods: {
    // 画像の読み込み
    loadImage: async function(file) {
      return new Promise((res, rej) => {
        const fr = new FileReader;
        fr.onload = (result) => {
          res(fr.result);
        }
        fr.readAsDataURL(file);
      });
    },
    // 単語数の更新
    updateWordCount: async function(wordBook) {
    },
    // 単語の取得
    getWords: async function(wordBook) {
    }
  },
  // App routes
  routes: routes,
});
