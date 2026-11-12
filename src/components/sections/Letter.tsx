import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainLetter } from "../../data/letters";
import ModalShell from "../ModalShell";

export default function Letter({ onClose }: { onClose: () => void }) {
  const [opened, setOpened] = useState(false);
  return <ModalShell title="A letter I wanted you to keep" eyebrow="SEALED WITH LOVE" onClose={onClose}>
    {!opened ? <motion.button className="envelope" onClick={() => setOpened(true)} whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
      <span className="envelope-stamp">A</span><span className="envelope-label">For Anjani, with all my heart</span><span className="envelope-hint">Tap to open</span>
    </motion.button> :
      <AnimatePresence><motion.article className="letter-paper" initial={{ opacity: 0, y: 18, rotateX: 8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }}>
        <p className="handwriting">{mainLetter.greeting}</p>
        {mainLetter.paragraphs.map((p) => <p key={p}>{p}</p>)}
        <p>{mainLetter.closing}</p>
        <p className="handwriting signature">{mainLetter.signature}</p>
      </motion.article></AnimatePresence>}
  </ModalShell>;
}
