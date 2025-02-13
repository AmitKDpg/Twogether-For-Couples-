import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Heart } from 'lucide-react';

function FloatingHearts() {
  return (
    <>
      {[...Array(15)].map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 10;
        const randomTranslateX = (Math.random() - 0.5) * 200;
        const randomRotate = (Math.random() - 0.5) * 360;
        const size = 20 + Math.random() * 30;

        return (
          <Heart
            key={i}
            className="floating-heart"
            size={size}
            style={{
              '--left': `${randomLeft}vw`,
              '--delay': `${randomDelay}s`,
              '--tx': `${randomTranslateX}px`,
              '--tr': `${randomRotate}deg`
            } as React.CSSProperties}
          />
        );
      })}
    </>
  );
}

function CountdownPage() {
  const [reunionDate, setReunionDate] = useState('');
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isCountingDown, setIsCountingDown] = useState(false);

  useEffect(() => {
    let timer: number;

    if (isCountingDown && reunionDate) {
      timer = window.setInterval(() => {
        const now = new Date().getTime();
        const target = new Date(reunionDate).getTime();
        const difference = target - now;

        if (difference > 0) {
          setCountdown({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
          });
        } else {
          setIsCountingDown(false);
          clearInterval(timer);
        }
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isCountingDown, reunionDate]);

  const handleStartCountdown = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCountingDown(true);
  };

  return (
    <div className="countdown-container min-h-screen">
      <div className="countdown-bg" />
      <FloatingHearts />
      
      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Countdown to Reunion</h1>
            <p className="text-gray-600">Track the moments until you're together again</p>
          </div>

          {!isCountingDown ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <form onSubmit={handleStartCountdown} className="space-y-6">
                <div>
                  <label htmlFor="reunionDate" className="block text-sm font-medium text-gray-700 mb-2">
                    When will you meet again?
                  </label>
                  <input
                    type="datetime-local"
                    id="reunionDate"
                    value={reunionDate}
                    onChange={(e) => setReunionDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white/50 backdrop-blur-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-102 flex items-center justify-center gap-2"
                >
                  <Clock className="w-5 h-5" />
                  Start Countdown
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: countdown.days, label: 'Days' },
                  { value: countdown.hours, label: 'Hours' },
                  { value: countdown.minutes, label: 'Minutes' },
                  { value: countdown.seconds, label: 'Seconds' }
                ].map((item, index) => (
                  <div key={index} className="bg-pink-50/80 backdrop-blur-sm rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl font-bold text-pink-600 mb-2">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600">Until your next reunion on</p>
                <p className="text-lg font-semibold text-pink-600 mt-2">
                  {new Date(reunionDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
                <button
                  onClick={() => setIsCountingDown(false)}
                  className="mt-6 px-6 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-102"
                >
                  Reset Countdown
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountdownPage;