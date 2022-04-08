try{
    require('dotenv').config();
}catch(e){
    console.log(e);
}
const { mongoose, Schema } = require('mongoose');

const mySecret = process.env['MONGO_URI'];
mongoose.connect(mySecret, { useNewUrlParser: true});

//make schema
const PostSchema = new Schema({
    author: String,
    date: { created: Date, posted: Date, edited: Date},
    content: String,
})

const blogPost = mongoose.model('Post', PostSchema);
//create and save post

const createAndSavePost = (post, done) => {
    const document = new blogPost(post);
    document.save((err, data) => {
        if(err) return done(err)
        done(null, data);
    })
}

exports.PostModel = blogPost;
exports.createAndSavePost = createAndSavePost;