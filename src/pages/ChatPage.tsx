import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Smile, Heart } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  mood?: string;
}

const quickReplies = [
  "I feel anxious 😰",
  "I'm feeling low 😔",
  "I don't know how I feel",
  "Help me think 💭",
  "I need encouragement 💛",
];

const aiResponses = [
  "I hear you, and I'm glad you're here. Take a deep breath with me — you're safe. 💛",
  "It's completely okay to feel this way. Let's work through it together, one step at a time.",
  "You're showing so much courage by opening up. That takes real strength. I'm proud of you. 🌟",
  "Sometimes our feelings are complex — and that's perfectly normal. Let's explore what you're experiencing.",
  "Remember, healing isn't linear. Every small step matters. What would feel good for you right now?",
];

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi there 💛 I'm Mosaic, your caring companion. How are you feeling today? There's no wrong answer here.",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: response, sender: "ai" },
      ]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col h-[calc(100vh-4rem)]">
      {/* Gentle mood bar */}
      <div className="px-4 pt-4 pb-2">
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full gradient-hero"
            initial={{ width: "20%" }}
            animate={{ width: `${Math.min(20 + messages.filter((m) => m.sender === "user").length * 15, 90)}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1 text-center">
          Your conversation journey 🌱
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "ai" && (
                <div className="w-9 h-9 rounded-full gradient-hero flex items-center justify-center mr-2 mt-1 flex-shrink-0 shadow-soft">
                  <Heart className="w-4 h-4 text-primary-foreground fill-primary-foreground/50" />
                </div>
              )}
              <div
                className={`
                  max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                  ${msg.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-card text-foreground border border-border shadow-card rounded-bl-md"
                  }
                `}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-full gradient-hero flex items-center justify-center mr-2 flex-shrink-0 shadow-soft">
              <Heart className="w-4 h-4 text-primary-foreground fill-primary-foreground/50" />
            </div>
            <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-card">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary/50 typing-dot" />
                <div className="w-2 h-2 rounded-full bg-primary/50 typing-dot" />
                <div className="w-2 h-2 rounded-full bg-primary/50 typing-dot" />
              </div>
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick replies */}
      <div className="px-4 pb-2">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              onClick={() => sendMessage(reply)}
              className="flex-shrink-0 px-4 py-2 rounded-full bg-lavender-light text-primary text-sm font-semibold border border-lavender/20 hover:bg-lavender/20 hover:scale-105 transition-all duration-200"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 p-2 rounded-2xl bg-card border border-border shadow-card">
          <button className="p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-lavender-light transition-colors">
            <Smile className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Share what's on your mind..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
            className="p-2.5 rounded-xl gradient-hero text-primary-foreground shadow-soft hover:shadow-glow disabled:opacity-40 transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
