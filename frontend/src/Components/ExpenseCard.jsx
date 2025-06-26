import { Link } from "react-router-dom";

const ExpenseCard=({item})=>{
    console.log(item)
    return (
        <div className="flex justify-between">
            <div>{item?.amount}</div>
            <div>{item?.category}</div>
            <div className="flex gap-2">
                <Link to={`/edit-expense/${item._id}`}>Edit</Link>
                <div>Delete</div>
            </div>
        </div>
    )
}
export default ExpenseCard;