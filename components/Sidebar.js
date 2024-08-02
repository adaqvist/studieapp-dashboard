import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, faBook, faBookReader, faPencilAlt, faGraduationCap, faTasks, faCalendarAlt, faCog, faUser, 
  faUpRightAndDownLeftFromCenter, faDownLeftAndUpRightToCenter 
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => {
      if (isClient) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <ul>
        <li>
          <a href="/dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} className={styles['fa-icon']} />
            {!isCollapsed && <span>Dashboard</span>}
          </a>
        </li>
        <li>
          <a href="/emner">
            <FontAwesomeIcon icon={faBook} className={styles['fa-icon']} />
            {!isCollapsed && <span>Emner</span>}
          </a>
        </li>
        <li>
          <a href="/litteratur">
            <FontAwesomeIcon icon={faBookReader} className={styles['fa-icon']} />
            {!isCollapsed && <span>Litteratur</span>}
          </a>
        </li>
        <li>
          <a href="/generer-tekst">
            <FontAwesomeIcon icon={faPencilAlt} className={styles['fa-icon']} />
            {!isCollapsed && <span>Generer Tekst</span>}
          </a>
        </li>
        <li>
          <a href="/studier">
            <FontAwesomeIcon icon={faGraduationCap} className={styles['fa-icon']} />
            {!isCollapsed && <span>Studier</span>}
          </a>
        </li>
        <li>
          <a href="/oppgaver">
            <FontAwesomeIcon icon={faTasks} className={styles['fa-icon']} />
            {!isCollapsed && <span>Oppgaver</span>}
          </a>
        </li>
        <li>
          <a href="/kalender">
            <FontAwesomeIcon icon={faCalendarAlt} className={styles['fa-icon']} />
            {!isCollapsed && <span>Kalender</span>}
          </a>
        </li>
        <li>
          <a href="/innstillinger">
            <FontAwesomeIcon icon={faCog} className={styles['fa-icon']} />
            {!isCollapsed && <span>Innstillinger</span>}
          </a>
        </li>
        <li>
          <a href="/profil">
            <FontAwesomeIcon icon={faUser} className={styles['fa-icon']} />
            {!isCollapsed && <span>Profil</span>}
          </a>
        </li>
      </ul>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <FontAwesomeIcon 
          icon={isCollapsed ? faUpRightAndDownLeftFromCenter : faDownLeftAndUpRightToCenter} 
          className={styles.toggleIcon}
        />
      </button>
    </div>
  );
};

export default Sidebar;
