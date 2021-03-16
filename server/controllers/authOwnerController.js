const bcrypt = require('bcrypt');

module.exports = {
    register: async(req, res) => {
        const {email, password} = req.body,
              db = req.app.get('db');

        const [foundUser] = await db.ownerUsers.check_user([email])
        if(foundUser){
            return status(400).send('Account already registered with this email.')
        }

        let salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const [newUser] = await db.ownerUsers.add_new_user([email, hash])

        req.session.user = newUser;
        res.status(201).send(req.session.user);
    },
    login: async(req,res) => {
        const {email, password} = req.body,
              db = req.app.get('db');

        const [foundUser] = await db.ownerUsers.check_user([email]);
        if(!foundUser) {
            return res.status(406).send('Email not registered with an account')
        }

        const authenticated = bcrypt.compareSync(password, foundUser.password);
        if(!authenticated) {
            return res.status(406).send('Incorrect email or password.')
        }

        delete foundUser.password;
        req.session.user = foundUser;
        res.status(202).send(req.session.user);
    },
    logout: (req, res) => {
        req.session.detroy();
        res.sendStatus(200);
    }
}