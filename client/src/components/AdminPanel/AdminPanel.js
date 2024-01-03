import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import BikeCard from '../BikeCard/BikeCard';
import EditAdmin from '../EditAdmin/EditAdmin';

// store
import { getBicycles, selectBikes } from '../../store/bike';

// styles
import styles from './AdminPanel.module.css';

export default function AdminPanel() {
  const bikes = useSelector(selectBikes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBicycles());
  },[dispatch]);

  return (
    <main className={styles['main-container']}>
      <div className={styles['card-list']}>
        { bikes && bikes.map((el) =>
        <BikeCard
          key={el.id}
          name={el.name}
          color={el.color}
          price={el.price}
          status={el.status}
          id={el.id}
        />)}
      </div>
      <EditAdmin />
    </main>
  );
}
