import { useState, useEffect } from 'react';

export const AddName = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {
    console.log('useEffect');
  }, [names]);

  const handleSubmit = (e) => {
    setName(e.target.value);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (name) {
      setNames([...names, name]);
    }
    // e.current.value = null;
  };

  return (
    <div>
      <input onSubmit={handleSubmit} onChange={handleChange} />
      <button onClick={handleClick}>Save</button>
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>
  );
};
