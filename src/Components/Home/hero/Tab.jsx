import React, { useState, useEffect } from 'react';

export default function Tab({ tab, isActive, index, className }) {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {

    if (!isActive) {
      setCountdown(0)
    }

    const intervalId = setInterval(() => {
      if (countdown < 100) {
        setCountdown(countdown + 1);
      }
    }, 60);

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, countdown]);
  
  const handleRubric = () => {

    if (!isActive) {
      // changeRugric(index)
    }
  }

  return (
    <div className={className} onClick={handleRubric}>
      <p>{tab}</p>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${countdown}%` }}
        ></div>
      </div>
    </div>
  );
};
