import { createAuthClient } from "better-auth/react";
export const { signOut, useSession, signUp, signIn } = createAuthClient({
  baseURL: "http://localhost:3000",
});
