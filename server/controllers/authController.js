const bcrypt = require('bcrypt');

module.exports = {
    register: async(req, res) => {
        const {email, password} = req.body,
              db = req.app.get('db');
    }
}