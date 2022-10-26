const router = require('express').Router();
const { getAllThought, getThoughtById, addThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought);

router
    .route('/:userId')
    .post(addThought);


router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .post(addReaction)
    .delete(deleteThought);


router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction)



module.exports = router;