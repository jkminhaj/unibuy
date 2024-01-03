import { NavLink } from "react-router-dom";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {

    const navMenu =
        <>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Blogs</NavLink>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        {/* navbar icon contents [for mobile] */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <a className="cursor-pointer hidden font-semibold md:text-xl md:flex gap-2"><span className="rounded-full"><BsHandbag /></span>Unibuy</a>
                </div>
                <a className="cursor-pointer md:hidden font-semibold text-xl flex gap-2"><span className="rounded-full"><BsHandbag /></span>Unibuy</a>
                {/* navbar center part [for Desktop] */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  space-x-4">
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* icons div */}
                    <div className="text-2xl  flex font-semibold">
                        <span className="hover:bg-blue-50 md:p-3 p-1 hover:rounded-full hidden md:block"><CiSearch /></span>
                        <span className="hover:bg-blue-50 md:p-3 p-1 hover:rounded-full"><CiShoppingCart /></span>
                        <span className="hover:bg-blue-50 md:p-3 p-1 hover:rounded-full"><CiUser /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;