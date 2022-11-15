const express = require('express');
const drinks = require('./models/drinks');


// Express App Object
const app = express();

// Home Route
app.get('/gitPub/', (req, res) => {
    res.send('Welcome to the GitPub App!')
});

// Index Route
app.get('/gitPub/drinks', (req, res) => {
    res.render('drinks_index.ejs',
        {
        allDrinks:drinks
        }
    );
});

// SHOW Route
app.get('/drinks/:index', (req, res) => {
    // res.render(template, data)
    res.render('drinks_show.ejs', {
        drinks: drinks[req.params.index],
        index: req.params.index
    });
});




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});