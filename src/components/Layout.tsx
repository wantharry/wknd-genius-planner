
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Create a unique key for each route to trigger animation
  const pageKey = location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div 
          key={pageKey} 
          className="animate-fade-in"
        >
          {children}
        </div>
      </main>
      <footer className="py-8 border-t border-border/40">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-semibold text-wknd-blue">WKND</div>
              <p className="text-sm text-muted-foreground mt-1">Your AI Weekend Planner</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                <a href="#">Privacy Policy</a>
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                <a href="#">Terms of Service</a>
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} WKND. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
