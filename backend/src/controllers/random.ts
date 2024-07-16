import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { RandomNumber } from "../schema/random";
import { getRandomNumber } from "../services/choices";
import { Error } from "../schema/error";

export default async function random(fastify: FastifyInstance) {
  fastify.get(
    "/random",
    {
      schema: {
        response: {
          200: RandomNumber,
          500: Error,
        },
      },
    },
    async function (_request: FastifyRequest, reply: FastifyReply) {
      const randomNum = getRandomNumber();
      if (isNaN(randomNum)) {
        reply
          .code(500)
          .send({ error: "Something went wrong generating a random number" });
      } else {
        reply.send({ random_number: randomNum });
      }
    }
  );
}
