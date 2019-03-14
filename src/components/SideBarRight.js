import React from 'react';
import { connect } from 'react-redux';

class SideBarRight extends React.Component {
   constructor(props) {
       super(props);
       this.state = {}
   }

   render () {
    return (
      <div className="side-bar right">
        <p>Eat the red apples to grow the snake</p>
        <p>NOTE: real life snakes should never eat apples</p>
      </div>
    )
   }
}

export default SideBarRight;