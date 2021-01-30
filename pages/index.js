// import PropTypes from 'prop-types'
// import { withTranslation } from '../i18n'
// import CookieConsent, { Cookies } from "react-cookie-consent";
import styles from '../styles/home.module.sass'
import News from '../components/news'

const HomePage = ({t}) => (
  <>
    <main >
      <div className={styles.welcome}>
      <News/>
</div>
{/* <CookieConsent location="bottom"
  buttonText={t('cookieButton')}
  cookieName="myAwesomeCookieName2"
          style={{ background: '#2B373B' }}
          buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
          expires={150}>{t('cookieText')}</CookieConsent> */}
    </main>
  </>
)

// HomePage.getInitialProps = async () => ({
//   namespacesRequired: ['common'],
// })

// HomePage.propTypes = {
//   t: PropTypes.func.isRequired,
// }

export default HomePage
// export default withTranslation('common')(HomePage)