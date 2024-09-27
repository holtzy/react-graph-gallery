import { useState } from 'react';

export function App() {
  const [color, setColor] = useState('black');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: color,
          margin: '0 auto',
        }}
      ></div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setColor('blue')}>Blue</button>
        <button onClick={() => setColor('red')} style={{ marginLeft: '10px' }}>
          Red
        </button>
      </div>
    </div>
  );
}
