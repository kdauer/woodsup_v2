// import PropTypes from 'prop-types'
// import { withTranslation } from '../i18n'
import styles from '../styles/about.module.sass'

const About = ({t}) => {
return (
    <div className={styles.home}>
    <div className={styles.aboutContainer}>
      {/* <h1>
       {t('heading')}
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
      </p> */}
      <div className="space"></div>
    </div>
    </div>
)
}

About.getInitialProps = async () => ({
  })
  
//   About.propTypes = {
//     t: PropTypes.func.isRequired,
//   }

export default About

// export default withTranslation('common')(About)