import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import type { ReactNode } from "react";

interface Props { title: string; eyebrow?: string; onClose: () => void; children: ReactNode; }

export default function ModalShell({ title, eyebrow, onClose, children }: Props) {
  return <AnimatePresence>
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.section className="modal-panel" initial={{ opacity: 0, y: 28, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} transition={{ type: "spring", damping: 26, stiffness: 220 }} onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <button className="back-button" onClick={onClose}><ArrowLeft size={16} /> <span>Back to universe</span></button>
          <button className="icon-button" onClick={onClose} aria-label="Close"><X size={18} /></button>
        </header>
        <div className="modal-content">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="modal-title">{title}</h2>
          {children}
        </div>
      </motion.section>
    </motion.div>
  </AnimatePresence>;
}
