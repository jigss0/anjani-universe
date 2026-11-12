import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import type { DestinationId } from "../types";

interface Props {
  id: DestinationId;
  number: string;
  title: string;
  subtitle: string;
  icon: string;
  visited: boolean;
  onClick: (id: DestinationId) => void;
}

export default function DestinationCard({ id, number, title, subtitle, icon, visited, onClick }: Props) {
  return <motion.button
    className="destination-card"
    onClick={() => onClick(id)}
    whileHover={{ y: -5, scale: 1.012 }}
    whileTap={{ scale: 0.985 }}
    layout
  >
    <span className="destination-number">{number}</span>
    <span className="destination-icon">{icon}</span>
    <span className="destination-copy">
      <strong>{title}</strong>
      <small>{subtitle}</small>
    </span>
    <span className="destination-action">{visited ? <Check size={17} /> : <ArrowUpRight size={18} />}</span>
  </motion.button>;
}
