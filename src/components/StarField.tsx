export default function StarField() {
  return <div className="star-field" aria-hidden="true">
    {Array.from({ length: 42 }, (_, i) => <span key={i} style={{
      left: `${(i * 37 + 11) % 100}%`,
      top: `${(i * 53 + 7) % 100}%`,
      animationDelay: `${(i % 9) * -0.7}s`,
      opacity: 0.25 + (i % 5) * 0.12
    }} />)}
  </div>;
}
