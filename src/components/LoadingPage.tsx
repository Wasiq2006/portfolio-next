import { useEffect, useState } from 'react';

const LoadingPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('initializing');

  useEffect(() => {
    const texts = ['initializing', 'loading components', 'compiling assets', 'ready'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setLoadingText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 600);

    // Hide loading page after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-pulse bg-foreground" />
      </div>

      <div className="relative z-10 text-center">
        {/* Main loading indicator */}
        <div className="mb-16 flex justify-center items-center">
          <div className="relative w-32 h-32">
            {/* Outer rotating border */}
            <div 
              className="absolute inset-0 border-4 border-foreground"
              style={{
                animation: 'spin 3s linear infinite'
              }}
            />
            
            {/* Inner rotating border (opposite direction) */}
            <div 
              className="absolute inset-2 border-4 border-transparent border-t-foreground border-r-foreground"
              style={{
                animation: 'spin 2s linear infinite reverse'
              }}
            />

            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-foreground rounded-none animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading text with animation */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter font-mono mb-6" style={{letterSpacing: '0.1em'}}>
            {loadingText}
          </h2>
          
          {/* Animated dots */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-foreground rounded-none animate-bounce" style={{animationDelay: '0s'}} />
            <div className="w-2 h-2 bg-foreground rounded-none animate-bounce" style={{animationDelay: '0.2s'}} />
            <div className="w-2 h-2 bg-foreground rounded-none animate-bounce" style={{animationDelay: '0.4s'}} />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80 border-2 border-foreground bg-card overflow-hidden">
          <div 
            className="h-1 bg-foreground"
            style={{
              animation: 'progress 3.5s ease-in-out forwards'
            }}
          />
        </div>

        {/* Version info */}
        <p className="mt-8 text-xs font-mono uppercase tracking-widest text-black/50">
          loading...
        </p>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          90% {
            width: 90%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
