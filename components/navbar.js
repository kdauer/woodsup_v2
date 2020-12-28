import Link from 'next/link'
import styles from './navbar.module.sass'

function Navbar () {
    return (
        <div className={styles.nav}>
      {/* <input type="checkbox" id="nav-check" />
      <div className={styles.navBtn}>
        <label htmlFor="nav-check">
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </label>
      </div> */}
      <div className={styles.navLinks}>
        <Link href="/about">Über Uns</Link>
        <Link href="/projects">Projekte</Link>
        <Link href="/support">Unterstützung</Link>
        <Link href="/links">Motivation</Link>
      </div>
    </div>
    )
}

export default Navbar;