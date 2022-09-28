const express = require('express');
const router = express.Router();
const usuarioModel = require('../models/userModel')

router.get('/', function(req, res, next){
    res.render('login', {isLogin:true});
})

router.post('/', async(req, res, next)=>{
    try{
        const usuario = req.body.usuario
        const password = req.body.password
        console.log(req.body);

        const data = await userModel.getUserAndPassword(usuario, password);

        if(data != undefined){
            req.session.id_usuario = data.id;
            res.redirect('/experiencia/experiencias');
        }
        else{
            res.render('/login')
        }

    }catch(error){
        console.log(error);
    }
});
















module.exports = router;