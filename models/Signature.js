const mongoose = require('mongoose');

const SignatureSchema = new mongoose.Schema({
    signature: {
        data: Buffer, 
        contentType: String,
    },
    signatureDate: {
        type: Date,
        required: true
    },
    signatureName: {
        type: String,
        required: true
    }
});


module.exports = SignatureSchema;