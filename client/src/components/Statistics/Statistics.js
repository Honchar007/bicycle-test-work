import { useSelector } from 'react-redux';
import styles from './Statistics.module.css';
import { selectAvailable, selectAvg, selectBooked, selectTotal } from '../../store/bike';

export default function Statistics() {
  const total = useSelector(selectTotal);
  const avgPrice = useSelector(selectAvg);
  const available = useSelector(selectAvailable);
  const booked = useSelector(selectBooked);

  return (
    <div className={styles['info-wrapper']}>
      <div className={styles['info-title']}>
        STATISTICS
      </div>
      <div className={styles['info-row']}>
        Total Bikes: <span className={styles['info-row-strong']}>{ total ? total : 0 }</span>
      </div>
      <div className={styles['info-row']}>
        Available Bikes: <span className={styles['info-row-strong']}>{ available ? available : 0 }</span>
      </div>
      <div className={styles['info-row']}>
        Booked Bikes: <span className={styles['info-row-strong']}>{ booked ? booked : 0 }</span>
      </div>
      <div className={styles['info-row']}>
        Average bike cost: <span className={styles['info-row-strong']}>{ avgPrice ? avgPrice : 0.00 }</span>  UAH/hr.
      </div>
    </div>
  );
}
