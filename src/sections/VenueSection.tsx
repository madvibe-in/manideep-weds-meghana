import { motion } from "framer-motion";
import { ExternalLink, MapPin, Navigation } from "lucide-react";
import Reveal from "../components/Reveal";
import { FloralDivider } from "../components/Ornaments";
import { wedding } from "../data/weddingData";

export default function VenueSection() {
  return (
    <section className="section section--venue">
      <div className="section-pattern section-pattern--dots" aria-hidden="true" />

      <Reveal className="section-inner">
        <p className="eyebrow-script">Find us at</p>
        <h2 className="section-title">The Venue</h2>
        <FloralDivider className="section-divider" />

        <div className="venue-card">
          <span className="venue-icon" aria-hidden="true">
            <MapPin size={20} />
          </span>
          <h3 className="venue-name">{wedding.venue}</h3>
          <address className="venue-address">
            {wedding.venueAddress.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>

          <div className="venue-map">
            <iframe
              title={`Map to ${wedding.venue}`}
              src={wedding.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="venue-actions">
            <motion.a
              href={wedding.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Navigation size={15} aria-hidden="true" />
              Open in Google Maps
              <ExternalLink size={13} aria-hidden="true" />
            </motion.a>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
