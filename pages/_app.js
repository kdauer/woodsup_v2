import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../styles/styles.sass'
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => 
<>
<Navigation />
<Component {...pageProps} />
<Footer/>
</>

export default appWithTranslation(MyApp)
