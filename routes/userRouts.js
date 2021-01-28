const express = require('express');
const router = express.Router();
const {
    getAllUSers,
    createUser,
    getUser,
    updateUser,
    deleteUser
} = require('./../controllers/userController');


router.route('/')
.get(getAllUSers)
.post(createUser);

router.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser);

module.exports = router;
