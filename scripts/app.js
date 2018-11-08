$(() => {
  const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    this.get('index.html', controller.home);
    this.get('#/menu', controller.menu);
    this.get('#/services', controller.services);
    this.get('#/about', controller.about);
    this.get('#/contact', controller.contact);
  });

  app.run();
});