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

    res.send(dataResponse);
})
 // Show -> Get
 postRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Mostrato l'elendo con ID ${id}`);
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