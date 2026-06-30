import Reveal from "../components/Reveal";
import { invitation, wedding } from "../data/weddingData";

export default function InvitationCard() {
  return (
    <section className="section section--invite">
      <Reveal className="invite-panel">
        <div className="invite-body">
          <p className="invite-blessings">
            {invitation.blessings.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>

          <p className="invite-lead">{invitation.divineLead}</p>
          <p className="invite-divine">{invitation.divineFrom}</p>

          <h2 className="invite-title">{invitation.title}</h2>
          <span className="invite-title-rule" aria-hidden="true" />

          <p className="invite-solicit">
            We solicit your gracious presence, with family &amp; friends, on the
            auspicious occasion of the marriage of {wedding.couple}.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
