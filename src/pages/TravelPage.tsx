import React, { useState } from 'react';
import { MapPin, Heart, Star, Calendar, Bed, Coffee } from 'lucide-react';

const destinations = [
  {
    name: 'Udaipur, Rajasthan',
    description: 'The City of Lakes, known for its romantic palaces and boat rides',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80',
    rating: 4.8
  },
  {
    name: 'Goa',
    description: 'Beautiful beaches, sunsets, and romantic seaside dining',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80',
    rating: 4.7
  },
  {
    name: 'Darjeeling, West Bengal',
    description: 'Scenic mountain views and cozy tea estates',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80',
    rating: 4.6
  },
  {
    name: 'Agra, Uttar Pradesh',
    description: 'Home to the Taj Mahal, the ultimate symbol of love',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80',
    rating: 4.9
  },
  {
    name: 'Munnar, Kerala',
    description: 'Misty hills, tea plantations, and romantic weather',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80',
    rating: 4.7
  },
  {
    name: 'Manali, Himachal Pradesh',
    description: 'Snow-capped mountains and cozy cottages',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80',
    rating: 4.8
  },
  {
    name: 'Pondicherry',
    description: 'French colonial charm and peaceful beaches',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80',
    rating: 4.5
  },
  {
    name: 'Andaman Islands',
    description: 'Pristine beaches and romantic water villas',
    image: 'https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&q=80',
    rating: 4.9
  },
  {
    name: 'Ooty, Tamil Nadu',
    description: 'Scenic hill station with beautiful gardens',
    image: 'https://images.unsplash.com/photo-1582536301911-0c45c7b6f4e7?auto=format&fit=crop&q=80',
    rating: 4.6
  },
  {
    name: 'Jaipur, Rajasthan',
    description: 'Pink City with royal palaces and romantic heritage hotels',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80',
    rating: 4.7
  },
  {
    name: 'Alleppey, Kerala',
    description: 'Romantic houseboat stays in the backwaters',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80',
    rating: 4.8
  },
  {
    name: 'Shimla, Himachal Pradesh',
    description: 'Colonial charm and snow-covered landscapes',
    image: 'https://images.unsplash.com/photo-1626714485833-537cd87776cd?auto=format&fit=crop&q=80',
    rating: 4.7
  },
  {
    name: 'Ranthambore, Rajasthan',
    description: 'Wildlife safaris and luxury jungle resorts',
    image: 'https://images.unsplash.com/photo-1585468274952-0b0246cca8a7?auto=format&fit=crop&q=80',
    rating: 4.6
  },
  {
    name: 'Coorg, Karnataka',
    description: 'Coffee plantations and misty mountains',
    image: 'https://images.unsplash.com/photo-1582536301911-0c45c7b6f4e7?auto=format&fit=crop&q=80',
    rating: 4.8
  }
];

type TripPlan = {
  startDate: string;
  endDate: string;
  destination: string;
  accommodation: string;
};

function TravelPage() {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [tripPlan, setTripPlan] = useState<TripPlan>({
    startDate: '',
    endDate: '',
    destination: '',
    accommodation: ''
  });
  const [showPlanForm, setShowPlanForm] = useState(false);

  const accommodationOptions = [
    { type: 'Luxury Resort', priceRange: '₹15,000 - ₹30,000 per night' },
    { type: 'Boutique Hotel', priceRange: '₹8,000 - ₹15,000 per night' },
    { type: 'Heritage Stay', priceRange: '₹10,000 - ₹20,000 per night' },
    { type: 'Romantic Villa', priceRange: '₹12,000 - ₹25,000 per night' }
  ];

  const handlePlanTrip = (destination: string) => {
    setSelectedDestination(destination);
    setShowPlanForm(true);
    setTripPlan(prev => ({ ...prev, destination }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Romantic Destinations in India</h1>
          <p className="text-gray-600">Plan your perfect romantic getaway</p>
        </div>

        {showPlanForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full m-4">
              <h2 className="text-2xl font-semibold mb-4">Plan Your Trip to {selectedDestination}</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Date</label>
                  <input
                    type="date"
                    value={tripPlan.startDate}
                    onChange={e => setTripPlan(prev => ({ ...prev, startDate: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">End Date</label>
                  <input
                    type="date"
                    value={tripPlan.endDate}
                    onChange={e => setTripPlan(prev => ({ ...prev, endDate: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Accommodation</label>
                  <select
                    value={tripPlan.accommodation}
                    onChange={e => setTripPlan(prev => ({ ...prev, accommodation: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  >
                    <option value="">Select accommodation</option>
                    {accommodationOptions.map((option, index) => (
                      <option key={index} value={option.type}>
                        {option.type} ({option.priceRange})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowPlanForm(false)}
                    className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                  >
                    Confirm Plan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <button
                  onClick={() => handlePlanTrip(destination.name)}
                  className="w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Plan Your Trip
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelPage;