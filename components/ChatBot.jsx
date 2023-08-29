import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Loader from "./Loader";

export default function ChatBot() {
  const scrollRef = useRef(null);
  const textareaRef = useRef(null);
  const [load, setLoad] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [showChatBot, setShowChatBot] = useState(false);
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [botTyping, setBotTyping] = useState(false);

  const addMessage = (message, className, error) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { message, className, error },
    ]);
  };

  const botResponse = () => {
    socket.onmessage = (event) => {
      const message = event.data;
      if (message.startsWith("Hubo un error")) {
        setBotTyping(false);
        addMessage(message, "incoming", true);
      } else {
        setBotTyping(false);
        addMessage(message, "incoming", false);
      }
    };
  };

  const handleChat = async () => {
    setBotTyping(true);
    let message = userMessage.trim();
    if (!message) return;
    setUserMessage("");

    addMessage(message, "outgoing", false);
    await socket.send(message);
    botResponse();
  };

  const connectionChatBot = () => {
    if (!connected) {
      // let socketStart = new WebSocket("ws://localhost:2000/chat");
      let socketStart = new WebSocket(
        "ws://websocket-chatbot.onrender.com/chat"
      );
      socketStart.onopen = () => {
        setSocket(socketStart);
        setConnected(true);
        setLoad(false);
      };
      socketStart.onerror = (error) => {
        setLoad(false);
        setConnected(true);
        addMessage(
          "Ha ocurrido un error al intentar conectar con el servidor",
          "incoming",
          true
        );
      };
    }
  };

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "50px";
    }
  }, [chatMessages]);

  return (
    <div className={showChatBot ? "show-chatbot" : ""}>
      <button
        className="chatbot-toggler"
        onClick={() => {
          setShowChatBot(!showChatBot);
          connectionChatBot();
        }}
      >
        <i className="bx bxs-message-rounded-dots" />
        <i className="bx bxs-x-circle" />
      </button>
      <div className="chatbot">
        <header>
          <h2>CapitalBot</h2>
          <i
            className="bx bxs-x-square"
            onClick={() => setShowChatBot(false)}
          />
        </header>
        {load ? (
          <div className="load-chat">
            <Loader />
          </div>
        ) : (
          <ul className="chatbox" ref={scrollRef}>
            <li className="chat incoming">
              <i className="bx bxs-bot" />
              <p>
                Hola 👋
                <br />
                ¿Cómo puedo ayudarte hoy?
              </p>
            </li>
            {chatMessages.map((msg, i) => (
              <ChatLi
                key={i}
                message={msg.message}
                className={msg.className}
                error={msg.error}
              />
            ))}
            {botTyping && (
              <li className="chat incoming">
                <i className="bx bxs-bot" />
                <p>Escribiendo...</p>
              </li>
            )}
          </ul>
        )}

        <div className="chat-input">
          <textarea
            ref={textareaRef}
            placeholder="Enter a message..."
            value={userMessage}
            required={true}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleChat();
              }
            }}
            onChange={(e) => {
              setUserMessage(e.target.value);
              if (e.target.scrollHeight > e.target.clientHeight) {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }
            }}
          ></textarea>
          <i
            id="send-btn"
            className="bx bx-send"
            onClick={() => handleChat()}
          />
        </div>
      </div>
    </div>
  );
}

export function ChatLi({ message, className, error = false }) {
  return (
    <li className={`chat ${className}`}>
      {className == "incoming" && <i className="bx bxs-bot" />}
      <p className={error ? "error" : ""}>{message}</p>{" "}
    </li>
  );
}
