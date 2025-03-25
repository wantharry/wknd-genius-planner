
import React, { useState } from 'react';
import Layout from '../components/Layout';
import EventCard, { EventProps } from '../components/EventCard';
import { Search, Filter, Calendar, MapPin, Tag, X } from 'lucide-react';

// Sample events data
const eventsData: EventProps[] = [
  {
    id: '1',
    title: 'Summer Jazz Festival',
    description: 'Enjoy a weekend of incredible jazz music performed by top artists from around the world.',
    date: 'Sat, Aug 15, 2023',
    time: '12:00 PM - 10:00 PM',
    location: 'Central Park, New York',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3',
    price: '$45',
    category: 'Music'
  },
  {
    id: '2',
    title: 'Food & Wine Tasting Tour',
    description: 'Sample delicious cuisine and fine wines from local restaurants and vineyards.',
    date: 'Sun, Aug 16, 2023',
    time: '2:00 PM - 6:00 PM',
    location: 'Downtown District',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
    price: '$65',
    category: 'Food & Drink'
  },
  {
    id: '3',
    title: 'Modern Art Exhibition',
    description: 'Explore contemporary artworks by emerging artists pushing boundaries in modern art.',
    date: 'Sat-Sun, Aug 15-16, 2023',
    time: '10:00 AM - 6:00 PM',
    location: 'Metropolitan Museum',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
    price: '$25',
    category: 'Art'
  },
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
  {
    id: '7',
    title: 'Craft Beer Festival',
    description: 'Sample over 50 craft beers from local and regional breweries with food pairings.',
    date: 'Sun, Aug 16, 2023',
    time: '12:00 PM - 7:00 PM',
    location: 'Waterfront Plaza',
    image: 'https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
    price: '$35',
    category: 'Food & Drink'
  },
  {
    id: '8',
    title: 'Tech Conference',
    description: 'Join industry leaders for talks on the latest innovations and networking opportunities.',
    date: 'Sat-Sun, Aug 15-16, 2023',
    time: '9:00 AM - 5:00 PM',
    location: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
    price: '$150',
    category: 'Technology'
  },
  {
    id: '9',
    title: 'Comedy Club Night',
    description: 'Laugh your weekend away with performances by top stand-up comedians.',
    date: 'Sat, Aug 15, 2023',
    time: '8:00 PM - 11:00 PM',
    location: 'Laugh Factory',
    image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3',
    price: '$30',
    category: 'Entertainment'
  }
];

// Category options
const categories = [
  'All Categories',
  'Music',
  'Food & Drink',
  'Art',
  'Entertainment',
  'Technology',
  'Wellness',
  'Shopping',
];

// Location options
const locations = [
  'All Locations',
  'New York',
  'San Francisco',
  'Chicago',
  'Los Angeles',
  'Boston',
];

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [showFilters, setShowFilters] = useState(false);
  
  const handleAddToItinerary = (event: EventProps) => {
    // This would add the event to user's itinerary
    console.log('Adding to itinerary:', event);
  };
  
  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setSelectedLocation('All Locations');
  };
  
  // Filter events based on search term and selected filters
  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || 
                            event.category === selectedCategory;
    
    const matchesLocation = selectedLocation === 'All Locations' || 
                            event.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <Layout>
      <section className="pt-28 pb-12 bg-muted/20">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Discover Events</h1>
            <p className="text-muted-foreground">
              Find and explore exciting events happening this weekend in your area
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search events by name, description, or keywords..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-wknd-blue focus:border-transparent"
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground hover:text-foreground"
              >
                <Filter className="h-5 w-5" />
              </button>
            </div>
            
            {/* Filters section */}
            {showFilters && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-border shadow-sm animate-scale-in">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Filter Events</h3>
                  <button
                    onClick={handleClearFilters}
                    className="text-sm text-muted-foreground hover:text-wknd-blue flex items-center gap-1"
                  >
                    <X className="h-4 w-4" />
                    Clear filters
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <Tag className="h-4 w-4" />
                      <span>Category</span>
                    </div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-2 border border-border rounded-md"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Location</span>
                    </div>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full p-2 border border-border rounded-md"
                    >
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>Date</span>
                    </div>
                    <input
                      type="date"
                      className="w-full p-2 border border-border rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container-wide">
          {/* Results count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredEvents.length === 0 
                ? 'No events found' 
                : `Showing ${filteredEvents.length} ${filteredEvents.length === 1 ? 'event' : 'events'}`}
            </p>
          </div>
          
          {/* Events grid */}
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-block p-4 rounded-full bg-muted mb-4">
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No events found</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                We couldn't find any events matching your search criteria. Try adjusting your filters or search term.
              </p>
              <button
                onClick={handleClearFilters}
                className="button-secondary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} onAddToItinerary={handleAddToItinerary} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
