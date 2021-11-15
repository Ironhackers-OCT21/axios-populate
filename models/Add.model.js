const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const AddSchema = new Schema(
  {
    id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    country: String, 
    city: String
  });

const User = model("addres", AddSchema);

module.exports = User;
