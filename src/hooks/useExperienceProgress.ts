import { useEffect, useState } from "react";

const KEY = "anjani-universe-visited-v1";

export function useExperienceProgress() {
  const [visited, setVisited] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]") as string[]; }
    catch { return []; }
  });

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(visited)); }, [visited]);

  const markVisited = (id: string) => setVisited((old) => old.includes(id) ? old : [...old, id]);
  const reset = () => setVisited([]);
  return { visited, markVisited, reset };
}
