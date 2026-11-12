import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Heart, LockKeyhole, Sparkles } from "lucide-react";
import { identity } from "./data/identity";
import { destinations } from "./data/destinations";
import type { DestinationId } from "./types";
import { useAmbientAudio } from "./hooks/useAmbientAudio";
import { useExperienceProgress } from "./hooks/useExperienceProgress";
import StarField from "./components/StarField";
import AudioControls from "./components/AudioControls";
import DestinationCard from "./components/DestinationCard";
import Timeline from "./components/sections/Timeline";
import PhotoRoom from "./components/sections/PhotoRoom";
import Letter from "./components/sections/Letter";
import Cinema from "./components/sections/Cinema";
import LittleThings from "./components/sections/LittleThings";
import Future from "./components/sections/Future";
import WishDrawer from "./components/sections/WishDrawer";
import VoiceNotes from "./components/sections/VoiceNotes";
import SecretNote from "./components/sections/SecretNote";
import BirthdayFinale from "./components/sections/BirthdayFinale";

const sectionComponents: Record<DestinationId, (props: { onClose: () => void }) => React.JSX.Element> = {
  memories: Timeline,
  photographs: PhotoRoom,
  letters: Letter,
  cinema: Cinema,
  "little-things": LittleThings,
  future: Future,
  "wish-drawer": WishDrawer,
  "voice-notes": VoiceNotes
};

export default function App() {
  const [entered, setEntered] = useState(false);
  const [active, setActive] = useState<DestinationId | "secret" | "finale" | null>(null);
  const { enabled, songPlaying, toggleAmbient, toggleSong } = useAmbientAudio();
  const { visited, markVisited } = useExperienceProgress();

  const open = (id: DestinationId) => {
    markVisited(id);
    setActive(id);
  };
  const Section = active && active in sectionComponents ? sectionComponents[active as DestinationId] : null;

  return <main className="app-shell">
    <StarField />
    <div className="ambient-orb orb-one" /><div className="ambient-orb orb-two" />
    <AudioControls enabled={enabled} songPlaying={songPlaying} onAmbient={toggleAmbient} onSong={toggleSong} />

    <AnimatePresence mode="wait">
      {!entered ? <motion.section className="entrance-screen" key="entrance" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: 0.8 }}>
        <div className="entrance-top"><span>AN ORIGINAL LITTLE UNIVERSE</span><span>EST. 25 · 11 · 2026</span></div>
        <div className="entrance-content">
          <motion.div className="orbit-mark" animate={{ rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }}><span /><span /><span /><i>♡</i></motion.div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>A PLACE THAT EXISTS BECAUSE OF YOU</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }}>Anjani<span>.</span></motion.h1>
          <motion.p className="entrance-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>{identity.openingLine}</motion.p>
          <motion.button className="enter-button" onClick={() => setEntered(true)} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}>
            Enter your little universe <ArrowUpRight size={17} />
          </motion.button>
        </div>
        <div className="entrance-bottom"><span>MADE WITH LOVE, BY JIGAR</span><span>SCROLL LESS · FEEL MORE</span></div>
      </motion.section> :
      <motion.section className="universe-screen" key="universe" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <header className="universe-header">
          <a className="wordmark" href="#top" onClick={(e) => e.preventDefault()}>A<span>.</span> <small>UNIVERSE</small></a>
          <div className="header-note">A WORLD MADE OF US <Heart size={12} /></div>
          <button className="secret-trigger" onClick={() => setActive("secret")} aria-label="Open secret note"><LockKeyhole size={16}/></button>
        </header>
        <section className="welcome-block" id="top">
          <p className="eyebrow"><Sparkles size={13}/> YOUR OWN LITTLE CORNER OF THE UNIVERSE</p>
          <h2>For the girl who makes<br/><em>life feel like a story.</em></h2>
          <p className="welcome-description">Take your time. Wander around. Every little corner holds something I wanted to make for you.</p>
          <div className="welcome-meta"><span>{visited.length} / {destinations.length} places explored</span><span>MADE ESPECIALLY FOR YOU</span></div>
          <div className="progress-track"><span style={{ width: `${(visited.length / destinations.length) * 100}%` }} /></div>
        </section>
        <section className="destination-section">
          <div className="section-heading"><div><p className="eyebrow">CHOOSE WHERE TO WANDER</p><h3>Explore the universe</h3></div><span className="section-count">08 DESTINATIONS</span></div>
          <div className="destination-grid">
            {destinations.map((destination) => <DestinationCard key={destination.id} {...destination} visited={visited.includes(destination.id)} onClick={open} />)}
          </div>
        </section>
        <section className="surprise-strip">
          <div><p className="eyebrow">THERE'S ONE MORE THING</p><h3>A final little surprise,<br/><em>whenever you're ready.</em></h3></div>
          <button className="finale-button" onClick={() => setActive("finale")}>Open the birthday finale <ArrowUpRight size={17}/></button>
        </section>
        <footer className="universe-footer"><span>ANJANI, THIS LITTLE WORLD IS YOURS.</span><span>WITH LOVE, JIGAR ♡</span></footer>
      </motion.section>}
    </AnimatePresence>

    <AnimatePresence>
      {Section && <Section onClose={() => setActive(null)} />}
      {active === "secret" && <SecretNote onClose={() => setActive(null)} />}
      {active === "finale" && <BirthdayFinale onClose={() => setActive(null)} />}
    </AnimatePresence>
    {!entered && <div className="sound-hint">SOUND IS OPTIONAL · USE THE CONTROLS ABOVE</div>}
    <div className="mobile-credit">A LITTLE UNIVERSE BY JIGAR ♡</div>
  </main>;
}
