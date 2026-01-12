"use client";

import { useState, useEffect, useRef } from "react";
import {
  Send,
  Sparkles,
  TrendingUp,
  TrendingDown,
  AlertCircle,
} from "lucide-react";

export default function AITradingAssistant({ asset }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! I'm your AI trading assistant. I can help you analyze ${asset} and provide market insights. What would you like to know?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestions = [
    "Analyze current market trend",
    "What are the key indicators?",
    "Should I buy or sell?",
    "Price prediction for next hour",
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        `Based on the current ${asset} market analysis:\n\n📊 Technical Indicators:\n- RSI: 62 (Neutral)\n- MACD: Bullish crossover\n- Moving Average: Price above 50-day MA\n\n💡 The trend suggests moderate bullish momentum. Consider waiting for a pullback before entering.`,
        `Current ${asset} market shows:\n\n🔍 Key Levels:\n- Support: $41,800\n- Resistance: $43,200\n- Current: $42,156\n\n⚠️ Volume is decreasing, suggesting a potential consolidation phase. Watch for breakout signals.`,
        `${asset} Analysis:\n\n📈 Short-term: Bullish bias\n📉 Medium-term: Consolidation expected\n⏰ Best entry: Wait for confirmation above $42,500\n\nRemember: Always manage your risk and never invest more than you can afford to lose.`,
      ];

      const aiMessage = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
      };

      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user"
                  ? "bg-[#ff6b35] text-white"
                  : "bg-[#2a2a2a] text-gray-100"
              }`}
            >
              {message.role === "assistant" && (
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={16} className="text-[#ff6b35]" />
                  <span className="text-xs font-semibold text-[#ff6b35]">
                    AI Assistant
                  </span>
                </div>
              )}
              <p className="text-sm whitespace-pre-line">{message.content}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#2a2a2a] rounded-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-[#ff6b35] rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[#ff6b35] rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions */}
      <div className="p-4 border-t border-[#2a2a2a]">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setInput(suggestion)}
              className="px-3 py-2 bg-[#2a2a2a] hover:bg-[#333333] rounded-lg text-xs whitespace-nowrap transition"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-[#2a2a2a]">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about market trends..."
            className="flex-1 bg-[#2a2a2a] text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#ff6b35]"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] hover:from-[#ff7a45] hover:to-[#ff9c52] disabled:from-gray-600 disabled:to-gray-600 px-4 py-2 rounded-lg transition"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
