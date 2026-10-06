import express from 'express'
import { connectDatabase } from './config/database.js'
import Activity from './models/Activity.js'
import Leaderboard from './models/Leaderboard.js'
import Team from './models/Team.js'
import User from './models/User.js'
import Workout from './models/Workout.js'

const app = express()
const port = Number(process.env.PORT || 8000)
const codespaceName = process.env.CODESPACE_NAME
export const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

app.use(express.json())
app.get('/api/health/', (_request, response) => {
  response.json({ status: 'ok' })
})
app.get('/api/users/', async (_request, response, next) => {
  try {
    response.json(await User.find().lean())
  } catch (error) {
    next(error)
  }
})
app.get('/api/teams/', async (_request, response, next) => {
  try {
    response.json(await Team.find().lean())
  } catch (error) {
    next(error)
  }
})
app.get('/api/activities/', async (_request, response, next) => {
  try {
    response.json(await Activity.find().lean())
  } catch (error) {
    next(error)
  }
})
app.get('/api/leaderboard/', async (_request, response, next) => {
  try {
    response.json(await Leaderboard.find().sort({ rank: 1 }).lean())
  } catch (error) {
    next(error)
  }
})
app.get('/api/workouts/', async (_request, response, next) => {
  try {
    response.json(await Workout.find().lean())
  } catch (error) {
    next(error)
  }
})

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error)
  response.status(500).json({ error: 'Internal server error' })
})

await connectDatabase()

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit API listening at ${baseUrl}`)
})