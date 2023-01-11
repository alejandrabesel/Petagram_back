const { Router } = require('express');
const {addPost,
    addReactions,
    addComment, 
    updatePost,
    removePost,
    getPostsByPetId,
    getAllPosts
    } = require('../controllers/postController')

const router = Router();

//Routes
router.get("/", getAllPosts);
router.get("/:petId", getPostsByPetId);
router.post("/:petId", addPost);
router.put("/reaction/:id", addReactions);
router.put("/comment/:id", addComment);
router.put("/:id", updatePost);
router.delete("/:id", removePost);


module.exports = router;