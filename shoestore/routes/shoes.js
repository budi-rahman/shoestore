const express = require("express")
const router = express.Router()
const Controller = require("../controller/controller")

router.get("/add", Controller.showAdd)

router.post("/add", Controller.addShoes)

router.get("/edit/:id", Controller.showEditShoes)

router.post("/edit/:id", Controller.editShoes)

router.get("/delete/:id", Controller.delShoes)

router.post("/", Controller.home)

module.exports = router