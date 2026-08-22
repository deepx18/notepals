"use client";

import { useState, useMemo } from "react";
import type { Note } from "@/types/note";
import NoteCard from "./NoteCard";
import EmptyState from "./EmptyState";
import Button from "@/components/ui/Button";
import styles from "./NoteList.module.css";

type NoteListProps = {
  notes: Note[];
  selectedNoteId?: string;
  onSelectNote: (note: Note) => void;
  onCreateNote: () => void;
};

export default function NoteList({
  notes,
  selectedNoteId,
  onSelectNote,
  onCreateNote,
}: NoteListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = useMemo(() => {
    if (!searchQuery.trim()) return notes;
    const query = searchQuery.toLowerCase();
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query)
    );
  }, [notes, searchQuery]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Notes</h2>
        <Button variant="primary" size="sm" onClick={onCreateNote}>
          + New
        </Button>
      </div>

      <div className={styles.searchWrapper}>
        <div className={styles.searchWrapperInner}>
          <svg
            className={styles.searchIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search notes"
          />
        </div>
      </div>

      <div className={styles.list}>
        {notes.length === 0 ? (
          <EmptyState onCreateNote={onCreateNote} />
        ) : filteredNotes.length === 0 ? (
          <div style={{ textAlign: "center", padding: "var(--space-8)" }}>
            <p style={{ color: "var(--foreground-subtle)" }}>
              No notes match your search.
            </p>
          </div>
        ) : (
          filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              selected={note.id === selectedNoteId}
              onSelect={onSelectNote}
            />
          ))
        )}
      </div>
    </div>
  );
}
