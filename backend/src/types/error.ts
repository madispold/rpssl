import { Static, Type } from "@sinclair/typebox";

export const Error = Type.Object({
  error: Type.String(),
});

export type ErrorType = Static<typeof Error>;
