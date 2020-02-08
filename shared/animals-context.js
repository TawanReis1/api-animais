const Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;

const mongoConfig = {
    useNewUrlParser: true,
    autoReconnect: true
}

class AnimalsContext {

    static get conn() {
        if (!AnimalsContext.connection) {
            AnimalsContext.connect()         
        }
        return AnimalsContext.connection;
    }

    static connect() {
        const cs = process.env.MONGO_ANIMALS;
        AnimalsContext.connection = Mongoose.createConnection(cs, mongoConfig);
    }
}

module.exports = AnimalsContext;
