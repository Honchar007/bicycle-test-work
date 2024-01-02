import { useState } from 'react';

// styles
import styles from './AddBike.module.css';

export default function AddBike() {
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className={styles['add-bike-form']}>
      <div className={styles['doubled']}>
        <input
          type="text"
          name="name"
          value={inputs.input1}
          onChange={handleInputChange}
          placeholder="Name"
          className={styles['input-bike']}
        />
        <input
          type="text"
          name="type"
          value={inputs.input2}
          onChange={handleInputChange}
          placeholder="Type"
          className={styles['input-bike']}
        />
      </div>
      <div className={styles['doubled']}>
        <input
          type="text"
          name="color"
          value={inputs.input1}
          onChange={handleInputChange}
          placeholder="Color"
          className={styles['input-bike']}
        />
        <input
          type="text"
          name="wheelSize"
          value={inputs.input2}
          onChange={handleInputChange}
          placeholder="Wheel size"
          className={styles['input-bike']}
        />
      </div>
      <div className={styles['doubled']}>
        <input
          type="text"
          name="price"
          value={inputs.input1}
          onChange={handleInputChange}
          placeholder="Price"
          className={styles['input-bike']}
        />
        <input
          type="text"
          name="id"
          value={inputs.input2}
          onChange={handleInputChange}
          placeholder="ID (slug): ХХХХХХХХХХХХХ"
          className={styles['input-bike']}
        />
      </div>
      <div className={styles['description-wrapper']}>
        <textarea
          placeholder="Type something..."
          className={styles['description-bike']}
        />
      </div>
      <div className={styles['doubled']}>
        <button className={styles['action-btn']}>SAVE</button>
        <button className={styles['action-btn']}>CLEAR</button>
      </div>
    </div>
  );
}
