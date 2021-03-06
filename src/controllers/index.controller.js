const {Pool} = require('pg');

const pool = new Pool({
    host: '181.127.244.95',
    user: 'postgres',
    password: '123456',
    database: 'nodeapirest',
    port: '504'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows); 
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id  = $1', [id]);
    res.status(200).json(response.rows); 
}

const createUsers = async (req, res) => {
    const {name,email} = req.body;

    const response = await pool.query('INSERT INTO users(name, email) VALUES($1,$2)', [name,email]);
    console.log(response);
    res.json({
        message: 'User added Succesfully',
        body: {
            user: {name, email}
        }
    });
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id  = $1', [id]);
    res.status(200).json(response.rows); 
}

const updateUser = async (req,res)=>{
    const id = req.params.id;
    const {name, email} = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',[name,email,id]);
    res.status(200).json(response.rows);
}

module.exports = {
    getUsers,
    getUserById,
    createUsers,
    deleteUser,
    updateUser
}