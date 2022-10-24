import React, { useEffect } from 'react';

const Succes = ({ succes, close }) => {
  useEffect(() => {
    if (!succes) return;

    const closeSucces = () => {
      setTimeout(() => {
        close();
      }, 2500);
    };

    closeSucces();

    return () => clearTimeout(closeSucces as null);
  }, [succes, close]);

  if (!succes) return null;

  return (
    <div data-testid="succes" className="succes">
      {succes}
    </div>
  );
};

export default Succes;
