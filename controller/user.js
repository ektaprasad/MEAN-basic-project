const { result } = require('lodash');
const User = require('../models/user');

exports.saveUsers = async(req,res) =>{
    try {
        console.log("CREATING user:",req.body);
        const user = new User({
            name: req.body.userName,
            age: req.body.age,
            address: req.body.address
        });
        user.save()
        .then(function(result) {
            if(result) {
                if(result.name == 'ValidationError'){
                res.status(400).json(err);
                }
                else {
                    console.log('New User Created!', result);
                    res.status(200).send({data:'User added Successfully'});
                    }
            } 
        }).catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
    } catch(err) {
       throw err;
    }
}

exports.getUsers = async(req) =>{
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const skipIndex = (page - 1) * limit;
        let results = {};
        if(page && limit) {
        results.data = await User.find()
        .sort({ _id: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();
        // results.data = results;
        results.pagination = {page: page,limit:limit}
        } else {
        results = await User.find();
        }
        results.total = await User.count();
        return results;
        
    } catch(err) {
       throw err;
    }
};
