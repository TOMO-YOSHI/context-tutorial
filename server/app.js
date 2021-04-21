const express = require('express');
const cors = require('cors');
const app = express();
const promise_mysql = require('promise-mysql');

const { db } = require('./connection');

app.use(cors());
app.use(express.json());

app.listen(8888, () => {
    console.log("Listening port:8888")
});

app.get('/', (req, res)=>{
    res.send({message: 'success!!!'})
})

app.get('/api/movies', (req, res)=>{

    try {
        db.then(async(pool) => {

            const movies = await pool.query(`
            select * from movies
        `)
                .then(result => {
                    return result;
                })
                .catch(error => {
                    throw error
                })
            
            res.send(movies);
        });

    } catch(error) {
        console.log(error)
    }
});

app.post('/api/movies', (req, res) => {

    try {
        let { name, price } = req.body;

        if(!name) {
            throw 'error'
        }
        if(!price) {
            price = null;
        }

        db.then(async(pool)=>{

            pool.query(`
                insert into
                    movies(name, price)
                values
                    (${promise_mysql.escape(name)}, ${promise_mysql.escape(price)});
            `)
            .then(result => {
                res.send({
                    id: result.insertId
                })
            })
            .catch(error=>{
                throw error
            })

        }).catch(error=>{
            throw error
        })

    } catch(error) {
        console.log(error);
    }

})

app.delete('/api/movies', (req, res)=>{

    const {id} = req.body;

    try {
        db.then(async(pool) => {

            pool.query(`
                delete from movies where id = ${promise_mysql.escape(id)}
            `)
            .then(result => {
                res.send({message: `id: ${id} is deleted.`})
            })
            .catch(error => {
                throw error
            })

        })
        .catch(error => {
            throw error
        })
    } catch(error) {
        console.log(error)
    }

})