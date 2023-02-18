import Fastify from "fastify";
import dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
import mongoose from "mongoose";
import { stringUtils } from "./utils/index.js";
import { linksController } from "./controllers/index.js";
import fastifyNext from "@fastify/nextjs";

dotenv.config();

const fastify = Fastify({ logger: true });
const MONGO_URI = process.env["MONGO_URI"];

fastify.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "PUT", "POST"],
});

linksController.forEach((controller) => fastify.register(controller));

fastify.register(fastifyNext, { dev: true }).after(() => {
  fastify.next("/");
  fastify.next("/not-found");
});

mongoose.connect(MONGO_URI);
fastify.listen({ port: process.env.PORT || 3000 });
