// import Router and Controllers
const router = require("express").Router()
const PuppyController = require("../controllers/puppy")

//index get => "/puppy"
router.get("/", PuppyController.index)

//new get => "/puppy/new"
router.get("/new", PuppyController.new)

//create post => "/puppy"
router.post("/", PuppyController.create)

//index get => "/puppy/:id/edit"
router.get("/:id/edit", PuppyController.edit)

//update put => "/puppy"
router.put("/:id", PuppyController.update)

//destroy delete => "/puppy/:id"
router.delete("/:id", PuppyController.destroy)

//add 1 like route
router.get("/like/:id", PuppyController.like)

//show get => "/puppy/:id"
router.get("/:id", PuppyController.show)

//export the router
module.exports = router