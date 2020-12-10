const model = require("../model/model")


class Controller {


    static home (req, res){
        model.getAll((err,data)=> {
            if (err){
                res.send(err)
            }else {
                console.log(data)
                res.render("home",{data:data})
            }
        })
    }


    static addShoes(req, res){

        if (!validateName(req.body.name)){
            res.send("Name not valid")
        } else if (!validateSizing(req.body.minsize, req.body.maxsize)){
            res.send("Size not valid")
        }else {

            model.addShoes(req.body, (err) => {
                if (err){
                    res.send(err.message)
                }else {
                    res.send("Berhasil di tambah")
                }
            })
        }
    }

    static showAdd(req, res){
        res.render("add")
    }


    static delShoes(req, res){
        model.deleteOne(req.params.id, (err) => {
            if(err){
                res.send(err.message)
            }else {
                res.send("Berhasil didelete")
            }
        })
    }

    static editShoes(req, res){
       model.updateOne(req.body, (err)=> {
           if (err){
               res.send(err.message)
           } else {
               res.send(req.body)
           }
       })
    }

    static showEditShoes(req, res){
        model.getOne(req.params.id, (err,data) => {
            if (err){
                res.send(err)
            }else {
                console.log(data)
                res.render("edit",{data:data})
            }
        })
    }


}

function validateName(name) {
    if (name.split(" ").length >= 2 ){
        return true
    } else {
        return false
    }
}

function validateSizing(min, max){

    if (min > max){
        return false
    } else {
        var m = Number(min)
        var x = Number(max)
        if (m&&x){
            console.log("Valid Size")
            return true
        }else {
            return false
        }
    }
}

module.exports = Controller