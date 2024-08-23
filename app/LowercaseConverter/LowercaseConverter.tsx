"use client";

import React, { useState } from 'react';

interface LowercaseConverterProps {
  initialValue?: string;
}

const LowercaseConverter: React.FC<LowercaseConverterProps> = ({ initialValue = '' }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleConvertClick = () => {
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    const noPunctuationValue = inputValue.replace(punctuationRegex, '');
    const lowercaseValue = noPunctuationValue.toLowerCase().replace(/\s/g, '-');
    setOutputValue(lowercaseValue);
  };

  return (
    <div className="lowercase-converter">
      <label htmlFor="input-field">Enter text:</label>
      <input
        id="input-field"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      <button onClick={handleConvertClick}>Convert to Lowercase</button>
      <p>Converted text: {outputValue}</p>
    </div>
  );
};

export default LowercaseConverter;
  