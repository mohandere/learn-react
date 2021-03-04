// Use callback demo
// https://www.robinwieruch.de/react-usecallback-hook

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const List = React.memo(({ list, onRemove }) => {
  console.log('Render: List');
  return (
    <ul className="list-inside">
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ item, onRemove }) => {
  console.log('Render: ListItem');
  return (
    <li className="flex my-3  bg-gray-200">
      <span className="flex-1">{item.name}</span>
      <button className="flex-1" type="button" onClick={() => onRemove(item.id)}>
        &times;
      </button>
    </li>
  );
});


const Users = () => {
  console.log('Render: Users');
  const [users, setUsers] = React.useState([
    { id: 'a', name: 'Robin' },
    { id: 'b', name: 'Dennis' },
  ]);
  
  const [text, setText] = React.useState('');
  
  const handleText = (event) => {
    setText(event.target.value);
  };
  
  const handleAddUser = ()  =>{
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };
  
  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  // const handleRemove = React.useCallback((id) => setUsers(users.filter((user) => user.id !== id)), [users]);
  
  return (
    <div className="w-full max-w-xs p-4 m-20">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input type="text" value={text} onChange={handleText} className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
          <button type="button" onClick={handleAddUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add User
          </button>
        </div>
      </form>
      <List list={users} onRemove={handleRemove} />
    </div>
  );
};

export default Users;
