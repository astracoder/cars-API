import CarRepository from "../repositories/CarRepository.js";

class CarController {
    async index(req, res) {
        try {
            const data = await CarRepository.findAll();
            res.json(data);
        } catch(err) {
            res.json(err);
        }
    }

    async showID(req, res) {
        try {
            const id = req.params.id;
            const data = await CarRepository.findById(id);
            res.json(data);
        } catch(err) {
            res.json(err);
        }
    }

    async showBrand(req, res) {
        try {
            const brand = req.params.brand;
            const data = await CarRepository.findByBrand(brand);
            res.json(data);
        } catch(err) {
            res.json(err);
        }
    }

    async store(req, res) {
        try {
            const brand = req.body.brand;
            const model = req.body.model;
            const data = await CarRepository.create(brand, model);
            res.json(data);
        } catch(err) {
            res.json(err);
        }
    }

    async update(req, res) {
        try {
            let id = req.params.id;
            let newBrand = req.body.brand;
            let newModel = req.body.model;
            const data = await CarRepository.update(id, newBrand, newModel);
            res.json(data);
        } catch(err) {
            res.json(err);
        }
    }

    async delete(req, res) { 
        try  {
            let id = req.params.id;
            const data = await CarRepository.delete(id);
            res.json(data);
        } catch(err) {
            res.json(err);
        }
    }
}

export default new CarController();