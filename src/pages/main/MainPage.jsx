import React, { useState } from "react";

import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from "@chatscope/chat-ui-kit-react";

const AVATAR_IMAGE =
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MDRfMTA2%2FMDAxNjgwNjE0MjA3MzM2.6sZss-fTgPj28dM4oSvtfwA7C4b7eCSHDTR99xGVpaAg.fUdK-puJDCswVRhwiAxRmC_y7LIeK1vuwfvKH4rXuyIg.JPEG.dianahye%2F1680614205724.jpg&type=sc960_832";

const MainPage = () => {
  const defaultMessage = [
    {
      model: {
        message: "How are you?",
        direction: "incoming",
      },
      avatar: {
        src: AVATAR_IMAGE,
        name: "developerJeans",
      },
    },
    {
      model: {
        message: "I'm fine, thank you, and you?",
        direction: "outgoing",
      },
    },
    {
      model: {
        message: "I'm fine, too. thank you, and you?",
        direction: "incoming",
      },
      avatar: {
        src: AVATAR_IMAGE,
        name: "bloodstrawberry",
      },
    },
  ];

  const [messages, setMessages] = useState(defaultMessage);

  const getMessageComponent = (data) => {
    return data.map((item, index) => {
      return (
        <Message key={index} model={item.model}>
          {item.avatar ? (
            <Avatar src={item.avatar.src} name={item.avatar.name} />
          ) : null}
        </Message>
      );
    });
  };

  const handleSend = (input) => {
    let newMessage = {
      model: {
        message: input,
        direction: "outgoing",
      },
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <div style={{ position: "relative", height: "500px" }}>
        <MainContainer>
          <ChatContainer>
          <MessageList>{getMessageComponent(messages)}</MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default MainPage;
