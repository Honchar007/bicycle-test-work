// components
import AddBike from '../AddBike/AddBike';
import Statistics from '../Statistics/Statistics';

// styles
import styles from './EditAdmin.module.css';

export default function EditAdmin() {

  return (
    <div className={styles['main-control']}>
      <div className={styles['wrapper-add']}>
        <AddBike />
      </div>
      <div>
        <Statistics />
      </div>
    </div>
  );
}
