import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import styles from '../styles/footer.module.sass'

const Footer = () => {
  const { t } = useTranslation('common')

    return (
<div className={styles.footer}>      
       <p>Copyright © 2021 Woods Up e.V.</p> 
        <div >
        <Link href="/privacypolicy">{t('privacypolicy')}</Link>
        <Link href="/legalnotice">{t('legalnotice')}</Link>
        <Link href="/contact">{t('contact')}</Link>
        </div>
      </div>
    )
}


export default Footer