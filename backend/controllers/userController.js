import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth user && get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async(req,res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc Register User
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async(req,res) => {
    res.send('Register user')
});

// @desc Logout User / clear cookie
// @route POST /api/users/logout
// @access Private

const logoutUser = asyncHandler(async(req,res) => {
    res.send('Logout user')
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Public

const getUserProfile = asyncHandler(async(req,res) => {
    res.send('User Profile')
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async(req,res) => {
    res.send('Update User Profile')
});

// @desc Get users
// @route GET /api/users
// @access Private/Admin

const getUsers = asyncHandler(async(req,res) => {
    res.send('Get All the Users')
});

// @desc Get user by id
// @route GET /api/users/:id
// @access Private/Admin

const getUserByID = asyncHandler(async(req,res) => {
    res.send('Found the user by ID')
});

// @desc Delete users
// @route DELETE /api/users/:id
// @access Private/Admin

const deleteUser = asyncHandler(async(req,res) => {
    res.send('User Deleted')
});

// @desc update user
// @route PUT /api/users/:id
// @access Private/Admin

const updateUser = asyncHandler(async(req,res) => {
    res.send('User updated by Admin')
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUser,
    updateUser,
}


