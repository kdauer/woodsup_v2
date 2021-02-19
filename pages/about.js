import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '../styles/about.module.sass'

const About = () => {
  const { t } = useTranslation('common')

return (
    <div className={styles.home}>
    <div className={styles.aboutContainer}>
      <h1>
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
      </p>
      <div className="space"></div>
    </div>
    </div>
)
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})

export default About