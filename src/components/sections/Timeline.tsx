import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { memories } from "../../data/memories";
import ModalShell from "../ModalShell";

export default function Timeline({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const active = memories.find((m) => m.id === selected);
  return <ModalShell title="The moments that became ours" eyebrow="OUR TIMELINE" onClose={onClose}>
    <p className="section-intro">Not every important moment looks important while it is happening. These are a few I never want to forget.</p>
    <div className="timeline-list">
      {memories.map((memory, index) => <button className={`timeline-item ${selected === memory.id ? "selected" : ""}`} key={memory.id} onClick={() => setSelected(memory.id)}>
        <span className="timeline-dot">{String(index + 1).padStart(2, "0")}</span>
        <span><small>{memory.date}</small><strong>{memory.title}</strong><em>{memory.description}</em></span>
      </button>)}
    </div>
    <AnimatePresence mode="wait">
      {active && <motion.article className="memory-detail" key={active.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
        <img src={active.image} alt={active.title} onError={(e) => { e.currentTarget.style.display = "none"; }} />
        <div><p className="eyebrow">{active.date}</p><h3>{active.title}</h3><p>{active.detail}</p></div>
      </motion.article>}
    </AnimatePresence>
  </ModalShell>;
}
