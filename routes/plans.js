const express = require('express');
const router = express.Router();

const PLAN_TEMPLATES = [
  {
    id: 'ppl',
    name: 'Push / Pull / Legs',
    tag: '6-day split',
    goal: 'Hypertrophy',
    days: [
      { day: 'Push', exercises: ['Bench Press 4x8', 'Overhead Press 3x10', 'Incline DB Press 3x10', 'Tricep Pushdown 3x12'] },
      { day: 'Pull', exercises: ['Deadlift 3x5', 'Pull-ups 4x8', 'Barbell Row 3x10', 'Bicep Curl 3x12'] },
      { day: 'Legs', exercises: ['Squat 4x6', 'Romanian Deadlift 3x10', 'Leg Press 3x12', 'Calf Raise 4x15'] }
    ]
  },
  {
    id: 'fullbody',
    name: 'Full Body Strength',
    tag: '3-day split',
    goal: 'Strength',
    days: [
      { day: 'Day A', exercises: ['Squat 5x5', 'Bench Press 5x5', 'Barbell Row 5x5'] },
      { day: 'Day B', exercises: ['Deadlift 1x5', 'Overhead Press 5x5', 'Pull-ups 4x8'] }
    ]
  },
  {
    id: 'bbsplit',
    name: 'Bro Split',
    tag: '5-day split',
    goal: 'Muscle isolation',
    days: [
      { day: 'Chest', exercises: ['Bench Press 4x10', 'Incline Fly 3x12', 'Cable Crossover 3x15'] },
      { day: 'Back', exercises: ['Lat Pulldown 4x10', 'Seated Row 3x12', 'Hyperextension 3x15'] },
      { day: 'Shoulders', exercises: ['Overhead Press 4x10', 'Lateral Raise 4x15', 'Rear Delt Fly 3x15'] },
      { day: 'Arms', exercises: ['Barbell Curl 4x10', 'Skull Crusher 4x10', 'Hammer Curl 3x12'] },
      { day: 'Legs', exercises: ['Squat 4x10', 'Lunges 3x12', 'Leg Curl 3x12'] }
    ]
  },
  {
    id: 'beginner',
    name: 'Beginner Foundations',
    tag: '3-day split',
    goal: 'Form & habit building',
    days: [
      { day: 'Day A', exercises: ['Goblet Squat 3x10', 'Push-ups 3x10', 'Plank 3x30s'] },
      { day: 'Day B', exercises: ['DB Row 3x10', 'Glute Bridge 3x12', 'Standing Curl 3x12'] }
    ]
  }
];

router.get('/', (req, res) => {
  res.json({ plans: PLAN_TEMPLATES });
});

module.exports = router;
