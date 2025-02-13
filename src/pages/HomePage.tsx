import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, Calendar, MessageCircleHeart, Video, Plane } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-4">
        <Icon className="w-6 h-6 text-pink-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-float">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Love Knows No Distance
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            This Valentine's Day, celebrate your love across any distance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/love-letter')}
              className="px-8 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Send Love Letter
            </button>
            <button
              onClick={() => navigate('/love-notes')}
              className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Send Love Note
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-gradient-to-t from-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Keeping Hearts Connected
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={MessageCircleHeart}
              title="Digital Love Notes"
              description="Send heartfelt messages that bridge the distance between you"
            />
            <FeatureCard
              icon={Video}
              title="Virtual Dates"
              description="Share special moments together through video calls"
            />
            <FeatureCard
              icon={Calendar}
              title="Countdown Together"
              description="Track the days until your next reunion"
            />
            <FeatureCard
              icon={MapPin}
              title="Location Sharing"
              description="Feel closer by knowing where your loved one is"
            />
            <FeatureCard
              icon={Plane}
              title="Travel Planning"
              description="Plan your next visit and create memories together"
            />
            <FeatureCard
              icon={Heart}
              title="Love Rituals"
              description="Create daily routines that keep you connected"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
          <p className="text-gray-600">
            Distance means so little when love means so much
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;