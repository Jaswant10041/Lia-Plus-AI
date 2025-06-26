import { useContext } from "react";
import { ExpenseContext } from "../utils/ExpenseContext";
import ExpenseCard from "./ExpenseCard";
import axios from "axios";
const Body = () => {
  const { expenses, setExpensesData } = useContext(ExpenseContext);
  console.log(expenses);
  // const [idToBeDeleted,setIdToBeDeleted]=useState(null)
  const handleDelete = async (id) => {
    try {
      const deleteresponse = await axios.delete(
        `http://localhost:3000/expense/${id}`
      );
      console.log(deleteresponse);
      const { data } = await axios.get("http://localhost:3000/expenses");
      setExpensesData(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-screen bg-[#CCEDFF] border-teal-100">
      <div className="flex justify-center">
        <h1 className="text-3xl font-medium mt-10">Expenses</h1>
      </div>
      <div className="flex font-medium text-xl border-b-2 mt-5">
        <div className="w-3/12 flex justify-center">
          <h2>Amount Used</h2>
        </div>
        <div className="w-3/12 flex justify-center">
          <h2>Category</h2>
        </div>
        <div className="w-3/12 flex justify-center">
          <h2>Description</h2>
        </div>
        <div className="w-3/12 flex justify-center">
          <h2>Options</h2>
        </div>
      </div>
      <ul className="mt-4">
        {expenses?.map((item) => (
          <ExpenseCard
            item={item}
            key={item._id}
            deleteExpense={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};
export default Body;
