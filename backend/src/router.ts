import { FastifyInstance } from "fastify";
import choices from "./controllers/choices";
import index from "./controllers";
import random from "./controllers/random";

export default async function router(fastify: FastifyInstance) {
  fastify.register(index, { prefix: "/" });
  fastify.register(choices);
  fastify.register(random);
}
