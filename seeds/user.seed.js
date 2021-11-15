require('../db')

let UserModel = require('../models/User.model')
const mongoose = require('mongoose')

UserModel.create([
  {name: 'Joshua', email: 'joshua@ironhack.com', phone:'97234123'},
  {name: 'Joanne', email: 'joanne@ironhack.com', phone:'4567567234'},
  {name: 'Taka', email: 'taka@ironhack.com', phone:'95353123'},
  {name: 'Manish', email: 'manish@ironhack.com', phone:'7234132414'}
])
  .then(() => {
    console.log('Data seeded')
    mongoose.connection.close()
  })
  .catch(() => {
    mongoose.connection.close()
  })