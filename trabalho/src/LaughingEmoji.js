import React from 'react';
import './LaughingEmoji.css';

function LaughingEmoji({ onClick }) {
  return (
    <div className="laughing-emoji-container" onClick={onClick}>
      <span className="laughing-emoji" role="img" aria-label="Laughing Emoji">
        😂
      </span>
    </div>
  );
}

export default LaughingEmoji;
