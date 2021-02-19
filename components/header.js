import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import PropTypes from 'prop-types'
import Navigation from '../components/navbar'
import styles from '../styles/header.module.sass'

const Header = ({props}) => {
  const { i18n } = useTranslation('common','news')
  console.log(i18n.language)
  return (
    <div className={styles.navImg}>
    <h1 className={styles.logo}>
      <Link href="/">
        <img src="/IMG_2825.JPG" alt="Logo" height="64px" width="128px"/>
      </Link>
    </h1>
    <Navigation />
    {/* <div className={styles.langContainer}>
    <select name="language" id="language" locale={i18n.language}
        onChange={(e) =>
          i18n.changeLanguage(e.target.value)
        } selected>
      <option value="de">🇩🇪</option>
      <option value="en">🇬🇧</option>
      <option value="es">🇪🇸</option>
    </select>
</div> */}
  </div>
  )
}


export default Header