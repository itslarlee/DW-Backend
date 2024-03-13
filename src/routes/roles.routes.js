import express from 'express';
import {
    addRole,
    getRoles,
    updateRole,
    deleteRole,
} from '../controllers/roles.controller.js';

const router = express.Router();

router.post('/', addRole);
router.get('/', getRoles);
router.put('/:code', updateRole);
router.delete('/:code', deleteRole);

export default router;
