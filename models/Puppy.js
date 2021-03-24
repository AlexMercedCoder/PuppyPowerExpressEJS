// import model and Schema
const {model, Schema} = require("../db/connection")

// Create my Schema
const PuppySchema = new Schema({
    img: String,
    likes: {type: Number, default: 0}
}, {timestamps: true})

// create a model
const Puppy = model("puppy", PuppySchema)

// export the puppy model
module.exports = Puppy