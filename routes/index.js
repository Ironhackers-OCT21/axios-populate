const router = require("express").Router();
const BBModel = require('../models/BB.model')
const NASA_KEY = process.env.NASA_KEY
const axios = require('axios')

const PostModel = require("../models/Post.model");


/* GET home page */
router.get("/", (req, res, next) => {

  // Fetch all the posts from the DB and show it here
      // Use res.send , avoid creating a hbs file just for now

      PostModel.find()
          .then((posts) => {
              res.send(posts)
          })
          .catch((err) => {
              next(err)
          })


       // your output will look like this
       
       /*
           {
              "_id": "60d9d059adc336055cd5db36",
              "comment": "Hello Pablo and Yanis",
              "id": "60d9cc916205ee3388ff99ca",
              "__v": 0
            },
  
      */
        
     // -------------------------------------------------
     //           WITH POPULATE
    // --------------------------------------------------

    // populate() takes a key name that you have referenced in your DB

      PostModel.find()
        .populate('id')
        .then((posts) => {
            res.send(posts)
        })
        .catch((err) => {
            next(err)
        })

        /*

        {
          "_id": "60d9d059adc336055cd5db36",
          "comment": "Hello Pablo and Yanis",
          "id": {
                "_id": "60d9cc916205ee3388ff99ca",
                "name": "Manish",
                "email": "manish@ironhack.com",
                "phone": "97234123",
                "__v": 0
          },
          "__v": 0
        },
        */
  


});

router.get("/search", (req, res, next) => {
  console.log(req.query)
  res.render("search.hbs");
});

router.get('/bb', (req, res, next) => {
    
    BBModel.find()
      .then((characters) => {
          // render a hbs file with 'characters'
          res.render('characters.hbs', {characters})
      })
      .catch((err) => {
          next(err)
      })

})

router.get('/nasa', (req, res, next) => {
    //make an axios request to NASA
    // render the data in an hbs file

    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_KEY}`)
      .then((response) => {
          //render an hbs file here
         let photos = response.data.photos
         res.render('mars.hbs', {photos})
      })
      .catch((err) => {
        next(err)
      })


})

module.exports = router;
