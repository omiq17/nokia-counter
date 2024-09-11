import React, { useState } from "react";
import ErrorToast from "../../../components/ErrorToast";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [lastClickTime, setLastClickTime] = useState<number | undefined>();
  const [error, setError] = useState<string | undefined>();

  const onButtonClick = (operation: "increment" | "decrement") => {
    const now = Date.now();

    if (lastClickTime && now - lastClickTime < 3000) {
      setError("Wait 3 seconds before the next click");
      return;
    }

    setError(undefined);

    if (operation === "increment") {
      setCount((prevCount) => prevCount + 1);
    } else if (operation === "decrement") {
      setCount((prevCount) => prevCount - 1);
    }

    setLastClickTime(now);
  };

  return (
    <div className='flex flex-col items-center justify-center flex-1 p-4'>
      <h1 className='text-2xl font-bold mb-4'>Counter App</h1>
      <p className='text-xl mb-4'>Current Count: {count}</p>
      <div className='flex flex-col md:flex-row md:justify-between md:space-x-4 space-y-4 md:space-y-0 p-4'>
        <button
          onClick={() => onButtonClick("decrement")}
          className='bg-red-500 text-white px-4 py-2 rounded'
        >
          Decrement
        </button>
        <button
          onClick={() => onButtonClick("increment")}
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Increment
        </button>
      </div>

      <ErrorToast message={error} />
    </div>
  );
};

export default Counter;
