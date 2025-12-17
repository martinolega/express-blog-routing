import express from "express";
import postList from "../data/postList.js";

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    res.send(postList);
});

//SHOW
router.get("/:id", (req, res) => {
    let result = postList.find((post) => post.id === parseInt(req.params.id))
    res.send(result);
});

//STORE
router.post("/", () => {
    res.send("Creo un nuovo post");
});

//UPDATE
router.put("/:id", () => {
    res.send("Rimpiazzo il post");
});

//MODIFY
router.patch("/:id", () => {
    res.send("Modifico il post");
});

//DESTROY
router.get("/:id", () => {
    res.send("Elimino il post");
});

export default router;