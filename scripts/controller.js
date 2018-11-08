let controller = (() => {
  function home() {
    this.loadPartials(
      getPartials('home.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }
  
  function menu() {
    this.loadPartials(
      getPartials('menu.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }

  function services() {
    this.loadPartials(
      getPartials('services.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }
  
  function about() {
    this.loadPartials(
      getPartials('about.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }

  function contact() {
    this.loadPartials(
      getPartials('contact.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }

  function getPartials(handlebarTemplatePage) {
    return {
      header: './templates/header.hbs',
      page: './pages/' + handlebarTemplatePage,
      footer: './templates/footer.hbs'
    }
  }

  return {
    home,
    menu,
    services,
    about,
    contact
  };
})()