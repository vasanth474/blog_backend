const express = require('express');
const mongoose = require('mongoose');
const shortId = require('shortid');
const response = require('../libs/responsLib');
const check = require('../libs/checkLibs');

let BlogModel = mongoose.model('Blog');




let getAllBlog = (req,res)=>{
    BlogModel.find()
    .select('-__v -_id')
    .lean()
    .exec((err,result)=>{
        if(err){
            let apiResponse = response.generate(true,'Error while finding the result',500,null);
            res.send(apiResponse);
        }else if(check.isEmpty(result)){
            let apiResponse = response.generate(true,'Non Blogs found',404,null);
            res.send(apiResponse);
        }else{
            let apiResponse = response.generate(false,'All blogs found',200,result);
            res.send(apiResponse);
        }
    });
};

//start create blog 
let createBlog  = (req,res) =>{
    let time = Date.now();
    let blogId = shortId.generate();
    let newBlog = new BlogModel({
        blogId:blogId,       
        title:req.body.title,
        description:req.body.description,
        bodyHtml:req.body.bodyHtml,
        isPublished:true,
        category:req.body.category,
        author:req.body.author,
        created:time,
        lastModified:time
    });
    let tag  = (!check.isEmpty(req.body.tags))?req.body.tags.split(','):[];
    newBlog.tags = tag;
    newBlog.save((err,result)=>{
        if(err){
            console.log(err.message);
            let apiResponse = response.generate(true,'Failed to create blog',500,null);
            res.send(apiResponse);
        }else{
            console.log(result);
            let apiResponse = response.generate(true,'Blog created successfully',200,result);
            res.send(apiResponse);
        }
    });
}//End create blog

//Start viewBlogById
let viewByBlogId = (req,res)=>{
        if(!check.isEmpty(req.params.blogId)){
            BlogModel.find({'blogId':req.params.blogId})
            .select('-__v -_id')
            .lean()
            .exec((err,result)=>{
                if(err){
                    let apiResponse = response.generate(true,'Database error occured',500,null);
                    res.send(apiResponse);
                }else if(check.isEmpty(result)){
                    let apiResponse = response.generate(true,'No blog found',404,null);
                    res.send(apiResponse);
                }else{
                    let apiResponse = response.generate(false,'Blog find successfull',200,result);
                    res.send(apiResponse);
                }
            })
        }else{
            console.log('No blogId provided');
            let apiResponse = response.generate(true,'Please Provide the blogId',400,null);
            res.send(apiResponse);
        }
}//End viewBlogById

//Start viewByCategory
let viewByCategory = (req,res)=>{
    if(!check.isEmpty(req.params.category)){
        BlogModel.find({'category':req.params.category})
        .select('-_id -__v')
        .lean()
        .exec((err,result)=>{
            if(err){
                let apiResponse = response.generate(true,'Database error occured',500,null);
                res.send(apiResponse);
            }else if(check.isEmpty(result)){
                let apiResponse = response.generate(true,'No blog found',404,null);
                res.send(apiResponse);
            }else{
                let apiResponse = response.generate(false,'Blog find successfull',200,result);
                res.send(apiResponse);
            }
        })
    }else{
        console.log('No blogId provided');
        let apiResponse = response.generate(true,'Please Provide the Category',400,null);
        res.send(apiResponse);
    }
}//End viewBlogByCategory


//Start viewByAuthor
let viewByAuthor = (req,res)=>{
    if(!check.isEmpty(req.params.author)){
        BlogModel.find({'category':req.params.author})
        .select('-__v -_id')
        .lean()
        .exec((err,result)=>{
            if(err){
                let apiResponse = response.generate(true,'Database error occured',500,null);
                res.send(apiResponse);
            }else if(check.isEmpty(result)){
                let apiResponse = response.generate(true,'No blog found',404,null);
                res.send(apiResponse);
            }else{
                let apiResponse = response.generate(false,'Blog find successfull',200,result);
                res.send(apiResponse);
            }
        })
    }else{
        console.log('No blogId provided');
        let apiResponse = response.generate(true,'Please Provide the Author',400,null);
        res.send(apiResponse);
    }
}//End viewBlogByAuthor

//Start increaseBlogView
let increaseBlogView = (req,res)=>{
    if(!check.isEmpty(req.params.blogId)){
        BlogModel.findOne({'blogId':req.params.blogId})
        .exec((err,result)=>{
            if(err){
                let apiResponse = response.generate(true,'Database error occured',500,null);
                res.send(apiResponse);
            }else if(check.isEmpty(result)){
                let apiResponse = response.generate(true,'No blog found',404,null);
                res.send(apiResponse);
            }else{
                result.views +=1;
                result.save((err,result)=>{
                    if(err){
                        console.log('Unable to update the view count');
                        let apiResponse = response.generate(true,'Database error occured',500,result);
                        res.send(apiResponse);
                    }else{
                        let apiResponse = response.generate(false,'Blog found Successfully',200,result);
                        res.send(apiResponse);
                    }
                })
                
            }
        })
    }else{
        console.log('No blogId provided');
        let apiResponse = response.generate(true,'Please Provide the Author',400,null);
        res.send(apiResponse);
    }

}//End increaseBlogView

/* //Strat editBlog
let editBlog = (req,res)=>{
        if(!check.isEmpty(req.params.blogId)){
            BlogModel.findOne({'blogId':req.params.blogId})
            .exec((err,result)=>{
                if(err){
                    let apiResponse = response.generate(true,'Database error occured',500,null);
                    res.send(apiResponse);
                }else if(check.isEmpty(result)){
                    let apiResponse = response.generate(true,'No blog found',404,null);
                    res.send(apiResponse);
                }else{
                    let time = Date.now();
                    result.blogId = req.params.blogId;
                    result.title = req.body.title;
                    result.description = req.body.description;
                    result.bodyHtml = req.body.bodyHtml;
                    result.isPublished = true;
                    result.author = req.body.author;
                    result.category = req.body.category;
                    result.lastModified = time;
                    result.tags = (!check.isEmpty(req.body.tags))?req.body.tags.split(','):[];
                    result.save((err,result)=>{
                        if(err){
                            console.log('Unable to update the view count');
                            let apiResponse = response.generate(true,'Database error occured',500,result);
                            res.send(apiResponse);
                        }else{
                            let apiResponse = response.generate(false,'Blog found Successfully',200,result);
                            res.send(apiResponse);
                        }
                    })
                    
                }
            })
        }else{          
        console.log('No blogId provided');
        let apiResponse = response.generate(true,'Please Provide the Author',400,null);
        res.send(apiResponse);
        }
}//End editBlog */

//editBlog using update function
let editBlog = (req,res)=>{
    if(!check.isEmpty(req.params.blogId)){
        let options = req.body;
        BlogModel.update({'blogId':req.params.blogId},options,{multi:true},(err,result)=>{
            if(err){
                console.log('Unable to update the blog');
                let apiResponse = response.generate(true,'Unable to update',500,null);
                res.send(apiResponse);
            }else{
                let apiResponse = response.generate(false,'Blog updated successfully',200,result);
                res.send(apiResponse);
            }
        });
    }else{
        console.log('No blogId provided');
        let apiResponse = response.generate(true,'Please Provide the Author',400,null);
        res.send(apiResponse);
    }
}//End editBlog

//Start deleteBlog
let deleteBlog = (req,res)=>{
    if(!check.isEmpty(req.params.blogId)){
        BlogModel.remove({'blogId':req.params.blogId},(err,result)=>{
            if(err){
                console.log('Error while deleting the blog');
                let apiResponse = response.generate(true,'Error while deleting the blog',500,null);
                res.send(apiResponse);
            }else{
                let apiResponse = response.generate(false,'Blog deleted successfully',200,result);
                res.send(apiResponse);
            }
        });
    }else{
        console.log('No blogId provided');
        let apiResponse = response.generate(true,'Please Provide the Author',400,null);
        res.send(apiResponse);
    }
}//End deleteBlog

module.exports = {
    getAllBlog: getAllBlog,
    createBlog: createBlog,
    viewByBlogId: viewByBlogId,
    viewByAuthor: viewByAuthor,
    viewByCategory: viewByCategory,
    increaseBlogView:increaseBlogView,
    editBlog: editBlog,
    deleteBlog:deleteBlog
}