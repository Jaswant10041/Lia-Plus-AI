import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Header, AddExpense, Body } from "./Components";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ExpenseContext } from "./utils/ExpenseContext.js";
import axios from "axios";
import EditExpense from "./Components/EditExpense.jsx";
const AppLayout = () => {
  const [expensesData,setExpensesData]=useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async()=>{
    try{
        const response=await axios.get('http://localhost:3000/expenses');
        const {data}=response;
        setExpensesData(data);
    }
    catch(err){
       console.log(err)
    }
  }
  return (
    <div>
      <ExpenseContext.Provider value={{"expenses":expensesData,setExpensesData:setExpensesData}}>
        <Header />
        <Outlet />
      </ExpenseContext.Provider>
    </div>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/add-expense",
        element: <AddExpense />,
      },
      {
        path: "/edit-expense/:id",
        element: <EditExpense />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>
);
