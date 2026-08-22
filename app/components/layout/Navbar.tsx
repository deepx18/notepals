"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import styles from "./Navbar.module.css";

type NavbarProps = {
  user?: {
    name: string;
    email: string;
  };
  onLogout?: () => void;
};

export default function Navbar({ user, onLogout }: NavbarProps) {
  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <Link href="/" className={styles.brand}>
        <span className={styles.logo}>
          Note<span className={styles.logoAccent}>pals</span>
        </span>
      </Link>

      <div className={styles.navActions}>
        {user ? (
          <>
            <button className={styles.userButton} aria-label="User menu">
              <Avatar name={user.name} size="sm" status="online" />
              <span className={styles.userName}>{user.name}</span>
            </button>
            {onLogout && (
              <Button variant="ghost" size="sm" onClick={onLogout}>
                Sign out
              </Button>
            )}
          </>
        ) : (
          <>
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="sm">
                Get started
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
