import Link from 'next/link'
import { withTranslation } from '../i18n'

import styles from '../styles/navbar.module.sass'

const Navbar = ({t}) => {
    return (
        <div className={styles.nav}>
      <div className={styles.navLinks}>
        <Link href="/about">{t('about')}</Link>
        <Link href="/projects">{t('projects')}</Link>
        <Link href="/support">{t('support')}</Link>
        <Link href="/links">{t('motivation')}</Link>
      </div>
    </div>
    )
}

export default withTranslation('common')(Navbar)