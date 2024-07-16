import Fastify from "fastify";
import router from "./router";
import cors from "@fastify/cors";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
const logger = { transport: { target: "pino-pretty" } };

const PORT = 3000;
const fastify = Fastify({ logger }).withTypeProvider<TypeBoxTypeProvider>();

fastify.register(router);

fastify.register(cors, {
  origin: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["content-type", "accept", "content-type", "authorization"],
});

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
