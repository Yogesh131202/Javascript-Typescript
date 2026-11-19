import { env } from "./env.js";

// Plug in your database here (Mongoose, Prisma, pg, ...).
export async function connectDB() {
  if (!env.databaseUrl) {
    console.log("No DATABASE_URL set, using in-memory data.");
    return;
  }
  // await mongoose.connect(env.databaseUrl);
  console.log("Database connected");
}
