const messages = { results: [] };

const getMessageModels = function() {
  return messages;
};
const postMessageModels = function(message) {
  messages.results.push(message);
  return message;
};

module.exports = {
  getMessageModels,
  postMessageModels
};
