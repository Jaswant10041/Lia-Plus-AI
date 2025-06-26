import { Router } from "express";
const ExpenseRouter=Router();
import { GetExpenses,AddExpense,EditExpense,DeleteExpense, GetExpenseDetail } from "../components/ExpenseController.js";
ExpenseRouter.get('/expenses',GetExpenses)
ExpenseRouter.get('/expense/:id',GetExpenseDetail)
ExpenseRouter.post('/expense',AddExpense)
ExpenseRouter.put('/expense/:id',EditExpense)
ExpenseRouter.delete('/expense/:id',DeleteExpense)



export default ExpenseRouter;




