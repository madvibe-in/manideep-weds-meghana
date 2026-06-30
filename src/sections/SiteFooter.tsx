import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import { FloralDivider } from "../components/Ornaments";
import { wedding } from "../data/weddingData";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Reveal className="footer-inner">
        <FloralDivider className="footer-divider" />

        <p className="footer-names">
          <span>{wedding.groomFirst}</span>
          <em>&amp;</em>
          <span>{wedding.brideFirst}</span>
        </p>
        <p className="footer-meta">
          {wedding.date} · {wedding.city}
        </p>

        <FloralDivider className="footer-divider footer-divider--flip" />

        <motion.a
          href={`tel:${wedding.phone}`}
          aria-label="Call the hosts"
          className="footer-call"
          whileHover={{ scale: 1.1, rotate: 4 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={17} aria-hidden="true" />
        </motion.a>

        <p className="footer-blessing">With love, we can't wait to celebrate with you.</p>

        <div className="footer-rule" />

        <p className="footer-credit">
          <span>Invitation website crafted by</span>
          <span className="footer-brand">madvibe.designer</span>
          <span>For custom event invitations, call</span>
          <a href="tel:+919949199787">9949199787</a>
        </p>
      </Reveal>
    </footer>
  );
}
