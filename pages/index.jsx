import axios from "axios";
import { useState } from "react";
import { Button } from "./components/Button";
import { DivError } from "./components/DivError";
import { LinkButton } from "./components/LinkButton";
import { Input } from "./components/Input";
import { useHref } from "./hooks/useHref";
import { Title } from "./components/Title";
import { copyToClipboard } from "./hooks/copyToClipboard";

export default () => {
  const [nick, setNick] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [shortLink, setShortLink] = useState("");

  let createShortLinkRoute = "";
  const INPUTS_PLACEHOLDERS = ["Cole seu link aqui", "Apelido (opcional)"];

  const postNewLink = async () => {
    const link = {
      nick,
      url,
    };

    setError("");

    createShortLinkRoute = useHref() + "new";
    const response = await axios.post(createShortLinkRoute, link);

    const { ok, message } = response.data;
    if (!ok) return setError(message);

    setShortLink(useHref() + message);
  };

  return (
    <div className="page custom-font">
      <div className="container gap ds-flex f-collum">
        <Title />
        <br />
        <div className="url-input gap">
          <Input placeholder={INPUTS_PLACEHOLDERS[0]} setValue={setUrl} />
          <Button disabled={url == ""} onClick={postNewLink} />
        </div>
        <DivError error={error} />
        <Input placeholder={INPUTS_PLACEHOLDERS[1]} setValue={setNick} />
        <LinkButton copyToClipboard={copyToClipboard} shortLink={shortLink} />
        <div className="ta-center c-gray ts-small">
          Use apenas caracteres de 'a' a 'z', '0' a '9' e '-'.
        </div>
      </div>
    </div>
  );
};
