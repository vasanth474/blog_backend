const express = require('express');
const appConfig = require('../appConfig/appConfig');
const controller = require('../controllers/blogController');

let setRouter = (app)=>{
  let baseUrl = appConfig.apiVersion+'/blogs';
  
  //allBlogs
  app.get(baseUrl+'/all',controller.getAllBlog); // find()

/**
    * @api {get} /api/v1/blogs/all Get all blogs
    * @apiVersion 0.0.1
    * @apiGroup read
    * 
    * @apiParam {String} authToken The token for authentication. (Send authToken as query parameter, body parameter or as a header )
    * 
    * @apiSuccessExample {json} Success-Response:
    * {
     "error": false,
     "message": "All Blog Details Found",
     "status": 200,
     "data":[
               {
                   blogId: "string",
                   title: "string",
                   description: "string",
                   bodyHtml: "string",
                   views: number,
                   isPublished: boolean,
                   category: "string",
                   author: "string",
                   tags: object(type = array),
                   created: "date",
                   lastModified: "date"                  
               }        
            ]
        }
    }
    @apiErrorExample {json} Error-Response:
    *
    *{
        "error":true,
        "message": "Failed To Find Blog Details",
        "status": 500,
        "data": null
      }
    */
  //Create Blog
  app.post(baseUrl+'/create',controller.createBlog); //save()
  /**
    * @api {post} /api/v1/blogs/create Create Blog
    * @apiVersion 0.0.1
    * @apiGroup create
    * 
    * @apiParam {String} authToken The token for authentication. (Send authToken as query parameter, body parameter or as a header )
    * 
    * @apiSuccessExample {json} Success-Response:
    * {
     "error": false,
     "message": "Blog created",
     "status": 200,
     "data":[
               {
                   blogId: "string",
                   title: "string",
                   description: "string",
                   bodyHtml: "string",
                   views: number,
                   isPublished: boolean,
                   category: "string",
                   author: "string",
                   tags: object(type = array),
                   created: "date",
                   lastModified: "date"                  
               }        
            ]
        }
    }
    @apiErrorExample {json} Error-Response:
    *
    *{
        "error":true,
        "message": "Failed To Find Blog Details",
        "status": 500,
        "data": null
      }
    */

  //BlogByID
  app.get(baseUrl+'/view/:blogId',controller.viewByBlogId);// find()
  /**
    * @api {get} /api/v1/blogs/view/:blogId  Get a single blog
    * @apiVersion 0.0.1
    * @apiGroup read
    * 
    * @apiParam {String} authToken The token for authentication. (Send authToken as query parameter, body parameter or as a header )
    * @apiParam {String} blogId The blogId should be passed as the URL parameter 
    * 
    * 
    * @apiSuccessExample {json} Success-Response:
    * {
     "error": false,
     "message": "Blog Found Successfully.",
     "status": 200,
     "data":   {
                   _id: "string",
                   __v: number,
                   blogId: "string",
                   title: "string",
                   description: "string",
                   bodyHtml: "string",
                   views: number,
                   isPublished: boolean,
                   category: "string",
                   author: "string",
                   tags: object(type = array),
                   created: "date",
                   lastModified: "date"                  
               }        
            }
        }
    }
    @apiErrorExample {json} Error-Response:
    *
    *{
        "error":true,
        "message": "Failed To Find Blog Details",
        "status": 500,
        "data": null
      }
    */

  //Blog by category
  app.get(baseUrl+'/view/by/category/:category',controller.viewByCategory);// find()

  /**
    * @api {get} /api/v1/blogs/view/by/category/:category  Get blogs by category
    * @apiVersion 0.0.1
    * @apiGroup read
    * 
    * @apiParam {string} authToken The token for authentication. (Send authToken as query parameter, body parameter or as a header )
    * @apiParam {string} category category of the blog passed as the URL parameter 
    * 
    * @apiSuccessExample {json} Success-Response:
    * {
     "error": false,
     "message": "Blog Found Successfully.",
     "status": 200,
     "data":[
               {
                   blogId: "string",
                   title: "string",
                   description: "string",
                   bodyHtml: "string",
                   views: number,
                   isPublished: boolean,
                   category: "string",
                   author: "string",
                   tags: object(type = array),
                   created: "date",
                   lastModified: "date"                  
               }        
            ]
        }
    }
    @apiErrorExample {json} Error-Response:
    *
    *{
        "error":true,
        "message": "Failed To Find Blog Details",
        "status": 500,
        "data": null
      }
    */

  //Blog by author
  app.get(baseUrl+'/view/by/author/:author',controller.viewByAuthor);// find()
  
  /**
    * @api {get} /api/v1/blogs/view/by/author/:author Get blogs by author
    * @apiVersion 0.0.1
    * @apiGroup read
    * 
    * @apiParam {String} authToken The token for authentication. (Send authToken as query parameter, body parameter or as a header )
    * @apiParam {String} author author of the blog passed as the URL parameter
    * 
    * @apiSuccessExample {json} Success-Response:
    * {
     "error": false,
     "message": "Blog Found Successfully.",
     "status": 200,
     "data":[
               {
                   blogId: "string",
                   title: "string",
                   description: "string",
                   bodyHtml: "string",
                   views: number,
                   isPublished: boolean,
                   category: "string",
                   author: "string",
                   tags: object(type = array),
                   created: "date",
                   lastModified: "date"                  
               }        
            ]
        }
    }
    @apiErrorExample {json} Error-Response:
    *
    *{
        "error":true,
        "message": "Failed To Find Blog Details",
        "status": 500,
        "data": null
      }
    */
  
   //Incerase Blog view
   app.get(baseUrl+'/:blogId/count/view',controller.increaseBlogView);//find()
   /**
	 * @api {get} /api/v1/blogs/:blogId/count/view Increase Blogs Count
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} blogId blogId of the blog passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Blog Updated Successfully.",
	    "status": 200,
	    "data": [
					{
						blogId: "string",
						title: "string",
						description: "string",
						bodyHtml: "string",
						views: number,
						isPublished: boolean,
						category: "string",
						author: "string",
						tags: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

   //Update Blog
  app.put(baseUrl+'/:blogId/edit',controller.editBlog);//update();  
  
  /**
      * @api {put} /api/v1/blogs/:blogId/edit Edit blog by blogId
      * @apiVersion 0.0.1
      * @apiGroup edit
      * 
      * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
      * @apiParam {String} blogId blogId of the blog passed as the URL parameter 
      * @apiSuccessExample {json} Success-Response:
      * { 
         "error":false,
          "message": "Blog Edited Successfully",
          "status" : 200,
          "data":[
                    {
                        blogId:"String",
                        title:"String",
                        description:"String",
                        bodyHtml:"String",
                        views:number,
                        isPublished:boolean,
                        category: "String",
                        author:"String",
                        tags: object(type = array),
                        created: "date",
                        lastModified: "date"
                    }
                ]
        }
      *@apiErrorExample {json} Error-Response:
      *{
         "error": true,
         "message": "Error-Occured.",
         "status": 500,
         "data":null
        } 
      */

  //Delete Blog
  app.post(baseUrl+'/:blogId/delete',controller.deleteBlog);//remove()

   /**
     * @api {get} /api/v1/blogs/:blogId/delete  Delete blog by blogId
     * @apiVersion 0.0.1
     * @apiGroup delete
     * 
     * @apiParam {String} authToken The token for authentication. (Send authToken as query parameter, body parameter or as a header )
     * @apiParam {String} blogId blogId of the blog passed as the URL parameter  
     * 
     * @apiSuccessExample {json} Success-Response:
     * {
        "error": false,
        "message": "Blog Deleted Successfully",
        "status": 200,
        "data": []
         }
      }
    }
    @apiErrorExample {json} Error-Response:
    *
    *{
        "error":true,
        "message": "Error Occured.",
        "status": 500,
        "data": null
      }
    */
};

module.exports = {
  setRouter:setRouter
}


