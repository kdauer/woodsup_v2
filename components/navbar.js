import Link from 'next/link'
import { withTranslation } from '../i18n'

import styles from '../styles/navbar.module.css'

const Navbar = ({t}) => {
    return (
        <div className={styles.nav}>
          <input type="checkbox" id={styles.navCheck} />
          <div className={styles.navBtn}>
            <label htmlFor={styles.navCheck}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
            </label>
          </div>
        <div className={styles.navLinks}>
          <a href="/about">{t('about')}</a>
          <a href="/projects">{t('projects')}</a>
          <a href="/support">{t('support')}</a>
          <a href="/links">{t('motivation')}</a>
        </div>
    </div>
    )
}

export default withTranslation('common')(Navbar)