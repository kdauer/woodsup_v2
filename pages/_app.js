import { appWithTranslation } from 'next-i18next'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/styles.sass'


const MyApp = ({ Component, pageProps}) => 
   <>
  <Header {...pageProps}/>
  <Component {...pageProps} />
  <Footer {...pageProps}/>
  </>


export default appWithTranslation(MyApp)