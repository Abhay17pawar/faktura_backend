const languageController = require('../controllers/language.controller');

async function languageRoutes(fastify, options) {
  fastify.get('/language/:id', languageController.getSelectedLanguage);
  fastify.post('/language', languageController.postLanguageDetails);
}

module.exports = languageRoutes;
 