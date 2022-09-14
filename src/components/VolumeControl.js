import React from 'react';

const VolumeControl = ({ handleInput }) => {
  return (
    <div id="range">
      <input
        type="range"
        id="volume"
        min="0"
        max="100"
        step="1"
        onInput={handleInput}
        list="tickmarks"
      />
      <datalist id="tickmarks">
        <option value="0"></option>
        <option value="10"></option>
        <option value="20"></option>
        <option value="30"></option>
        <option value="40"></option>
        <option value="50"></option>
        <option value="60"></option>
        <option value="70"></option>
        <option value="80"></option>
        <option value="90"></option>
        <option value="100"></option>
      </datalist>

      <label htmlFor="volume">Volume</label>
    </div>
  );
};

export default VolumeControl;
