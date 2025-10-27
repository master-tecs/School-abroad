'use client'

import { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import "./chatAssistant.scss";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! I am your assistant. I can help you book appointments or answer questions." },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage: Message = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Mock bot response
    setTimeout(() => {
      const botReply: Message = { sender: "bot", text: getBotReply(input) };
      setMessages(prev => [...prev, botReply]);
    }, 600);
  };

  const getBotReply = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("appointment")) return "Sure! Please provide your name, email, phone, preferred date, and service.";
    if (lower.includes("hi") || lower.includes("hello")) return "Hello! How can I assist you today?";
    if (lower.includes("thanks")) return "You are welcome! 😊";
    return "I'm here to help you book appointments and answer questions. Could you please clarify?";
  };

  return (
    <div className={`chat-widget ${open ? "open" : ""}`}>
      <div className="chat-header" onClick={() => setOpen(!open)}>
        <div className="header-left">
          <SmartToyIcon className="ai-icon" />
          <h4>School Abroad Assistant</h4>
        </div>
        {open && <CloseIcon className="close-icon" />}
      </div>

      {open && (
        <div className="chat-body">
          <div className="messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}><SendIcon /></button>
          </div>
        </div>
      )}
    </div>
  );
}