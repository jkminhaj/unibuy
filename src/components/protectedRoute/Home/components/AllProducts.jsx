import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { GlobalContext } from "../../../../context/GlobalProvider";
import debounce from 'lodash/debounce';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    // pagination setup
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = Math.ceil(totalItems / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages)

    useEffect(() => {
        axios('https://dummyjson.com/products').then(data => {
            setTotalItems(data.data.products.length);
            setProducts(data.data.products);

        })
    }, [])
    useEffect(() => {
        axios(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${currentPage}`).then(data => {
            setProducts(data.data.products);
        })
    }, [itemsPerPage, currentPage])

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <div className="">

            {/* items per page */}
            <div className="flex justify-between items-center m-2">
                <div>
                    <p className="text-gray-500">Total {totalItems} products</p>
                </div>
                <select
                    value={itemsPerPage}
                    onChange={handleItemsPerPage}
                    title="items per page"
                    className="px-1 py-1  rounded-xl  border  max-w-min focus:outline-none"
                >
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="50">50</option>
                </select>
            </div>
            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 lg:gap-6">
                {products.map((product) => <SingleProduct product={product} key={product.id}></SingleProduct>)}
            </div>
            {/* pagination */}
            <div className="flex justify-center mt-4">
                <div className=" m-2 shadow rounded-lg max-w-min flex">
                    <button
                        className="join-item px-3 py-2 text-white rounded focus:outline-none hover:bg-gray-200"
                        onClick={handlePrevPage}
                    >
                        <span className="text-black"><MdNavigateBefore /></span>
                    </button>
                    {
                        pages.map((page, ind) => <button keys={ind}
                            className={`px-3 join-item text-sm py-2 focus:outline-none  hover:bg-gray-200 ${currentPage === page ? 'bg-gray-700  rounded-xl text-white hover:bg-gray-700' : 'bg-white'}`}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >
                            {page + 1}
                        </button>)
                    }
                    <button
                        className="px-3 py-2  text-white join-item rounded focus:outline-none hover:bg-gray-200"
                        onClick={handleNextPage}
                    >
                        <span className="text-black"><MdNavigateNext /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;