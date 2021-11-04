
const bcrypt = require( "bcryptjs" );
const salt = bcrypt.genSaltSync();

const UsuarioSeeder = [
    {
        nombre: "Jimmy",
        apellido: "Garcia Vallejos",
        usuario: "admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync( "123456", salt ),
        online: false,
    },
    {
        nombre: "Diego",
        apellido: "Garcia Vallejos",
        usuario: "Diego",
        email: "Diego@gmail.com",
        password: bcrypt.hashSync( "123456", salt ),
        online: false,
    },
];

module.exports = UsuarioSeeder;

