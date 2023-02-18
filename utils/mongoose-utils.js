import mongoose from "mongoose";

const shortLinkSchema = new mongoose.Schema({
  nick: String,
  url: String,
});

export const ShortLink = new mongoose.model("ShortLink", shortLinkSchema);
