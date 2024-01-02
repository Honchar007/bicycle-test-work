import styles from './Statistics.module.css';

export default function Statistics(props) {

  return (
    <div className={styles['info-wrapper']}>
      <div className={styles['info-title']}>
        STATISTICS
      </div>
      <div className={styles['info-row']}>
        Total Bikes: <span className={styles['info-row-strong']}>0</span>
      </div>
      <div className={styles['info-row']}>
        Available Bikes: <span className={styles['info-row-strong']}>0</span>
      </div>
      <div className={styles['info-row']}>
        Booked Bikes: <span className={styles['info-row-strong']}>0</span>
      </div>
      <div className={styles['info-row']}>
        Average bike cost: <span className={styles['info-row-strong']}>0.00</span>  UAH/hr.
      </div>
    </div>
  );
}
