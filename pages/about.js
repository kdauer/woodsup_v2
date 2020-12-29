import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'
import styles from '../styles/about.module.sass'

const About = ({t}) => {
return (
    <div className={styles.home}>
    <div className={styles.aboutContainer}>
      <h1>
        “Wir können nicht länger warten, wir sind die letzte Generation, die
        noch effektiv die Folgen der ökologischen Katastrophe abmildern kann”
        (Carola Rackete)
      </h1>
      <br />
      <p>
      {t('aboutParagraphOne')}
      </p>
      <br />
      <p>
      {t('aboutParagraphTwo')}
      </p>
      <br />
      <p>
      {t('aboutParagraphThree')}
      </p>
      <div className="space"></div>
    </div>
    </div>
)
}

About.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
  
  About.propTypes = {
    t: PropTypes.func.isRequired,
  }

export default withTranslation('common')(About)