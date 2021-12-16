const Admin = require('../models/Admin');
const User = require('../models/User');
const hash = require('../helpers/hash');

const ctrl = {};

ctrl.adminSignIn = async (req,res) => {
    const { adminName, keyPassword, password } = req.body;
    const userAdmin = await Admin.findOne({ adminName });
    if (!userAdmin || userAdmin !== null || userAdmin !== undefined) {
        if (userAdmin.keyPassword === keyPassword){
            const match = await hash.matchPassword(password,userAdmin.password);
            if (match) {
                req.app.locals.user = userAdmin;
                return res.json(userAdmin);
            };
        } else {
            return res.send('Llego HASTA LA PAlABRA CLAVE');
        };
    } else {
        return res.send('NO SE ENCONTRO EL USUARIO');
    };
};

ctrl.userControl = async (req,res) => {
    const users = await User.find();
    res.json(users);
};

ctrl.updateRank = async (req,res) => {
    await User.findByIdAndUpdate(req.params.id,req.body);
    res.send('Usuario Actualizado');
};

module.exports = ctrl;