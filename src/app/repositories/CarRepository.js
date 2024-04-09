import client from '../database/connection.js';

class CarRepository {
    create(brand, model) {
        const sql = `INSERT INTO listcars (brand, model) VALUES ('${brand}', '${model}');`;
        return new Promise((resolve, reject) => {
            client.query(sql, (err, result) => {
                if(err) return reject(`Não foi possível cadastrar o carro!`);
                return resolve("Carro cadastrado com sucesso!");
            });
        })
    }

    findAll() {
        const sql = 'SELECT * FROM listcars';
        return new Promise((resolve, reject) => {
            client.query(sql, (err, result) => {
                if(err) return reject(res.send(`Nao foi possivel localizar os carros!`));
                const data = JSON.parse(JSON.stringify(result));
                return resolve(data.rows);
            })  
        })
    }

    findById(id) {    
        const sql = `SELECT * FROM listcars WHERE id = ${id}`;
        return new Promise((resolve, reject) => {
            client.query(sql, (err, result) => {
                if(err || result.rows.length === 0) return reject(`Nao possivel localizar o carro!`)
                const data = JSON.parse(JSON.stringify(result));
                return resolve(data.rows);
            })
        })
    }

    findByBrand(brand) {
        const sql = `SELECT * FROM listcars WHERE brand = '${brand}'`;
        return new Promise((resolve, reject) => {
            client.query(sql, (err, result) => {
                if(err || result.rows.length === 0) return reject(`Nao possivel localizar a marca ${brand}!`)
                const data = JSON.parse(JSON.stringify(result));
                return resolve(data.rows);
            })
        })
    }
    
    update(id, newBrand, newModel) {
        const sql = `UPDATE listcars SET brand = '${newBrand}', model = '${newModel}' WHERE id = ${id}`;
        return new Promise((resolve, reject) => {
            client.query(sql, (err, result) => {
                if(err) return reject(`Não foi possível editar as informações do carro!`);
                const data = JSON.parse(JSON.stringify(result));
                return resolve(`Carro editado com sucesso!`);
            })
        })
    }

    delete(id) {
        const sql = `DELETE FROM listcars WHERE id = ${id}`;
        return new Promise((resolve, reject) => {
            client.query(sql, (err, result) => {
                if(err) return reject(`Não foi possível deletar esse carro!`);
                const data = JSON.parse(JSON.stringify(result));
                return resolve(`Carro deletado com sucesso!`);
            })
        })
    }
}

export default new CarRepository();