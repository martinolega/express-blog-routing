import express from "express";
import postList from "../data/postList.js";

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    res.send(postList);
});

//SHOW
// /repos/:username/:reponame/:filename
// /producsts/:brand/:color
router.get("/:id", (req, res) => { // http://localhost:3000/posts/1/ciao?id=1&lol=90
    let result = postList.find((post) => post.id === parseInt(req.params.id));
    console.log('query', req.query.id);
    console.log('params', req.params);
    
    

    if(result === undefined)
    {
        res.send("Nessun post con id " + req.params.id);
    }
    else
    {
        res.send(result);
    }
});

//STORE
router.post("/", (req, res) => {
    console.log(req.body);
    
    res.send("Creo un nuovo post");
});

//UPDATE
router.put("/:id", (req, res) => {
    res.send("Rimpiazzo il post");
});

//MODIFY
router.patch("/:id", (req, res) => {
    res.send("Modifico il post");
});

//DESTROY
router.delete("/:id", (req, res) => {
    res.send("Elimino il post");
});

export default router;