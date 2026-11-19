import express from "express";
import cors from "cors";
import { env } from "./config/env";
import routes from "./routes";
import { notFound, errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(cors({ origin: env.clientUrl }));
app.use(express.json());

app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

export default app;
