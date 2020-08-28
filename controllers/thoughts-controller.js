const { Thoughts, User } = require('../models');

const thoughtsController = {
    //add thoughts to user
    addThoughts({ params, body }, res) {
        console.log(body);
        Thoughts.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    //get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')

            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            })
    },

    //get single thought
    getThoughtsById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thought with this id!' })
                    return;
                }
                res.json(dbThoughtsData)
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            })
    },

    //update thoughts
    updateThoughts({ params, body }, res) {
        Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.status(400).json(err));
    },

    //remove thoughts
    removeThoughts({ params }, res) {
        Thoughts.findOneAndDelete({ _id: params.id })
            .then(deletedThoughts => {
                if (!deletedThoughts) {
                    return res.status(404).json({ message: 'No thoughts with this id!' });
                }
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $pull: { thoughts: params.thoughtsId } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    //add reaction
    addReaction({ params, body }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtsId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.status(400).json(err));
    },

    // remove reaction
    removeReaction({ params }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtsId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtsController;