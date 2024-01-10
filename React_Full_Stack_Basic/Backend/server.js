// There are two ways to import the package one is common js and second is module js
// for cors you can use proxy in front app or you can whitelist the urls from server (backend)

// const express = require('express') => code will come in Synchronously manner.
import express from 'express'  // code will come asynchronously manner  // module js

const app = express();

// first build the react app then move that dist folder into backend and add one line in the backend code.
// app.use(express.static('dist'))  // This is middleware we can recognize middleware by use method.


// app.use(express.static('dist')) 
// app.get('/', (req, res) => {
//     res.send('Server is ready!!');
// });

// get a list of 5 jokes.

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            litle: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            litle: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            litle: 'A third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            litle: 'A fourth joke',
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            litle: 'A fifth joke',
            content: 'This is a fifth joke'
        }
    ]
    res.send(jokes);
})

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

