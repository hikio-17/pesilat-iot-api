require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(() => {
   console.log(`Server is running on http://localhost:${PORT}`)
})