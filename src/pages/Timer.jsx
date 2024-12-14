import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Timer() {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate('/subscribe');
  };

  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date('January 1, 2025 00:00:00').getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown-container bg-gray-100 text-center p-8">
      <div className="countdown-grid flex justify-center space-x-4 mb-8 pt-10">
        {countdown && (
          <>
            <div className="countdown-item text-center">
              <span className="text-black text-4xl font-bold">{countdown.days}</span>
              <div className="text-gray-600 text-sm">Days</div>
            </div>
            <div className="countdown-item text-center">
              <span className="text-black text-4xl font-bold">{countdown.hours}</span>
              <div className="text-gray-600 text-sm">Hours</div>
            </div>
            <div className="countdown-item text-center">
              <span className="text-black text-4xl font-bold">{countdown.minutes}</span>
              <div className="text-gray-600 text-sm">Minutes</div>
            </div>
            <div className="countdown-item text-center">
              <span className="text-black text-4xl font-bold">{countdown.seconds}</span>
              <div className="text-gray-600 text-sm">Seconds</div>
            </div>
          </>
        )}
      </div>
      <div className="button-container flex justify-center items-center space-x-4">
        <p className="text-gray-600 text-sm font-bold">Subscribe to Daily Wellness Newsletter</p>
        <button
          onClick={handleSubscribeClick}
          className="bg-black text-white font-bold py-2 px-6 rounded-full hover:bg-gray-800"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Timer;