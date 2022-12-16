const express = require('express')
const {Router} =require('express')
const router = Router()
// const createTodo =require('../controller/controller')
const controller =require('../controller/controller')


router.post("/createtodo",controller.createTodo)
router.get("/getalltodos",controller.getTodos)
router.get("/gettodobyid/:id",controller.getById)
router.patch("/updatetodo/:id",controller.updateTodo)
router.delete("/deleteTodo/:id",controller.deleteTodo)


module.exports =router