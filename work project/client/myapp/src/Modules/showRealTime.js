import React, { useEffect, useState } from 'react';

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '20px',
      backgroundColor: '#111',
      color: '#0f0',
      padding: '10px 15px',
      borderRadius: '10px',
      fontFamily: 'monospace',
      fontSize: '16px',
      zIndex: 9999,
      boxShadow: '0 0 10px rgba(0,255,0,0.3)',
    }}>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default ClockWidget;
