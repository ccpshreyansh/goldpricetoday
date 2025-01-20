import styles from '@/styles/Header.module.css'; // Import the CSS Module
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'; // Importing the gold icon from Heroicons
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <CurrencyDollarIcon className={styles.iconSvg} />
      </div>
      <div className={styles.title}>
        <h1>Gold Price Today</h1>
      </div>
      <div className={styles.themeToggle}>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
