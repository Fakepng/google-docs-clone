const { model, Schema } = require("mongoose");

module.exports = model("Document", new Schema({
    _id: String,
    data: Object,
}));