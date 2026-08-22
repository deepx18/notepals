"use client";

import { useState, useCallback, useRef } from "react";
import type { Note } from "@/types/note";
import Avatar from "@/components/ui/Avatar";
import styles from "./NoteEditor.module.css";

type NoteEditorProps = {
  note: Note;
  onSave: (id: string, data: { title: string; content: string }) => void;
  onBack: () => void;
};

type SaveStatus = "saved" | "saving" | "unsaved";

export default function NoteEditor({ note, onSave, onBack }: NoteEditorProps) {
  // State is reset automatically when component remounts via key prop
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("saved");

  const performSave = useCallback(
    (newTitle: string, newContent: string) => {
      setSaveStatus("saving");
      onSave(note.id, { title: newTitle, content: newContent });
      const timeout = setTimeout(() => {
        setSaveStatus("saved");
      }, 400);
      return () => clearTimeout(timeout);
    },
    [note.id, onSave]
  );

  // Auto-save with debounce
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleTitleChange(newTitle: string) {
    setTitle(newTitle);
    setSaveStatus("unsaved");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      performSave(newTitle, content);
    }, 800);
  }

  function handleContentChange(newContent: string) {
    setContent(newContent);
    setSaveStatus("unsaved");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      performSave(title, newContent);
    }, 800);
  }

  return (
    <div className={styles.editor}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <button
            className={styles.backButton}
            onClick={onBack}
            aria-label="Back to notes"
          >
            <svg
              className={styles.backIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Notes
          </button>
          <span className={styles.toolbarTitle}>
            {title || "Untitled note"}
          </span>
        </div>

        <div className={styles.toolbarRight}>
          <div className={styles.saveStatus}>
            <span className={`${styles.saveDot} ${styles[saveStatus]}`} />
            {saveStatus === "saving"
              ? "Saving..."
              : saveStatus === "saved"
                ? "Saved"
                : "Unsaved"}
          </div>

          <div className={styles.collaborators}>
            <Avatar name="You" size="sm" status="online" />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <input
          type="text"
          className={styles.titleInput}
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Untitled note"
          aria-label="Note title"
        />
        <textarea
          className={styles.contentInput}
          value={content}
          onChange={(e) => handleContentChange(e.target.value)}
          placeholder="Start writing..."
          aria-label="Note content"
        />
      </div>
    </div>
  );
}
