import Reveal from "../components/Reveal";
import { FloralDivider } from "../components/Ornaments";
import { ceremonyTimeline } from "../data/weddingData";

export default function TimelineSection() {
  return (
    <section className="section section--timeline">
      <div className="section-pattern section-pattern--dots" aria-hidden="true" />

      <div className="section-inner">
        <Reveal>
          <p className="eyebrow-script">The order of the</p>
          <h2 className="section-title">Ceremony</h2>
          <FloralDivider className="section-divider" />
        </Reveal>

        <div className="timeline">
          {ceremonyTimeline.map((item, index) => (
            <div className="timeline-item" key={item.title}>
              <span className="timeline-dot" aria-hidden="true" />
              <Reveal direction="right" delay={index * 0.05} className="timeline-card">
                <span className="timeline-time">{item.time}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-detail">{item.detail}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
