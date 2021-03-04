// useMemo
// React.memo demo
// https://devadi.netlify.app/blog/optimize-your-react-app-with-react-memo?utm_source=tinyreact&utm_medium=email

import React, { useState } from 'react';
import cn from 'clsx';
import Header from './Header'
import Picker from './Picker'
import Table from './Table'

import { charactersData } from './data';
import './styles.css';


function filterByHouse(houseId) {
  return charactersData.filter((character) => {
    if (houseId === 'all') {
      return true;
    }
    return character.houseId === houseId;
  });
}

const HarryPotter = () => {
  const [stateTheme, setStateTheme] = useState('light');
  const [stateActiveHouseId, setStateActiveHouseId] = useState('all');

  function handleChangeTheme() {
    setStateTheme((oldTheme) => (oldTheme === 'dark' ? 'light' : 'dark'));
  }

  function handleFilter(houseId) {
    setStateActiveHouseId(houseId);
  }

  // const filteredCharacters = filterByHouse(stateActiveHouseId);
  const filteredCharacters = React.useMemo(() => filterByHouse(stateActiveHouseId), [stateActiveHouseId])

  return (
    <div className={cn('app', `theme-${stateTheme}`)}>
      <Header>
        <button className="theme-switch-btn" onClick={handleChangeTheme}>
          {stateTheme === 'light' ? 'Dark' : 'Light'}
        </button>
      </Header>
      <main className="main">
        <Picker activeHouseId={stateActiveHouseId} onChange={handleFilter} />
        <p>List starts with: {filteredCharacters[0].name}</p>
        <Table charactersList={filteredCharacters} />
      </main>
    </div>
  );
}

export default HarryPotter;
