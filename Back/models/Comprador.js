import mongoose from "mongoose";

const compradorSchema=new mongoose.Schema({
    idproduccion:{type:mongoose.Schema.Types.ObjectId,ref:'Produccion',required:true},
    createdAt:{type:Date,default:Date.now},
    especie:{type:String,required:true},
    nombre:{type:String,required:true},
    telefono:{type:String,required:true},
    cantidad:{type:Number,required:true},
    nguiaTransporte:{type:String,required:true},
    nloteComercial:{type:String,required:true},
    idingreso:{type:mongoose.Schema.Types.ObjectId,ref:'Ingreso',required:true},
})

export default mongoose.model("Comprador",compradorSchema)
