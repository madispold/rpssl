import { FastifyInstance } from "fastify";
import choices from "./controllers/choices";
import index from "./controllers";
import random from "./controllers/random";
import play from "./controllers/play";

export default async function router(fastify: FastifyInstance) {
  fastify.register(index, { prefix: "/" });
  fastify.register(choices);
  fastify.register(random);
  fastify.register(play);
}
