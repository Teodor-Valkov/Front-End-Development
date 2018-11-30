$(function() {
  const app = Sammy('body', function () {
    this.use('Handlebars', 'hbs');

    this.get('index.html', controller.home);
    this.get('/home', controller.home);
    this.get('/menu', controller.menu);
    this.get('/reserve', controller.reserve);
    this.get('/why-us', controller.whyUs);
    this.get('/about-us', controller.aboutUs);
    this.get('/pizza', controller.pizza);
    this.get('/pasta-risotto', controller.pastaRisotto);
    this.get('/desserts', controller.desserts);
    this.get('/drinks', controller.drinks);
  });

  app.run();
});