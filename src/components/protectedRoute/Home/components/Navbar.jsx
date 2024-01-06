import { NavLink } from "react-router-dom";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import CartModal from "../../../Modals/CartModal";

const Navbar = () => {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [cartModal, setCartModal] = useState(false);

    // search logic
    const handleSearch = () => {
        setShowSearchBox(true)
    }

    // search box ui
    const SearchBox =
        <>
            <div data-aos="fade-left" className="border w-[500px] flex py-[6px] px-2 rounded-sm gap-2 justify-between">
                <div className="flex gap-2">
                    <button className="text-2xl hover:text-gray"><CiSearch /></button>
                    <input type="text" className="outline-none w-[400px]" placeholder="Search product" />
                </div>
                <button className="text-xl hover:text-gray-400" onClick={() => { setShowSearchBox(!showSearchBox) }}><VscClose /></button>
            </div>
        </>

    const navMenu =
        <>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Blogs</NavLink>
        </>
    return (
        <div>
            <div className="navbar  h-10 md:h-16 bg-base-100">
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
                        {showSearchBox ? <>{SearchBox}</> : <>{navMenu}</>}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* icons div */}
                    <div className="text-2xl  flex font-semibold">
                        {showSearchBox || <span onClick={handleSearch} data-aos="fade-right" className="hover:bg-blue-50 md:p-3 p-1 hover:rounded-full hidden md:block cursor-pointer"><CiSearch /></span>}
                        <div className="relative">
                            <button className="hover:bg-blue-50 md:p-3 p-1 hover:rounded-full"><CiShoppingCart /></button>
                        </div>
                        <span className="hover:bg-blue-50 md:p-3 p-1 cursor-pointer hover:rounded-full"><CiUser /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;