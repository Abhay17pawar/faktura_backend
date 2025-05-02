require('dotenv').config();
const Fastify = require('fastify');

const server = Fastify({ logger: true });

const allowedOrigins = [
  'http://localhost:5173',
  'https://marvelous-figolla-1f9847.netlify.app'
];

server.addHook('onRequest', (req, res, done) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(204).send(); // No Content
  } else {
    done();
  }
});

server.register(require('./app'));

server.listen({ port: process.env.PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server running at ${address}`);
});
