import React from 'react';
import Battery from './battery/Battery';

const BatteryStatus = () => {
  return (
    <div className='container w-50 shadow bg-info rounded-3 ms-auto mt-5'>
      <Battery></Battery>
    </div>
  );
};

export default BatteryStatus;