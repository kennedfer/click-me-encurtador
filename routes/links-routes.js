import { mongooseUtils, stringUtils } from "../utils/index.js";

export const createShortLink = async (request, reply) => {
  let { nick, url } = request.body;
  nick = stringUtils.stringIsEmpty(nick) ? stringUtils.getRandomNick() : nick;

  const shortLink = new mongooseUtils.ShortLink({
    nick,
    url,
  });

  await shortLink.save();
  reply.send({ ok: true, message: nick });
};

export const redirectToLink = async (request, reply) => {
  const { nick } = request.params;
  const shortLink = await mongooseUtils.ShortLink.findOne({ nick });
  reply.redirect(shortLink.url);
};
