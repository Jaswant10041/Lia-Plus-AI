import { Link } from "react-router-dom";
import { ExpenseContext } from "../utils/ExpenseContext";
import { useContext } from "react";
import axios from "axios";
const ExpenseCard = (props) => {
  console.log(props);
  const { item, deleteExpense } = props;
  const { setExpensesData } = useContext(ExpenseContext);
  const handleDelete = async () => {
    deleteExpense(item._id);
  };
  return (
    <div className="">
      <div className="flex font-lightbold text-md">
        <div className="w-3/12 flex justify-center">
          <h2>₹ {item?.amount}</h2>
        </div>
        <div className="w-3/12 flex justify-center">
          <h2>{item?.category}</h2>
        </div>
        <div className="w-3/12 flex justify-center">
          <h2>{item?.description}</h2>
        </div>
        
        <div className="flex justify-center w-3/12">
            <div className="flex gap-4">
                <Link to={`/edit-expense/${item._id}`} className="rounded-sm hover:bg-[#FFE8D6] p-1">Edit</Link>
                <div onClick={handleDelete} className="cursor-pointer hover:bg-[#FFE8D6] rounded-sm p-1">Delete</div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default ExpenseCard;
/*
        <div className="flex justify-between">
            <div className="flex gap-2">
                <Link to={`/edit-expense/${item._id}`}>Edit</Link>
                <div onClick={handleDelete} className="cursor-pointer">Delete</div>
            </div>
        </div>
<div className="">
      <div className="flex font-medium text-xl">
        <div className="w-3/12 flex justify-center">
          <h2>{item?.amount}</h2>
        </div>
        <div className="w-3/12 flex justify-center">
          <h2>{item?.category}</h2>
        </div>
        <div className="w-3/12 flex justify-center">
          <h2>{item?.description}</h2>
        </div>
        <div className="w-3/12 flex justify-center">
          <h2>
            
          </h2>
        </div>
      </div>
    </div>
    */
