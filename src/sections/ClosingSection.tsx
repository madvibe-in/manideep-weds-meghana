import Reveal from "../components/Reveal";
import { invitation } from "../data/weddingData";

export default function ClosingSection() {
  return (
    <section className="section section--closing">
      <div className="section-pattern section-pattern--dots" aria-hidden="true" />

      <Reveal direction="scale" className="closing-card">
        <span className="invite-frame" aria-hidden="true" />
        <div className="invite-body">
          <p className="invite-section-label">{invitation.invitedByLead}</p>
          <p className="closing-hosts">{invitation.invitedBy}</p>

          <div className="invite-diamond" aria-hidden="true">
            <span />◆<span />
          </div>

          <p className="closing-inviter-name">{invitation.inviterName}</p>
          <p className="closing-inviter-note">“{invitation.inviterNote}”</p>

          <p className="invite-compliments">{invitation.compliments}</p>
        </div>
      </Reveal>
    </section>
  );
}
