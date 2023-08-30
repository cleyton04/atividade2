import React, { useState } from 'react';
import LaughingEmoji from './LaughingEmoji'; // Importe o componente LaughingEmoji
import './App.css';


function App() {
  const emojis = [
    { name: 'Rindo de chorar', emoji: '😂' },
    { name: 'Chorando', emoji: '😢' },
    { name: 'Coração', emoji: '❤️' },
    { name: 'Bailarina', emoji: '💃' }
  ];

  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiClick = (emojiName) => {
    setSelectedEmoji(emojiName);
  };  
  

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="emoji-container">
      <LaughingEmoji onClick={() => handleEmojiClick('Rindo de chorar')} />
      </div>
      <div className="emoji-row">
  {emojis.slice(1).map((emoji, index) => (
    <button
      key={index}
      className="emoji"
      onClick={() => handleEmojiClick(emoji.name)}
    >
      {emoji.emoji}
    </button>
  ))}
</div>
{selectedEmoji && (
  <p>Você clicou no emoji: {selectedEmoji}</p>
)}

      {selectedEmoji && (
        <p>Você clicou no emoji: {selectedEmoji}</p>
      )}
    </div>
  );
}

export default App;
