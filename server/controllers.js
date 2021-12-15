const models = require('./models');

const getMessageController = function(req, res) {
  const messages = models.getMessageModels();
  res.status(200).send(messages);
};

const postMessageController = function(req, res) {
  const { body } = req;
  models.postMessageModels(body);
  res.status(201).send('success');
};

module.exports = {
  getMessageController,
  postMessageController
};
