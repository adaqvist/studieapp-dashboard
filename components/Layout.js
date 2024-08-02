// components/Layout.js
import Sidebar from './Sidebar';
import Header from './Header';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
