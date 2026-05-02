import { PrismaClient } from "@prisma/client";

const db =
  globalthis.prisma ||
  new PrismaClient({
    logs: ["query", "info", "warn", "error"],
  });

if (process.env.NODE_ENV == "devlopment") {
  globalThis.prisma = db;
}

export default db;
