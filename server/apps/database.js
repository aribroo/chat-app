import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const db_uri = process.env.ATLAS_URI;

mongoose
  .connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.info('Connected...'))
  .catch((e) => console.error(`Failed to connect => ${e.message}`));

const db = mongoose.connection;
export default db;
