import styles from './App.module.scss';
import NavBar from './components/NavBar';
import Routes from './containers/Routes';
import './data/fa-library';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <section className={styles.nav}>
        <NavBar />
      </section>
      <section className={styles.content}>
        <Routes />
      </section>
     </Router>
    </>
  );
}

export default App;
