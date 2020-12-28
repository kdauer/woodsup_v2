import Link from 'next/link'
import Navbar from '../components/navbar.js'
import styles from './header.module.sass'

function Header() {
  return (
    <div className={styles.navImg}>
    <h1 className={styles.logo}>
      <Link href="/">
        <img src="/IMG_2825.JPG" alt="Logo" className={styles.logoImg} />
      </Link>
    </h1>
    <Navbar />
  </div>
  )
}

export default Header