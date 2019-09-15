const bcrypt = require('bcrypt');

let saltRaunds = 10

class LoginService {

    async hashPassword(argPassword) {
        
        let result = bcrypt.hash(argPassword, saltRaunds)

        // .then((hash) => hash)
        // .catch((err) => err)
        console.log(result)
        return result
    }

    comparePassword(comparingPassword, hash) {
        bcrypt.compare(comparingPassword, hash, (err, res) => {
            return res ? true : false
        })
    }
}

module.exports = LoginService