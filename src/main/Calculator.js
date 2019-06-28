import React from 'react'
import './Calculator.css'

import Button from '../componets/Button'
import Display from '../componets/Display';


export default () => {

  const clearMemory = () => {
    console.log('limpar');
  };

  const setrOperation = (operation) => {
    console.log(operation);
  };

  const addDigit = (n) => {
    console.log(n);
  };

  return (
    <div className="calculator">
      <Display value={100}/>
      <Button label="AC"
        click={ () => clearMemory()}
        triple
      />
      <Button label="/"
        click={setrOperation}
        operation
      />
      <Button label="7"
        click={addDigit}
      />
      <Button label="8"
        click={addDigit}
      />
      <Button label="9"
        click={addDigit}
      />
      <Button label="*"
        click={setrOperation}
        operation
      />
      <Button label="4"
        click={addDigit}
      />
      <Button label="5"
        click={addDigit}
      />
      <Button label="6"
        click={addDigit}
      />
      <Button label="-"
        click={setrOperation}
        operation
      />
      <Button label="1"
        click={addDigit}
      />
      <Button label="2"
        click={addDigit}
      />
      <Button label="3"
        click={addDigit}
      />
      <Button label="+"
        click={setrOperation}
        operation
      />
      <Button label="0"
        click={addDigit}
        double
      />
      <Button label="."
        click={addDigit}
      />
      <Button label="="
        click={setrOperation}
        operation
      />
    </div>
  )
}