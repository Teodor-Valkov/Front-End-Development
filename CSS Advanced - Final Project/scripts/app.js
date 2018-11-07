$(() => {
  const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    this.get('index.html', controller.first);
    this.get('#/first', controller.first);
    this.get('#/second', controller.second);
    this.get('#/third', controller.third);
    this.get('#/fourth', controller.fourth);
  });

  app.run();
});