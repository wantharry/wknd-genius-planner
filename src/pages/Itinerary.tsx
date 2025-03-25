
import React, { useState } from 'react';
import Layout from '../components/Layout';
import ItineraryBuilder from '../components/ItineraryBuilder';
import EventCard, { EventProps } from '../components/EventCard';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';

// Sample events data
const recommendedEvents: EventProps[] = [
  {
    id: '4',
    title: 'Outdoor Movie Night',
    description: 'Bring blankets and snacks for an evening of classic films under the stars.',
    date: 'Fri, Aug 14, 2023',
    time: '8:00 PM - 11:00 PM',
    location: 'Riverside Park',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
    price: '$10',
    category: 'Entertainment'
  },
  {
    id: '5',
    title: 'Farmers Market',
    description: 'Shop for fresh produce, artisanal foods, and handcrafted goods from local vendors.',
    date: 'Sat, Aug 15, 2023',
    time: '8:00 AM - 1:00 PM',
    location: 'City Square',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
    price: 'Free',
    category: 'Shopping'
  },
  {
    id: '6',
    title: 'Yoga in the Park',
    description: 'Start your weekend with a rejuvenating yoga session surrounded by nature.',
    date: 'Sat, Aug 15, 2023',
    time: '9:00 AM - 10:30 AM',
    location: 'Botanical Gardens',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
    price: '$15',
    category: 'Wellness'
  },
];

const Itinerary: React.FC = () => {
  const [savedEvents, setSavedEvents] = useState<EventProps[]>([]);
  
  const handleAddToItinerary = (event: EventProps) => {
    if (!savedEvents.some(e => e.id === event.id)) {
      setSavedEvents([...savedEvents, event]);
    }
  };
  
  return (
    <Layout>
      <section className="pt-28 pb-12">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Build Your Itinerary</h1>
            <p className="text-muted-foreground">
              Create a personalized itinerary for your weekend with our AI-powered planner
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <ItineraryBuilder savedEvents={savedEvents} />
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden h-full">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-wknd-blue" />
                    <h2 className="text-lg font-semibold">AI Recommendations</h2>
                  </div>
                </div>
                
                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {recommendedEvents.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>Configure your itinerary preferences to get personalized recommendations</p>
                    </div>
                  ) : (
                    recommendedEvents.map(event => (
                      <div key={event.id} className="border border-border rounded-lg overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium mb-1">{event.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {event.description}
                          </p>
                          <button
                            onClick={() => handleAddToItinerary(event)}
                            className="w-full py-2 text-sm bg-wknd-blue text-white rounded-md flex items-center justify-center gap-1 hover:bg-wknd-darkBlue transition-colors"
                          >
                            Add to Itinerary
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="text-sm font-medium text-wknd-blue mb-2">More Ideas</div>
              <h2 className="text-2xl font-bold">Popular This Weekend</h2>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                className="p-2 rounded-full border border-border bg-white"
                aria-label="Previous events"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-full border border-border bg-white"
                aria-label="Next events"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...recommendedEvents, recommendedEvents[0]].map((event, index) => (
              <EventCard key={`popular-${event.id}-${index}`} event={event} onAddToItinerary={handleAddToItinerary} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Itinerary;
