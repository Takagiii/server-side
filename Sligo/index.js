const express = require('express')
const app = express()
const port = 3000
const home = require('./routes/home')
const gen = require('./routes/gen')
const cookieParser = require('cookie-parser');

app.use(express.static('public'));


// set up handlebars view engine
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(cookieParser());

app.use('/', home)
app.use('/genshin', gen)



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