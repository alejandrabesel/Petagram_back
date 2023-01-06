/* Controllers */
const userController = require('../controllers/userController');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/api/usuario/create/username/:username/status/:status', userController.create);
   app.get('/api/usuario/list', userController.list);
   app.get('/api/usuario/find/username/:username', userController.find);
};