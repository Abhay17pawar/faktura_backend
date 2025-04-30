exports.getAllProducts = async (req, reply) => {
    try {
      const products = await req.server.models.Product.findAll();
      reply.send(products);
    } catch (err) {
      reply.status(500).send({ error: 'Failed to fetch products' });
    }
  };
  
  exports.createProduct = async (req, reply) => {
    try {
      const product = await req.server.models.Product.create(req.body);
      reply.code(201).send(product);
    } catch (err) {
      reply.status(400).send({ error: 'Failed to create product' });
    }
  };

  exports.updateProduct = async (req, reply) => {
    const { id } = req.params;
    const updatedData = req.body;
  
    try {
      const product = await req.server.models.Product.findByPk(id);
  
      if (!product) {
        return reply.status(404).send({ error: 'Product not found' });
      }
  
      await product.update(updatedData);
      reply.send(product);
    } catch (err) {
      reply.status(400).send({ error: 'Failed to update product' });
    }
  };
  
  