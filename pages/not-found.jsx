import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { DivError } from "./components/DivError";
import { LinkButton } from "./components/LinkButton";
import { Input } from "./components/Input";
import { useHref } from "./hooks/useHref";
import { copyToClipboard } from "./hooks/copyToClipboard";
import { Title } from "./components/Title";

export default () => {
  return (
    <div className="page custom-font">
      <div className="container gap ds-flex f-collum">
        <Title />
        <br />
        <div className="full-w ts-large c-gray ta-center">
          Desculpe, não conseguimos achar seu link :(
        </div>
      </div>
    </div>
  );
};
