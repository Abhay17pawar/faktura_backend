require('dotenv').config();
const Fastify = require('fastify');

const server = Fastify({ logger: true });

server.register(require('./app'));

// ✅ Correct syntax for setting both port and host
server.listen({ port: process.env.PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server running at ${address}`);
});
