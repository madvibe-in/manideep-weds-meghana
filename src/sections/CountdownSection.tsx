import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import { FloralDivider } from "../components/Ornaments";
import { wedding } from "../data/weddingData";
import { useCountdown } from "../hooks/useCountdown";

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" }
] as const;

export default function CountdownSection() {
  const remaining = useCountdown(wedding.targetDate);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section section--countdown">
      <div className="section-pattern section-pattern--dots" aria-hidden="true" />

      <Reveal direction="scale" className="countdown-card">
        <span className="countdown-frame" aria-hidden="true" />
        <div className="countdown-inner">
          <p className="eyebrow-script">Counting down to</p>
          <h2 className="section-title">Our Forever</h2>
          <p className="eyebrow-kicker">{wedding.dateLong}</p>
          <FloralDivider className="section-divider" />

          <div className="countdown-grid">
            {units.map((unit, index) => (
              <div className="countdown-cell" key={unit.key}>
                <div className="countdown-tile">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={remaining[unit.key]}
                      className="countdown-number"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: -14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                    >
                      {String(remaining[unit.key]).padStart(2, "0")}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="countdown-label">{unit.label}</span>
                {index < units.length - 1 ? (
                  <span className="countdown-sep" aria-hidden="true">
                    :
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="rule-gold" />
          <p className="countdown-foot">
            {wedding.date} · {wedding.muhurthamTime} · {wedding.venue}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
