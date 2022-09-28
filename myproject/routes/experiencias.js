const express = require('express');
const router = express.Router();
const experienciasModel = require('../models/experienciasModel');

router.get('/', async function(req, res, next) {
    const experiencias = await experienciasModel.getExperiencias();

    res.render('experiencias', {layout: 'index'});
    
    /* experiencias = experiencias.map(experiencia =>{res.render('experiencias', {isExperiencias: true, experiencias})})
    return experiencias; */
});

module.exports = router;