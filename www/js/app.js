const applicationKey = '1f394bd4d2a0a80a45f0c5a86fea448b6b36d5a795ad2ce90ddb6ff7ad136fb2';
const clientKey = 'cdc44afd241a213a917f35d58344672ad60e72666bbbd7aa44c82172ea4fa398';
const ncmb = new NCMB(applicationKey, clientKey);

const $$ = Dom7;

async function updateWordCount(wordBook) {
  const Word = ncmb.DataStore('Word');
  const words = await Word
    .relatedTo(wordBook, 'words')
    .equalTo('remember', false)
    .count()
    .fetchAll();
  await wordBook
    .set('words_count', words.count)
    .update();
}

async function loadImage(file) {
  return await loadFile(file);
}

async function loadText(file) {
  return await loadFile(file, 'text');
}

function loadFile(file, type = 'binary') {
  return new Promise((res, rej) => {
    const fr = new FileReader;
    fr.onload = (result) => {
      res(fr.result);
    }
    if (type === 'text') {
      fr.readAsText(file);
    } else {
      fr.readAsDataURL(file);
    }
  });
}

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
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});