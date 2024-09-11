import React, { useEffect, useState } from "react";

interface ErrorToastProps {
  message?: string;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      {isVisible && message && (
        <div className='fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg'>
          {message}
        </div>
      )}
    </>
  );
};

export default ErrorToast;
