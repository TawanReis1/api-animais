const onError = require('./error');
const onSuccess = require('./success');
const onCreated = require('./created');
const onUpdated = require('./updated');
const onBadRequest = require('./bad-request');

module.exports = { onError, onSuccess, onCreated, onBadRequest, onUpdated };
