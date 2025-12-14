import dataPost from "../src/dataPosts.js";
import express, { Router } from "express";

const postRouter = express.Router();

/**
 * CRUD Opp:
 * 
 * 
 */

 // Index -> Get
postRouter.get("/", (req, res) => {
   const dataResponse = {
      "info" : {
         "lenght" : dataPost.length,
      },
      "data" : {
         "posts" : dataPost,
      }
   }

    res.json(dataResponse);
})
 // Show -> Get
 postRouter.get("/:id", (req, res) => {
   const idString = req.params.id;
   const id = parseInt(idString);
   
   let dataResponse = {
      "data" : {}
   }
   
   if (id > 0 && id < dataPost.length){

      dataResponse.data = dataPost.find((curPost) => curPost.id === id)
   }else{
      dataResponse.data = {
         "error" : `Indice non compreso nel rande [1, ${dataPost.length}]`
      }
   }
    res.json(dataResponse);
 })

 // Store -> Post
 postRouter.post("/", (req, res) => {
    res.send("Aggiunto elemento al DB");
 })

 // Update -> Put
 postRouter.put("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Aggiornato completamente l'elemento con ID ${id}`);
 })

 // Modify -> Patch
 postRouter.patch("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Aggiornato parzialmente l'elemento con ID ${id}`);
 })

 // Destroy -> Delete
 postRouter.delete("/:id", (req, res) => {
   const id = req.params.id;
   res.send(`Elimintato l'elemento con ID ${id}`);
 })

 export default postRouter;