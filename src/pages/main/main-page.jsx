import styles from './main-page.module.css';
import { Catalog } from '../../components/catalog/catalog';

export const MainPage = () => (
  <div className={styles.main}>
    <Catalog />
  </div>
);
