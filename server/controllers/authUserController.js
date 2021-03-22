const bcrypt = require('bcrypt');

module.exports = {
    register: async(req, res) => {
        const {email, password} = req.body,
              db = req.app.get('db');

        const [foundUser] = await db.rentalUsers.check_user([email]);
        if(foundUser){
            return res.status(400).send('Email is already registered, please login')
        }

        let salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const [newUser] = await db.rentalUsers.add_new_user([email, hash]);

        reg.session.user = newUser;
        res.status(201).send(req.session.user);
    },
    login: async(req, res) => {
        const {email, password} = req.body,
              db = req.app.get('db');

        const [foundUser] = await db.rentalUsers.check_user([email]);
        if(!foundUser) {
            return res.status(406).send('Incorrect email or password');
        }

        const authenticated = bcrypt.compareSync(password, foundUser.password);
        if(!authenticated){
            return res.status(406).send('Incorrect email or password')
        }

        delete foundUser.password;
        req.session.user = foundUser;
        res.status(202).send(req.session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}