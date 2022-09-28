const conexion = require('./database');

async function getUserAndPassword(user, password) {
    try {
        const query = 'select * from user where usuario = ? and password = ? limit 1';
        const rows = await conexion.query(query, [user, password]);
        return rows[0];
    }catch(error) {
        throw error;
    }
}
module.exports = {getUserAndPassword};