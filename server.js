import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running! http://localhost:${PORT}`);
});