const express = require('express');
const router = express.Router();
const experienciasModel = require('../../models/experienciasModel')

router.get('/', async function (req, res,next){
    const experiencias = await experienciasModel.getExperiencias();
    res.render('experiencia/experiencias', 
    {layout: 'gestion/layout', usuario: require.session.nombre, experiencias});
})

router.get('/agregarExp', (req, res, next) => {
    res.render('gestion/agregarExp', {layout: 'gestion/layout'});
})


router.post('/agregarExp', async (req, res, next) => {
    try {
        if(req.body.nombreEmpresa !="" && req.body.descripcion != ""){
            await experienciasModel.insertExperiencia(req.body);
            res.redirect('/gestion/experiencias');        
        }else{
            res.render('gestion/agregarExp', 
            {layout:'gestion/layout', error: true, 
            message: 'Todos se tiene que completar'})
        }

    }catch (error) {
        console.log(error);
        res.render('gestion/agregarExp', 
        {layout:'gestion/layout', error: true, message: 'no se cargó la experiencia'})

    }
})

router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;
    await experienciasModel.deleteExperienciaById(id);
    res.redirect('/gestion/experiencias');    
})

router.post('/modificarExp', async (req, res, next) => {
    try {
        const obj = {
            nombreEmpresa: req.body.nombreEmpresa,
            descripcion: req.body.descripcion
        }
        await experienciasModel.modificarExperienciaById(obj, req.body.id)
        res.redirect('/gestion/experiencias')
        
    } catch (error) {
        console.log(error);
        res.render('gestion/modificarExp', 
        {layout: 'gestion/layout', error: true, message: 'No se modificó la experiencia'})
    }
});

module.exports = router;