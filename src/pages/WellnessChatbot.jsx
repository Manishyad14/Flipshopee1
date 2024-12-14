import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WellnessChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showMoodPopup, setShowMoodPopup] = useState(true);
  const [promptCount, setPromptCount] = useState(0);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const chatContainerRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === "" || (promptCount >= 5 && !showSignUpPopup)) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    const botResponse = { role: "bot", content: getBotResponse(input) };
    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
      setPromptCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 5) {
          setShowSignUpPopup(true);
        }
        return newCount;
      });
    }, 1000);

    setInput("");
  };

  const moodEmojis = [
    { emoji: "😊", mood: "Happy" },
    { emoji: "😔", mood: "Sad" },
    { emoji: "😠", mood: "Angry" },
    { emoji: "😌", mood: "Relaxed" },
    { emoji: "🤔", mood: "Confused" },
    { emoji: "😴", mood: "Tired" },
  ];

  const getMoodResponse = (mood) => {
    const responses = {
      Happy: "😊 It's great to hear you're feeling happy! Let's explore ways to maintain and amplify this positive energy.",
      Sad: "😔 I'm sorry you're feeling sad. Remember, it's okay to feel this way. Let's talk about some strategies to lift your spirits.",
      Angry: "😠 I understand you're feeling angry. Let's work on some calming techniques and address what's bothering you.",
      Relaxed: "😌 Feeling relaxed is wonderful! Let's discuss how to incorporate more relaxation into your daily routine.",
      Confused: "🤔 It's okay to feel confused sometimes. Let's break things down and find some clarity together.",
      Tired: "😴 Feeling tired is common. Let's explore ways to boost your energy and improve your sleep quality.",
    };
    return responses[mood] || "👋 Welcome to AI Wellness Guru! How can I assist you today?";
  };

  const getBotResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes("meditation")) {
      return "🧘 Meditation is a great way to reduce stress and improve mental clarity. Would you like some guided meditation exercises?";
    } else if (lowercaseInput.includes("exercise")) {
      return "💪 Regular exercise is crucial for both physical and mental health. What type of exercises do you enjoy?";
    } else if (lowercaseInput.includes("diet") || lowercaseInput.includes("nutrition")) {
      return "🥗 A balanced diet is key to overall wellness. Let's discuss some healthy eating habits that could work for you.";
    } else if (lowercaseInput.includes("sleep")) {
      return "😴 Quality sleep is essential for wellness. Would you like some tips for improving your sleep hygiene?";
    } else {
      return "I'm here to help you on your wellness journey! What specific area of wellness would you like to focus on?";
    }
  };

  const handleMoodSelection = (mood) => {
    const botResponse = { role: "bot", content: getMoodResponse(mood) };
    setMessages([botResponse]);
    setShowMoodPopup(false);
    setPromptCount(1);
  };

  const suggestedQuestions = [
    "How can I improve my sleep?",
    "What are some quick stress relief techniques?",
    "Can you suggest a beginner's workout routine?",
    "What are some healthy eating habits?",
  ];

  const handleSuggestedQuestion = (question) => {
    setInput(question);
    handleSendMessage();
  };

  return (
    <div className="flex flex-col h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#FF1F8E] to-[#FF8642] py-4 px-4 sm:px-8 flex items-center justify-between shadow-lg">
        <Link
          to="/"
          className="text-white text-sm sm:text-lg font-semibold hover:text-orange-400 transition-colors duration-300"
        >
          Home
        </Link>
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">AI Wellness Guru</h1>
        <Link
          to="/auth"
          className="text-white text-sm sm:text-lg font-semibold hover:text-purple-400 transition-colors duration-300"
        >
          Signup/Signin
        </Link>
      </header>

      {/* Chat Area */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-50"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-end gap-2 sm:gap-3 ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                  message.role === "user" ? "bg-[#FF8642]" : "bg-[#FF1F8E]"
                }`}
              >
                {message.role === "user" ? (
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                ) : (
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                )}
              </div>
              <div
                className={`max-w-[70%] p-3 sm:p-4 rounded-2xl ${
                  message.role === "user"
                    ? "bg-[#FF8642] text-white"
                    : "bg-white text-gray-800 border border-gray-200"
                } shadow-md`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 sm:p-6 bg-white border-t border-gray-200 rounded-t-2xl shadow-lg">
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me anything about wellness..."
            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 rounded-full pr-16 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF1F8E] shadow-inner"
            disabled={promptCount >= 5 && !showSignUpPopup}
          />
          <button
            onClick={handleSendMessage}
            className={`absolute right-2 sm:right-4 top-2 sm:top-3 bg-gradient-to-r from-[#FF1F8E] to-[#FF8642] text-white p-2 sm:p-3 rounded-full transition-all duration-300 shadow-md ${
              promptCount >= 5 && !showSignUpPopup
                ? "opacity-50 cursor-not-allowed"
                : "hover:from-[#FF1F8E]/90 hover:to-[#FF8642]/90"
            }`}
            disabled={promptCount >= 5 && !showSignUpPopup}
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Mood Popup */}
      <Dialog open={showMoodPopup} onOpenChange={setShowMoodPopup}>
        <DialogContent className="bg-white text-gray-800 border-gray-200 rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4 text-gray-800">How are you feeling today?</DialogTitle>
            <DialogDescription className="text-gray-600 mb-4">
              Select an emoji that best represents your current mood.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4">
            {moodEmojis.map(({ emoji, mood }) => (
              <button
                key={mood}
                onClick={() => handleMoodSelection(mood)}
                className="text-4xl hover:scale-110 transition-transform duration-200 bg-transparent"
              >
                {emoji}
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Sign Up Popup */}
      <Dialog open={showSignUpPopup} onOpenChange={setShowSignUpPopup}>
        <DialogContent className="bg-white text-gray-800 border-gray-200 rounded-lg shadow-lg">
          <DialogHeader className="relative">
            <DialogTitle className="text-2xl font-bold mb-4 text-[#0f1117]">
              Continue Your Wellness Journey
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Sign up or sign in to unlock unlimited conversations and personalized wellness advice.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              className="bg-gradient-to-r from-[#FFC107] via-[#FF5722] to-[#FF4081] text-white px-6 py-2 rounded-full text-lg shadow-lg hover:opacity-90 transition-all"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
            <Button
              className="bg-gradient-to-r from-[#FF4081] via-[#FF5722] to-[#FFC107] text-white px-6 py-2 rounded-full text-lg shadow-lg hover:opacity-90 transition-all"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WellnessChatbot;
