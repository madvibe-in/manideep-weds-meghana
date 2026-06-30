import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import CountdownSection from "./sections/CountdownSection";
import InvitationCard from "./sections/InvitationCard";
import TimelineSection from "./sections/TimelineSection";
import VenueSection from "./sections/VenueSection";
import ClosingSection from "./sections/ClosingSection";
import SiteFooter from "./sections/SiteFooter";

type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function CornerFlourish({ position }: { position: CornerPosition }) {
  return (
    <svg
      className={`corner-flourish corner-flourish-${position}`}
      viewBox="0 0 180 180"
      aria-hidden="true"
      focusable="false"
    >
      <path className="flourish-stem" d="M24 148 C43 130, 50 110, 52 88 C55 58, 74 37, 110 22" />
      <path className="flourish-stem flourish-stem-soft" d="M47 109 C68 105, 84 91, 95 68" />
      <path className="flourish-stem flourish-stem-soft" d="M65 61 C82 58, 94 49, 104 33" />

      <path className="flourish-leaf" d="M42 120 C27 113, 22 98, 30 84 C45 90, 51 105, 42 120Z" />
      <path className="flourish-leaf flourish-leaf-soft" d="M63 82 C50 72, 52 57, 66 48 C78 60, 77 75, 63 82Z" />
      <path className="flourish-leaf" d="M96 49 C101 34, 113 27, 128 29 C124 45, 111 53, 96 49Z" />
      <path className="flourish-leaf flourish-leaf-soft" d="M96 96 C109 83, 125 82, 137 93 C123 106, 108 108, 96 96Z" />

      <g className="flourish-bloom">
        <path d="M74 123 C78 109, 90 101, 104 103 C100 118, 89 126, 74 123Z" />
        <path d="M79 132 C91 118, 107 116, 119 126 C106 139, 91 141, 79 132Z" />
        <path d="M66 134 C80 128, 92 132, 100 145 C85 149, 73 145, 66 134Z" />
      </g>

      <path className="flourish-curl" d="M109 23 C132 13, 150 26, 144 45 C140 58, 121 59, 120 45 C119 36, 129 32, 136 39" />

      <circle className="flourish-dot" cx="32" cy="140" r="2.4" />
      <circle className="flourish-dot" cx="48" cy="127" r="1.6" />
      <circle className="flourish-dot flourish-dot-soft" cx="91" cy="58" r="1.8" />
      <circle className="flourish-dot flourish-dot-soft" cx="131" cy="82" r="1.9" />
    </svg>
  );
}

function SealMandala() {
  return (
    <svg className="seal-mandala" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <circle className="seal-ring seal-ring-outer" cx="60" cy="60" r="52" />
      <circle className="seal-ring seal-ring-middle" cx="60" cy="60" r="42" />
      <circle className="seal-ring seal-ring-inner" cx="60" cy="60" r="32" />
      {Array.from({ length: 12 }).map((_, index) => (
        <path
          // The petals are static SVG marks; index only spaces them around the seal.
          key={index}
          className="seal-petal"
          d="M60 15 C65 27, 65 36, 60 45 C55 36, 55 27, 60 15Z"
          transform={`rotate(${index * 30} 60 60)`}
        />
      ))}
      {Array.from({ length: 16 }).map((_, index) => (
        <circle
          key={index}
          className="seal-bead"
          cx="60"
          cy="10.5"
          r="1.4"
          transform={`rotate(${index * 22.5} 60 60)`}
        />
      ))}
    </svg>
  );
}

function EnvelopeCopy({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      className="envelope-copy-layer"
      initial={false}
      animate={isOpen ? { opacity: 0, y: -12, scale: 0.98 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
      aria-hidden={isOpen}
    >
      <h2 className="envelope-names">
        <span>Manideep</span>
        <em>weds</em>
        <span>Meghana</span>
      </h2>
      <p className="envelope-date">July 03, 2026</p>
    </motion.div>
  );
}

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const panelDuration = prefersReducedMotion ? 0 : 1.18;
  const revealDelay = prefersReducedMotion ? 0 : 0.5;
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const musicFadeRef = useRef<ReturnType<typeof gsap.to> | null>(null);

  // Gently fades the wedding song in over 10s once the invitation opens.
  // Kept very low throughout (0 → 0.12) so it stays a soft background presence.
  const playWeddingMusic = () => {
    let music = musicRef.current;

    if (!music) {
      music = new Audio("/bg-song.webm");
      music.preload = "auto";
      music.loop = true;
      music.volume = 0;
      musicRef.current = music;
    }

    music.volume = 0;

    void music
      .play()
      .then(() => {
        musicFadeRef.current?.kill();
        musicFadeRef.current = gsap.to(music, {
          volume: 0.12,
          duration: 10,
          ease: "power1.inOut"
        });
      })
      .catch(() => {
        // Browsers can still block audio in some modes; the invitation should open regardless.
      });
  };

  const handleOpen = () => {
    setIsOpen(true);
    playWeddingMusic();
  };

  useEffect(() => {
    return () => {
      musicFadeRef.current?.kill();
      musicRef.current?.pause();
    };
  }, []);

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
      <main className="invitation-page">
        <section
          className={`invitation-stage ${isOpen ? "is-open" : ""}`}
          aria-label="Manideep and Meghana wedding invitation"
        >
          <div id="revealed-invitation" className="invitation-reveal">
            <div className="entry-hero">
              <motion.div
                className="entry-photo"
                role="img"
                aria-label="Manideep and Meghana portrait"
                initial={false}
                animate={
                  isOpen
                    ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, scale: 1.06, y: 18, filter: "blur(12px)" }
                }
                transition={{ delay: revealDelay, duration: prefersReducedMotion ? 0 : 1.05, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="entry-photo-soften" aria-hidden="true" />

              <div className="entry-bottom-gradient" aria-hidden="true" />

              <div className="entry-floral-wash" aria-hidden="true" />

              <motion.article
                className="entry-copy"
                initial={false}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
                transition={{ delay: revealDelay + 0.62, duration: prefersReducedMotion ? 0 : 0.72, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.h1
                  className="entry-names"
                  initial={false}
                  animate={isOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 22 }}
                  transition={{ delay: revealDelay + 0.82, duration: prefersReducedMotion ? 0 : 0.74, ease: [0.16, 1, 0.3, 1] }}
                >
                  Manideep & Meghana
                </motion.h1>
                <motion.p
                  className="entry-invite"
                  initial={false}
                  animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ delay: revealDelay + 1.02, duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
                >
                  Invite you to their wedding celebration
                </motion.p>

                <motion.div
                  className="entry-date"
                  initial={false}
                  animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.94 }}
                  transition={{ delay: revealDelay + 1.18, duration: prefersReducedMotion ? 0 : 0.62, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="entry-day">Friday</span>
                  <span className="entry-date-core">
                    <span className="entry-month">July</span>
                    <strong>03</strong>
                    <span className="entry-year">2026</span>
                  </span>
                  <span className="entry-time">7:02 AM</span>
                </motion.div>
              </motion.article>

              {isOpen ? (
                <motion.div
                  className="scroll-hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: revealDelay + 1.6, duration: 0.6 }}
                  aria-hidden="true"
                >
                  <span className="scroll-hint-line" />
                  <motion.span
                    animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </motion.div>
              ) : null}
            </div>

            {isOpen ? (
              <div className="invitation-sections">
                <CountdownSection />
                <InvitationCard />
                <TimelineSection />
                <VenueSection />
                <ClosingSection />
                <SiteFooter />
              </div>
            ) : null}
          </div>

          <div className="envelope" aria-hidden={isOpen}>
            <motion.div
              className="paper-door paper-door-left"
              initial={false}
              animate={isOpen ? { x: "-104%", rotateY: -7 } : { x: "0%", rotateY: 0 }}
              transition={{ duration: panelDuration, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="door-inner-line" aria-hidden="true" />
              <CornerFlourish position="top-left" />
              <CornerFlourish position="bottom-left" />
            </motion.div>

            <motion.div
              className="paper-door paper-door-right"
              initial={false}
              animate={isOpen ? { x: "104%", rotateY: 7 } : { x: "0%", rotateY: 0 }}
              transition={{ duration: panelDuration, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="door-inner-line" aria-hidden="true" />
              <CornerFlourish position="top-right" />
              <CornerFlourish position="bottom-right" />
            </motion.div>
            <EnvelopeCopy isOpen={isOpen} />
            <motion.div
              className="seal-button-track"
              initial={false}
              animate={isOpen ? { left: "-2%", opacity: 0, scale: 0.92 } : { left: "50%", opacity: 1, scale: 1 }}
              transition={{ duration: panelDuration, ease: [0.76, 0, 0.24, 1] }}
            >
              <button
                type="button"
                className="wax-button"
                onClick={handleOpen}
                disabled={isOpen}
                aria-expanded={isOpen}
                aria-controls="revealed-invitation"
                aria-label="Open wedding invitation"
              >
                <span className="seal-shadow-ring" aria-hidden="true" />
                <span className="seal-lacquer-ring" aria-hidden="true" />
                <SealMandala />
                <span className="wax-shine" aria-hidden="true" />
                <span className="wax-initials">M | M</span>
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
};

export default App;
