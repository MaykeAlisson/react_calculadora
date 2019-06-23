import React from'react';
import {Fragment} from 'react';
import './index.css';

export default (props) => {

  return (
    <Fragment>
      <button className="button">{props.label}</button>
    </Fragment>
  )
}