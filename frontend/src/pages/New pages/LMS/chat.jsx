import React, { useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "AI", text: "Hello! How can I assist you today?" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    // Add the user's message
    setMessages([...messages, { sender: "You", text: inputMessage }]);
    const userMessage = inputMessage;
    setInputMessage("");
    setLoading(true);

    try {
      // Replace `YOUR_API_URL` with the actual endpoint
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        prompt: userMessage,
      });

      // Replace `response.data.text` with the API's response text
      setMessages((prev) => [
        ...prev,
        { sender: "AI", text: response.data.body || "Sample AI response from API" },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "AI", text: "Sorry, I couldn't fetch a response. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-4 text-xl font-semibold">
        Chat with AI
      </header>

      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${message.sender === "You" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                message.sender === "You" ? "bg-blue-500 " : "bg-gray-300 text-black"
              }`}
            >
              <p className="text-sm ">{message.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start mb-4">
            <div className="p-3 bg-gray-300 text-black rounded-lg max-w-xs">
              <p className="text-sm">Typing...</p>
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="flex items-center p-4 bg-white border-t border-gray-300">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
