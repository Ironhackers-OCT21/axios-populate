const { Schema, model } = require("mongoose");
require('./User.model')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const PostSchema = new Schema({
       comment:  String,
       id: {
           type: Schema.Types.ObjectId,
           ref: 'User'
       }
  });

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
