import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Payouts = () => {
  return (
    <div className="flex">
      <div className="w-[15%]">
        <Navbar />
      </div>
      <div className="w-[85%]">
        <Dashboard />
      </div>
    </div>
  );
};

export default Payouts;
