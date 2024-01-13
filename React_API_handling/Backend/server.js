/*
  npm init -y
  npm install express
*/

import Express from "express";

const app = new Express();

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Table",
            price: 200
        },
        {
            id: 2,
            name: "Chair",
            price: 100
        },
        {
            id: 3,
            name: "Desk",
            price: 150
        },
        {   
            id: 4,
            name: "glass table",
            price: 300
        },
        {   
            id: 5,
            name: "Metal table",
            price: 600
        }
    ]

    // http://localhost:3000/api/products?search=metal

    if(req.query.search){
        const filterProducts = products.filter(product => {
            return product.name.toLowerCase().includes(req.query.search.toLowerCase())
        })
        res.send(filterProducts)
        return;
    }

    // we want to add the delay in response.
    setTimeout(()=>{
        res.send(products)
    }, 3000);
})

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
