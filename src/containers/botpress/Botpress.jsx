import React from "react";
import "./botpress.css";
import {
  Container,
  MessageList,
  Composer,
  ComposerInput,
  ComposerButton,
  WebchatProvider,
  Header,
} from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";


const configuration = {
  botName: "Insurance AI Assistant",
  botAvatar: "https://i.postimg.cc/4xgXk0c5/robot.png",
  botDescription: "This webchat will walk you through your insurance profile",
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
  themeColor: "#634433",
});

const Botpress = ({ setUpload, client }) => {

  return (
    <WebchatProvider
      client={client}
      theme={theme}
      configuration={configuration}
    >
      <style>{style}</style>
      <Container
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Header />
        <MessageList />
        <Composer>
          <ComposerInput />
          <ComposerButton />
        </Composer>
      </Container>
    </WebchatProvider>
  );
};

export default Botpress;
