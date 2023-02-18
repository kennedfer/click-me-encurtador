import { useEffect, useState } from "react";

export const LinkButton = (props) => {
  const { shortLink, copyToClipboard } = props;
  const [buttonText, setButtonText] = useState("");
  const DELAY_TO_CHANGE_TEXT = 2000;

  useEffect(() => {
    setButtonText(shortLink);
  }, [shortLink]);

  const changeTextToShorLink = () => {
    setButtonText(shortLink);
  };

  const onClick = () => {
    setButtonText("Link copiado!");
    copyToClipboard(shortLink);
    setTimeout(changeTextToShorLink, DELAY_TO_CHANGE_TEXT);
  };

  return (
    <div className={shortLink == "" ? "invisible" : "visible"}>
      <input
        onClick={onClick}
        type="text"
        title="seu link"
        value={buttonText}
        className="custom-font b-rounded full-w btn ta-center no-border pad c-white bg-primary"
        readOnly="readonly"
      ></input>
    </div>
  );
};
