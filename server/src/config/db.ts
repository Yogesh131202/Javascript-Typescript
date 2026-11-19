import { env } from "./env";

// Plug in your database here (Mongoose, Prisma, TypeORM, pg, ...).
export async function connectDB(): Promise<void> {
  if (!env.databaseUrl) {
    console.log("No DATABASE_URL set, using in-memory data.");
    return;
  }
  // await mongoose.connect(env.databaseUrl);
  console.log("Database connected");
}
