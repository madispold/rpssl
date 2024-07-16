import { Static, Type } from "@sinclair/typebox";

export const PlayResponse = Type.Object({
  results: Type.Optional(Type.String()),
  player: Type.Number(),
  computer: Type.Number(),
});

export const PlayParams = Type.Object({
  player: Type.Number(),
});

export type PlayParamsType = Static<typeof PlayParams>;
export type PlayResponseType = Static<typeof PlayResponse>;
