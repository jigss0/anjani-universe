import ModalShell from "../ModalShell";

export default function Cinema({ onClose }: { onClose: () => void }) {
  return <ModalShell title="When our memories start moving" eyebrow="OUR LITTLE CINEMA" onClose={onClose}>
    <p className="section-intro">A tiny film for the moments that deserve more than a photograph.</p>
    <div className="video-frame">
      <video controls playsInline preload="metadata" poster="/media/photos/birthday-finale.jpg">
        <source src="/media/videos/our-little-film.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
    <p className="media-note">Replace <code>our-little-film.mp4</code> with your edited video. Keep the filename exactly the same.</p>
    <video className="video-secondary" controls playsInline preload="none">
      <source src="/media/videos/special-moment.mp4" type="video/mp4" />
    </video>
  </ModalShell>;
}
