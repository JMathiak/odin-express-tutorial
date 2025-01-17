const asyncHandler = require("express-async-handler");


const getUserById = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await someDBQueryToGetUser(userId);
    if(!user){
        res.status(404).send("User not found")
        return
    }
    res.send(`User found: ${user.name}`)

})

const getUsers = asyncHandler(async (req, res) => {

});

const createUser = asyncHandler(async (req, res) => {

})

module.exports = {getUserById, getUsers, createUser }