import "./product.css"


export default function Product({ prodpic, productname, oldprice, newprice, reviews, pic }) {
    return (
        <div className="flex flex-col product items-center justify-evenly mb-[3rem]">
            <div className="productimg w-2/3">
                <img src={prodpic} alt="productimg" />
            </div>
            <div className="textbox mt-1">
                <p className="text-md">{productname}</p>
            </div>
            <div className="flex rating mt-1 justify-evenly w-80 items-center">
                <div className="star flex w-[1rem]">
                    <img src={pic} alt="star" />
                    <img src={pic} alt="star" />
                    <img src={pic} alt="star" />
                    <img src={pic} alt="star" />
                    <img src={pic} alt="star" />
                </div>
                <div className="reviews">
                    <p className="text-sm text-gray-500 font-bold">{reviews} reviews</p>
                </div>
            </div>
            <div className="price-cut flex mt-2">
                <p className="text-sm">{oldprice}</p>
                <p className="text-md">{newprice}</p>
            </div>
        </div>

    )
}

