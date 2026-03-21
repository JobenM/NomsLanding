import { useEffect, useRef, type ReactNode } from 'react';

type Animation = 'fadeUp' | 'fadeIn' | 'staggerUp' | 'slideLeft' | 'slideRight';

interface Props {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  staggerDelay?: number;
}

export default function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  className = '',
  staggerDelay = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsap: typeof import('gsap').gsap;
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;

    async function init() {
      const gsapModule = await import('gsap');
      const stModule = await import('gsap/ScrollTrigger');

      gsap = gsapModule.gsap;
      ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const el = ref.current;
      if (!el) return;

      const getFromVars = (): gsap.TweenVars => {
        switch (animation) {
          case 'fadeUp':
            return { opacity: 0, y: 48, duration: 0.75, ease: 'power3.out' };
          case 'fadeIn':
            return { opacity: 0, duration: 0.8, ease: 'power2.out' };
          case 'slideLeft':
            return { opacity: 0, x: -60, duration: 0.75, ease: 'power3.out' };
          case 'slideRight':
            return { opacity: 0, x: 60, duration: 0.75, ease: 'power3.out' };
          case 'staggerUp':
            return { opacity: 0, y: 40, duration: 0.65, ease: 'power3.out' };
          default:
            return { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' };
        }
      };

      if (animation === 'staggerUp') {
        const children = el.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
            stagger: staggerDelay,
            delay,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none none',
            },
          }
        );
      } else {
        const fromVars = getFromVars();
        gsap.fromTo(
          el,
          { opacity: 0, y: fromVars.y ?? 0, x: fromVars.x ?? 0 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: fromVars.duration as number,
            ease: fromVars.ease as string,
            delay,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }

    init();

    return () => {
      ScrollTrigger?.getAll().forEach((t) => t.kill());
    };
  }, [animation, delay, staggerDelay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
