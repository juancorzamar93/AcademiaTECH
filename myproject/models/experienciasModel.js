const conexion = require('./database');
const {isAsyncFunction} = require('util/types');

//EXPERIENCIAS
async function getExperiencias(){
    const query = 'select * from experiencia';
    const rows = await conexion.query(query);
    return rows;
}

//AGREGADO DE EXPERIENCIAS
async function insertExperiencia(){
    try{
        const query = 'insert into experiencia set ?';
        const rows = await conexion.query(query);
        return rows;

    }catch(error){
        throw error;
    }
}

//ELIMINACION DE EXPERIENCIAS
async function deleteExperienciaById(){
    const query = 'delete from experiencia where id = ?';
    const rows = await conexion.query(query);
    return rows;
}

//PARA SELECCIONAR UNA EXPERIENCIA POR id
async function getExperienciaById(id){ 
    const query = 'select * from experiencia where id = ?';
    const rows = await conexion.query(query, [id]);
    return rows [0];
}

//MODIFICACION DE EXPERIENCIAS
async function modificarExperienciaById(obj,id){
    try {
        const query = 'update experiencia set ? where id = ?';
        const rows = await conexion.query(query, [obj,id]);
        return rows;

    }catch(error){
        console.log(error);
        throw error;

    }
}

module.exports = {getExperiencias,insertExperiencia, deleteExperienciaById, getExperienciaById, modificarExperienciaById};