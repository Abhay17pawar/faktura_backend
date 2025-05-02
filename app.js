const fp = require('fastify-plugin');

async function app(fastify, opts) {
  fastify.register(require('./plugins/sequelize'));
  fastify.register(require('./routes/product.routes'));
  fastify.register(require('./routes/language.routes'));
}

module.exports = fp(app);
