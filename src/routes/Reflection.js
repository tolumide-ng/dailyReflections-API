import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill'; // this would recongnise async/await in our code
import ReflectionWithJsObject from '../usingJSObject/controllers/Reflection';
import ReflectionWIthDB from '../usingDB/controller/Reflection';
import validateSpec from '../helpers/routerHelpers';
console.log('done 1');
dotenv.config();
const Reflection = process.env.TYPE === 'db' ? ReflectionWIthDB : ReflectionWithJsObject;

const { validateBody, schemas } = validateSpec;


console.log('done 2');
const router = express.Router();

console.log('done 3');
router.post('/', validateBody(schemas.authSchema), Reflection.create);
console.log('done 4');
router.get('/', Reflection.getAll);
console.log('done 5');
router.get('/:id', Reflection.getOne);
console.log('done 6');
router.put('/:id', validateBody(schemas.authSchema), Reflection.update);
console.log('done 7');
router.delete('/:id', Reflection.delete);

console.log('done 8');

export default router;
