//Import The Database Connection
const mongoose = require("./connection")

///////////////////////////////////////////
// IMPORT YOUR MODELS BELOW
///////////////////////////////////////////
const Puppy = require("../models/Puppy")

///////////////////////////////////////////
// DO YOUR DATABASE OPERATIONS IN BELOW FUNCTION
///////////////////////////////////////////

const seed = async () => {

    //*********Code Goes Here

    const puppies = await Puppy.create([
        {img: "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg"},
        {img: "https://secure.img1-fg.wfcdn.com/im/27616071/compr-r85/3125/31254990/dalmatian-puppy-statue.jpg"},
        {img: "https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/2020-03/English%20Lab%20Puppy%20%281%29_0.png"},
        {img: "https://images.theconversation.com/files/377569/original/file-20210107-17-q20ja9.jpg?ixlib=rb-1.1.0&rect=278%2C340%2C4644%2C3098&q=45&auto=format&w=926&fit=clip"},
        {img: "https://www.thefarmersdog.com/digest/wp-content/uploads/2020/07/Corgi-puppy-1-scaled.jpg"},
        {img: "https://i.dailymail.co.uk/1s/2020/06/29/22/30198268-8472445-image-a-4_1593464962804.jpg"},
    ])

    console.log(puppies)

    //***************************** */

    mongoose.disconnect()
}

// Run Seed Function
mongoose.connection.on("open", () => {
    seed()
})
