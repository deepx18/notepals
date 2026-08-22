import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            Note<span className={styles.logoAccent}>pals</span>
          </Link>
          <div className={styles.navActions}>
            <Link href="/login" className={styles.navLink}>
              Sign in
            </Link>
            <Link href="/register" className={styles.navButton}>
              Get started
            </Link>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroBadge}>Collaborative Notes</div>
          <h1 className={styles.heroTitle}>
            Notes that work
            <br />
            <span className={styles.heroAccent}>with you</span>
          </h1>
          <p className={styles.heroDescription}>
            Notepals is a collaborative notes application built for focus.
            Write, organize, and share notes with your team — without the
            complexity.
          </p>
          <div className={styles.heroActions}>
            <Link href="/register" className={styles.heroButton}>
              Get started free
            </Link>
            <Link href="/login" className={styles.heroButtonSecondary}>
              Sign in
            </Link>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Write together</h3>
              <p className={styles.featureDescription}>
                Real-time collaboration that lets your team write and edit
                notes together, seamlessly.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Organize your notes</h3>
              <p className={styles.featureDescription}>
                Keep your notes organized and easy to find with a clean,
                intuitive interface.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Collaborate effortlessly</h3>
              <p className={styles.featureDescription}>
                Share notes with your team and see who&apos;s working on what,
                in real time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; 2026 Notepals. Built with care.
        </p>
      </footer>
    </div>
  );
}
