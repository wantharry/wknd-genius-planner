
import React, { useState } from 'react';
import { Calendar, Clock, Map, Trash2, MoveVertical, ChevronRight, Save } from 'lucide-react';
import { EventProps } from './EventCard';

interface ItineraryBuilderProps {
  savedEvents?: EventProps[];
}

const ItineraryBuilder: React.FC<ItineraryBuilderProps> = ({ savedEvents = [] }) => {
  const [events, setEvents] = useState<EventProps[]>(savedEvents);
  const [date, setDate] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleRemoveEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleGenerateItinerary = () => {
    // This would be integrated with AI in a real implementation
    console.log('Generate itinerary with:', { date, budget, location, events });
  };

  const handleSaveItinerary = () => {
    // This would save the itinerary to user's account
    console.log('Save itinerary:', { date, budget, location, events });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-semibold mb-4">Build Your Itinerary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-wknd-darkGray mb-1">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-wknd-blue focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-wknd-darkGray mb-1">
              Budget
            </label>
            <select
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-wknd-blue focus:border-transparent"
            >
              <option value="">Select budget range</option>
              <option value="free">Free activities only</option>
              <option value="low">Budget friendly ($)</option>
              <option value="medium">Mid-range ($$)</option>
              <option value="high">Premium ($$$)</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-wknd-darkGray mb-1">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city or area"
              className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-wknd-blue focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleGenerateItinerary}
            className="button-primary flex items-center justify-center gap-2"
          >
            <span>Generate AI Itinerary</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleSaveItinerary}
            className="button-secondary flex items-center justify-center gap-2"
            disabled={events.length === 0}
          >
            <Save className="w-4 h-4" />
            <span>Save Itinerary</span>
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">
          {events.length > 0 
            ? `Added Events (${events.length})` 
            : "No events added yet"}
        </h3>
        
        {events.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>Add events from the Events page to build your perfect weekend</p>
          </div>
        ) : (
          <div className="space-y-4">
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className="flex gap-4 p-4 border border-border rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-6">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-wknd-blue text-white text-xs">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-grow min-w-0">
                  <h4 className="font-medium">{event.title}</h4>
                  <div className="mt-1 text-sm flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {event.time}
                    </span>
                    <span className="flex items-center">
                      <Map className="w-3 h-3 mr-1" />
                      {event.location}
                    </span>
                  </div>
                </div>
                
                <div className="flex-shrink-0 flex gap-2">
                  <button 
                    className="p-1 text-muted-foreground hover:text-wknd-darkGray transition-colors" 
                    title="Reorder"
                  >
                    <MoveVertical className="w-4 h-4" />
                  </button>
                  <button 
                    className="p-1 text-muted-foreground hover:text-destructive transition-colors" 
                    onClick={() => handleRemoveEvent(event.id)}
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItineraryBuilder;
