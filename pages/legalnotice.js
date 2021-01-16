import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'
import styles from '../styles/imprint.module.sass'

const Imprint = ({t}) => {
    return (
<div className={styles.impress}>
      <h3>WoodsUp e.V.</h3>
      <p>
        Wollestraße 52
        <br />
        14482 Potsdam
      </p>
      <p>
        Mail: <a href="woodsup@posteo.de">woodsup@posteo.de</a>
      </p>
      <br />
      <h3>{t('h3')}</h3>
      <h5>{t('h5_1')}</h5>
      <p>{t('p_1')}</p>
      <h5>{t('h5_2')}</h5>
      <p>{t('p_2')}</p>
      <h5>{t('h5_3')}</h5>
      <p>{t('p_3')}</p>
      <h5>{t('h5_4')}</h5>
      <p>{t('p_4')}</p>
    </div>
    )
}

Imprint.getStaticProps = async () => ({
    namespacesRequired: ['legalnotice'],
  })
  
  Imprint.propTypes = {
    t: PropTypes.func.isRequired,
  }

export default withTranslation('legalnotice')(Imprint)