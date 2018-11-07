let controller = (() => {
  function first() {
    this.loadPartials(
        getPartials('first.hbs')
      )
      .then(function () {
        this.partial('./templates/main.hbs');
      });
  }

  function second() {
    this.loadPartials(
        getPartials('second.hbs')
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
    first,
    second
  };
})()