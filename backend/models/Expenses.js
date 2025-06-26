import mongoose, { Schema } from "mongoose";
const Expenses=new Schema({
    amount:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now()
    }
})
const ExpenseModel=mongoose.model('expenses',Expenses)
export default ExpenseModel;