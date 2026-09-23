const express = require('express');
const controller = require('../controllers/equipos.controller');
const { authenticate, authorize } = require('../middlewares/auth.middleware');
const { uploadEquipoImagen } = require('../middlewares/upload.middleware');

const router = express.Router();

router.use(authenticate);

router.get('/', controller.list);
router.get('/:id', controller.getById);

// Solo el admin puede crear y editar equipos.
router.post('/', authorize('admin'), uploadEquipoImagen, controller.create);
router.put('/:id', authorize('admin'), uploadEquipoImagen, controller.update);

// Solo admin puede eliminar.
router.delete('/:id', authorize('admin'), controller.remove);

module.exports = router;