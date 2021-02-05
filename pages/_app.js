import { appWithTranslation } from 'next-i18next'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/styles.sass'


const MyApp = ({ Component, pageProps}) => {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default appWithTranslation(MyApp)