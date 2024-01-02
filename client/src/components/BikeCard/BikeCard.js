// styles
import styles from './BikeCard.module.css';

// icons
import closeIcon from '../../assets/close.png';

// shared
import Status from '../../shared/Status';

export default function BikeCard(props) {

  return (
    <div className={styles['card-wrapper']} style={{ borderColor: Status[props.status] }}>
      <div className={styles['close-icon']}>
        <img src={closeIcon} alt='close' />
      </div>
      <div className={styles['card-title']}>
        {props.name} - <span className={styles['card-color']}>{props.color}</span>
      </div>
      <div className={styles['card-id']}>ID: ХХХХХХХХХХХХХ{props.id}</div>
      <div className={styles['card-status']}>
        <div>STATUS: </div>
        <select name="status" className={styles['card-select']}>
          <option value="Available">Available</option>
          <option value="Busy">Busy</option>
          <option value="Booked">Booked</option>
        </select>
      </div>
      <div className={styles['card-price']}>00.00 UAH/hr.</div>
    </div>
  );
}
