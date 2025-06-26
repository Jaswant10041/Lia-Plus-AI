import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-around border-2 p-2">
      <Link to='/' className="cursor-pointer">Logo</Link>
      <Link to="/add-expense">Add Expense</Link>
      <button className="cursor-pointer">Login</button>
    </div>
  );
};
export default Header;
