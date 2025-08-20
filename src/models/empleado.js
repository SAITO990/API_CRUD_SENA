const mongoose = require('mongoose')

const empleadoSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: Number, required: true},
  cargo: { type: String, required: true},
  salario: { type: Number, required: true}
});

module.exports = mongoose.model('Empleado', empleadoSchema)