import ModalShell from "../ModalShell";

const notes = [
  { title: "A little hello", file: "/media/audio/voice-letter-01.mp3", description: "A short voice note, just for you." },
  { title: "One more thing", file: "/media/audio/voice-letter-02.mp3", description: "Something I wanted you to hear in my voice." },
  { title: "Before you go", file: "/media/audio/final-message.mp3", description: "A last little message from me." }
];

export default function VoiceNotes({ onClose }: { onClose: () => void }) {
  return <ModalShell title="A voice from me to you" eyebrow="VOICE POSTCARDS" onClose={onClose}>
    <p className="section-intro">Sometimes a voice says what a typed message cannot. Put on your headphones if you like.</p>
    <div className="voice-list">
      {notes.map((note, i) => <article className="voice-card" key={note.file}><span className="voice-number">0{i + 1}</span><div><strong>{note.title}</strong><small>{note.description}</small><audio controls preload="none"><source src={note.file} type="audio/mpeg" /></audio></div></article>)}
    </div>
  </ModalShell>;
}
