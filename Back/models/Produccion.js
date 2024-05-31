import mongoose from "mongoose";

const ProduccionSchema = new mongoose.Schema({
    idcultivo:{ type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true },
    fecha:{type: Date,required:true},
    Nlote:{type: String,required:true},
    especie:{type: String,required:true},
    cantidad:{type: Number,required:true},
    cantidadTrabajadores:{type: Number,required:true},
    observaciones:{type: String,required:true}
})

export default mongoose.model("Produccion", ProduccionSchema)