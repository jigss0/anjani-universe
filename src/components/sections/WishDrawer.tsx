import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle } from "lucide-react";
import { wishNotes } from "../../data/surprises";
import ModalShell from "../ModalShell";

export default function WishDrawer({ onClose }: { onClose: () => void }) {
  const [index, setIndex] = useState<number | null>(null);
  const next = () => {
    let n = Math.floor(Math.random() * wishNotes.length);
    if (wishNotes.length > 1 && n === index) n = (n + 1) % wishNotes.length;
    setIndex(n);
  };
  return <ModalShell title="A little happiness, whenever you need it" eyebrow="THE HAPPINESS DRAWER" onClose={onClose}>
    <p className="section-intro">Pick a note. Keep it for a day when you need a tiny reminder.</p>
    <div className="wish-jar"><div className="jar-lid" /><div className="jar-body"><span className="jar-heart">♡</span><span className="jar-label">little things<br/>to make you smile</span></div></div>
    <button className="primary-button" onClick={next}><Shuffle size={16} /> Pick a note</button>
    <AnimatePresence mode="wait">{index !== null && <motion.div className="wish-note" key={index} initial={{ opacity: 0, scale: 0.94, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}>{wishNotes[index]}</motion.div>}</AnimatePresence>
  </ModalShell>;
}
