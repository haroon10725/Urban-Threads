import { useEffect, useState } from "react"
import "./product.css"
import star from "../../assets/star.png"



export default function Product({ prodpic, rating, productname, oldprice, newprice, reviews, category, subcategory, productId }) {
    const [link, setlink] = useState([])
    useEffect(() => {
        let url = "http://localhost:5173/products/" + category + "/" + subcategory + "/" + productId
        setlink(url)
    }, []);

    return (
        <div className="flex flex-col product items-center cursor-pointer justify-evenly mb-[3rem]">
            <a className="w-2/3 hover:animate-pulse" href={link}>
                <div className="productimg w-full">
                    <img src={prodpic} alt="productimg" />
                </div>
            </a>
            <div className="textbox mt-1">
                <p className="text-md">{productname}</p>
            </div>
            <div className="flex rating mt-1 justify-evenly w-32 items-center">
                <div className="star flex">
                    <p className="a1 text-sm text-gray-600 font-bold">{rating}</p>
                    <img className="w-5 h-5" src={star} alt="star" />
                </div>
                <div className="reviews">
                    <p className="text-sm text-gray-500 font-bold">{reviews} reviews</p>
                </div>
            </div>
            <div className="price-cut flex mt-2">
                <p className="text-sm">{oldprice}</p>
                <p className="text-md">{newprice} pkr</p>
            </div>
        </div >

    )
}

