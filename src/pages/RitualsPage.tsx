import React, { useState } from 'react';
import { Clock, Heart, Calendar } from 'lucide-react';

type Ritual = {
  time: string;
  activity: string;
  duration: string;
};

function RitualsPage() {
  const [schedule, setSchedule] = useState<Ritual[]>([
    { time: '07:00', activity: 'Good Morning Text', duration: '5 min' },
    { time: '12:00', activity: 'Lunch Break Video Call', duration: '30 min' },
    { time: '18:00', activity: 'Share Daily Highlights', duration: '15 min' },
    { time: '21:00', activity: 'Virtual Movie Night', duration: '120 min' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Daily Love Rituals</h1>
          <p className="text-gray-600">Stay connected throughout the day with these special moments</p>
        </div>

        <div className="grid gap-6">
          {schedule.map((ritual, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 rounded-full p-3">
                  <Clock className="w-6 h-6 text-pink-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{ritual.activity}</h3>
                    <span className="text-sm text-pink-500 font-medium">{ritual.time}</span>
                  </div>
                  <p className="text-gray-600">Duration: {ritual.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-pink-500" />
            Tips for Making Time
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Set calendar reminders for your daily rituals</li>
            <li>• Communicate your schedule with your partner</li>
            <li>• Be flexible and adjust times when needed</li>
            <li>• Make these moments special and distraction-free</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RitualsPage