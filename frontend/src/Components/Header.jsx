import { Link } from "react-router-dom";
import { TbZoomMoney } from "react-icons/tb";
const Header = () => {
  return (
    <div className="flex justify-around border-2 p-2 bg-[#FFE8D6]">
      <Link to='/' className="cursor-pointer"><TbZoomMoney size={25}/></Link>
      <Link to="/add-expense" className="font-medium text-xl">Add Expense</Link>
      <button className="cursor-pointer font-medium text-xl">Login</button>
    </div>
  );
};
export default Header;
