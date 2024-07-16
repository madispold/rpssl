import { Static, Type } from "@sinclair/typebox";

export const Choice = Type.Object({
  name: Type.String(),
  id: Type.Number(),
});

export const Choices = Type.Array(Choice);

export type ChoiceType = Static<typeof Choice>;
