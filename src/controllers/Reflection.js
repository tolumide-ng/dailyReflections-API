import ReflectionModel from './../models/Reflection';

const Reflection = {
    create(req, res) {
        if (!req.body.success || !req.body.lowPoint || !req.body.takeAway) {
            return res.status(400).json({ 'message': 'All fields are required' });
        }
        const reflection = ReflectionModel.create(req.body);
        return res.status(201).json([reflection]);
    },

    getAll(req, res) {
        const reflections = ReflectionModel.findAll();
        return res.status(200).json({ data: [reflections] });
    },

    getOne(req, res) {
        const reflection = ReflectionModel.findOne(req.params.id);
        if (!reflection) {
            return res.status(404).json({ 'message': 'reflection not found' });
        }
        return res.status(200).json([reflection]);
    },

    update(req, res) {
        const reflection = ReflectionModel.findOne(req.params.id);
        if (!reflection) {
            return res.status(404).json({ 'message': 'reflection not found' });
        }
        const updatedReflection = ReflectionMode.update(req.params.id, req.body);
        return res.status(200).json([updatedReflection]);
    },

    delete(req, res) {
        const reflection = ReflectionModel.findOne(req.params.id);
        if(!reflection) {
            return res.status(404).json({'message': 'Reflection not found'});
        }
        const ref = ReflectionModel.delete(req.params.id);
        return ref.status(204).json([ref]);
    }
}

export default Reflection;