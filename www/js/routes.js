
const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/home/',
    componentUrl: './pages/home.html',
  },
  {
    path: '/word_book/new',
    componentUrl: './pages/word_book/new.html',
  },
  {
    path: '/word_book/:objectId',
    componentUrl: './pages/word_book/show.html',
  },
  {
    path: '/word_book/:objectId/training',
    componentUrl: './pages/word_book/training.html',
  },
  {
    path: '/word_book/:objectId/word/new',
    componentUrl: './pages/word/new.html',
  },
  {
    path: '/word_book/:objectId/word/:wordId/edit',
    componentUrl: './pages/word/edit.html',
  },
];
