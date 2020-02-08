const animalRoutes = require('../features/animal/animal.route');

class Routing {
  resolve(app) {
    app.use(animalRoutes.routes());
  }
}

module.exports = new Routing();
