import PropTypes from 'prop-types'
import Link from 'next/link'
import { withTranslation } from '../i18n'
import styles from '../styles/footer.module.sass'

const Footer = ({t}) => {
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

Footer.getStaticProps = async () => ({
  namespacesRequired: ['common'],
})

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Footer);