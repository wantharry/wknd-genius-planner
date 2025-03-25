
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import EventCard, { EventProps } from '../components/EventCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

// Sample events data
const featuredEvents: EventProps[] = [
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
  }
];

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      
      {/* AI Planner Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container-wide">
          <div className="glass-panel rounded-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto stagger-children">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-wknd-blue" />
              <h2 className="text-xl font-semibold">AI Weekend Planner</h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Tell us what you're looking for, and we'll plan your perfect weekend
            </h3>
            
            <div className="mb-8">
              <label htmlFor="ai-prompt" className="sr-only">What are you looking for?</label>
              <textarea
                id="ai-prompt"
                rows={3}
                className="w-full p-4 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-wknd-blue focus:border-transparent resize-none"
                placeholder="Example: I'm looking for a relaxing weekend in San Francisco with outdoor activities and great restaurants, budget around $200."
              ></textarea>
            </div>
            
            <button className="button-primary flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Generate Weekend Plan
            </button>
          </div>
        </div>
      </section>
      
      {/* Featured Events Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-sm font-medium text-wknd-blue mb-2">Upcoming Events</div>
              <h2 className="text-3xl font-bold">Featured Experiences</h2>
            </div>
            <Link 
              to="/events" 
              className="group flex items-center mt-4 md:mt-0 text-wknd-blue"
            >
              <span>View all events</span>
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-wknd-blue mb-2">What People Say</div>
            <h2 className="text-3xl font-bold">Loved by Travelers</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-1 text-wknd-blue mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "WKND transformed our weekend plans! The AI suggested a jazz festival we hadn't heard about, and it ended up being the highlight of our month."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                  <img 
                    src="https://i.pravatar.cc/150?img=32" 
                    alt="Sarah M." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Sarah M.</div>
                  <div className="text-sm text-muted-foreground">New York</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-1 text-wknd-blue mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "As a busy professional, I don't have time to research weekend activities. WKND's AI planner understands my preferences perfectly and always delivers great suggestions."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                  <img 
                    src="https://i.pravatar.cc/150?img=68" 
                    alt="James L." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">James L.</div>
                  <div className="text-sm text-muted-foreground">San Francisco</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-1 text-wknd-blue mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "The itinerary builder is incredible! It optimized our route between multiple events and even suggested a great restaurant for dinner that was perfectly located."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                  <img 
                    src="https://i.pravatar.cc/150?img=47" 
                    alt="Mia K." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Mia K.</div>
                  <div className="text-sm text-muted-foreground">Chicago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="bg-gradient-to-r from-wknd-blue to-wknd-darkBlue rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for your best weekend yet?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of users who've transformed their weekends with personalized plans and discoveries.
            </p>
            <Link to="/pricing" className="inline-block px-8 py-3 bg-white text-wknd-blue rounded-md font-medium hover:bg-white/90 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
