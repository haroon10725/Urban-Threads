import "./entrylabels.css"

export default function Labels() {
    return (

        <div className="labels h-[5rem] grid grid-cols-10 ml-[3rem]">
            <div className="empty border-black border-y">
            </div>
            <div className="flex justify-center border-black border-y items-center col-span-2 product">
                <p className="text-md font-bold">Product</p>
            </div>
            <div className="flex justify-center border-black border-y items-center col-span-2 price">
                <p className="text-md font-bold">Price</p>
            </div>
            <div className="flex justify-center border-black border-y items-center col-span-2 quantity">
                <p className="text-md font-bold">Quantity</p>
            </div>
            <div className="flex justify-center items-center col-span-2 border-black border-y subtotal">
                <p className="text-md font-bold">Subtotal</p>
            </div>

        </div>
    )
}