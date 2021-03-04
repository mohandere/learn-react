import React from 'react';

function Table(props) {
  console.log('render: Table');
  const { charactersList } = props;
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-row">
          <th className="table-cell">Name</th>
          <th className="table-cell">House</th>
        </tr>
      </thead>
      <tbody>
        {charactersList.map((character) => (
          <tr key={character.name}>
            <td className="table-cell">{character.name}</td>
            <td className="table-cell">{character.house}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default React.memo(Table);
