// const path = require('path');
// const express = require('express'); // node style import
// const app = express(); //create new instance
// const publicPath = path.join(__dirname, '..', 'public');
// const port = process.env.PORT || 3030; //heroku sets this PORT value

// app.use(express.static(publicPath)); //serve up all assets from public directory

// // hey! if what the person requested is not in the public folder, just give them back index.html
// // func to run when a get request is made. match all unmatched routes
// // request object contains info about the request
// // response object allows us to manipulate the
// // this is all express stuff
// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
// });

// // for HEROKU
// app.listen(port, () => {
//     console.log('heroku server is up');
// });

const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const publicPath = path.join(__dirname, '..', 'public'); //current dir/../public
const port = process.env.PORT || 3000; //use the heroku set port if available

app.use(express.static(publicPath));

app.get('*', (request, response) => { // * all unmatched routes
  response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up');
});