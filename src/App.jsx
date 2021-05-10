import { useState } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar';
import Routes from './containers/Routes';

function App() {
  return (
    <>
     <section className={styles.nav}>
       <NavBar />
     </section>
     <section className={styles.content}>
       <Routes />
     </section>
    </>
  );
}

export default App;
