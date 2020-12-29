import App from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/styles.sass'
import { appWithTranslation } from '../i18n'

const MyApp = ({ Component, pageProps }) => {
  return <div>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </div>
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp)