import React from'react';
import {Fragment} from 'react';
import './index.css';

export default (props) => {

  return (
    <Fragment>
      <button 
      onClick={ (e) => props.click && props.click(props.label)}
      className={`
          button
          ${props.operation ? 'operation' : ''}
          ${props.double ? 'double' : ''}
          ${props.triple ? 'triple' : ''}
      `}>
        {props.label}
      </button>
    </Fragment>
  )
}