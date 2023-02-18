import { linksHooks } from "../hooks/index.js";
import { linksRoutes } from "../routes/index.js";

export const linksController = [
  (fastify, options, done) => {
    fastify.post(
      "/new",
      {
        preHandler: [
          linksHooks.nickIsInvalid,
          linksHooks.nickAlreadyUsed,
          linksHooks.nickAlreadyUsed,
        ],
      },
      linksRoutes.createShortLink
    );
    done();
  },
  (fastify, options, done) => {
    fastify.get(
      "/:nick",
      { preHandler: linksHooks.linkExists },
      linksRoutes.redirectToLink
    );
    done();
  },
];
