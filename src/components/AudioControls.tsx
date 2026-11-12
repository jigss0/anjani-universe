import { Music2, Volume2, VolumeX } from "lucide-react";

interface Props {
  enabled: boolean;
  songPlaying: boolean;
  onAmbient: () => void;
  onSong: () => void;
}

export default function AudioControls({ enabled, songPlaying, onAmbient, onSong }: Props) {
  return <div className="audio-controls">
    <button className={`icon-button ${enabled ? "is-active" : ""}`} onClick={onAmbient} aria-label="Toggle ambient music" title="Ambient music">
      {enabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
    </button>
    <button className={`icon-button ${songPlaying ? "is-active" : ""}`} onClick={onSong} aria-label="Play birthday song" title="Birthday song">
      <Music2 size={17} />
    </button>
  </div>;
}
