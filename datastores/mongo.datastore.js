const user = require('./mongo').userSchema

const signupUser = (data) => {
    let newUSer = new user(data);
    return newUSer;
}

module.exports = {
    signupUser
}
