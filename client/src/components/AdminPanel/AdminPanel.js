// components
import BikeCard from '../BikeCard/BikeCard';
import EditAdmin from '../EditAdmin/EditAdmin';

// styles
import styles from './AdminPanel.module.css';

export default function AdminPanel() {

  return (
    <main className={styles['main-container']}>
      <div className={styles['card-list']}>
        <BikeCard name='Mountain' color='Yellow' />
      </div>
      <EditAdmin />
    </main>
  );
}
