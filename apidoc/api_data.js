define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/blogs/create",
    "title": "Create Blog",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication. (Send authToken as query parameter, body parameter or as a header )</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"Blog created\",\n     \"status\": 200,\n     \"data\":[\n               {\n                   blogId: \"string\",\n                   title: \"string\",\n                   description: \"string\",\n                   bodyHtml: \"string\",\n                   views: number,\n                   isPublished: boolean,\n                   category: \"string\",\n                   author: \"string\",\n                   tags: object(type = array),\n                   created: \"date\",\n                   lastModified: \"date\"                  \n               }        \n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\":true,\n        \"message\": \"Failed To Find Blog Details\",\n        \"status\": 500,\n        \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "create",
    "name": "PostApiV1BlogsCreate"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/:blogId/delete",
    "title": "Delete blog by blogId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication. (Send authToken as query parameter, body parameter or as a header )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"Blog Deleted Successfully\",\n        \"status\": 200,\n        \"data\": []\n         }\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\":true,\n        \"message\": \"Error Occured.\",\n        \"status\": 500,\n        \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "delete",
    "name": "GetApiV1BlogsBlogidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/:blogId/edit",
    "title": "Edit blog by blogId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n         \"error\":false,\n          \"message\": \"Blog Edited Successfully\",\n          \"status\" : 200,\n          \"data\":[\n                    {\n                        blogId:\"String\",\n                        title:\"String\",\n                        description:\"String\",\n                        bodyHtml:\"String\",\n                        views:number,\n                        isPublished:boolean,\n                        category: \"String\",\n                        author:\"String\",\n                        tags: object(type = array),\n                        created: \"date\",\n                        lastModified: \"date\"\n                    }\n                ]\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n         \"error\": true,\n         \"message\": \"Error-Occured.\",\n         \"status\": 500,\n         \"data\":null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "edit",
    "name": "PutApiV1BlogsBlogidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/all",
    "title": "Get all blogs",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication. (Send authToken as query parameter, body parameter or as a header )</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"All Blog Details Found\",\n     \"status\": 200,\n     \"data\":[\n               {\n                   blogId: \"string\",\n                   title: \"string\",\n                   description: \"string\",\n                   bodyHtml: \"string\",\n                   views: number,\n                   isPublished: boolean,\n                   category: \"string\",\n                   author: \"string\",\n                   tags: object(type = array),\n                   created: \"date\",\n                   lastModified: \"date\"                  \n               }        \n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\":true,\n        \"message\": \"Failed To Find Blog Details\",\n        \"status\": 500,\n        \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/:blogId",
    "title": "Get a single blog",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication. (Send authToken as query parameter, body parameter or as a header )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"Blog Found Successfully.\",\n     \"status\": 200,\n     \"data\":   {\n                   _id: \"string\",\n                   __v: number,\n                   blogId: \"string\",\n                   title: \"string\",\n                   description: \"string\",\n                   bodyHtml: \"string\",\n                   views: number,\n                   isPublished: boolean,\n                   category: \"string\",\n                   author: \"string\",\n                   tags: object(type = array),\n                   created: \"date\",\n                   lastModified: \"date\"                  \n               }        \n            }\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\":true,\n        \"message\": \"Failed To Find Blog Details\",\n        \"status\": 500,\n        \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewBlogid"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/by/author/:author",
    "title": "Get blogs by author",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication. (Send authToken as query parameter, body parameter or as a header )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>author of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"Blog Found Successfully.\",\n     \"status\": 200,\n     \"data\":[\n               {\n                   blogId: \"string\",\n                   title: \"string\",\n                   description: \"string\",\n                   bodyHtml: \"string\",\n                   views: number,\n                   isPublished: boolean,\n                   category: \"string\",\n                   author: \"string\",\n                   tags: object(type = array),\n                   created: \"date\",\n                   lastModified: \"date\"                  \n               }        \n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\":true,\n        \"message\": \"Failed To Find Blog Details\",\n        \"status\": 500,\n        \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewByAuthorAuthor"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/by/category/:category",
    "title": "Get blogs by category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication. (Send authToken as query parameter, body parameter or as a header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>category of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"Blog Found Successfully.\",\n     \"status\": 200,\n     \"data\":[\n               {\n                   blogId: \"string\",\n                   title: \"string\",\n                   description: \"string\",\n                   bodyHtml: \"string\",\n                   views: number,\n                   isPublished: boolean,\n                   category: \"string\",\n                   author: \"string\",\n                   tags: object(type = array),\n                   created: \"date\",\n                   lastModified: \"date\"                  \n               }        \n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\":true,\n        \"message\": \"Failed To Find Blog Details\",\n        \"status\": 500,\n        \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewByCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/:blogId/count/view",
    "title": "Increase Blogs Count",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Updated Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tblogId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tbodyHtml: \"string\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tisPublished: boolean,\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\tauthor: \"string\",\n\t\t\t\t\t\ttags: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "update",
    "name": "GetApiV1BlogsBlogidCountView"
  }
] });
