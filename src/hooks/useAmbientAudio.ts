import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";

export function useAmbientAudio() {
  const ambientRef = useRef<Howl | null>(null);
  const songRef = useRef<Howl | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [songPlaying, setSongPlaying] = useState(false);

  useEffect(() => {
    ambientRef.current = new Howl({ src: ["/media/audio/universe-ambience.mp3"], loop: true, volume: 0.22, html5: true });
    songRef.current = new Howl({
      src: ["/media/audio/birthday-song.mp3"],
      loop: false,
      volume: 0.65,
      html5: true,
      onend: () => setSongPlaying(false)
    });
    return () => {
      ambientRef.current?.unload();
      songRef.current?.unload();
    };
  }, []);

  const toggleAmbient = () => {
    if (!ambientRef.current) return;
    if (enabled) {
      ambientRef.current.pause();
      setEnabled(false);
    } else {
      ambientRef.current.play();
      setEnabled(true);
    }
  };

  const toggleSong = () => {
    if (!songRef.current) return;
    if (songPlaying) {
      songRef.current.pause();
      setSongPlaying(false);
    } else {
      ambientRef.current?.pause();
      setEnabled(false);
      songRef.current.play();
      setSongPlaying(true);
    }
  };

  return { enabled, songPlaying, toggleAmbient, toggleSong };
}
