import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalShell from "../ModalShell";

const answer = "You are my favourite kind of unexpected. Thank you for making ordinary life feel like a story I want to keep reading. Happy birthday, Anjani. ♡";

export default function SecretNote({ onClose }: { onClose: () => void }) {
  const [clue, setClue] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  // Change this clue to a private word or nickname only she would know.
  const secretAnswer = "kurkure";
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = clue.trim().toLowerCase() === secretAnswer;
    setUnlocked(ok);
    setError(!ok);
  };
  return <ModalShell title="A little secret, just for you" eyebrow="HIDDEN CORNER" onClose={onClose}>
    <p className="section-intro">Some doors open with a memory. Here's your clue: the snack that belongs in one of our favourite stories.</p>
    <form className="secret-form" onSubmit={submit}>
      <input value={clue} onChange={(e) => setClue(e.target.value)} placeholder="Your secret answer…" aria-label="Secret answer" />
      <button className="primary-button" type="submit">Unlock</button>
    </form>
    {error && <p className="error-text">Not quite. Think of our little story again.</p>}
    <AnimatePresence>{unlocked && <motion.div className="secret-reveal" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>{answer}</motion.div>}</AnimatePresence>
  </ModalShell>;
}
