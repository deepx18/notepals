"use client";

import { useState } from "react";
import type { Note } from "@/types/note";
import NoteList from "@/components/notes/NoteList";
import NoteEditor from "@/components/editor/NoteEditor";
import styles from "./dashboard.module.css";

// Mock data — replace with real API calls
const MOCK_NOTES: Note[] = [
  {
    id: "1",
    title: "Getting started with Notepals",
    content:
      "Welcome to Notepals! This is your first note. You can write anything here.\n\nTry creating a new note using the + New button in the sidebar.",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 1800000).toISOString(),
    ownerId: "user-1",
  },
  {
    id: "2",
    title: "Meeting notes — Q3 planning",
    content:
      "Discussed roadmap priorities for Q3.\n\nKey decisions:\n- Focus on collaboration features\n- Improve mobile experience\n- Ship the new editor by end of month",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 7200000).toISOString(),
    ownerId: "user-1",
    collaborators: ["user-2", "user-3"],
  },
  {
    id: "3",
    title: "Project ideas",
    content:
      "Some ideas to explore:\n\n1. Real-time cursor presence\n2. Markdown export\n3. Note templates\n4. Keyboard shortcuts reference",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    ownerId: "user-1",
  },
];

export default function DashboardPage() {
  const [notes, setNotes] = useState<Note[]>(MOCK_NOTES);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  function handleSelectNote(note: Note) {
    setSelectedNote(note);
  }

  function handleCreateNote() {
    const newNote: Note = {
      id: `note-${Date.now()}`,
      title: "",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ownerId: "user-1",
    };
    setNotes((prev) => [newNote, ...prev]);
    setSelectedNote(newNote);
  }

  function handleSaveNote(
    id: string,
    data: { title: string; content: string }
  ) {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, ...data, updatedAt: new Date().toISOString() }
          : note
      )
    );
    setSelectedNote((prev) =>
      prev && prev.id === id
        ? { ...prev, ...data, updatedAt: new Date().toISOString() }
        : prev
    );
  }

  function handleBack() {
    setSelectedNote(null);
  }

  return (
    <div className={styles.panels}>
      {/* Notes list panel */}
      <div
        className={`${styles.notesPanel} ${selectedNote ? styles.hidden : ""}`}
      >
        <NoteList
          notes={notes}
          selectedNoteId={selectedNote?.id}
          onSelectNote={handleSelectNote}
          onCreateNote={handleCreateNote}
        />
      </div>

      {/* Editor panel */}
      <div
        className={`${styles.editorPanel} ${selectedNote ? "" : styles.hidden}`}
      >
        {selectedNote && (
          <NoteEditor
            key={selectedNote.id}
            note={selectedNote}
            onSave={handleSaveNote}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}
