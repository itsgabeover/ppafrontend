import React, { useEffect } from "react";
import "./botpress.css";
import {
  Container,
  MessageList,
  Composer,
  ComposerInput,
  ComposerButton,
  WebchatProvider,
  useClient,
  Header,
  Webchat
} from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";

const clientId = "7dc837a7-277f-464c-8a44-d51dfd86249f"

const configuration = {
  botName: "Insurance AI Assistant",
  botAvatar: "https://picsum.photos/200/300",
  botDescription:
    "This webchat will walk you through your insurance profile",
  email: {
    title: "randomEmail@boptress.com",
    link: "mailto:randomEmail@boptress.com",
  },
  phone: {
    title: "555-555-5555",
    link: "tel:555-555-5555",
  },
  website: {
    title: "https://botpress.com",
    link: "https://botpress.com",
  },
  termsOfService: {
    title: "Terms of service",
    link: "https://botpress.com/terms",
  },
  privacyPolicy: {
    title: "Privacy policy",
    link: "https://botpress.com/privacy",
  },
};

const { style, theme } = buildTheme({
  themeName: "prism",
  themeColor: "#2563EB",
});

const Botpress = () => {
  const client = useClient({ clientId });

  return (
    <WebchatProvider
      client={client}
      configuration={configuration}
      theme={theme}
    >
      <style>{style}</style>
      <Webchat />
    </WebchatProvider>
  );
};

export default Botpress;