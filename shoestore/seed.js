const fs = require("fs")
const pool = require("./config/connection")

let content = JSON.parse(fs.readFileSync("./shoes.json", "utf-8"))

let query = `INSERT INTO "Shoes" (name, type, minSize, maxSize, status) VALUES`

for (var i = 0 ; i< content.length; i++){
    console.log(content[i])

    var name = content[i].name
    var type = content[i].type
    var min = content[i].minSize
    var max = content[i].maxSize
    var status = content[i].status

    query += `('${name}','${type}',${min}, ${max},'${status}')`

    if (i == content.length - 1){
        query += `;`
    }else {
        query += `,`
    }

}

console.log(query)

pool.query(query, (err,res) => {
    console.log(err)
})