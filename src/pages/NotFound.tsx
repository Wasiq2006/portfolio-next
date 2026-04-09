import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { playClick } from '@/hooks/useSoundEffects';
import CustomCursor from '@/components/CustomCursor';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [glitchText, setGlitchText] = useState('404');

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname,
    );
  }, [location.pathname]);

  // Glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText((prev) => (prev === '404' ? '4░4' : '404'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
      <CustomCursor />
      
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Main 404 with glitch effect */}
        <div className="mb-16 relative">
          <h1 className="text-[140px] md:text-[200px] font-black leading-none text-foreground mb-4 font-mono tracking-tighter" style={{
            textShadow: '4px 4px 0px rgba(var(--foreground-rgb),0.3), 8px 8px 0px rgba(var(--foreground-rgb),0.1)'
          }}>
            {glitchText}
          </h1>
        </div>

        {/* Message Box with brutal border */}
        <div className="border-4 border-foreground bg-card p-8 md:p-12 mb-12" style={{ boxShadow: '12px 12px 0px 0px currentColor' }}>
          <p className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-6 italic" style={{letterSpacing: '0.05em'}}>
            Access Denied
          </p>
          <p className="text-sm md:text-base text-foreground/70 font-mono uppercase tracking-widest mb-6">
            Route: {location.pathname}
          </p>
          <p className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-light">
            The page you're looking for doesn't exist or has been moved. 
            Choose your next command below.
          </p>
        </div>

        {/* Action buttons matching portfolio style */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <button
            onClick={() => {
              playClick();
              navigate('/');
            }}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-3 border-foreground bg-foreground text-background font-mono uppercase tracking-widest text-sm font-bold transition-all duration-300 hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:scale-95"
            style={{ boxShadow: '8px 8px 0px 0px currentColor' }}
          >
            Return Home
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              playClick();
              const event = new KeyboardEvent('keydown', {
                key: 'k',
                ctrlKey: true,
                code: 'KeyK',
              });
              window.dispatchEvent(event);
            }}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-3 border-foreground bg-card text-foreground font-mono uppercase tracking-widest text-sm font-bold transition-all duration-300 hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-foreground hover:text-background active:scale-95"
            style={{ boxShadow: '8px 8px 0px 0px currentColor' }}
          >
            <Terminal className="w-5 h-5" />
            Terminal
          </button>
        </div>

        {/* Keyboard hint */}
        <div className="border-2 border-foreground bg-foreground/5 px-6 py-3 inline-block">
          <p className="text-xs font-mono text-foreground uppercase tracking-widest font-bold">
            💡 Press <span className="border border-foreground px-2 py-1 mx-1 bg-card">Ctrl+K</span> to navigate
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
