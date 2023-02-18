import { mongooseUtils, stringUtils } from "../utils/index.js";

export const linkExists = async (request, reply) => {
  const { nick } = request.params;
  const linkExists = await mongooseUtils.ShortLink.exists({ nick });

  if (!linkExists) return reply.redirect("/not-found");
};

export const linkIsInvalid = async (request, reply) => {
  const { url } = request.body;

  if (stringUtils.stringIsInvalidUrl(url))
    return reply.send({ ok: false, message: "Link inválido" });
};

export const nickIsInvalid = async (request, reply) => {
  const { nick } = request.body;

  if (stringUtils.stringIsInvalidNick(nick))
    return reply.send({ ok: false, message: "Apelido inválido" });
};

export const nickAlreadyUsed = async (request, reply) => {
  const { nick } = request.body;

  const linkExists = await mongooseUtils.ShortLink.exists({
    nick,
  });

  if (linkExists)
    return reply.send({ ok: false, message: "Apelido já utilizado" });
};
