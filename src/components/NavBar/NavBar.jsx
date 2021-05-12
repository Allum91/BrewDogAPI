import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import SearchBar from '../SearchBar';
import styles from './NavBar.module.scss';
import logo from '../../images/logo.png';
import Favourites from '../../containers/Favourites';
import Dashboard from '../../containers/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavBar = () => {
  return (
    <nav className={styles.navFlex}>
      <Router>
      <Link to='/'>
        <div className={styles.navFlex}>
          <img src={logo} alt='pokemon' />
        </div>
      </Link>
      <div className={styles.searchPanel}>
        <SearchBar />
        <span className={styles.faStyles}>
         <Link to='/favourites'>
          <FontAwesomeIcon icon='heart' />
         </Link>
        </span>
      </div>
      </Router>
    </nav>
  )
}

export default NavBar
