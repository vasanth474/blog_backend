//import mongoose 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;// calling the Schema class of mongoose

//The new instance for the structore of the blog collection
let blogSchema =  new Schema(
    {
        blogId:{
            type:String,//Should not be in quotes as they are the types 
            default:''
        },
        title:{
            type:String,
            default:''
        },
        description:{
            type:String,
            default:''
        },
        bodyHtml:{
            type:String,
            default:''
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            deafult:false
        },
        category:{
            type:String,
            default:''
        },
        author:{
            type:String,
            default:''
        },
        tags:[],
        created:{
            type:Date,
            deafult:Date.now
        },
        lastModified:{
            type:Date,
            deafult:Date.now
        }
    }
)


//To let it as the blog model
mongoose.model('Blog',blogSchema);

//Here there is no module export object as it is taken care internally by the mongoose