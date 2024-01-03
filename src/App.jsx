import { Outlet } from "react-router-dom";
import Navbar from "./components/protectedRoute/Home/components/navbar";

const App = () => {
  return (
    <div>
      <nav className="border-b-[1px] border-slate-100">
        <Navbar />
      </nav>
      <section className="w-11/12 md:w-10/12 mx-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default App;