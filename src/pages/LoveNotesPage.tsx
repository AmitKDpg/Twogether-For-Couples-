import React, { useState } from 'react';
import { Heart, Send } from 'lucide-react';

const loveNoteTemplates = [
  {
    title: "Morning Sunshine",
    content: "Every morning I wake up thinking of you, and every night I sleep with the hope of meeting you in my dreams. 🌅",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80"
  },
  {
    title: "Forever Yours",
    content: "Distance means so little when someone means so much. You're worth every mile between us. 💝",
    image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&q=80"
  },
  {
    title: "Missing You",
    content: "If you were here right now, I'd hold you tight and never let go. Missing you more with each passing moment. 🌹",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80"
  }
];

function LoveNotesPage() {
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-bounce" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Digital Love Notes</h1>
          <p className="text-gray-600">Send beautiful messages to your loved one</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveNoteTemplates.map((note, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all"
              onClick={() => setSelectedNote(note)}
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <img
                  src={note.image}
                  alt={note.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{note.title}</h3>
                <p className="text-gray-600 text-sm">{note.content}</p>
                <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                  <Send className="w-4 h-4" />
                  Send Note
                </button>
              </div>
              <div className="absolute top-2 right-2">
                <Heart className="w-6 h-6 text-pink-500 fill-current animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Create Custom Note</h2>
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            placeholder="Write your own love note here..."
          />
          <button className="mt-4 flex items-center justify-center gap-2 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
            <Send className="w-4 h-4" />
            Send Custom Note
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoveNotesPage