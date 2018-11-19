let controller = (() => {
  function home() {
    this.loadPartials(
      getPartials('./pages/content/home.hbs'),
    )

      .then(function () {
        this.partial('./pages/site.hbs');
      });
  }

  function menu() {
    this.loadPartials(
      getPartials('./pages/content/menu.hbs'),
    )
      .then(function () {
        this.partial('./pages/site.hbs');
      });
  }

  function reserve() {
    this.loadPartials(
      getPartials('./pages/content/reserve.hbs'),
    )
      .then(function () {
        this.partial('./pages/site.hbs');
      });
  }

  function whyUs() {
    this.loadPartials(
      getPartials('./pages/content/why-us.hbs'),
    )
      .then(function () {
        this.partial('./pages/site.hbs');
      });
  }

  function aboutUs() {
    this.loadPartials(
      getPartials('./pages/content/about-us.hbs'),
    )
      .then(function () {
        this.partial('./pages/site.hbs');
      });
  }

  function pizza() {
    this.loadPartials(
      getPartials('./pages/menu/pizza.hbs'),
    )
      .then(function () {
        this.partial('./pages/site.hbs');
      });
  }

  function pastaRisotto() {
    this.loadPartials(
      getPartials('./pages/menu/pasta-risotto.hbs'),
    )
      .then(function () {
        this.partial('./pages/site.hbs');
      });
  }

  function desserts() {
    this.loadPartials(
      getPartials('./pages/menu/desserts.hbs'),
    )
      .then(function () {
        this.partial('./pages/site.hbs');
      });
  }

  function drinks() {
    this.loadPartials(
      getPartials('./pages/menu/drinks.hbs'),
    )
      .then(function () {
        this.partial('./pages/site.hbs');
      });
  }

  function getPartials(handlebarsTemplatePage) {
    return {
      header: './pages/common/site-header.hbs',
      page: handlebarsTemplatePage,
      footer: './pages/common/site-footer.hbs'
    }
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