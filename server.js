require('dotenv').config();
const Fastify = require('fastify');
const cors = require('@fastify/cors');

const server = Fastify({ logger: true });

server.register(cors, {
  origin: (origin, cb) => {
    const allowedOrigins = [
      'http://localhost:5173',
      'https://marvelous-figolla-1f9847.netlify.app'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

server.register(require('./app'));

server.listen({ port: process.env.PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server running at ${address}`);
});
