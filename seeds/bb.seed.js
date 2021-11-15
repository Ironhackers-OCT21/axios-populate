// 1 .First connect to your DB
// 2 .REQUIRE YOUR MODEL
// 3 .insert info
// 4. close the connection


// 1.
require('../db')

// 2.
const BBModel = require('../models/BB.model')
const axios = require('axios')
const mongoose = require('mongoose')


axios.get('https://www.breakingbadapi.com/api/characters')
    .then((response) => {
        // The actula info from the API will always be inside `.data`
        // console.log(response.data)

        //inserting info in our DB, following the schema
        return BBModel.insertMany(response.data)
    })
    .then(() => {
        console.log('Data inserted')
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Something went wrong', err)
        mongoose.connection.close()
    })