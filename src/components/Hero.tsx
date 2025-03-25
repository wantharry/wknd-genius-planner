
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Map } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-wknd-blue/10 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-wknd-darkBlue/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center stagger-children">
          <div className="inline-block px-4 py-1.5 rounded-full bg-wknd-blue/10 text-wknd-blue text-sm font-medium mb-6">
            AI-Powered Weekend Planning
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Your Weekend,{' '}
            <span className="text-gradient">Perfected</span> by AI
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            WKND curates personalized weekend plans with events, activities, and travel options based on your interests, budget, and location.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events" className="button-primary">
              Discover Events
            </Link>
            <Link to="/itinerary" className="button-secondary">
              Build an Itinerary
            </Link>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 stagger-children">
          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-wknd-blue/10 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-wknd-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Event Discovery</h3>
            <p className="text-muted-foreground">
              Find the perfect events tailored to your interests, from concerts to workshops.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-wknd-blue/10 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-wknd-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-muted-foreground">
              Create optimized itineraries that maximize your time and minimize travel.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="w-12 h-12 rounded-full bg-wknd-blue/10 flex items-center justify-center mb-4">
              <Map className="w-6 h-6 text-wknd-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Exploration</h3>
            <p className="text-muted-foreground">
              Discover hidden gems and local favorites curated by our AI system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
