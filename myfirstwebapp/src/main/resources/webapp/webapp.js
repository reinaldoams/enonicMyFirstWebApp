var thymeleaf = require('/lib/thymeleaf'); // Load template engine
var router = require('/lib/router')(); // Load router library

router.get('/', function() { return renderPage('Routing FTW'); } );
router.get('/page', function() { return renderPage('Gone to page, you have'); } );
router.get('/page/subpage', function() { return renderPage('Gone to sub page indeed, you have'); } );

function renderPage(message) {
  var model = {
    title: 'Hello router',
    message: message,
    posts: {
      teclado: 'para digitar',
      mouse: 'para mexer',
      cpu: 'para processar',
      gpu: 'para processar tambem, mas diferente',
      placamae: 'para juntar tudo',
      ram: 'para guardar temporariamente coisas',
      hd: 'para guardar coisas, mas lento',
      ssd: 'para guardar coisas, mas rapido'
    }
  };
  return  {
    body: thymeleaf.render(resolve('hello.html'), model)
  }
};

exports.get = function (req) {
    return router.dispatch(req);
};