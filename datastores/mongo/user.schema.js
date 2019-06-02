const bcrypt = require('bcrypt')
const db = require('../db').mongo

const SALT_WORK_FACTOR = 10

const userSchema = db.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: { unique: true },
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const hashPassword = function (next) {
    const self = this;
    if (self.password) {
        // generate salt
        bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
            if (err) return next(err);
            // hash password using new salt
            bcrypt.hash(self.password, salt, (Err, hash) => {
                if (Err) return next(err);

                self.password = hash;
                next();
                return true
            })
            return true
        })
    } else {
        next()
    }
}

const checkUser = function (err, doc, next) {
    if (err.name === 'MongoError' && err.code === 11000) {
        next(new Error(406));
    } else {
        next();
    }
}

userSchema
    .pre('save', hashPassword)
    .post('save', checkUser)

userSchema.methods = {
    comparePassword(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
            if (err) return cb(err);
            cb(null, isMatch);
            return true
        })
    },
}

const User = db.model('user', userSchema);

module.exports = User;
