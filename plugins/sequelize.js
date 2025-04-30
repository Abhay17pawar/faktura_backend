const fp = require('fastify-plugin');
const sequelize = require('../config/db');
const ProductModel = require('../models/product.model');

async function dbPlugin(fastify, options) {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');

    const Product = ProductModel(sequelize);

    await sequelize.sync();

    fastify.decorate('db', sequelize);
    fastify.decorate('models', { Product });
  } catch (err) {
    console.error('DB Connection Failed:', err);
    process.exit(1);
  }
}

module.exports = fp(dbPlugin);
