import { useEffect } from 'react';

interface Props {
  featureId: string;
}

// Helper: type text character by character into an element
function typeText(
  gsap: typeof import('gsap').gsap,
  tl: import('gsap').gsap.core.Timeline,
  el: Element,
  text: string,
  position: string | number,
  duration?: number
) {
  const proxy = { val: 0 };
  tl.to(
    proxy,
    {
      val: text.length,
      duration: duration ?? text.length * 0.055,
      ease: 'none',
      onUpdate() {
        el.textContent = text.slice(0, Math.round(proxy.val));
      },
    },
    position
  );
}

// Helper: blink a cursor element
function blinkCursor(
  gsap: typeof import('gsap').gsap,
  el: Element,
  duration = 1.8
) {
  gsap.to(el, {
    opacity: 0,
    duration: 0.4,
    repeat: Math.floor(duration / 0.8),
    yoyo: true,
    ease: 'steps(1)',
  });
}

export default function FeatureScrollAnimator({ featureId }: Props) {
  useEffect(() => {
    const timelines: import('gsap').gsap.core.Timeline[] = [];

    async function init() {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const section = document.getElementById(featureId);
      if (!section) return;

      const st: ScrollTrigger.Vars = {
        trigger: section,
        start: 'top 62%',
        toggleActions: 'play none none none',
      };

      // ──────────────────────────────────────────────
      // VOICE INPUT
      // ──────────────────────────────────────────────
      if (featureId === 'fss-voice') {
        const bar = section.querySelector<HTMLElement>('#fss-voice-input-bar');
        const typedText = section.querySelector('#fss-voice-typed-text');
        const cursor = section.querySelector('#fss-voice-cursor');
        const micWrap = section.querySelector('#fss-voice-mic-wrap');
        const micRing = section.querySelector('#fss-voice-mic-ring');
        const transcript = section.querySelector('#fss-voice-transcript');
        const transcriptText = section.querySelector('#fss-voice-transcript-text');
        const sendBtn = section.querySelector('#fss-voice-send-btn');

        if (!bar || !typedText || !cursor || !micWrap || !micRing || !transcript || !transcriptText || !sendBtn) return;

        const tl = gsap.timeline({ scrollTrigger: st });
        timelines.push(tl);

        // Phase 1: cursor blinks, text types in
        tl.to(cursor, { opacity: 1, duration: 0.01 }, 0)
          .to(bar, { borderColor: '#c8920a', duration: 0.3 }, 0);

        typeText(gsap, tl, typedText, 'chick', 0.1, 0.4);

        // pause, then clear and switch to voice
        tl.to(typedText, { opacity: 0, duration: 0.2 }, 0.7)
          .set(typedText, { textContent: '' }, 0.9)
          .to(typedText, { opacity: 1, duration: 0.1 }, 0.9)
          .to(cursor, { opacity: 0, duration: 0.2 }, 0.9);

        // Phase 2: mic appears
        tl.to(micWrap, { opacity: 1, duration: 0.3 }, 1.1)
          .to(bar, { borderColor: '#c8920a', duration: 0.2 }, 1.1);

        // Pulse ring
        tl.to(micRing, { scale: 1.8, opacity: 0, duration: 0.7, ease: 'power2.out' }, 1.4)
          .set(micRing, { scale: 1, opacity: 0.4 }, 2.1)
          .to(micRing, { scale: 1.8, opacity: 0, duration: 0.7, ease: 'power2.out' }, 2.1);

        // Phase 3: transcript appears
        tl.to(transcript, { opacity: 1, y: 0, duration: 0.3 }, 1.5);
        typeText(gsap, tl, transcriptText, 'two scrambled eggs and sourdough toast with butter', 1.7, 2.5);

        // Phase 4: send button appears
        tl.to(sendBtn, { opacity: 1, duration: 0.3 }, 4.3)
          .to(micWrap, { opacity: 0, duration: 0.2 }, 4.3)
          .to(sendBtn, { scale: 1.15, duration: 0.2, yoyo: true, repeat: 1 }, 4.6);
      }

      // ──────────────────────────────────────────────
      // AI WEB SEARCH
      // ──────────────────────────────────────────────
      if (featureId === 'fss-search') {
        const loading = section.querySelector<HTMLElement>('#fss-search-loading');
        const progress = section.querySelector<HTMLElement>('#fss-search-progress');
        const src1 = section.querySelector('#fss-search-src-1');
        const src2 = section.querySelector('#fss-search-src-2');
        const src3 = section.querySelector('#fss-search-src-3');
        const result = section.querySelector('#fss-search-result');
        const confirm = section.querySelector('#fss-search-confirm');

        if (!loading || !progress || !src1 || !src2 || !src3 || !result || !confirm) return;

        const tl = gsap.timeline({ scrollTrigger: st });
        timelines.push(tl);

        // Loading bar appears
        tl.to(loading, { opacity: 1, duration: 0.3 }, 0.3)
          .to(progress, { width: '100%', duration: 1.2, ease: 'power1.inOut' }, 0.5);

        // Source chips appear
        tl.to(src1, { opacity: 1, y: 0, duration: 0.25 }, 0.9)
          .to(src2, { opacity: 1, y: 0, duration: 0.25 }, 1.15)
          .to(src3, { opacity: 1, y: 0, duration: 0.25 }, 1.4);

        // Results appear
        tl.to(loading, { opacity: 0, height: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, duration: 0.3 }, 1.8)
          .to(result, { opacity: 1, y: 0, duration: 0.4 }, 2.0)
          .to(confirm, { opacity: 1, duration: 0.3 }, 2.5)
          .to(confirm, { scale: 1.04, duration: 0.18, yoyo: true, repeat: 1 }, 2.9);
      }

      // ──────────────────────────────────────────────
      // MULTI-ITEM PARSE
      // ──────────────────────────────────────────────
      if (featureId === 'fss-multi') {
        const inputBar = section.querySelector<HTMLElement>('#fss-multi-input-bar');
        const typedText = section.querySelector('#fss-multi-typed-text');
        const cursor = section.querySelector('#fss-multi-cursor');
        const sendBtn = section.querySelector('#fss-multi-send-btn');
        const label = section.querySelector('#fss-multi-label');
        const item1 = section.querySelector('#fss-multi-item-1');
        const item2 = section.querySelector('#fss-multi-item-2');
        const item3 = section.querySelector('#fss-multi-item-3');
        const total = section.querySelector('#fss-multi-total');

        if (!typedText || !cursor || !sendBtn || !label || !item1 || !item2 || !item3 || !total) return;

        const tl = gsap.timeline({ scrollTrigger: st });
        timelines.push(tl);

        // Type the full sentence
        tl.to(cursor, { opacity: 1, duration: 0.01 }, 0);
        if (inputBar) tl.to(inputBar, { borderColor: '#c8920a', duration: 0.3 }, 0);

        typeText(
          gsap, tl, typedText,
          'chicken caesar salad, a bread roll, and sparkling water',
          0.1, 3.0
        );

        // Send button appears, cursor hides
        tl.to(sendBtn, { opacity: 1, duration: 0.3 }, 3.2)
          .to(cursor, { opacity: 0, duration: 0.1 }, 3.2)
          .to(sendBtn, { scale: 1.15, duration: 0.18, yoyo: true, repeat: 1 }, 3.5);

        // Shimmer / processing flash on input bar
        if (inputBar) {
          tl.to(inputBar, { backgroundColor: 'rgba(200,146,10,0.08)', duration: 0.2 }, 3.8)
            .to(inputBar, { backgroundColor: '#1a1a1a', duration: 0.3 }, 4.0);
        }

        // Label appears
        tl.to(label, { opacity: 1, duration: 0.3 }, 4.0);

        // Items appear one by one
        tl.to(item1, { opacity: 1, y: 0, duration: 0.35 }, 4.2)
          .to(item2, { opacity: 1, y: 0, duration: 0.35 }, 4.55)
          .to(item3, { opacity: 1, y: 0, duration: 0.35 }, 4.9)
          .to(total, { opacity: 1, duration: 0.3 }, 5.35);
      }

      // ──────────────────────────────────────────────
      // TYPEAHEAD SUGGESTIONS
      // ──────────────────────────────────────────────
      if (featureId === 'fss-typeahead') {
        const typedText = section.querySelector('#fss-type-typed-text');
        const cursor = section.querySelector('#fss-type-cursor');
        const suggestions = section.querySelector<HTMLElement>('#fss-type-suggestions');
        const sug0 = section.querySelector('#fss-type-sug-0');
        const sug1 = section.querySelector('#fss-type-sug-1');
        const sug2 = section.querySelector('#fss-type-sug-2');
        const sug3 = section.querySelector('#fss-type-sug-3');

        if (!typedText || !cursor || !suggestions || !sug0 || !sug1 || !sug2 || !sug3) return;

        const tl = gsap.timeline({ scrollTrigger: st });
        timelines.push(tl);

        // Cursor blinks
        blinkCursor(gsap, cursor, 0.8);

        // Type 2 chars
        typeText(gsap, tl, typedText, 'oa', 0.5, 0.3);

        // Suggestions slide in
        tl.to(suggestions, { opacity: 1, y: 0, duration: 0.35 }, 1.0)
          .to(sug0, { opacity: 1, duration: 0.2 }, 1.1)
          .to(sug1, { opacity: 1, duration: 0.2 }, 1.25)
          .to(sug2, { opacity: 1, duration: 0.2 }, 1.4)
          .to(sug3, { opacity: 1, duration: 0.2 }, 1.55);

        // Type more to complete
        typeText(gsap, tl, typedText, 'oat milk latte', 2.0, 0.7);

        // First suggestion highlights
        tl.to(sug0, { backgroundColor: '#3a3a3a', duration: 0.2 }, 2.8)
          .to(sug0, { scale: 1.02, duration: 0.15, yoyo: true, repeat: 1 }, 2.9);
      }

      // ──────────────────────────────────────────────
      // PRIVACY
      // ──────────────────────────────────────────────
      if (featureId === 'fss-privacy') {
        const shieldWrap = section.querySelector('#fss-priv-shield-wrap');
        const shieldPath = section.querySelector<SVGPathElement>('#fss-priv-shield-path');
        const checkPath = section.querySelector<SVGPathElement>('#fss-priv-check');
        const fact1 = section.querySelector('#fss-priv-fact-1');
        const fact2 = section.querySelector('#fss-priv-fact-2');
        const fact3 = section.querySelector('#fss-priv-fact-3');
        const fact4 = section.querySelector('#fss-priv-fact-4');

        if (!shieldWrap || !shieldPath || !checkPath || !fact1 || !fact2 || !fact3 || !fact4) return;

        const tl = gsap.timeline({ scrollTrigger: st });
        timelines.push(tl);

        // Shield appears + draws
        tl.to(shieldWrap, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }, 0.2)
          .to(shieldPath, { attr: { 'stroke-dashoffset': 0 }, duration: 0.9, ease: 'power2.out' }, 0.4)
          .to(checkPath, { attr: { 'stroke-dashoffset': 0 }, duration: 0.5, ease: 'power2.out' }, 1.2);

        // Facts slide in
        tl.to(fact1, { opacity: 1, x: 0, duration: 0.3 }, 1.8)
          .to(fact2, { opacity: 1, x: 0, duration: 0.3 }, 2.05)
          .to(fact3, { opacity: 1, x: 0, duration: 0.3 }, 2.3)
          .to(fact4, { opacity: 1, x: 0, duration: 0.3 }, 2.55);
      }

      // ──────────────────────────────────────────────
      // WORKOUTS
      // ──────────────────────────────────────────────
      if (featureId === 'fss-workouts') {
        const eatenRing = section.querySelector<SVGCircleElement>('#fss-work-eaten-ring');
        const burnedRing = section.querySelector<SVGCircleElement>('#fss-work-burned-ring');
        const kcalNum = section.querySelector('#fss-work-kcal-num');
        const stats = section.querySelector('#fss-work-stats');
        const netLabel = section.querySelector('#fss-work-net');
        const entry = section.querySelector('#fss-work-entry');

        if (!eatenRing || !burnedRing || !kcalNum || !stats || !netLabel || !entry) return;

        const tl = gsap.timeline({ scrollTrigger: st });
        timelines.push(tl);

        // Rings fill + counter
        const kcalProxy = { val: 0 };
        tl.to(eatenRing, { attr: { 'stroke-dashoffset': 68 }, duration: 1.4, ease: 'power2.out' }, 0.3)
          .to(
            kcalProxy,
            {
              val: 1420,
              duration: 1.4,
              ease: 'power2.out',
              onUpdate() {
                if (kcalNum) kcalNum.textContent = Math.round(kcalProxy.val).toLocaleString();
              },
            },
            0.3
          )
          .to(burnedRing, { attr: { 'stroke-dashoffset': 170 }, duration: 0.9, ease: 'power2.out' }, 1.2);

        // Stats row appears
        tl.to(stats, { opacity: 1, y: 0, duration: 0.4 }, 1.8);

        // Net calories pulse
        tl.to(netLabel, { scale: 1.15, duration: 0.2, yoyo: true, repeat: 1 }, 2.4);

        // Workout entry
        tl.to(entry, { opacity: 1, y: 0, duration: 0.35 }, 2.8);
      }
    }

    init();

    return () => {
      timelines.forEach((tl) => tl.kill());
    };
  }, [featureId]);

  return null;
}
