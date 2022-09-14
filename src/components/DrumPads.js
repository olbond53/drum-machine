import React from 'react';
import DrumPad from './DrumPad';

const DrumPads = ({ pads, handleClick }) => {
  return (
    <div id="drum-pads">
      {pads.map((pad) => {
        return <DrumPad key={pad.id} pad={pad} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default DrumPads;
