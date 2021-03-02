import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '../styles/support.module.sass'

const Support = () => {
  const { t } = useTranslation('common')
    return (
        <div className={styles.home}>
        <div className={styles.supportContainer}>
      <h1>{t("support")}</h1>
      <p>
        <b>
        {t("supportParagraphOne")}
        </b>
      </p>
      <p>{t("supportParagraphTwo")}</p>
      <p>
        <b>
          Woods Up e.V. <br />
          BIC: HOLVDEB1
          <br />
          IBAN: DE 68 1001 7997 8678 3814 89
        </b>
      </p>
      <p>
      {t("supportContact")} <a href="woodsup@posteo.de">woodsup@posteo.de</a>
      </p>
      <div className={styles.paypal}>
        <img src="/QR-Code.png" alt="QR-Code" />
        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F4CTCSJDAN8DQ&source=url"
          className={styles.donateBtn}
        >
          {t("donate")}
        </a>
      </div>
      <div className={styles.space}></div>
    </div>
    </div>
    )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
export default Support