const mongo = require('mongoose')
const schema = mongo.Schema

const Blog = new schema ({
    nom : String,
    sujet:String,
    contenu : String,
});

module.exports = mongo.model("blog"  , Blog)