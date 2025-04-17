import express from "express";
import cors from "cors";
import helmet from "helmet";
import config from "./config";
import apiRoutes from "./api";
import { extractToken } from "./auth";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(extractToken);

app.use("/v1", apiRoutes);

app.get("/", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(config.port, () => {
  console.log(`BFF Mobile Service running on port ${config.port}`);
});

export default app;
