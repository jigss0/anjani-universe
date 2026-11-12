import { motion } from "framer-motion";
import { identity } from "../../data/identity";
import ModalShell from "../ModalShell";
import { useBirthdayClock } from "../../hooks/useBirthdayClock";

export default function BirthdayFinale({ onClose }: { onClose: () => void }) {
  const clock = useBirthdayClock();
  const locked = identity.birthdayFinaleLocked && !clock.complete;
  return <ModalShell title={locked ? "A little more waiting…" : "The day the universe got you"} eyebrow="THE BIRTHDAY FINALE" onClose={onClose}>
    {locked ? <div className="countdown"><p>This final note is waiting for your birthday.</p><div className="countdown-grid">{[["Days", clock.days], ["Hours", clock.hours], ["Minutes", clock.minutes], ["Seconds", clock.seconds]].map(([label, value]) => <div key={label}><strong>{String(value).padStart(2, "0")}</strong><small>{label}</small></div>)}</div></div> :
      <motion.div className="finale-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="finale-glow">♡</div>
        <p className="eyebrow">25 NOVEMBER · YOUR DAY</p>
        <h3>Happy birthday,<br/><em>Anjani.</em></h3>
        <p>May this next chapter be full of beautiful surprises, brave beginnings, soft mornings, loud laughter and everything your heart has been quietly wishing for.</p>
        <p className="handwriting">I hope I get to be there for so many of them.</p>
        <p className="signature">{identity.signOff}</p>
      </motion.div>}
  </ModalShell>;
}
