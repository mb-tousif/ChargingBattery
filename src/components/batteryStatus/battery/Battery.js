import React, { useState } from 'react';

const Battery = () => {
    const [charge, setCharge] = useState(0)
    const chargingBattery = () => {
      if (charge < 100) {
        const charging = charge + 10;
        setCharge(charging);
      } else {
        alert("Your Battery have already charged ");
      }
    };
    const drainingBattery = () => {
      if (charge > 0) {
        const charging = charge - 10;
        setCharge(charging);
      } else {
        alert("Charged Your Battery");
      }
    };
    return (
      <div>
        <h1>Battery Charge in Percentage {charge}&#37;</h1>
        <button onClick={chargingBattery} className="btn-primary m-3 p-2 rounded-pill">Charging Battery</button>
        <button onClick={drainingBattery} className="btn-danger m-3 p-2 rounded-pill">Draining Battery</button>
      </div>
    );
};

export default Battery;