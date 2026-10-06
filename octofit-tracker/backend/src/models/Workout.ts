import { Schema, model } from 'mongoose'

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    focus: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    exercises: [{ type: String, required: true }],
  },
  { timestamps: true },
)

export default model('Workout', workoutSchema)