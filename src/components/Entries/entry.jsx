import "./entry.css"

export default function Entry({ productimg, name, price, quantity, subtotal, qty, size, colour }) {
    return (
        <div>
            <div className="hidden lg:grid grid-cols-10 ml-[3rem] h-[15rem]">
                <div className="product-img flex justify-end items-center border-b border-black">
                    <img className="hidden xl:block" src={productimg} alt="productpic" />
                </div>
                <div className="product-name col-span-2 flex justify-center border-b border-black  items-center">
                    <p>{name}</p>
                </div>
                <div className="product-price col-span-2 flex justify-center border-b border-black items-center">
                    <p>{price}</p>
                </div>
                <div className="quantity flex col-span-2 justify-center border-b border-black items-center">
                    <QtyBox total={qty} />
                </div>
                <div className="product-total col-span-2 flex justify-center border-b border-black items-center">
                    <p>{subtotal}</p>
                </div>
            </div>
            <div className="flex mx-[1rem] justify-evenly h-[15rem] items-center border-black border-y lg:hidden">
                <div className="product-img w-1/4 sm:w-1/5 md:w-1/6">
                    <img src={productimg} alt="prouduct img" />
                </div>
                <div className="flex flex-col justify-evenly h-3/4">
                    <div className="product-name flex justify-center  items-center">
                        <p className="font-bold text-sm sm:text-lg md:text-xl">{name}</p>
                    </div>
                    <div className="product-price flex justify-center items-center">
                        <p className="text-gray-700 text-xs sm:text-sm">{colour}</p>
                    </div>
                    <div className="product-price flex justify-center items-center">
                        <p className="text-gray-700 text-xs sm:text-sm">{size}</p>
                    </div>
                    <div className="quantity flex justify-center items-center">
                        <QtyBox total={qty} />
                    </div>
                    <div className="product-total flex justify-center items-center">
                        <p className="text-gray-700 text-xs sm:text-sm">{price}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

function QtyBox({ total }) {
    return (
        <div className="qtybox flex">
            <div className="border-black border border-1 p-1 lg:p-2 plus text-sm lg:text-lg font-bold cursor-pointer">+</div>
            <div className="border-black border border-1 p-1 lg:p-1 total">
                <p className="text-sm lg:text-lg">{total}</p>
            </div>
            <div className="border-black border border-1 p-1 lg:p-2 minus text-sm lg:text-lg font-bold cursor-pointer">-</div>
        </div>
    )
}