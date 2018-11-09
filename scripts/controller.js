let controller = (() => {
  function home() {
    this.loadPartials(
      getPartials('content/home.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }
  
  function menu() {
    this.loadPartials(
      getPartials('content/menu.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }

  function reserve() {
    this.loadPartials(
      getPartials('content/reserve.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }

  function whyUs() {
    this.loadPartials(
      getPartials('content/why-us.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }
  
  function aboutUs() {
    this.loadPartials(
      getPartials('content/about-us.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }

  function pizza() {
    this.loadPartials(
      getPartials('menu/pizza.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }

  function pastaRisotto() {
    this.loadPartials(
      getPartials('menu/pasta-risotto.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }

  function desserts() {
    this.loadPartials(
      getPartials('menu/desserts.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }

  function drinks() {
    this.loadPartials(
      getPartials('menu/drinks.hbs')
    )
    .then(function () {
      this.partial('./templates/main.hbs');
    });
  }

  function getPartials(handlebarTemplatePage) {
    return {
      header: './pages/common/header.hbs',
      page: './pages/' + handlebarTemplatePage,
      footer: './pages/common/footer.hbs'
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