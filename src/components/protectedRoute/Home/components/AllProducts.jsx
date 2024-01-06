import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
    const [products , setProducts ] = useState([]);

    // pagination setup

    const [itemsPerPage , setItemsPerPage] = useState(8);
    const [totalItems , setTotalItems] =useState(0);
    const [currentPage , setCurrentPage] = useState(0);
    const numberOfPages = Math.ceil(totalItems/itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages)

    useEffect(() => {
        axios('https://dummyjson.com/products').then(data=>{
            setTotalItems(data.data.products.length);
            console.log(data.data)
        })
    }, [])
    useEffect(()=>{
        axios(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${currentPage}`).then(data=>{
            setProducts(data.data.products);
            console.log(data.data)
        })
    },[itemsPerPage,currentPage])
    
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }
    return (
        <div className="mt-5">
            {/* pagination */}
            <div className="flex gap-2 mb-2">
                {
                    pages.map((page,ind)=><button keys={ind}
                    className={`px-3 text-sm py-1 focus:outline-none  hover:bg-blue-300 rounded-xl ${currentPage === page ? 'bg-blue-300 text-white' : 'bg-gray-200'}`}
                    onClick={() => setCurrentPage(page)}
                    key={page}
                >
                    {page+1}
                </button>)
                }
                <select
                    value={itemsPerPage}
                    onChange={handleItemsPerPage}
                    title="items per page"
                    className="px-1 py-1 border border-gray-300 rounded-xl focus:outline-none"
                >
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="50">50</option>
                </select>
            </div>
            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 lg:gap-6">
                {products.map((product)=><SingleProduct product={product} key={product.id}></SingleProduct>)}
            </div>
        </div>
    );
};

export default AllProducts;