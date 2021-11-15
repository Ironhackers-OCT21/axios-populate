const router = require("express").Router();
const BBModel = require('../models/BB.model')

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

module.exports = router;
