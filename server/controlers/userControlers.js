const blogs = require('../user')


exports.addComment = (req,res) => {

    const comment = req.body.comment;
    const blogId = req.params.id;
    const findBlog = blogs.find((item)=> item.id == blogId)
    if(!findBlog){
      res.json("something is wrong")
    }
    findBlog.Comments.push(comment)
        res.status(200).json('Comment added')
}

exports.removeComment = (req,res) => {

  const comment = req.body.comment;
  const blogId = req.params.id;
  const findBlog = blogs.find((item)=> item.id == blogId)
  if(!findBlog){
    res.json("something is wrong")
  }
  findBlog.Comments.splice(comment,1)
      res.status(200).json('Comment deleted')
}
exports.updateComment = (req,res) => {

  const comment = req.body.Comments;
  const commentId = req.body.commentId;
  const blogId = req.params.id;
  const findBlog = blogs.find((item)=> item.id == blogId)
  if(!findBlog){
    res.json("something is wrong")
  }
  const findComment = findBlog.Comments.findIndex((comment,index)=> index === commentId)
  if(findComment == -1){
    res.json("comment is not found")
  }
  findBlog.Comments[findComment]= comment
      res.status(200).json('Comment updated')
}


exports.AddBlog = (req, res) => {

  const { blogContent,blogTitle} = req.body;
  const id = blogs[blogs.length=== 0] ? 1 : blogs[blogs.length-1].id+1;

  const newBlog = 
  { 
    id:id,
    BlogContent:blogContent,
    BlogTitle:blogTitle,
    BlogComment:[],
  }
  blogs.push(newBlog)
  res.json('added new user ')
}

exports.delete = (req,res)=> {
      
      const deletev= blogs.findIndex((item)=> item.id == req.params.id)
      if(deletev === -1){
        res.status(404).json({messege: 'blog not found'})
      }
      const result = blogs.splice(deletev,1)
      res.status(200).json({messege:  'deleted'})

    }
exports.getAll = (req,res) => {
        res.status(200).json({messege: blogs})
    }

exports.get = (req,res)=> {

          const result = blogs.find((item)=> item.id == req.params.id)
          if(!result){
            res.json("user not found")
          }
          res.status(200).json({messege: result})
        
        };
    // exports.update = (req,res)=> {
    //       const updated = blog.find((item)=> item.id == req.params.id)
    //       if(!updated ){
    //         res.status(404).json({messege: 'blog not found'})
    //       }
    //       updated.email = req.body.email
    //       res.status(200).json({messege: 'updated succesfuly'})
    //     };
// const register = (req,res) => {}


