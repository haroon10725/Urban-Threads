import "./entry.css"

export default function Entry({ productimg, price, quantity, subtotal }) {
    return (
        <div className="grid grid-cols-10 ml-[3rem] h-[15rem]">
            <div className="product-img flex justify-end items-center border-b border-black">
                <img src={productimg} alt="productpic" />
            </div>
            <div className="product-name col-span-2 flex justify-center border-b border-black  items-center">
                <p>{price}</p>
            </div>
            <div className="product-price col-span-2 flex justify-center border-b border-black items-center">
                <p>{quantity}</p>
            </div>
            <div className="quantity flex col-span-2 justify-center border-b border-black items-center">
                <QtyBox total={subtotal} />
            </div>
            <div className="product-total col-span-2 flex justify-center border-b border-black items-center">
                <p>{subtotal}</p>
            </div>
        </div>
    )
}

function QtyBox({ total }) {
    return (
        <div className="qtybox flex">
            <div className="border-black border border-1 p-2 plus text-lg font-bold cursor-pointer">+</div>
            <div className="border-black border border-1 p-2 total">
                <p>{total}</p>
            </div>
            <div className="border-black border border-1 p-2 minus text-lg font-bold cursor-pointer">-</div>
        </div>
    )
}