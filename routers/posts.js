import express from "express";
import postList from "../data/postList.js";

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    res.send(postList);
});

//SHOW
router.get("/:id", (req, res) => {
    let result = postList.find((post) => post.id === parseInt(req.params.id));

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