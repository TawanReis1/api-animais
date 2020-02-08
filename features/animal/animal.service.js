const animalRepository = require('./animal.repository');
const filterHelper = require('../../shared/helpers/filter');
const pagingHelper = require('../../shared/helpers/paging');

class Service {
    async find(conditions) {
        const query = filterHelper.build(conditions);
        const paging = pagingHelper.build(conditions);

        const total = await animalRepository.countDocuments(query);
        const data = await animalRepository.find(query, paging);

        return {
            meta: pagingHelper.resolve(paging, total),
            data
        };
    }

    async getById(id) {
        try {
            let animal = await animalRepository.findOne(id);
            return animal;

        } catch (err) {
            if (err.path === "_id") {
                throw(`ID:${err.value} inválido`)
            }
            throw err;
        }
    }

    create(animal) {
        return animalRepository.create(animal);
    }

    async updateOne(id, properties) {
        await animalRepository.update(id, properties);
        return animalRepository.findOne(id);
    }
}

module.exports = new Service();
