import type { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Card({
  children,
  selected = false,
  onClick,
  className = "",
}: CardProps) {
  const classes = [
    styles.card,
    onClick && styles.clickable,
    selected && styles.selected,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (onClick) {
    return (
      <button
        type="button"
        className={classes}
        onClick={onClick}
        aria-pressed={selected}
      >
        {children}
      </button>
    );
  }

  return <div className={classes}>{children}</div>;
}
