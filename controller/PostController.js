
const Post = require("../model/PostModel")

exports.getAllPost = async (req, res, next) => {
    try {
        const post = await Post.find()
        res.status(200).json({
            status: "OK",
            result: post,
        })
    } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e.message,
        })

    }
}
exports.createPost = async (req, res, next) => {
    console.log(req);

    try {
        const post = await Post.create(
            {
                title: req.body.title,
                body: req.body.body,
            }
        )
        res.status(200).json({
            status: "OK",
            result: post,
        })
    } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e.message,
        })

    }
}