import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      { name: 'Mona Octocat', email: 'mona@example.com', role: 'Team Captain', team: 'Octo Striders' },
      { name: 'Alex Rivera', email: 'alex@example.com', role: 'Runner', team: 'Octo Striders' },
      { name: 'Priya Shah', email: 'priya@example.com', role: 'Cyclist', team: 'Core Crushers' },
    ]);

    await Team.insertMany([
      { name: 'Octo Striders', mascot: 'Stridey', members: 8, weeklyGoalMinutes: 900 },
      { name: 'Core Crushers', mascot: 'Crunch', members: 6, weeklyGoalMinutes: 720 },
      { name: 'Flex Force', mascot: 'Bendy', members: 5, weeklyGoalMinutes: 600 },
    ]);

    await Activity.insertMany([
      { user: 'Mona Octocat', type: 'Trail Run', durationMinutes: 42, caloriesBurned: 410, activityDate: new Date('2026-10-01') },
      { user: 'Alex Rivera', type: 'Strength Training', durationMinutes: 50, caloriesBurned: 360, activityDate: new Date('2026-10-02') },
      { user: 'Priya Shah', type: 'Cycling', durationMinutes: 65, caloriesBurned: 520, activityDate: new Date('2026-10-03') },
    ]);

    await Leaderboard.insertMany([
      { user: 'Priya Shah', team: 'Core Crushers', points: 1280, rank: 1 },
      { user: 'Mona Octocat', team: 'Octo Striders', points: 1190, rank: 2 },
      { user: 'Alex Rivera', team: 'Octo Striders', points: 1045, rank: 3 },
    ]);

    await Workout.insertMany([
      { title: 'Morning Mobility', focus: 'Flexibility', difficulty: 'Beginner', durationMinutes: 20, exercises: ['Hip circles', 'Worlds greatest stretch', 'Cat cow'] },
      { title: 'Octo Endurance Builder', focus: 'Cardio', difficulty: 'Intermediate', durationMinutes: 35, exercises: ['Tempo run', 'Bodyweight squats', 'Plank holds'] },
      { title: 'Power Core Circuit', focus: 'Strength', difficulty: 'Advanced', durationMinutes: 45, exercises: ['Kettlebell swings', 'Push-ups', 'Mountain climbers'] },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
