import type { DestinationId } from "../types";

export const destinations: { id: DestinationId; number: string; title: string; subtitle: string; icon: string }[] = [
  { id: "memories", number: "01", title: "Our timeline", subtitle: "The moments that became ours", icon: "✳" },
  { id: "photographs", number: "02", title: "The photograph room", subtitle: "Little moments, kept forever", icon: "▧" },
  { id: "letters", number: "03", title: "A letter for you", subtitle: "Things I wanted you to know", icon: "✉" },
  { id: "cinema", number: "04", title: "Our little cinema", subtitle: "When memories start moving", icon: "▷" },
  { id: "little-things", number: "05", title: "The little things", subtitle: "A thousand tiny reasons", icon: "♡" },
  { id: "future", number: "06", title: "Letters from tomorrow", subtitle: "For all that is still to come", icon: "⌁" },
  { id: "wish-drawer", number: "07", title: "The happiness drawer", subtitle: "Pick a little note", icon: "✧" },
  { id: "voice-notes", number: "08", title: "A voice from me", subtitle: "A few words, spoken just for you", icon: "♫" }
];
