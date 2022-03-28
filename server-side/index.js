const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const home = require('./routes/gen')
const cookieParser = require('cookie-parser');



app.use(express.static('public'));


// set up handlebars view engine
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(cookieParser());
app.use('/', home)

app.use(express.urlencoded({ extended: true }))

const connectionString = 'mongodb://127.0.0.1:27017/SS2022'

mongoose.connect(connectionString, {
    "useNewUrlParser": true,
    "useUnifiedTopology": true
  }).
  catch ( error => {
    console.log('Database connection refused' + error);
    process.exit(2);
  })
  
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'connection error:'));
  
  db.once('open', () => {
    console.log("DB connected")
  });
  

// custom 404 page
app.use( (req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('Error 404, try something else');
});

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('Error 500, Nothing to see here');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))