const router = require('express').Router();
const user = require('../controller/user');

const  validate = require("../utils/validate");

router.post('/addUser',async(req,res,next) => {
    try {
        let schema = {
            type: 'object',
            properties: {
                "userName": { type: 'string', format: 'nonEmptyOrstringBlank' },
                "age": { type: 'number', format: 'positiveNumeric' },
                "address": { type: 'string' }
            },
            required: ['userName','age','address'],
            additionalProperties: false
        }

        validate(req.body,schema,res);
        await user.saveUsers(req,res);
    } catch(err) {
       throw err;
       next(err);
    }
});

router.get('/getUser',async(req,res) => {
    try {
        const result = await user.getUsers(req);
        res.status(200).json({
            users:result
        });
    } catch(err) {
       throw err;
    }
});


module.exports = router;