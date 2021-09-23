const router = require('express').Router();
const user = require('../controller/user');

router.post('/addUser',async(req,res,next) => {
    try {
        // validate(req.body);
        const result = await user.saveUsers(req);
        if (result) {
            return res.status(200).json({ success: true, data: result });
          } else {
            return res.status(200).json({ success: false, message: "error" });
         }
    } catch(err) {
       throw err;
       next(err);
    }
});

router.get('/getUser',async(req,res) => {
    try {
        // validate(req.body);
        const result = await user.getUsers();
        res.status(200).json({
            users:result
        });
    } catch(err) {
       throw err;
    }
});