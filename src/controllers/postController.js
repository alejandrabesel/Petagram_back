const {Post, Pet} = require('../db.js')

const getAllPosts = async(req,res) => {
    try {
        const allPosts = await Post.findAll();
        res.json(allPosts);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const getPostsByPetId = async(req,res) => {
    try {
        const { petId } = req.params;
        const lookedPet = await Pet.findByPk(petId);
        const postsByPet = await Post.findAll({ where: { petId }}) // no va a funcionar hasta que no hayan pets asociados
        res.json(postsByPet);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const addPost = async(req, res) => {
  try {
    const { date, reactions, comments, description, image, title, state } = req.body;
    const { petId } = req.params;
    const newPost = await Post.create({
      date,
      reactions : [reactions],
      comments : [comments],
      description,
      image,
      title,
      state
    });

    const pet = await Pet.findByPk(petId);
    await newPost.setPet(pet);

    res.json(newPost);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

const addReactions = async(req,res) => {
    try {
        const { id } = req.params;
        const { reactions } = req.body;
        let post = await Post.findByPk(id);
        await post.update({ reactions  })
        res.json(post);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const addComment = async(req,res) => {
     try {        
        const { id } = req.params;
        const { comments } = req.body;
        let post = await Post.findByPk(id);
        await post.update({ comments  })
        res.json(post);
     } catch (error) {
         return res.status(400).json({ message: error.message });
     }
}

// CON ESTOS DOS METODOS NO NECESITAS PASARLE EN EL ARRAY DE COMMENTS Y REACTIONS LO QUE YA HABIA, PORQUE HACE UN PUSH, PERO NO LO GUARDA EN EL GETALL PORQUE EL ARRAY SE GUARDA COMO PROMESA
//
// const addReactions = async(req,res) => {
//     try {
//         const { id } = req.params;
//         const { newReaction } = req.body;
//         let updatedPost = await Post.findByPk(id);
//         await updatedPost.reactions.push(newReaction);
//         res.json(updatedPost);
//     } catch (error) {
//         return res.status(400).json({ message: error.message });
//     }
// }

// const addComment = async(req,res) => {
//      try {        
//         const { id } = req.params;
//         const { newComment } = req.body;
//         let updatedPost = await Post.findByPk(id);
//         await updatedPost.comments.push(newComment);
//         res.json(updatedPost);
//      } catch (error) {
//          return res.status(400).json({ message: error.message });
//      }
// }


const updatePost = async(req,res) => {
    try {
        const { date, description, reactions, comments, image, title, state } = req.body;
        const post = await Post.findByPk(req.params.id);
        await post.update({ date, description, reactions, comments, image, title, state  });
        await post.save();
        res.json(post);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const removePost = async(req,res) => {
    try {
        await Post.destroy({
            where: {
              id: req.params.id,
            },
          });
          res.status(200).send(`Post de id ${req.params.id} eliminado correctamente`);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}


module.exports = {
    addPost,
    addReactions,
    addComment, 
    updatePost,
    removePost,
    getAllPosts,
    getPostsByPetId
}