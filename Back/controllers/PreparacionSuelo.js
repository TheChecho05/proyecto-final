// import Cliente from "../models/clientes.js";
// import mongoose from "mongoose";

// const httpClientes = {
//     getClientes: async (req, res) => {
//         const { busqueda } = req.query
//         const cliente = await Cliente.find(
//             {
//                 $or: [
//                     { nombre: new RegExp(busqueda, "i") }
//                 ]
//             }
//         )
//         res.json({ cliente })
//     },
//     getClientesID: async (req, res) => {
//         const { id } = req.params
//         const clientes = await Cliente.findById(id)
//         res.json({ clientes })
//     },
//     postClientes: async (req, res) => {
//         try {
//             const { idplan, nombre, fechaNacimiento, direccion, tipodocumento, numdocumento, plan, foto, seguimiento } = req.body;
//             const cliente = new Cliente({ idplan, nombre, fechaNacimiento, direccion, tipodocumento, numdocumento, plan, foto, seguimiento });
//             await cliente.save()
//             console.log(cliente);
//             res.json({ message: "Cliente creado satisfactoriamente", cliente });
//         } catch (error) {
//             console.log(error);
//             res.status(400).json({ err: "No se pudo crear el registro" })
//         }
//     },
//     putClientes: async (req, res) => {
//         const { id } = req.params;
//         const { fechaNacimiento, direccion, tipodocumento, numdocumento, foto, ...resto } = req.body;
//         const cliente = await Cliente.findByIdAndUpdate(id, resto, { new: true });
//         res.json(cliente)
//     },
//     putClienteSeguimiento: async (req, res) => {
//         const { id } = req.params;
//         const { seguimiento } = req.body;

//         try {
//             const cliente = await Cliente.findById(id);
//             console.log(cliente);
//             if (!cliente) {
//                 return res.status(404).json({ error: "Cliente no encontrado" });
//             }

//             cliente.seguimiento = seguimiento;
//             await cliente.save();

//             res.json({ message: "Seguimiento del cliente actualizado correctamente", cliente });
//         } catch (error) {
//             console.error("Error al actualizar seguimiento del cliente:", error);
//             res.status(500).json({ error: "Error interno del servidor" });
//         }
//     },
//     putClientesActivar: async (req, res) => {
//         const { id } = req.params
//         const cliente = await Cliente.findByIdAndUpdate(id, { estado: 1 }, { new: true })
//         res.json({ cliente })
//     },
//     putClientesDesactivar: async (req, res) => {
//         const { id } = req.params
//         const cliente = await Cliente.findByIdAndUpdate(id, { estado: 0 }, { new: true })
//         res.json({ cliente })
//     },
//     obtenerConteoClientesPorPlan: async (req, res) => {
//         try {
//             const { tipoPlan } = req.query;


//             const filtroPlan = { "$match": { "idplan": new mongoose.Types.ObjectId(tipoPlan) } }
//             console.log(filtroPlan)

//             const conteoClientesPorPlan = await Cliente.aggregate([
//                 filtroPlan,
//                 { "$group": { "_id": "$idplan", "totalClientes": { "$sum": 1 } } }
//             ]);

//             res.status(200).json({ success: true, data: conteoClientesPorPlan });
//         } catch (error) {
//             console.log(error)
//             res.status(500).json({ success: false, error: error.message });
//         }
//     },
//     listarClientesPorFechaNacimiento: async (req, res) => {
//         try {
//             const { fechaNacimiento } = req.query;

//             // Verificamos si se proporcionó la fecha de nacimiento
//             if (!fechaNacimiento) {
//                 return res.status(400).json({ error: 'Se requiere la fecha de nacimiento' });
//             }

//             // Convertimos la fecha de texto a objeto Date
//             const fechaNacimientoObj = new Date(fechaNacimiento);

//             // Buscamos los clientes que tienen la fecha de nacimiento especificada
//             const clientes = await Cliente.find({ fechaNacimiento: fechaNacimientoObj });

//             res.status(200).json({ success: true, data: clientes });
//         } catch (error) {
//             res.status(500).json({ success: false, error: error.message });
//         }
//     },
//     validarIngresoTotalClientes: async (req, res) => {
//         try {
//             // Contamos todos los clientes en la base de datos
//             const totalClientes = await Cliente.countDocuments();

//             res.status(200).json({ totalClientes });
//         } catch (error) {
//             res.status(500).json({ success: false, error: error.message });
//         }
//     }
// }

// export default httpClientes