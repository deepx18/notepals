import Button from "@/components/ui/Button";
import styles from "./EmptyState.module.css";

type EmptyStateProps = {
  onCreateNote: () => void;
};

export default function EmptyState({ onCreateNote }: EmptyStateProps) {
  return (
    <div className={styles.empty}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
      <h3 className={styles.heading}>No notes yet</h3>
      <p className={styles.description}>
        Create your first note and start writing.
      </p>
      <Button variant="primary" size="md" onClick={onCreateNote}>
        Create note
      </Button>
    </div>
  );
}
