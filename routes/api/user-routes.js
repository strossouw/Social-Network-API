const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// All get - post

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// by /:id

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// friends by id

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);
    

module.exports = router;