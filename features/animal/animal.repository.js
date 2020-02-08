const { Animal } = require('./animal.model');

class Repository {

    find(query, paging) {
        return Animal
        .find(query)
        .limit(paging.limit)
        .skip(paging.skip)
        .sort(paging.sort)
        .lean()

    }

    findOne(id) {
        return Animal.findOne({_id: id});
    }

    create(animal) {
        return Animal.create(animal);
    }

    update(id, properties){
        return Animal.updateOne({ _id: id }, properties)
    }

    async countDocuments(query) {
        return Animal.countDocuments(query);
    }
}

module.exports = new Repository();
