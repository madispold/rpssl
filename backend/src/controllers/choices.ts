import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { predefinedChoices } from "../constants";
import { getRandomChoice } from "../utils/getRandomChoice";

export default async function choices(fastify: FastifyInstance) {
  fastify.get(
    "/choices",
    async function (_request: FastifyRequest, reply: FastifyReply) {
      reply.send(predefinedChoices);
    }
  );

  fastify.get(
    "/choice",
    async function (_request: FastifyRequest, reply: FastifyReply) {
      const randomChoice = getRandomChoice();
      if (!randomChoice) {
        reply
          .code(500)
          .send({ error: "Something went wrong generating a random number" });
      } else {
        reply.status(200).send(randomChoice);
      }
    }
  );
}
