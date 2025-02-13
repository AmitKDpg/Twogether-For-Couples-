import React from 'react';
import { Heart } from 'lucide-react';

function Watermark() {
  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
      <Heart className="w-4 h-4 text-pink-500 fill-current animate-pulse" />
      <span className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
        Twogether
      </span>
    </div>
  );
}

export default Watermark;