
import React, { useState } from 'react';
import Layout from '../components/Layout';
import PricingCard from '../components/PricingCard';
import { Check, X } from 'lucide-react';

// Pricing data
const pricingPlans = [
  {
    title: 'Basic',
    price: '$4.99',
    description: 'Essential features for weekend planning',
    features: [
      { text: 'AI-powered event recommendations', included: true },
      { text: 'Basic itinerary builder', included: true },
      { text: 'Search & filtering options', included: true },
      { text: 'Save up to 3 itineraries', included: true },
      { text: 'Email support', included: true },
      { text: 'Advanced AI personalization', included: false },
      { text: 'Vendor integrations', included: false },
      { text: 'Group planning tools', included: false },
    ],
    isPopular: false,
    ctaText: 'Start Basic Plan',
  },
  {
    title: 'Premium',
    price: '$9.99',
    description: 'Perfect for regular weekend adventurers',
    features: [
      { text: 'AI-powered event recommendations', included: true },
      { text: 'Advanced itinerary builder', included: true },
      { text: 'Search & filtering options', included: true },
      { text: 'Unlimited saved itineraries', included: true },
      { text: 'Priority support', included: true },
      { text: 'Advanced AI personalization', included: true },
      { text: 'Vendor integrations', included: true },
      { text: 'Group planning tools', included: false },
    ],
    isPopular: true,
    ctaText: 'Start Premium Plan',
  },
  {
    title: 'Business',
    price: '$19.99',
    description: 'For businesses promoting local events',
    features: [
      { text: 'AI-powered event recommendations', included: true },
      { text: 'Advanced itinerary builder', included: true },
      { text: 'Search & filtering options', included: true },
      { text: 'Unlimited saved itineraries', included: true },
      { text: 'Dedicated support', included: true },
      { text: 'Advanced AI personalization', included: true },
      { text: 'Vendor integrations', included: true },
      { text: 'Promote your business events', included: true },
    ],
    isPopular: false,
    ctaText: 'Start Business Plan',
  },
];

// FAQ data
const faqItems = [
  {
    question: 'How does the AI recommendation system work?',
    answer: 'Our AI system analyzes your preferences, past activities, location, and budget to suggest personalized weekend plans. It continuously learns from your interactions to improve recommendations over time.',
  },
  {
    question: 'Can I use WKND without creating an account?',
    answer: 'Yes, you can browse events and use basic features without an account. However, to save itineraries and receive personalized recommendations, you\'ll need to create a free account.',
  },
  {
    question: 'How often are new events added?',
    answer: 'We update our event database in real-time, with new events being added constantly. Our system aggregates events from multiple sources to ensure you have access to the most current options.',
  },
  {
    question: 'Can I upgrade or downgrade my subscription?',
    answer: 'Absolutely! You can change your subscription plan at any time. When upgrading, you\'ll immediately get access to additional features. When downgrading, the change will take effect at the end of your current billing cycle.',
  },
  {
    question: 'Is my data secure with WKND?',
    answer: 'We take data security seriously. Your personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent, and we use it only to improve your experience on the platform.',
  },
];

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Plan</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Select the perfect plan to elevate your weekends with AI-powered recommendations and personalized itineraries.
            </p>
            
            {/* Billing toggle */}
            <div className="inline-flex items-center bg-muted p-1 rounded-lg mb-12">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingPeriod === 'monthly' 
                    ? 'bg-white text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingPeriod === 'annual' 
                    ? 'bg-white text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual <span className="text-wknd-blue">Save 20%</span>
              </button>
            </div>
          </div>
          
          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <PricingCard 
                key={index}
                title={plan.title}
                price={billingPeriod === 'annual' 
                  ? `$${(parseFloat(plan.price.replace('$', '')) * 0.8 * 12).toFixed(2)}` 
                  : plan.price}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                ctaText={plan.ctaText}
              />
            ))}
          </div>
          
          {/* Features comparison */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-center mb-8">Plans Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left">Feature</th>
                    <th className="py-4 px-4 text-center">Basic</th>
                    <th className="py-4 px-4 text-center bg-muted/30">Premium</th>
                    <th className="py-4 px-4 text-center">Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Event recommendations</td>
                    <td className="py-4 px-4 text-center">Basic</td>
                    <td className="py-4 px-4 text-center bg-muted/30">Advanced</td>
                    <td className="py-4 px-4 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Saved itineraries</td>
                    <td className="py-4 px-4 text-center">3</td>
                    <td className="py-4 px-4 text-center bg-muted/30">Unlimited</td>
                    <td className="py-4 px-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">AI personalization</td>
                    <td className="py-4 px-4 text-center"><X className="h-5 w-5 text-muted-foreground/50 mx-auto" /></td>
                    <td className="py-4 px-4 text-center bg-muted/30"><Check className="h-5 w-5 text-wknd-blue mx-auto" /></td>
                    <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-wknd-blue mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Vendor integrations</td>
                    <td className="py-4 px-4 text-center"><X className="h-5 w-5 text-muted-foreground/50 mx-auto" /></td>
                    <td className="py-4 px-4 text-center bg-muted/30"><Check className="h-5 w-5 text-wknd-blue mx-auto" /></td>
                    <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-wknd-blue mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Group planning</td>
                    <td className="py-4 px-4 text-center"><X className="h-5 w-5 text-muted-foreground/50 mx-auto" /></td>
                    <td className="py-4 px-4 text-center bg-muted/30"><X className="h-5 w-5 text-muted-foreground/50 mx-auto" /></td>
                    <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-wknd-blue mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Event promotion</td>
                    <td className="py-4 px-4 text-center"><X className="h-5 w-5 text-muted-foreground/50 mx-auto" /></td>
                    <td className="py-4 px-4 text-center bg-muted/30"><X className="h-5 w-5 text-muted-foreground/50 mx-auto" /></td>
                    <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-wknd-blue mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Support</td>
                    <td className="py-4 px-4 text-center">Email</td>
                    <td className="py-4 px-4 text-center bg-muted/30">Priority</td>
                    <td className="py-4 px-4 text-center">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* FAQ section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className={`w-full text-left p-5 flex justify-between items-center transition-colors ${
                      activeFaq === index ? 'bg-muted/30' : 'hover:bg-muted/10'
                    }`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium">{item.question}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform ${activeFaq === index ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeFaq === index && (
                    <div className="p-5 border-t border-border bg-white">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-gradient-to-r from-wknd-blue to-wknd-darkBlue text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your weekends?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of users who've discovered new experiences and adventures with WKND.
          </p>
          <button className="px-8 py-3 bg-white text-wknd-blue rounded-md font-medium hover:bg-white/90 transition-colors">
            Start Free Trial
          </button>
          <p className="text-white/70 text-sm mt-4">No credit card required. Cancel anytime.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
