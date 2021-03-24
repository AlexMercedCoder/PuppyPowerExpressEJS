// IMPORT MY PUPPY MODEL
const { findByIdAndUpdate } = require("../models/Puppy");
const Puppy = require("../models/Puppy");

// Controller Functions

// index - generates a page of all puppies
const index = async (req, res) => {
  // get all the puppies
  const Puppies = await Puppy.find({});
  // render the view
  res.render("puppy/index", {
    puppies: Puppies,
  });
};

// show - generates a page of one puppies "/puppy/:id"
const show = async (req, res) => {
  // get the id param
  const id = req.params.id;
  // get a dog
  const puppy = await Puppy.findById(id);
  //render a view
  res.render("puppy/show", {
    puppy,
  });
};

// new - generates a page to create a puppy
const newPuppy = async (req, res) => {
  res.render("puppy/new");
};

// create - create a puppy and redirects to index
const create = async (req, res) => {
  //create the new puppy
  await Puppy.create(req.body);
  //redirecting to the main
  res.redirect("/puppy");
};

// edit - generates a page to edit a puppy "/puppy/:id/edit"
const edit = async (req, res) => {
  // get the id param
  const id = req.params.id;
  // get a dog
  const puppy = await Puppy.findById(id);
  //render a view
  res.render("puppy/edit", {
    puppy,
  });
};

// update - updates a puppy and redirects to index "/puppy/:id"
const update = async (req, res) => {
  try {
    // grab the id
    const id = req.params.id;
    // update the puppy
    console.log(id, req.body);
    await Puppy.findByIdAndUpdate(id, req.body, { new: true });
    //redirect to show
    res.redirect(`/puppy/${id}`);
  } catch (error) {
    res.json(error);
  }
};

// destroy - destroys a puppy "/puppy/:id"
const destroy = async (req, res) => {
  //get the id
  const id = req.params.id
  // delete the puppy
  await Puppy.findByIdAndDelete(id)
  // redirect to main page
  res.redirect("/puppy");
};

const like = async (req, res) => {
    //grab the id
    const id = req.params.id
    // increment the dogs likes
    await Puppy.findByIdAndUpdate(id, {$inc: {likes: 1}})
    //redirect back to main page
    res.redirect("/puppy")
}

// export my controller
module.exports = {
  index,
  show,
  new: newPuppy,
  create,
  edit,
  update,
  destroy,
  like
};
