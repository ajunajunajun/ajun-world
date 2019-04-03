import React from 'react';
import { Link } from 'react-router-dom';

class Select extends React.Component{
  render(){
    return(
      <div>
        <Link to='/'>Top</Link>
        <Link to='/google'>Google</Link>
      </div>
    )
  }
}

export default Select;
