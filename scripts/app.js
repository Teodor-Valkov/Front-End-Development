$(() => {
  const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    // this.get('index.html', controller.first);
    this.get('', controller.first);
    this.get('#/first', controller.first);
    this.get('#/second', controller.second);
  });

  app.run();
});