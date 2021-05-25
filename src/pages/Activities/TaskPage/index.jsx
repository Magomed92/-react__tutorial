import React, { useState } from 'react';

export const TaskPage = ({ messages, setMessages }) => {
  const [userName, setUserName] = useState('Anonymous');

  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    setCount(count - 1);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, event.target[0].value]);
    setUserName('');
  };
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="task__page">
      {count}
      <button onClick={handleClick}>кнопка + </button>
      <button onClick={handleClickMinus}>кнопка - </button>
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <h1>Имя пользователя: {userName} </h1>
        <form onSubmit={handleNameSubmit}>
          <input onChange={handleNameChange} type="text" name="currentName" value={userName} />
          <button>Add Name</button>
        </form>
      </div>
      <div>
        {messages.map((item) => (
          <h2>{item}</h2>
        ))}
      </div>
    </div>
  );
};
