let mongoose = require('mongoose');
let bcrypt   = require('bcrypt-nodejs');
const Schema = mongoose.Schema
let userSchema = Schema({
    fname : {type: String, minlength: [3, 'First name must be at least three characters.']},
    lname : {type: String, minlength: [3, 'Last name must be at least three characters.']},
    email : {type: String, unique:true},
    pwd : {type: String},
    contact : [{type: Schema.Types.ObjectId, ref: 'Contact'}],
    call : [{type: Schema.Types.ObjectId, ref: 'Call'}],
    balance_days : {type:Number, default: 0},
    balance_mins : {type:Number, default: 0}
}, {timestamps: true });

userSchema.methods.generateHash = function(pwd) {
    return bcrypt.hashSync(pwd, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(pwd) {
    return bcrypt.compareSync(pwd, this.pwd);
};

module.exports = mongoose.model('User', userSchema);
