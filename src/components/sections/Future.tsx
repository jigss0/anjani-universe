import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { futureLetters } from "../../data/letters";
import ModalShell from "../ModalShell";

export default function Future({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState<number | null>(null);
  return <ModalShell title="A few notes from tomorrow" eyebrow="LETTERS FROM OUR FUTURE" onClose={onClose}>
    <p className="section-intro">These aren't predictions. They're little hopes I want to carry into the days ahead.</p>
    <div className="future-envelopes">
      {futureLetters.map((letter, i) => <button className={`future-card ${active === i ? "active" : ""}`} key={letter.title} onClick={() => setActive(active === i ? null : i)}>
        <span className="future-index">0{i + 1}</span><strong>{letter.title}</strong><small>{letter.subtitle}</small><span className="future-open">{active === i ? "Close note −" : "Open note +"}</span>
      </button>)}
    </div>
    <AnimatePresence mode="wait">{active !== null && <motion.div className="future-message" key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}><p className="handwriting">For you, from a hopeful tomorrow…</p><p>{futureLetters[active].message}</p></motion.div>}</AnimatePresence>
  </ModalShell>;
}
