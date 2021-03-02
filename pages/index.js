import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CookieConsent, { Cookies } from "react-cookie-consent";
import Head from 'next/head'
import styles from '../styles/home.module.sass'
import News from '../components/news'

const Homepage = () => {
  const { t } = useTranslation('common','news')

  console.log("WoodsUp e.v. - from Potsdam with ❤");
  return (
  <>
  <Head>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
  <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
  <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
  <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
  <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
  <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
  <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
  <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
  <meta name="msapplication-TileColor" content="#ffffff"/>
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
  <meta name="theme-color" content="#ffffff"/>
  <title>WoodsUp e.V.</title>
  </Head>
    <main >
      <div className={styles.welcome}>
      <News/>
</div>
<CookieConsent location="bottom"
  buttonText={t('cookieButton')}
  cookieName="myAwesomeCookieName2"
          style={{ background: '#2B373B' }}
          buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
          expires={150}>{t('cookieText')}</CookieConsent>
    </main>
  </>
)}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common','news']),
  },
})
export default Homepage
