import React from 'react';
import { connect } from 'react-redux';
import { incrementApples, resetApples } from '../actions/snake';

class Snake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      px: 4,
      py: 4, // start snake head position x and y
      appleX: 15,
      appleY: 15, // start apple position x and y
      gridSize: 20,
      tileCount: 20, // grid size, tile count. should multiply to canvas side dimension (height).
      xVelocity: 0,
      yVelocity: 0, //x and y velocity (starting speed in x,y directions). works off key press so 0 to start
      trail: [{ x: 4, y: 4 }], //to store positions of the trailing snake body pixels
      tail: 5 // tail length
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPush); //listen for keystrokes in below function
    const intervalId = setInterval(this.game, 1000 / 12); //call the game function x times per second (1000 ms). increase for game speed
    this.setState({ intervalId: intervalId }); // store intervalId in the state so it can be accessed later
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    document.removeEventListener('keydown');
  }

  game = () => {
    console.log('game func');
    const canv = document.getElementById('snake-game-canvas');
    const ctx = canv.getContext('2d'); //get graphics context/buffer

    //move the snake head 1 pixel in the current x and y directions
    this.setState(prevState => ({ px: (prevState.px += this.state.xVelocity) }));
    this.setState(prevState => ({ py: (prevState.py += this.state.yVelocity) }));

    //if go off screen to left, reset position to right, etc
    if (this.state.px < 0) this.setState({ px: this.state.tileCount - 1 });
    if (this.state.px > this.state.tileCount - 1) this.setState({ px: 0 });
    if (this.state.py < 0) this.setState({ py: this.state.tileCount - 1 });
    if (this.state.py > this.state.tileCount - 1) this.setState({ py: 0 });

    ctx.fillStyle = '#000'; //background color
    ctx.fillRect(0, 0, canv.width, canv.height); //paint the whole canvas black

    ctx.fillStyle = 'lime'; //snake body color
    // ctx.fillRect(this.state.trail[0].x * this.state.gridSize, this.state.trail[0].y * this.state.gridSize, this.state.gridSize-2, this.state.gridSize-2);

    this.state.trail.forEach(trailBit => {
      // paint snake pixels. the -2s give the 2 pixel border
      ctx.fillRect(
        trailBit.x * this.state.gridSize,
        trailBit.y * this.state.gridSize,
        this.state.gridSize - 2,
        this.state.gridSize - 2
      );

      // HIT TAIL, reset to short tail
      if (trailBit.x === this.state.px && trailBit.y === this.state.py) {
        this.setState({ tail: 5 });
        this.props.resetApples();
      }
    });

    //push current position to trail array. to store for painting on next game iteration
    this.state.trail.push({ x: this.state.px, y: this.state.py });

    while (this.state.trail.length > this.state.tail) this.state.trail.shift(); //remove back elements of trail arr until it has length tail

    // EAT APPLE! when apple position === snake head position
    if (
      this.state.appleX === this.state.px &&
      this.state.appleY === this.state.py
    ) {
      this.props.incrementApples(1); //inform redux state
      this.setState(prevState => ({ tail: prevState.tail + 1 })); //extend tail
      this.setState({ appleX: Math.floor(Math.random() * this.state.tileCount) });
      this.setState({ appleY: Math.floor(Math.random() * this.state.tileCount) }); // random x,y for new apple position
    }

    ctx.fillStyle = 'red'; // paint apple
    ctx.fillRect(
      this.state.appleX * this.state.gridSize,
      this.state.appleY * this.state.gridSize,
      this.state.gridSize - 2,
      this.state.gridSize - 2
    );
  };

  keyPush = evt => {
    switch (evt.keyCode) {
      case 37: // left arrow
        this.setState({ xVelocity: -1, yVelocity: 0 });
        break;
      case 38: // up arrow
        this.setState({ xVelocity: 0, yVelocity: -1 });
        break;
      case 39: // right arrow
        this.setState({ xVelocity: 1, yVelocity: 0 });
        break;
      case 40: // down arrow
        this.setState({ xVelocity: 0, yVelocity: 1 });
        break;
      case 87: // w. up/right diagonal
        this.setState({ xVelocity: 1, yVelocity: -1 });
        break;
      case 65: // a. up/left diagonal
        this.setState({ xVelocity: -1, yVelocity: -1 });
        break;
      case 83: // s. down/left diagonal
        this.setState({ xVelocity: -1, yVelocity: 1 });
        break;
      case 68: // d. down/right diagonal
        this.setState({ xVelocity: 1, yVelocity: 1 });
        break;
      default:
        break;
    }
  };

  render() {
    return <canvas id="snake-game-canvas" width="400" height="400" />;
  }
}

const mapDispatchToProps = dispatch => ({
  incrementApples: (n) => dispatch(incrementApples(n)),
  resetApples: () => dispatch(resetApples()),
});

export default connect(undefined,mapDispatchToProps)(Snake);