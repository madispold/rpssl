import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { predefinedChoices } from "../constants";
import { Choice, Choices } from "../schema/choices";
import { getRandomChoice } from "../services/choices";
import { Error } from "../schema/error";

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
          500: Error,
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
