exports.getAllProducts = async (req, res) => {
  try {
    const products = await req.server.models.Product.findAll();
    res.send(products);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch products' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await req.server.models.Product.create(req.body);
    res.code(201).send(product);
  } catch (err) {
    res.status(400).send({ error: 'Failed to create product' });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const product = await req.server.models.Product.findByPk(id);

    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }

    await product.update(updatedData);
    res.send(product);
  } catch (err) {
    res.status(400).send({ error: 'Failed to update product' });
  }
};