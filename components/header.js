import Link from 'next/link'
import {  withTranslation } from 'next-i18next'
import Navigation from '../components/navbar'
import styles from '../styles/header.module.sass'

const Header = ({t, i18n}) => {
  console.log(i18n.language)
  const changeLang = (event) => {
    i18n.changeLanguage(event.currentTarget.value)
  }

  return (
    <div className={styles.navImg}>
    <h1 className={styles.logo}>
      <Link href="/">
        <img src="/IMG_2825.JPG" alt="Logo" height="64px" width="128px"/>
      </Link>
    </h1>
    <Navigation />
    <div className={styles.langContainer}>
    <select name="language" id="language" onChange={changeLang} selected>
      <option value="de">🇩🇪</option>
      <option value="en">🇬🇧</option>
      <option value="es">🇪🇸</option>
    </select>
</div>
  </div>
  )
}


export default withTranslation('common')(Header)