import React, { useEffect } from "react";
import "./botpress.css";

const Botpress = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: "43c85fd5-8b7a-4534-a6d9-b1ed90138eb4",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "7dc837a7-277f-464c-8a44-d51dfd86249f",
        extraStylesheet: "./botpress.css",
        placeholderText: "Hello there...",
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Botpress;