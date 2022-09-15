import mongoose from 'mongoose'
const Shems = mongoose.Schema

const contactShema = new Shems({
    name:{
        type:String,
        require:true
    },
    link:{
        type:String,
        require:true
    }
})

const Contact = mongoose.model('Contact',contactShema)

export default Contact