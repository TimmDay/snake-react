(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),s=a.n(r),i=a(3),o=(a(32),a(33),a(34),a(4)),c=a(20),p=a(13),u={applesEaten:0,mostApples:0},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_APPLES":return Object(p.a)({},e,{applesEaten:e.applesEaten+t.n,mostApples:e.mostApples<e.applesEaten+t.n?e.applesEaten+t.n:e.mostApples});case"RESET_APPLES":return Object(p.a)({},e,{applesEaten:0});default:return e}},y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,d=a(42),h=a(21),E=a.n(h),f=function(){for(var e=function(){var e=window.innerWidth;return[Math.floor(Math.random()*e),Math.floor(180*Math.random())]},t=0;t<80;t++){var a=document.createElement("div");a.className="star";var n=e();a.style.left=n[0]+"px",a.style.top=n[1]+"px",document.body.append(a)}return l.a.createElement("header",null,l.a.createElement("h1",null,"Fizz Buzz Snake"),l.a.createElement("p",null,"Mathematical turmoil has engulfed the Galapplexy"))},v=a(5),S=a(6),b=a(8),k=a(7),g=a(9),x=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(g.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props.applesEaten,t="".concat(e%3?"":"FIZZ").concat(e%5?"":"BUZZ");return l.a.createElement("div",{className:"side-bar left"},l.a.createElement("h2",null,"Apples:",l.a.createElement("span",{style:{color:t?"lime":"#fff"}},t||this.props.applesEaten)),l.a.createElement("h2",null,"Record: ",l.a.createElement("span",null,"".concat(this.props.mostApples))),l.a.createElement("p",null,"Arrow keys: normal movement"),l.a.createElement("p",null,"A, W, S, D keys: crazy movement"))}}]),t}(l.a.Component),O=Object(i.b)(function(e){return{applesEaten:e.snakeReducer.applesEaten,mostApples:e.snakeReducer.mostApples}})(x),w=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(g.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"side-bar right"},l.a.createElement("p",null,"Eat the red apples to grow the snake"),l.a.createElement("p",null,"NOTE: real life snakes should never eat apples"))}}]),t}(l.a.Component),j=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).game=function(){console.log("game func");var e=document.getElementById("snake-game-canvas"),t=e.getContext("2d");for(a.setState(function(e){return{px:e.px+=a.state.xVelocity}}),a.setState(function(e){return{py:e.py+=a.state.yVelocity}}),a.state.px<0&&a.setState({px:a.state.tileCount-1}),a.state.px>a.state.tileCount-1&&a.setState({px:0}),a.state.py<0&&a.setState({py:a.state.tileCount-1}),a.state.py>a.state.tileCount-1&&a.setState({py:0}),t.fillStyle="#000",t.fillRect(0,0,e.width,e.height),t.fillStyle="lime",a.state.trail.forEach(function(e){t.fillRect(e.x*a.state.gridSize,e.y*a.state.gridSize,a.state.gridSize-2,a.state.gridSize-2),e.x===a.state.px&&e.y===a.state.py&&(a.setState({tail:5}),a.props.resetApples())}),a.state.trail.push({x:a.state.px,y:a.state.py});a.state.trail.length>a.state.tail;)a.state.trail.shift();a.state.appleX===a.state.px&&a.state.appleY===a.state.py&&(a.props.incrementApples(1),a.setState(function(e){return{tail:e.tail+1}}),a.setState({appleX:Math.floor(Math.random()*a.state.tileCount)}),a.setState({appleY:Math.floor(Math.random()*a.state.tileCount)})),t.fillStyle="red",t.fillRect(a.state.appleX*a.state.gridSize,a.state.appleY*a.state.gridSize,a.state.gridSize-2,a.state.gridSize-2)},a.keyPush=function(e){switch(e.keyCode){case 37:a.setState({xVelocity:-1,yVelocity:0});break;case 38:a.setState({xVelocity:0,yVelocity:-1});break;case 39:a.setState({xVelocity:1,yVelocity:0});break;case 40:a.setState({xVelocity:0,yVelocity:1});break;case 87:a.setState({xVelocity:1,yVelocity:-1});break;case 65:a.setState({xVelocity:-1,yVelocity:-1});break;case 83:a.setState({xVelocity:-1,yVelocity:1});break;case 68:a.setState({xVelocity:1,yVelocity:1})}},a.state={px:4,py:4,appleX:15,appleY:15,gridSize:20,tileCount:20,xVelocity:0,yVelocity:0,trail:[{x:4,y:4}],tail:5},a}return Object(g.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyPush);var e=setInterval(this.game,1e3/12);this.setState({intervalId:e})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId),document.removeEventListener("keydown")}},{key:"render",value:function(){return l.a.createElement("canvas",{id:"snake-game-canvas",width:"400",height:"400"})}}]),t}(l.a.Component),V=Object(i.b)(void 0,function(e){return{incrementApples:function(t){return e(function(e){return{type:"INCREMENT_APPLES",n:e}}(t))},resetApples:function(){return e({type:"RESET_APPLES"})}}})(j),A=E()(),C=function(){return l.a.createElement(d.a,{history:A},l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("main",null,l.a.createElement(O,null),l.a.createElement(V,null),l.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=Object(o.e)(Object(o.c)({snakeReducer:m}),y(Object(o.a)(c.a))),M=l.a.createElement(i.a,{store:z},l.a.createElement(C,null));s.a.render(M,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.e917311c.chunk.js.map