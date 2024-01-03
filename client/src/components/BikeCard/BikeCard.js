import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBike, updateBikeStatus } from '../../store/bike';

// styles
import styles from './BikeCard.module.css';

// icons
import closeIcon from '../../assets/close.png';

// shared
import Status from '../../shared/Status';

const widthStatus = {
  Available: '125px',
  Busy: '80px',
  Booked: '130px',
}


export default function BikeCard(props) {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(props.status);

  const remove = () => {
    dispatch(removeBike(props.id));
  }

  const statusChange = (e) => {
    setStatus(e.target.value);
    dispatch(updateBikeStatus({id: props.id, status: e.target.value}));
  }

  return (
    <div
      className={styles['card-wrapper']}
      style={{
        borderColor: Status[status],
        boxShadow: `1px 2px 9px ${Status[status]}. `,
        opacity: status === 'Unavailable' ? '0.5' : '1',
      }}
    >
      <div onClick={remove} className={styles['close-icon']}>
        <img src={closeIcon} alt='close' />
      </div>
      <div className={styles['card-title']}>
        {props.name} - <span className={styles['card-color']}>{props.color}</span>
      </div>
      <div className={styles['card-id']}>ID: {props.id ? props.id : 'ХХХХХХХХХХХХХ'}</div>
      <div className={styles['card-status']}>
        <div>STATUS: </div>
        <select
          name="status"
          value={status}
          onChange={statusChange}
          className={styles['card-select']}
          style={{width: widthStatus[status]}}
        >
          <option value="Available">Available</option>
          <option value="Busy">Busy</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>
      <div className={styles['card-price']}>{parseFloat(props.price).toFixed(2)} UAH/hr.</div>
    </div>
  );
}
