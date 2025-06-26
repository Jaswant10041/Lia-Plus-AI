import { useContext } from "react";
import {Item} from "./";
import { ExpenseContext } from "../utils/ExpenseContext";
import ExpenseCard from "./ExpenseCard";
const Body=()=>{
    const {expenses}=useContext(ExpenseContext)
    console.log(expenses)
    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-2xl font-medium">Expenses</h1>
            </div>
            <ul>
                {
                    expenses?.map((item)=>(
                        <ExpenseCard item={item} key={item._id}/>
                    ))
                }
            </ul>
        </div>
    )
}
export default Body;