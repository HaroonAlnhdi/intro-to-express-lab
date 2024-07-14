
const express = require('express')


//DATA:

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

// Create an Express app
const app = express()


app.listen(3000, () => {
    console.log('Listening on port 3000')

})

// 1. Be Polite, Greet the User

app.get('/greeting/:name', (req, res) => {

    res.send(`What a delight it is to see you once more,  ${req.params.name}!`)
})



// 2. Rolling the Dice
app.get('/rool/:number', (req, res) => {
    const number = req.params.number;

    if (isNaN(number)) {
        res.send('You must specify a number');
    } else {
        const max = parseInt(number, 10); // converts the string
        const randomNumber = 
        Math.floor(Math.random() * (max + 1)); 
        res.send(`You rolled a ${randomNumber}  !`);
    }
});




//  3. I Want THAT One!
app.get('/collectibles/:index', (req, res) => {

    res.send(` index : ${req.params.index}!`)
})