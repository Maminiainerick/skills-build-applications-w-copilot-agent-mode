import mongoose from 'mongoose';

export const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

export async function connectDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  await mongoose.connect(connectionString);
  console.log('Connected to octofit_db');
  return mongoose.connection;
}

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

export default mongoose.connection;
