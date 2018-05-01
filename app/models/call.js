let mongoose = require('mongoose');
const Schema = mongoose.Schema
let callSchema = Schema({
    _user : {type: Schema.Types.ObjectId, ref: 'User'},
    _contact : {type: Schema.Types.ObjectId, ref: 'Contact'},
    date : {type: Date},
    time : {type: Date},
    duration : {type: Number},
    note : {type: String},
    status : {type: String}
}, {timestamps: true });

module.exports = mongoose.model('Call', callSchema);