import { useState } from 'react';
import { useDispatch } from 'react-redux';

// styles
import styles from './AddBike.module.css';
import { addBike } from '../../store/bike';

export default function AddBike() {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: '',
    type: '',
    color: '',
    wheelSize: '',
    price: '',
    id: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const clearAll = () => {
    setInputs({
      name: '',
      type: '',
      color: '',
      wheelSize: '',
      price: '',
      id: '',
      description: '',
    });
  }

  const saveBike = (e) => {
    e.preventDefault();
    dispatch(addBike(inputs));
    // clearAll();
  }

  return (
    <div className={styles['add-bike-form']}>
      <div className={styles['doubled']}>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
          placeholder="Name"
          className={styles['input-bike']}
        />
        <input
          type="text"
          name="type"
          value={inputs.type}
          onChange={handleInputChange}
          placeholder="Type"
          className={styles['input-bike']}
        />
      </div>
      <div className={styles['doubled']}>
        <input
          type="text"
          name="color"
          value={inputs.color}
          onChange={handleInputChange}
          placeholder="Color"
          className={styles['input-bike']}
        />
        <input
          type="text"
          name="wheelSize"
          value={inputs.wheelSize}
          onChange={handleInputChange}
          placeholder="Wheel size"
          className={styles['input-bike']}
        />
      </div>
      <div className={styles['doubled']}>
        <input
          type="text"
          name="price"
          value={inputs.price}
          onChange={handleInputChange}
          placeholder="Price"
          className={styles['input-bike']}
        />
        <input
          type="text"
          name="id"
          value={inputs.id}
          onChange={handleInputChange}
          placeholder="ID (slug): ХХХХХХХХХХХХХ"
          className={styles['input-bike']}
        />
      </div>
      <div className={styles['description-wrapper']}>
        <textarea
          name="description"
          value={inputs.description}
          onChange={handleInputChange}
          placeholder="Type something..."
          className={styles['description-bike']}
        />
      </div>
      <div className={styles['doubled']}>
        <button type='submit' onClick={saveBike} className={styles['action-btn']}>SAVE</button>
        <button onClick={clearAll} className={styles['action-btn']}>CLEAR</button>
      </div>
    </div>
  );
}
