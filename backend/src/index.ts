import Fastify from "fastify";
import router from "./router";
const logger = { transport: { target: "pino-pretty" } };

const PORT = 3000;
const fastify = Fastify({ logger });

fastify.register(router);

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    console.log(`Fastify running on port ${PORT} 🚀`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
