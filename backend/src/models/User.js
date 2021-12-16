const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    documentType: { type: String, required: true },
    identificationNumber: { type: Number, unique: true, required: true },
    expeditionDate: { type: Date, required: true },
    expeditionPlace: { type: String, require: true },
    firstName: { type: String, required: true},
    secondName: { type: String, required: true },
    lastName: { type: String, required: true },
    secondSurname: { type: String, required: true},
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    residenceAddress: { type: String, required: true },
    municipality: { type: String, required: true },
    sex: { type: String, required: true },
    privacyPolicy: { type: Boolean, required: true },
    balance: { type: Number, default: 0 },
    userType: { type: String, default: 'user' }
});

module.exports = model('user',UserSchema);