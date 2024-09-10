import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);

  return (
    <div className='flex flex-col items-center justify-center flex-1 p-4'>
      <h1 className='text-2xl font-bold mb-4'>Counter</h1>
      <p className='text-xl mb-4'>Current Count: {count}</p>
      <div>
        <button onClick={onIncrement} className='bg-blue-500 text-white px-4 py-2 rounded mr-2'>
          Increment
        </button>
        <button onClick={onDecrement} className='bg-red-500 text-white px-4 py-2 rounded'>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
