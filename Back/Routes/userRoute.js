const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/signup', (req, res) => {
    let user = req.body;
    query="select email, password,role,status from users where email=?";
    connection.query(query, [user.email], (err, results) => {
        if(!err){
            if(results.length<=0){
                query = "insert into users (first_nameU,last_nameU,telephoneU,email, password,status,role) value (?,?,?,?,?,'false','alumno')"
                connection.query(query,[user.first_nameU,user.last_nameU,user.telephoneU,user.email,user.password],(err, results) => {
                    if(!err){

                        return res.status(200).json({message: "Registrado Correctamente"});
                    }else{
                        return res.status(500).json({err});

                    }
                })
            } else {
                return res.status(400).json({ message: "Email existe"});
            }

        } else {
            return res.status(500).json(err);
        }

    })
})

module.exports= router ;