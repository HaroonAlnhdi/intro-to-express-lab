
            const express = require('express')


            //DATA:

            const collectibles = [
                { name: 'shiny ball', price: 5.95 },
                { name: 'autographed picture of a dog', price: 10 },
                { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
            ];


            const shoes = [
                { name: "Birkenstocks", price: 50, type: "sandal" },
                { name: "Air Jordans", price: 500, type: "sneaker" },
                { name: "Air Mahomeses", price: 501, type: "sneaker" },
                { name: "Utility Boots", price: 20, type: "boot" },
                { name: "Velcro Sandals", price: 15, type: "sandal" },
                { name: "Jet Boots", price: 1000, type: "boot" },
                { name: "Fifty-Inch Heels", price: 175, type: "heel" }
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

                let index = parseInt(req.params.index , 10);
                let product = collectibles[index]

            
            if ( index >= collectibles.length||isNaN(index) ){
                res.send(`This item is not yet in stock. Check back soon!`)
                }

                else{
                    // index = collectibles.indexOf(index)
                    res.send(` So, you want the ${product.name}? For ${product.price}, it can be yours!`)
                }
            })


            // 4. Filter Shoes by Query Parameters
            app.get('/shoes', (req, res) => {
                const minPrice = parseInt(req.query.min, 10);
                const maxPrice = parseInt(req.query.max, 10);
                const type = req.query.type;
              
                if (isNaN(minPrice) && isNaN(maxPrice) && !type) {
                  res.send('Please Enter the Min OR MAX Price and Type .. ..');
                }
              
                const filteredShoes = shoes.filter(shoe => {
                  const matchesMinPrice = !isNaN(minPrice) ? shoe.price >= minPrice : true;
                  const matchesMaxPrice = !isNaN(maxPrice) ? shoe.price <= maxPrice : true;
                  const matchesType = type ? shoe.type === type : true;
                  return matchesMinPrice && matchesMaxPrice && matchesType;
                });
              
                // let responseText = `Filtered shoes based on the criteria:<br>`;
                // if (!isNaN(minPrice)) responseText += `Minimum price: ${minPrice}<br>`;
                // if (!isNaN(maxPrice)) responseText += `Maximum price: ${maxPrice}<br>`;
                // if (type) responseText += `Type: ${type}<br>`;
                
                responseText = `Matching shoes:<br>`;
                filteredShoes.forEach(shoe => {
                  responseText += `Name: ${shoe.name}, Price: ${shoe.price}, Type: ${shoe.type}<br>`;
                });
              
                res.send(responseText);
              });



