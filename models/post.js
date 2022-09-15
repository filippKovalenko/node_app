import mongoose from 'mongoose'
const Shems = mongoose.Schema

const postShema = new Shems({
    text:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    }
},{timestamps:true})

const Post = mongoose.model('Post',postShema)

export default Post