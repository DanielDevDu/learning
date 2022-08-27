
const express = require('express');
const faker = require('faker');

// use router
const router = express.Router();

// products router
router.get('', (req, res) => {
    // const products = [];
    // for (let i = 0; i < 10; i++) {
    //     products.push({
    //         name: faker.commerce.productName(),
    //         price: faker.commerce.price(),
    //         image: faker.image.imageUrl()
    //     });
    // };
    const { size } = req.query 
    const limit = size || 10;
    const products = Array.from({length: limit}, (e, i) =>{
        return(
        {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.imageUrl()
        })
    });

    res.json(products);
});

// books/:id
router.get('/:id', (req, res) => {
    // const { id } = req.params;
    const id = req.params.id;
    res.json({
        name: "product " + id
    });

});

//query params
// app.get('/books', (req, res) => {
//     const { limit, offset } = req.query;
//     if (limit && offset) {
//         res.json({
//         limit: limit,
//         offset: offset
//     });
//     } else {
//         res.send("Not params");
//     }
// });

module.exports = router;