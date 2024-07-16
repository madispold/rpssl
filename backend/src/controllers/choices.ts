import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { predefinedChoices } from "../constants";
import { getRandomChoice } from "../utils/getRandomChoice";
import { Choice, Choices } from "../schema/choice";

export default async function choices(fastify: FastifyInstance) {
  fastify.get(
    "/choices",
    {
      schema: {
        response: {
          200: Choices,
        },
      },
    },
    async function (_request: FastifyRequest, reply: FastifyReply) {
      reply.send(predefinedChoices);
    }
  );

  fastify.get(
    "/choice",
    {
      schema: {
        response: {
          200: Choice,
        },
      },
    },
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
