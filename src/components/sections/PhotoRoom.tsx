import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gallery } from "../../data/gallery";
import ModalShell from "../ModalShell";

export default function PhotoRoom({ onClose }: { onClose: () => void }) {
  const [flipped, setFlipped] = useState<string | null>(null);
  return <ModalShell title="Little moments, kept forever" eyebrow="THE PHOTOGRAPH ROOM" onClose={onClose}>
    <p className="section-intro">Tap a photograph. Some things deserve to be looked at twice.</p>
    <div className="photo-grid">
      {gallery.map((photo, i) => <motion.button className={`polaroid ${flipped === photo.id ? "flipped" : ""}`} key={photo.id} style={{ rotate: photo.rotate }} onClick={() => setFlipped(flipped === photo.id ? null : photo.id)} whileHover={{ y: -7, rotate: 0 }}>
        <AnimatePresence mode="wait">
          {flipped === photo.id ? <motion.span className="polaroid-note" key="note" initial={{ rotateY: 90 }} animate={{ rotateY: 0 }} exit={{ rotateY: -90 }}><span>♡</span>{photo.note}</motion.span> :
            <motion.span className="polaroid-front" key="front" initial={{ rotateY: -90 }} animate={{ rotateY: 0 }} exit={{ rotateY: 90 }}><img src={photo.image} alt={photo.caption} loading="lazy" onError={(e) => { e.currentTarget.style.opacity = "0"; }} /><small>{photo.caption}</small></motion.span>}
        </AnimatePresence>
      </motion.button>)}
    </div>
  </ModalShell>;
}
