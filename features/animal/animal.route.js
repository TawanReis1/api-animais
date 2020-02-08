const Router = require('koa-router');
const controller = require('./animal.controller');

const routes = new Router();

routes.prefix(`/api/${process.env.BASE_API}/animal`);

routes.get('/', controller.list);
routes.get('/:id', controller.getById);
routes.post('/', controller.create);
routes.put('/:id', controller.update);

module.exports = routes;
