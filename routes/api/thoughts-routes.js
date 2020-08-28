const router = require('express').Router();
const { addThoughts, removeThoughts, addReaction, removeReaction } = require('../../controllers/thoughts-controller');

// /api/thoughts/<userId>
router.route('/:userId')
.post(addThoughts);

// /api/thoughts/<userId>/<thoughtsId>
router.route('/:userId/:thoughtsId')
.put(addReaction)
.delete(removeThoughts);

// /api/thoughts/<userId>/<thoughtsId>/<reactionId>
router.route('/:userId/:thoughtsId/:reactionId')
.delete(removeReaction);


module.exports = router;