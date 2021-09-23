const User = require('../models/user');

exports.saveUsers = async() =>{
    try {
        const user = new User(req.body);
        console.log("CREATING user:",req.body);
        const result = await user.save();
       return result;
    } catch(err) {
       throw err;
    }
}

exports.getUsers = async() =>{
    try {
        return await User.find({})
    } catch(err) {
       throw err;
    }
};
