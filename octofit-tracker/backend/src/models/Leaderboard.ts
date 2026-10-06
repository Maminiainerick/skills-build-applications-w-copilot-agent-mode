import { Schema, model } from 'mongoose'

const leaderboardSchema = new Schema(
  {
    user: { type: String, required: true },
    team: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
  },
  { timestamps: true },
)

export default model('Leaderboard', leaderboardSchema)