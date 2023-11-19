import React from 'react';

const DrumPad = ({ pad, handleClick }) => {
  return (
    <div
      className="drum-pad not-active"
      id={pad.id}
      onClick={() => handleClick(pad.key, pad.id)}
    >
      {pad.key}
      <audio id={pad.key} className="clip" src={pad.url}></audio>
    </div>
  );
};

export default DrumPad;
