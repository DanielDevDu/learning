import { useState } from 'react';

export const Count = () => {
  const [value, setValue] = useState(0);

  const handleClickIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleClickDecrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const handleClickReload = () => {
    setValue((prevValue) => 0);
  };

  return (
    <div>
      <h2>Conuter: {value} </h2>
      <button onClick={handleClickDecrement}>Decrement</button>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickReload}>Reload</button>
    </div>
  );
};
