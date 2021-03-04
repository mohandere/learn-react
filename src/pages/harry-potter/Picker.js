import React from 'react';
import cn from 'clsx';

import { housesData } from './data';
import './styles.css';


export default function Picker(props) {
  console.log('render: Picker');
  const { activeHouseId, onChange } = props;
  return (
    <div className="house-picker">
      <h3>Filter by House</h3>
      <ul className="house-list">
        {housesData.map((house) => (
          <li key={house.id}>
            <button
              className={cn('house', activeHouseId === house.id && 'active')}
              onClick={(event) => onChange(house.id, event)}
            >
              <h2>{house.name}</h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

