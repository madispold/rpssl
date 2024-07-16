import { FastifyInstance } from "fastify";
import {
  PlayParams,
  PlayParamsType,
  PlayResponse,
  PlayResponseType,
} from "../schema/play";
import { getRandomChoice } from "../utils/getRandomChoice";
import { Error, ErrorType } from "../schema/error";
import { getPlayResult } from "../utils/getPlayResult";
import { predefinedChoices } from "../constants";

export default async function play(fastify: FastifyInstance) {
  fastify.post<{ Body: PlayParamsType; Reply: PlayResponseType | ErrorType }>(
    "/play",
    {
      schema: {
        body: PlayParams,
        response: {
          200: PlayResponse,
          500: Error,
        },
      },
    },
    async (request, reply) => {
      const { player: playerChoiceId } = request.body;

      const computerChoice = getRandomChoice();
      const playerChoice = predefinedChoices.find(
        (choice) => choice.id === playerChoiceId
      );

      if (!playerChoice || !computerChoice) {
        reply.code(500).send({ error: "Error generating choices!" });
        return;
      }

      const result = getPlayResult(playerChoice, computerChoice);
      if (!result.results) {
        reply.code(500).send({ error: "Error calculating result!" });
      }

      reply.send(result);
    }
  );
}
