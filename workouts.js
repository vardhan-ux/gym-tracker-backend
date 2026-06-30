const express = require('express');
const Workout = require('../models/Workout');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/workouts  -> list current user's workouts, newest first
router.get('/', auth, async (req, res) => {
  const workouts = await Workout.find({ user: req.userId }).sort({ date: -1 });
  res.json({ workouts });
});

// POST /api/workouts  -> add a new workout entry
router.post('/', auth, async (req, res) => {
  try {
    const { exercise, sets, reps, weight, date } = req.body;
    if (!exercise || !sets || !reps || weight === undefined) {
      return res.status(400).json({ message: 'exercise, sets, reps and weight are required' });
    }
    const workout = await Workout.create({
      user: req.userId, exercise, sets, reps, weight,
      date: date ? new Date(date) : new Date()
    });
    res.status(201).json({ workout });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// DELETE /api/workouts/:id
router.delete('/:id', auth, async (req, res) => {
  const workout = await Workout.findOneAndDelete({ _id: req.params.id, user: req.userId });
  if (!workout) return res.status(404).json({ message: 'Workout not found' });
  res.json({ message: 'Deleted' });
});

module.exports = router;
