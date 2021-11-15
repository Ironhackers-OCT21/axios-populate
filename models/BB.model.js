const { Schema, model } = require("mongoose");


const BBSchema = new Schema(
  {
      nickname: String, 
      img: String
  },
);

const BBModel = model("BB", BBSchema);

module.exports = BBModel;
