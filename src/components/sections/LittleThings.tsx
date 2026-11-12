import { motion } from "framer-motion";
import { littleThings } from "../../data/surprises";
import ModalShell from "../ModalShell";

export default function LittleThings({ onClose }: { onClose: () => void }) {
  return <ModalShell title="All the little things that are so you" eyebrow="THE DETAILS I NOTICE" onClose={onClose}>
    <p className="section-intro">Not a list of perfect things. Just the details that make you unmistakably you.</p>
    <div className="little-grid">
      {littleThings.map((item, i) => <motion.article className="little-card" key={item.title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
        <span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p>
      </motion.article>)}
    </div>
  </ModalShell>;
}
