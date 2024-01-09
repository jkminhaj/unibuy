import { useState } from "react";
import { FaStar } from "react-icons/fa";

const SingleProduct = ({ product }) => {
    const fakeReviews = parseInt(Math.random() * 50);

    // data comign throgh parent
    const { thumbnail, images, description, title, price, discountPercentage, rating
        , stock, brand, category } = product;
    const [img1, img2, img3, img4] = images;
    

    return (
        < div data-aos="zoom-in">
            <div className="card bg-base-100">
                <div className="bg-[#F8FAFC] shadow-sm rounded-xl">
                    <figure className="p-6"><img className="h-52  rounded-xl" src={img1} alt="Shoes" /></figure>
                </div>
                <div className="py-5 px-2">
                    <p className="font-semibold">{title}</p>

                    <div className="flex justify-between items-center">
                        <button className="border-2 border-green-500 py-1 px-2 rounded-lg text-sm font-semibold text-green-500">${price}</button>
                        <div>
                            <p className="text-gray-500 text-sm flex items-center gap-2">
                                <span className="text-lg text-yellow-400"><FaStar /></span>
                                  {rating} ({fakeReviews} reviews)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleProduct;