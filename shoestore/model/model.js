const pool = require("../config/connection")

class model {

    static getAll (cb){

        const query = `select * from "Shoes"`

        pool.query(query, (err,res) => {
            if (err){
                console.log(err)
                cb(err)
            }else {
                cb(null, res.rows)
            }
        })
    }

    static getOne (id, cb){

        var query = `select * from "Shoes" where id = ${id}`

        pool.query(query, (err,res) => {
            if (err){
                cb(err)
            }else {
                cb(null, res.rows)
            }
        })
    }

    static updateOne(data, cb){
        console.log(data)
        var updateq = `UPDATE "Shoes" SET name = '${data.name}', type = '${data.type}', minsize = ${data.minsize}, maxsize = ${data.maxsize}, status = '${data.status}' WHERE id = '${data.id}';`

        console.log(updateq)

        pool.query(updateq, (err,res) => {
            if (err){
                cb(err)
            }else {
                cb(null, res.rows)
            }
        })

        
    }

    static deleteOne(id, cb){

        var query = `DELETE FROM "Shoes" WHERE id = ${id};`
        pool.query(query, (err,res) => {
            if (err){
                cb(err)
            }else {
                cb(null)
            }
        })

    }

    static addShoes(data, cb){
        var queryadd = `INSERT INTO "Shoes" (name, type,minsize,maxsize,status) VALUES ('${data.name}','${data.type}',${data.minsize},${data.maxsize},'${data.status}');`
        pool.query(queryadd, (err,res) => {
            if (err){
                cb(err)
            }else {
                cb(null)
            }
        })

    }

}

module.exports = model