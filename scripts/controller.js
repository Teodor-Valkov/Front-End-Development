let controller = (() => {
  function home() {
    this.loadPartials({
      page: './pages/content/home.hbs',
    })
    .then(function () {
      this.partial('./pages/site.hbs');
    });
  }
  
  function menu() {
    this.loadPartials({
      page: './pages/content/menu.hbs',
    })
    .then(function () {
      this.partial('./pages/site.hbs');
    });
  }

  function reserve() {
    this.loadPartials({
      page: './pages/content/reserve.hbs',
    })
    .then(function () {
      this.partial('./pages/site.hbs');
    });
  }

  function whyUs() {
    this.loadPartials({
      page: './pages/content/why-us.hbs',
    })
    .then(function () {
      this.partial('./pages/site.hbs');
    });
  }
  
  function aboutUs() {
    this.loadPartials({
      page: './pages/content/about-us.hbs',
    })
    .then(function () {
      this.partial('./pages/site.hbs');
    });
  }

  function pizza() {
    this.loadPartials({
      page: './pages/menu/pizza.hbs',
    })
    .then(function () {
      this.partial('./pages/site.hbs');
    });
  }

  function pastaRisotto() {
    this.loadPartials({
      page: './pages/menu/pasta-risotto.hbs',
    })
    .then(function () {
      this.partial('./pages/site.hbs');
    });
  }

  function desserts() {
    this.loadPartials({
      page: './pages/menu/desserts.hbs',
    })
    .then(function () {
      this.partial('./pages/site.hbs');
    });
  }

  function drinks() {
    this.loadPartials({
      page: './pages/menu/drinks.hbs',
    })
    .then(function () {
      this.partial('./pages/site.hbs');
    });
  }

  return {
    home,
    menu,
    reserve,
    whyUs,
    aboutUs,
    pizza,
    pastaRisotto,
    desserts,
    drinks
  };
})()