import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function index(fastify: FastifyInstance) {
  fastify.get(
    "/",
    async function (_request: FastifyRequest, reply: FastifyReply) {
      reply.send("Simple server for Rock Paper Scissors Spock Lizard! 👋");
    }
  );
}
