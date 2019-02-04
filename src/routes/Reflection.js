import express from 'express';

import Reflection from '../controllers/Reflection';
import validateSpec from '../helpers/routerHelpers';

const { validateBody, schemas } = validateSpec;

const router = express.Router();


router.post('/', validateBody(schemas.authSchema), Reflection.create);
router.get('/', Reflection.getAll);
router.get('/:id', Reflection.getOne);
router.put('/:id', validateBody(schemas.authSchema), Reflection.update);
router.delete('/:id', Reflection.delete);

export default router;
