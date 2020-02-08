const AnimalsContext = require('../../shared/animals-context');
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const schema = new mongoose.Schema({
    tipo: { type: String, required: true, maxlength: 50 },    
    nome: { type: String, required: true, maxlength: 200 },
    peso: {type: Number, required: true },
    idade: { type: Number, required: true}
},
    {
        versionKey: false,
        timestamps: true
    });

schema.plugin(mongooseDelete, { overrideMethods: true });

module.exports.AnimalSchema = schema;
module.exports.Animal = AnimalsContext.conn.model('Animal', schema);
