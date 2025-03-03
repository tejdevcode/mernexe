const express = require('express');

const router = express.Router();

//get all workouts
router.get('/', (req, res) => {
   res.json({ messg: 'Get all workouts!' });
});

//get single workout
router.get('/:id', (req, res) => {
   res.json({ messg: 'Get single workout!' });
});

//post request
router.post('/:id', (req, res) => {
   res.json({ 'messg': 'Create workout!' });
});

//update request
router.patch('/:id', (req, res) => {
   const { id } = req.params;
   res.json({ 'messg': `Update workout ${id}` });
});

//delete request
router.delete('/:id', (req, res) => {
   res.json({ 'messg': `Delete workout ${req.params.id}` });
});


module.exports = router;