const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
    const posts = await Post.find({})

    res.status(200).send(posts)
}

exports.createPost = async (req, res) => {
    // Saaksite info kätta req.body -st
    const { title, content, author} = req.body  

    const newPost = new Post({
        title,
        content,
        author
    })




    const savedPost = await newPost.save()
    if (!savedPost) throw Error("Error saving Post")

    res.status(200).send(`yay ${savedPost._id}`)
}
exports.updatePost = async (req, res) => {

    const { id } = req.params;

    const post = await Post.findOneAndUpdate({ _id: id }, req.body)

    if (!post) res.status(404).send("No item with that id found")

    const updatedPost = await Post.findOne({ _id: id })

    res.status(200).send(`Successfully updated the following post: \n ${updatedPost}`)


}

exports.deletePost = async (req, res) => {
    const { id } = req.params;

    const post = await Post.findOneAndDelete({ _id: id })

    if (!post) res.status(404).send("No post with that id found")

    res.status(200).send(`Successfully deleted the following post: \n ${post}`)
}