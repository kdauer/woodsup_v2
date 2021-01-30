// import PropTypes from 'prop-types'
// import { withTranslation } from '../i18n'
import styles from '../styles/support.module.sass'

const Support = ({t}) => {
    return (
        <div className={styles.home}>
        <div className={styles.supportContainer}>
      {/* <h1>{t("common:support")}</h1> */}
      <p>
        {/* <b>
        {t("common:supportParagraphOne")}
        </b> */}
      </p>
      {/* <p>{t("common:supportParagraphTwo")}</p> */}
      <p>
        <b>
          Woods Up e.V. <br />
          BIC: HOLVDEB1
          <br />
          IBAN: DE 68 1001 7997 8678 3814 89
        </b>
      </p>
      {/* <p>
      {t("common:supportContact")} <a href="woodsup@posteo.de">woodsup@posteo.de</a>
      </p> */}
      <div className={styles.paypal}>
        <img src="/QR-Code.png" alt="QR-Code" />
        {/* <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F4CTCSJDAN8DQ&source=url"
          className={styles.donateBtn}
        >
          {t("common:donate")}
        </a> */}
      </div>
      <div className={styles.space}></div>
    </div>
    </div>
    )
}

// Support.getInitialProps = async () => ({
//     namespacesRequired: ['common'],
//   })
  
//   Support.propTypes = {
//     t: PropTypes.func.isRequired,
//   }

export default Support

// export default withTranslation('common')(Support)