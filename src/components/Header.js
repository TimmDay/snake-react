import React from 'react';

export const Header = () => {
  const numStars = 80;
  const getRandomPosition = () => {
    var x = window.innerWidth; //header spans the screen
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * 180); //needs to match header height in css
    return [randomX, randomY];
  };
  for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    const xy = getRandomPosition();
    star.style.left = xy[0] + 'px';
    star.style.top = xy[1] + 'px';
    document.body.append(star);
  }

  return (
    <header>
      <h1>Fizz Buzz Snake</h1>
      <p>Mathematical turmoil has engulfed the Galapplexy</p>
    </header>
  );
};

export default Header;
