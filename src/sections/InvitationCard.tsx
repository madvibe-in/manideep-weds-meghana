import Reveal from "../components/Reveal";
import { invitation } from "../data/weddingData";

export default function InvitationCard() {
  return (
    <section className="section section--invite">
      <Reveal className="invite-panel">
        <div className="invite-body">
          <span className="invite-photo">
            <img src="/image.jpg" alt="Manideep and Meghana" loading="lazy" />
          </span>

          <p className="invite-blessings">
            {invitation.blessings.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>

          <p className="invite-lead">{invitation.divineLead}</p>
          <p className="invite-divine">{invitation.divineFrom}</p>

          <h2 className="invite-title">{invitation.title}</h2>
          <span className="invite-title-rule" aria-hidden="true" />

          <p className="invite-solicit">{invitation.solicit}</p>
          <p className="invite-bride-line">{invitation.brideIntro}</p>
        </div>
      </Reveal>
    </section>
  );
}
