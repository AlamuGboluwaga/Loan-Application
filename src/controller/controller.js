const { query } = require("express");
const express = require("express");
const pool = require("../database");

const getTodos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todo", (error, data) => {
      if (error) {
        return res.status(404).json({ Message: "Not Found" });
      }
      if(data.rowCount< 1){
        return res.status(400).json({Error:"Database is Empty "})
    }
    return res.status(200).send(data.rows);
  }
     
    
  )} catch (error) {
    return error.message;
  }
};

const getById = async (req, res) => {
  try {
    const id = req.params.id;
    // const checkTodo = await pool.query(
    //   "SELECT s FROM todo s WHERE s.description =$1 ",
    //   [id],
    //   (error, data) => {
    //     if (error) {
    //       return res
    //         .status(404)
    //         .json({ error: "Record not found in the Database " });
    //     }
    //   }
    // );
    const result = await pool.query(
      "SELECT * FROM todo WHERE  todo_id =$1",
      [id],
      (error, data) => {
       
        if (error) {
          res
            .status(400)
            .json({ Error: "Todo does not Exist in the Database" });
        }
        if(data.rows == 0){
            return res.status(400).json({Error:"Id does not exist in Database "})
        }
        return res.status(200).send(data.rows);
      }
    );
  } catch (error) {
    return error.message;
  }
};

const createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    console.log(req.body);
    const created = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [
      description,
    ]);
    res.status(200).json(created.rows[0]);
  } catch (error) {
    return error.message;
  }
};

const updateTodo = async (req, res) => {
    const id = req.params.id;
    const {description} = req.body
    // const checkTodoExist = await pool.query("SELECT s FROM s todo WHERE s.description = $1 ",[id],(error,data)=>{
    //     console.log(checkTodoExist)
    
    // })
    const updatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2" ,[description,id],(error,data)=>{
      
        if(error){
          return   res.status(400).json({Error:"Todo not Updated"})
        }
        if(data.rowCount < 1){
           
            return res.status(400).json({Error:"Id does not exist in Database "})
        }else return res.status(200).json({Message:"Todo Succefully Updated"})
      
    })
    
}
const deleteTodo = async(req,res)=>{
const id  = req.params.id;
await pool.query("DELETE FROM todo WHERE todo_id =$1",[id],(error,data)=>{
    if(error){
        console.log(error); 
        return res.status(402).json({Messages:"Todo not Deleted"})
    }
    if(data.rowCount == 0){
        return res.status(400).json({Error:"Id does not exist in Database "})
    }return res.status(200).json({Message:"Todo Deleted Succefully"})
    
})




}
   

module.exports = { getTodos, createTodo, getById, updateTodo, deleteTodo };

// const checkifTodoExist = await pool.query("SELECT s FROM  todo s  WHERE s.description = $1 ",[description],(error,data)=>{
//     console.log(description);
//     if(data){
//         res.status(400).json({Message:"Already  Exist"})