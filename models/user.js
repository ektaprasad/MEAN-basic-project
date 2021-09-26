const mongoose=require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:"name required",
            minlength:1,
            maxlength:200
        },
        age:
        {
            type:Number,
            required:"age required",
            minlength:1,
            maxlength:3
        },
         address:
        {
            type:String,
            required:"address required",
            minlength:1,
            maxlength:20
        },
        // addressOne:
        // {
        //     type:String,
        //     required:"addressOne required",
        //     minlength:1,
        //     maxlength:20
        // },
        // addressTwo:
        // {
        //     type:String,
        //     required:"addressTwo required",
        //     minlength:1,
        //     maxlength:20
        // },
        // pincode:
        // {
        //     type:Number,
        //     required:"pincode required",
        //     minlength:6,
        //     maxlength:6
        // },
        // city:
        // {
        //     type:String,
        //     required:"city required",
        //     minlength:1,
        //     maxlength:20
        // },
        // state:
        // {
        //     type:String,
        //     required:"state required",
        //     minlength:1,
        //     maxlength:20
        // },
        // country:
        // {
        //     type:String,
        //     required:"country required",
        //     minlength:1,
        //     maxlength:20
        // }
    });

    module.exports=mongoose.model("User",userSchema);