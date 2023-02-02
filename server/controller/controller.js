const Userdb = require('../model/model');
const bcrypt = require('bcrypt');

// create and save new user

exports.create = async(req, res) => {

    let user = await Userdb.findOne({ email: req.body.email});
   if (user) return res.status(400).send('User already registered');

    //creating user and saving in db

    user = new Userdb({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    
    const repPassword = req.body.repPassword;

    if (repPassword == user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);


        await user.save()

        return res.send({message: 'User successfully saved!'});

    } else {
        return res.send({message: 'Password do not match!'});
    }

    
}
