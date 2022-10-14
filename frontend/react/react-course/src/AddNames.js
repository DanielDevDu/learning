import { useState } from 'react';

export const AddName = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    setName(e.target.value);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    alert('The name is: ' + name);
  };

  return (
    <div>
      <input onSubmit={handleSubmit} onChange={handleChange} />
      <button onClick={handleClick}>Save</button>
    </div>
  );
};
