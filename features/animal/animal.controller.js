const { onError, onSuccess, onCreated, onUpdated, onBadRequest } = require('../../shared/handlers');
const animalService = require('./animal.service');

class Controller {
    async list(ctx) {
        try {
            const response = await animalService.find(ctx.query);

            return onSuccess(response.meta, response.data, ctx);
        } catch (err) {
            return onError('Erro ao listar os animais', err.toString(), ctx);
        }
    }

    async getById(ctx) {
        try {
            const response = await animalService.getById(ctx.params.id);

            return onSuccess({}, response, ctx);
        } catch (err) {
            return onError('Erro ao consultar o animal.', err.toString(), ctx);
        }
    }

    async create(ctx) {
        try {
            if (!ctx.request.body.tipo) return onBadRequest('Tipo não pode ser nulo ou vazio', ctx);
            if (!ctx.request.body.nome) return onBadRequest('Nome não pode ser nulo ou vazio', ctx);
            if (!ctx.request.body.peso) return onBadRequest('Peso não pode ser nulo ou vazio', ctx);
            if (!ctx.request.body.idade) return onBadRequest('Idade (meses) não pode ser nulo ou vazio', ctx);

            const response = await animalService.create(ctx.request.body);

            return onCreated(ctx, response);
        } catch (err) {
            throw onError('Erro ao tentar inserir um animal.', err.toString(), ctx);
        }
    }

    async update(ctx) {
        try {
            if (!ctx.params.id) return onBadRequest('ID inválido', ctx);
            if (!ctx.request.body) return onBadRequest('Corpo para atualização inválido', ctx);

            const response = await animalService.updateOne(ctx.params.id, ctx.request.body);
            return onUpdated(ctx, response);
        } catch (err) {
            throw onError('Erro ao atualizar o animal.', err.toString(), ctx);
        }
    }    
}

module.exports = new Controller();