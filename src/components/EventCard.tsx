
import React, { useState } from 'react';
import { Calendar, Clock, Map, Heart, Share2, Plus } from 'lucide-react';

export interface EventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  price: string;
  category: string;
}

interface EventCardProps {
  event: EventProps;
  onAddToItinerary?: (event: EventProps) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onAddToItinerary }) => {
  const [isLiked, setIsLiked] = useState(false);
  
  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };
  
  const handleAddToItinerary = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToItinerary) {
      onAddToItinerary(event);
    }
  };
  
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Share functionality would be implemented here
  };

  return (
    <div className="rounded-xl overflow-hidden card-shadow bg-white group">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
            {event.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <button 
            onClick={toggleLike}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white"
          >
            <Heart
              className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-wknd-darkGray'}`}
            />
          </button>
          <button 
            onClick={handleShare}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white"
          >
            <Share2 className="w-4 h-4 text-wknd-darkGray" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={handleAddToItinerary}
            className="w-full py-2 bg-wknd-blue text-white rounded-md flex items-center justify-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" />
            Add to Itinerary
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{event.title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{event.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 text-wknd-blue mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 text-wknd-blue mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm">
            <Map className="w-4 h-4 text-wknd-blue mr-2" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="font-medium">{event.price}</span>
            <button className="text-sm text-wknd-blue hover:text-wknd-darkBlue transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
