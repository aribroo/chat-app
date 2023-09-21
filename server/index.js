import app from './apps/app.js';

import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const port = process.env.APP_PORT || 5000;

app.listen(port, () => {
  console.log(`App running at port ${port}...`);
});
