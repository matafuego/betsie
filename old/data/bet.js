var mongoose = require("mongoose");
var betSchema = mongoose.Schema({
    name: String,
    tagline: String
});

module.exports = mongoose.model("bet", betSchema);