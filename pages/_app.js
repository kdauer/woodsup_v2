import App from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/styles.sass'
import { appWithTranslation } from '../i18n'

const MyApp = ({ Component, pageProps }) => {
  console.log("WoodsUp e.v. - from Potsdam with <3");
  return <>
  <Head>
  <title>WoodsUp e.V.</title>
  </Head>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp)