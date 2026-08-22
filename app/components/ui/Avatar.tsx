import styles from "./Avatar.module.css";

type AvatarProps = {
  name: string;
  size?: "sm" | "md" | "lg";
  status?: "online" | "offline";
  className?: string;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function getColorFromName(name: string): string {
  const colors = [
    "#9747ff",
    "#55c98a",
    "#e6b85c",
    "#ef6b78",
    "#47a8ff",
    "#ff6b9d",
    "#6bffe0",
    "#ffb847",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export default function Avatar({
  name,
  size = "md",
  status,
  className = "",
}: AvatarProps) {
  const classes = [styles.avatar, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      <div
        className={classes}
        style={{ backgroundColor: getColorFromName(name) }}
        aria-label={name}
        title={name}
      >
        {getInitials(name)}
      </div>
      {status && (
        <span
          className={`${styles.status} ${status === "online" ? styles.statusOnline : styles.statusOffline}`}
        />
      )}
    </div>
  );
}
