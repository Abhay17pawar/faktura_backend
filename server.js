require('dotenv').config();
const Fastify = require('fastify');

const server = Fastify({ logger: true });

server.register(require('fastify-cors'), {
  origin: 'https://faktura-backend.onrender.com', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
});

server.register(require('./app'));

server.listen({ port: process.env.PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server running at ${address}`);
});
