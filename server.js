'use strict';

const express = require('express'); //npm install express
const langData = require('./assets/Programming-languages.json')

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send('home route');
});

// // localhost:3000/test
// app.get('/test', (req, res) => {
//     res.send('alive!')
// });

// // localhost:3000/petsList
// let myPetsList = ['Geoff', 'Sharron', 'Peter']
// app.get('/petsList', (req, res) => {
//     res.status(200).send(myPetsList);
// });


app.get('/ProgLang', (req, res) => {
    try {
            const langList = langData.map((progLangData)=>{
                return progLangData
            })
            res.status(200).send(langList);
    } catch (err) {
        res.status(200).send(err)
    }
});


app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`);
});