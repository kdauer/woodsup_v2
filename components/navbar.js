import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/navbar.module.sass'

const NavBar = () => {
  const { t } = useTranslation('common')
    return (
      <div className={styles.nav}>
      <Navbar expand="lg" className="navbar-custom" sticky="top" expand="lg">
       <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
       <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Navbar.Brand href="/about">{t('common:about')}</Navbar.Brand>
      <Navbar.Brand href="/projects">{t('common:projects')}</Navbar.Brand>
     <Navbar.Brand href="/support">{t('common:support')}</Navbar.Brand>
     <Navbar.Brand href="/links">{t('common:motivation')}</Navbar.Brand>
     </Nav>
     </Navbar.Collapse>
     </Navbar>
      </div>
    )
}

export default NavBar