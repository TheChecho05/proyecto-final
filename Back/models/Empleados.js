import mongoose from "mongoose";

const empleadoSchema = new mongoose.Schema({
    descripcion:{type:String,required:true},
    responsable:{type:String,required:true},
    valor:{type:Number,required:true},
    createdAt:{type:Date,default:Date.now},
})


export default mongoose.model("Empleado",empleadoSchema)