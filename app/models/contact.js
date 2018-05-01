let mongoose = require('mongoose');

const Schema = mongoose.Schema

let contactSchema = Schema({
    _user : {type: Schema.Types.ObjectId, ref: 'User'},
    fname : {type: String, minlength: [3, 'First name must be at least three characters.']},
    lname : {type: String, minlength: [3, 'Last name must be at least three characters.']},
    phone : {type: String},
    email : {type: String},
    note : {type: String},
    status : {type: String, default: ''},
    schedule : {date:{type: Date, default: ""},
                time:{type: Date, default: ""},
                topic:{type: String, default: ""}},
    call : [{type: Schema.Types.ObjectId, ref: 'Call'}],
}, {timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);