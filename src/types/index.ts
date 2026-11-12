export type DestinationId =
  | "memories"
  | "photographs"
  | "letters"
  | "cinema"
  | "little-things"
  | "future"
  | "wish-drawer"
  | "voice-notes";

export interface Memory {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  detail: string;
}

export interface Photo {
  id: string;
  image: string;
  caption: string;
  note: string;
  rotate: number;
}
