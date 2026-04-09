import { useState, useEffect, useRef } from 'react';
import { playClick, playHover } from '@/hooks/useSoundEffects';
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  InstagramIcon,
  BookOpen,
} from 'lucide-react';
import Magnetic from './Magnetic';
import { PROFILE, SOCIAL_LINKS } from '@/data/constants';

const roles = [
  'Security Researcher',
  'DevOps Engineer',
  'Cybersecurity Specialist',
  'Linux System Administrator',
];

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: InstagramIcon,
  blog: BookOpen,
  email: Mail,
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [theme, setTheme] = useState('light');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Listen for theme changes
  useEffect(() => {
    const checkTheme = () => {
      const hasIndigoClass = document.documentElement.classList.contains('midnight-indigo');
      setTheme(hasIndigoClass ? 'midnight-indigo' : 'light');
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => observer.disconnect();
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Matrix-style rain effect using requestAnimationFrame + prefers-reduced-motion check
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip animation for users who prefer reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Helper function to get CSS variable and convert HSL to RGB
    const getCSSColorAsRGB = (varName: string): string => {
      const root = document.documentElement;
      const hslValue = getComputedStyle(root).getPropertyValue(varName).trim();
      
      if (!hslValue) return 'rgb(0, 0, 0)';

      // Parse HSL value (e.g., "0 0% 5%")
      const parts = hslValue.split(' ');
      const h = parseFloat(parts[0]);
      const s = parseFloat(parts[1]) / 100;
      const l = parseFloat(parts[2]) / 100;

      // HSL to RGB conversion
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs((h / 60) % 2 - 1));
      const m = l - c / 2;
      
      let r = 0, g = 0, b = 0;
      if (h < 60) { r = c; g = x; b = 0; }
      else if (h < 120) { r = x; g = c; b = 0; }
      else if (h < 180) { r = 0; g = c; b = x; }
      else if (h < 240) { r = 0; g = x; b = c; }
      else if (h < 300) { r = x; g = 0; b = c; }
      else { r = c; g = 0; b = x; }

      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
      
      return `rgb(${r}, ${g}, ${b})`;
    };

    // Get theme-aware background and foreground colors
    const backgroundColor = getCSSColorAsRGB('--background');
    const foregroundColor = getCSSColorAsRGB('--foreground');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01{}[]<>/*#=+-;:.abcdefghijklmnopqrstuvwxyz';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    let lastFrameTime = 0;
    const frameInterval = 60; // ~16fps throttle
    let animationId: number;

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw);

      if (timestamp - lastFrameTime < frameInterval) return;
      lastFrameTime = timestamp;

      // Use theme-aware background fade
      const bgColor = backgroundColor.match(/\d+/g);
      if (bgColor) {
        ctx.fillStyle = `rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, 0.04)`;
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.04)'; // fallback
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];

        // Lead character — brighter (using foreground color)
        const fgColor = foregroundColor.match(/\d+/g);
        if (fgColor) {
          ctx.fillStyle = `rgba(${fgColor[0]}, ${fgColor[1]}, ${fgColor[2]}, 0.15)`;
        } else {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; // fallback
        }
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Trail character — slightly dimmer
        if (drops[i] > 1) {
          const trailChar = chars[Math.floor(Math.random() * chars.length)];
          if (fgColor) {
            ctx.fillStyle = `rgba(${fgColor[0]}, ${fgColor[1]}, ${fgColor[2]}, 0.07)`;
          } else {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.07)'; // fallback
          }
          ctx.fillText(trailChar, i * fontSize, (drops[i] - 1) * fontSize);
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden pb-12 bg-background">
      {/* Matrix rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top-left code comment */}
      <div className="absolute top-28 left-6 md:left-10 z-10 hidden md:block">
        <p className="font-mono text-xs text-foreground/90 leading-relaxed font-medium">
          // portfolio.tsx
          <br />
          // version: 3.0.0
          <br />
          // status: production
          <br />
          // last_build: {new Date().toISOString().split('T')[0]}
        </p>
      </div>

      {/* Top-right line numbers */}
      <div className="absolute top-28 right-6 md:right-10 z-10 hidden md:block">
        <p className="font-mono text-xs text-foreground/80 leading-relaxed text-right font-medium">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="block">
              {String(i + 1).padStart(3, '0')}
            </span>
          ))}
        </p>
      </div>

      {/* Main content */}
      <div className="text-center relative z-10 pt-24 md:pt-20">
        {/* Name */}
        <h1
          className="heading-brutal leading-[0.85]"
          style={{ fontSize: 'clamp(65px, 13vw, 140px)' }}
        >
          <div className="glitch-text" data-text="Muhammad">
            Muhammad
          </div>
          <br />
          <div className="glitch-text" data-text="Wasiq.">
            <span className="text-foreground/20">Wasiq.</span>
          </div>
        </h1>

        {/* Typewriter role */}
        <div className="mt-6 h-8 flex items-center justify-center">
          <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-foreground/50">
            {'< '}
          </span>
          <span className="font-mono text-xs md:text-sm tracking-[0.15em] text-foreground/70 font-medium">
            {displayText}
          </span>
          <span
            className={`font-mono text-xs md:text-sm text-foreground/70 transition-opacity duration-100 ${
              cursorVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            |
          </span>
          <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-foreground/50">
            {' />'}
          </span>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 justify-center mt-8 max-w-md mx-auto">
          {[
            'Python',
            'Cybersecurity',
            'DevOps',
            'Docker',
            'Linux',
            'Kubernetes',
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 font-mono text-xs border-2 border-foreground/40 text-foreground/80 font-medium tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 cursor-default rounded-none"
              onMouseEnter={playHover}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center mt-10">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICON_MAP[link.id];
            if (!Icon) return null;
            return (
              <Magnetic key={link.id} strength={0.3}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  onClick={playClick}
                  className="group relative inline-flex items-center justify-center p-3 border-2 border-foreground bg-card text-foreground transition-all duration-300 hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-foreground hover:text-background rounded-none"
                  style={{ boxShadow: '4px 4px 0px 0px currentColor' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0px 0px currentColor'; }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              </Magnetic>
            );
          })}
        </div>

        {/* Resume button */}
        <div className="mt-10">
          <Magnetic strength={0.1}>
            <a
              href="/resume.pdf"
              download="Muhammad_Wasiq_Resume.pdf"
              onClick={playClick}
              className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground bg-foreground text-background text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-card hover:text-foreground rounded-none"
              style={{ boxShadow: '8px 8px 0px 0px rgba(var(--foreground-rgb, 0 0 0), 0.2)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '8px 8px 0px 0px currentColor'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '8px 8px 0px 0px rgba(var(--foreground-rgb, 0 0 0), 0.2)'; }}
            >
              <span>Download Resume</span>
              <span className="w-2 h-2 border-r-2 border-b-2 border-current rotate-45 -translate-y-[1px] group-hover:translate-y-[1px] transition-transform duration-300"></span>
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Bottom-left info */}
      <div className="absolute bottom-10 left-6 md:left-10 z-10">
        <span className="text-foreground text-xs tracking-[0.2em] uppercase font-mono font-medium">
          {PROFILE.website}
        </span>
      </div>

      {/* Bottom-right stats */}
      <div className="absolute bottom-10 right-6 md:right-10 z-10 hidden md:block">
        <div className="font-mono text-xs text-foreground text-right leading-relaxed font-medium">
          <p>const experience = "2+ years";</p>
          <p>const projects = 10;</p>
          <p>const passion = Infinity;</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-5 h-5 text-foreground/60 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
