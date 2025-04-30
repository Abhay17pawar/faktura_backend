const productController = require('../controllers/product.controller');

async function productRoutes(fastify, options) {
  fastify.get('/products', productController.getAllProducts);
  fastify.post('/products', productController.createProduct);
  fastify.put('/product/:id',productController.updateProduct);
}

module.exports = productRoutes;
 