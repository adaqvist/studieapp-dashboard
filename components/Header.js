import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';

const Header = () => {
  const isLoggedIn = true;
  const username = "adjen";

  return (
    <div className={styles.header}>
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <input type="text" placeholder="Søk" className={styles.searchInput} />
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </div>
      </div>

      <div className={styles.userInfo}>
        <a href="/profile" className={styles.username}>{username}</a>
        <span className={styles.separator}>//</span>
        <a href={isLoggedIn ? "/logout" : "/login"} className={styles.authLink}>
          {isLoggedIn ? "Log out" : "Log in"}
        </a>
        <FontAwesomeIcon icon={faBell} className={styles.notificationIcon} />
        <a href="/profile">
          <FontAwesomeIcon icon={faUserCircle} className={styles.avatar} />
        </a>
      </div>
    </div>
  );
};

export default Header;
