import React, { useState } from 'react';

const InputComponent = ({ addToQueue }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddButtonClick = () => {
    addToQueue(inputText);//adds to the queue
    setInputText('');
  };

  return (
    <div className="d-flex justify-content-between p-3 mb-3 rounded "  style={{ backgroundColor: '#FFC0D9' }}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Enter text..."
      />
      <button onClick={handleAddButtonClick} className="btn btn-success ms-2">
        Add
      </button>
    </div>
  );
};

export default InputComponent;
