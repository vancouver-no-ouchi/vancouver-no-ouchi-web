import express, { NextFunction, Request, Response } from "express";
import { CustomError } from "./errors/custom-error";
import cors from "cors";
import { router as indexRouter } from "./routes/indexRouter";
import { router as propertyRouter } from "./routes/propertyRouter";
import { router as authRouter } from "./routes/authRouter";
import compression from "compression";
import { setUpCronJobs } from "./cron/cron";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression()); // For improving performance
app.use(helmet()); // For security
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(apiLimiter);

const routers = [
  { route: "/", controller: indexRouter },
  { route: "/properties", controller: propertyRouter },
  { route: "/auth", controller: authRouter },
];
routers.forEach((r) => {
  app.use(r.route, r.controller);
});

setUpCronJobs();

app.all("*", (req: Request, res: Response) => {
  res
    .status(404)
    .json({ error: `Not Found Route - ${req.method} ${req.path}` });
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof CustomError) {
    res.status(error.statusCode).json(error);
  }
});
