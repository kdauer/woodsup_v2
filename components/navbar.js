import PropTypes from 'prop-types'
import { withTranslation } from 'next-i18next'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/navbar.module.sass'

const Navigation = ({t}) => {
    return (
      <div className={styles.nav}>
      <Navbar expand="lg" className="navbar-custom" sticky="top" expand="lg">
       <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
       <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Navbar.Brand href="/about">{t('about')}</Navbar.Brand>
      <Navbar.Brand href="/projects">{t('projects')}</Navbar.Brand>
     <Navbar.Brand href="/support">{t('support')}</Navbar.Brand>
     <Navbar.Brand href="/links">{t('motivation')}</Navbar.Brand>
     </Nav>
     </Navbar.Collapse>
     </Navbar>
      </div>
    )
}

Navigation.propTypes = {
  t: PropTypes.func.isRequired,
}
export default withTranslation('common')(Navigation)