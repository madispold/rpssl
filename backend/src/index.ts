import Fastify from "fastify";
import router from "./router";
import cors from "@fastify/cors";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
const logger = { transport: { target: "pino-pretty" } };

const { ADDRESS = "localhost", PORT = "3000" } = process.env;
const fastify = Fastify({ logger }).withTypeProvider<TypeBoxTypeProvider>();

fastify.register(router);

fastify.register(cors, {
  origin: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["content-type", "accept", "content-type", "authorization"],
});

const start = async () => {
  try {
    await fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10) });
    console.log(`Fastify running on port ${PORT} 🚀`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
