
import React from 'react';
import { Check } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  ctaText?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = 'Get Started',
}) => {
  return (
    <div 
      className={`
        rounded-xl overflow-hidden transition-all duration-300
        ${isPopular 
          ? 'bg-white border-2 border-wknd-blue shadow-lg transform scale-105 -mt-5 relative z-10' 
          : 'bg-white border border-border hover:shadow-md'}
      `}
    >
      {isPopular && (
        <div className="bg-wknd-blue text-white py-1 px-4 text-xs font-medium text-center">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-3xl md:text-4xl font-bold">{price}</span>
            {price !== 'Free' && <span className="text-muted-foreground ml-1">/month</span>}
          </div>
        </div>
        
        <button 
          className={`w-full py-3 rounded-md transition-colors mb-6 ${
            isPopular ? 'bg-wknd-blue text-white hover:bg-wknd-darkBlue' : 'bg-muted text-foreground hover:bg-muted/80'
          }`}
        >
          {ctaText}
        </button>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-2 ${
                feature.included ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <Check 
                className={`w-5 h-5 flex-shrink-0 ${
                  feature.included ? 'text-wknd-blue' : 'text-muted-foreground/40'
                }`} 
              />
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
