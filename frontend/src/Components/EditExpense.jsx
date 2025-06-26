import {  useEffect, useState } from "react";
import axios from "axios";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { ExpenseContext } from "../utils/ExpenseContext";
import { useContext } from "react";
const EditExpense = () => {
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {setExpensesData}=useContext(ExpenseContext);
  const handleOnChange = (e) => {
    const { name } = e.target;
    if (name === "category") {
      setCategoryError("");
      setCategory(e.target.value);
    }
    if (name === "amount") {
      setAmountError("");
      setAmount(e.target.value);
    }
    if (name === "date") {
      setDate(e.target.value);
      setDateError("");
    }
    if (name === "description") {
      setDescription(e.target.value);
      setDescriptionError("");
    }
  };
  const [itemData,setItemData]=useState([])
  const {id}=useParams();
  useEffect(()=>{
      fetchData()
  },[id])
  const fetchData=async()=>{
      const response=await axios.get(`http://localhost:3000/expense/${id}`)
      const {data}=response;
      setItemData(data)
      setCategory(data?.category);
      setAmount(data?.amount);
      setDescription(data?.description);
      // setDate(data?.date);
      const formattedDate = new Date(data?.date).toISOString().split('T')[0];
      setDate(formattedDate)
      console.log(data?.date)

  }
  if(itemData.length===0){
    return <ShimmerUI/>
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkpost 1");
    // checkpost1 for validation
    setIsSubmitting(true);
    if (category === "" || amount === "" || date === "") {
      if (category === "") {
        setCategoryError("Item can't be Empty");
      }
      if (amount === "") {
        setAmountError("Amount can't be Empty");
      }
      if (date === "") {
        setDateError("Date Can't be Empty");
      }
      setIsSubmitting(false)
      return;
    }
    if(isNaN(amount) && amount.trim()!==''){
        setAmountError("amount should be Number");
        setIsSubmitting(false)
        return ;
    }
    setTimeout(async() => {
      const response=await axios.put(`http://localhost:3000/expense/${itemData?._id}`,{amount,category,description,date})
      console.log(response);
      const {data}=await axios.get('http://localhost:3000/expenses')
      setExpensesData(data);
      setCategory("");
      setAmount("");
      setDate("")
      setDescription("")
      setIsSubmitting(false);
    }, 2000);
  };
  return (
    <div className="flex justify-center w-full h-screen items-center bg-[#CCEDFF]">
      <form onSubmit={handleSubmit}>
         <input
          type="text"
          name="amount"
          value={amount}
          onChange={handleOnChange}
          className="border-2 px-1 my-1 w-60"
          placeholder="What it is costed"
        />
        {amountError}
        <br />
        <input
          type="text"
          name="category"
          value={category}
          className="border-2 px-1 w-60 my-1"
          placeholder="Enter Category"
          onChange={handleOnChange}
        />
        {categoryError}
        <br />
        <input
          type="text"
          name="description"
          value={description}
          className="border-2 px-1 my-1 w-60"
          placeholder="Enter Reason"
          onChange={handleOnChange}
        />
        {descriptionError}
        <br />
        <input
          type="Date"
          name="date"
          value={date}
          onChange={handleOnChange}
          className="border-2 px-1 my-2 w-60"
        />{dateError}
        <br />
        <button
          disabled={isSubmitting}
          className={`rounded-sm border-2 hover:bg-[#FFE8D6] p-1 ${
            isSubmitting === false ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditExpense;
