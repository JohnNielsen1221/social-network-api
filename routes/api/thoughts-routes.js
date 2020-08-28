const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtsById,
    addThoughts, 
    updateThoughts,
    removeThoughts, 
    addReaction, 
    removeReaction 

} = require('../../controllers/thoughts-controller');

// /api/thoughts
router
.route('/')
.get(getAllThoughts)

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(removeThoughts);

// /api/thoughts/<userId>
router
.route('/:userId')
.post(addThoughts);

// /api/thoughts/<ThoughtsId>/reactions
router
.route('/:thoughtsId/reactions')
.post(addReaction)

// /api/thoughts/<thougthsId>/reactions/<reactionId>
router
.route('/:thoughtsId/reactions/:reactionId')
.delete(removeReaction);


module.exports = router;