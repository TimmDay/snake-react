import React from 'react';
import { connect } from 'react-redux';

class SideBar extends React.Component {
   constructor(props) {
       super(props);
       this.state = {}
   }

   render () {
    const a = this.props.applesEaten;
    const str = `${(a % 3) ? '' : 'FIZZ'}${(a % 5) ? '' : 'BUZZ'}`;
    return (
      <div className="side-bar left">
        <h2>Apples:
          <span style={{color: str ? 'lime' : '#fff' }}>{str ? str : this.props.applesEaten}</span>
        </h2>
        <h2>Record: <span>{`${this.props.mostApples}`}</span></h2>
        <p>Arrow keys: normal movement</p>
        <p>A, W, S, D keys: crazy movement</p>
      </div>
    )
   }
}

const mapStateToProps = state => {
  return {
    applesEaten: state.snakeReducer.applesEaten,
    mostApples: state.snakeReducer.mostApples
  };
};

export default connect(mapStateToProps)(SideBar);
