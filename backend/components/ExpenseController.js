import express from "express";
import ExpenseModel from "../models/Expenses.js";
export const AddExpense=async(req,res)=>{
    const {amount,category,description,date}=req.body;
    //validate data
    if(!amount || !category || !description || !date){
        return res.status(402).send("All fields are required")
    }
    try{
        await ExpenseModel.create({amount,category,description,date})
        console.log("Data saved to Database");
        return res.status(200).json({message:"Expense Added Successfully"})
    }
    catch(err){
        console.log(err)
    }
}
export const GetExpenses=async(req,res)=>{
    try{
        const expenses=await ExpenseModel.find()
        console.log(expenses); 
        return res.status(200).json(expenses)  
    }
    catch(err){
        console.log(err)
        return res.status(401).json({message:"Error while getting the data"})
    }
}
export const GetExpenseDetail=async(req,res)=>{
    try{   
        const {id}=req.params;
        const expense=await ExpenseModel.findById(id)
        console.log(expense); 
        return res.status(200).json(expense)  
    }
    catch(err){
        console.log(err)
        return res.status(401).json({message:"Error while getting the data"})
    }
}
export const EditExpense=async(req,res)=>{
    try{
        const {id}=req.params;
        const {amount,category,description,date}=req.body;
        //validate data
        if(!id || !amount || !category || !description || !date){
            return res.status(402).send("All fields are required")
        }
        const editedExpense=await ExpenseModel.findByIdAndUpdate(id,{id,amount,category,description,date});
        console.log(editedExpense)
        return res.status(200).json({message:"Expense updated Successfully"});
    }
    catch(err){
        console.log(err)
        return res.status(401).json({message:"Error while updating the data"});
    }
}
export const DeleteExpense=async(req,res)=>{
    try{
        const {id}=req.params;
        const deletedCount=await ExpenseModel.findByIdAndDelete(id);
        console.log("deleted data "+deletedCount)
        return res.status(201).json({message:"Expense deleted Successfully"})
    }
    catch(err){
        console.log(err)
        return res.status(401).json({message:"Error while deleting the data"})
    }
}

/*
Error Codes:
200: Success
201: Success, but some Issues
400: Bad Request or Unreachable
401: Some Internal Error In Server
402 : Not Permitted
*/