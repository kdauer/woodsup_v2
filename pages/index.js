import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'
import styles from '../styles/home.module.sass'
import News from '../components/news'

const Homepage = ({t}) => (
  <>
    <main >
      <div className={styles.welcome}>
      <News/>
</div>
    </main>
  </>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)