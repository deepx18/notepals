"use client";

import type { Note } from "@/types/note";
import styles from "./NoteCard.module.css";

type NoteCardProps = {
  note: Note;
  selected?: boolean;
  onSelect: (note: Note) => void;
};

function formatRelativeTime(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMs / 3600000);
  const diffDay = Math.floor(diffMs / 86400000);

  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function getPreview(content: string): string {
  return content.replace(/\n+/g, " ").trim().slice(0, 150);
}

export default function NoteCard({ note, selected, onSelect }: NoteCardProps) {
  return (
    <button
      type="button"
      className={`${styles.card} ${selected ? styles.cardSelected : ""}`}
      onClick={() => onSelect(note)}
      aria-pressed={selected}
    >
      <div className={styles.title}>{note.title || "Untitled note"}</div>
      {note.content && (
        <div className={styles.preview}>{getPreview(note.content)}</div>
      )}
      <div className={styles.meta}>
        <span className={styles.updatedAt}>
          {formatRelativeTime(note.updatedAt)}
        </span>
      </div>
    </button>
  );
}
