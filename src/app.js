import express from 'express';
import CarController from './app/controllers/CarController.js';
const app = express();
app.use(express.json()); //Indicar para o express ler o body com JSON;

app.get('/cars', CarController.index);
app.get('/cars/:id', CarController.showID);
app.get('/cars/brands/:brand', CarController.showBrand);
app.post('/cars', CarController.store);
app.put('/cars/:id', CarController.update);
app.delete('/cars/:id', CarController.delete);

export default app;
    
