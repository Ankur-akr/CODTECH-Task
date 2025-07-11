import React, { useEffect, useState } from 'react';
import socket from './socket';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    socket.on('load-document', data => {
      setText(data);
    });

    socket.on('receive-changes', newText => {
      setText(newText);
    });

    return () => {
      socket.off('load-document');
      socket.off('receive-changes');
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    socket.emit('send-changes', value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 Collaborative Note Editor</h2>
      <textarea
        value={text}
        onChange={handleChange}
        rows="20"
        cols="80"
      />
    </div>
  );
}

export default App;
