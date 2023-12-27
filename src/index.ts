/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/user.router';
import authRoutes from './routes/auth.router';
import errorHandler from './middleware/errorHandler';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);

// Handle error
app.use(errorHandler);

app.listen(PORT, async () => {
   console.log(`Server running at http://localhost:${PORT}`)
})