require('../db')

let PostModel = require('../models/Post.model')
const mongoose = require('mongoose')

PostModel.create([
  {comment:'This is Josh', id: '619263407f7e7cae1ff64354'},
  {comment:'This is Jo-anne', id: '619263407f7e7cae1ff64355'},
  {comment:'This is Takaaa', id: '619263407f7e7cae1ff64356'},
])
  .then(() => {
    console.log('Data seeded')
    mongoose.connection.close()
  })
  .catch(() => {
    mongoose.connection.close()
  })