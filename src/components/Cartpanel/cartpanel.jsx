import "./cartpanel.css"

export default function CartPanel({ subcost, shipping, totalcost, }) {
    return (
        <div className="lg:flex flex-col justify-between w-1/4 h-[25rem] border-black border-l hidden px-[2rem]">
            <div className="flex flex-col">
                <div className="head">
                    <p className="text-xl py-3">Cart Totals</p>
                </div>
                <div className="border-black border-t border-b h-[3rem] subtotal">
                    <div className="flex h-full justify-between items-center">
                        <p>Subtotal</p>
                        <p>{subcost}</p>
                    </div>
                </div>
                <div className="border-black border-t border-b shipping h-[3rem]">
                    <div className="flex justify-between items-center h-full">
                        <p>Shipping</p>
                        <p>{shipping}</p>
                    </div>
                </div>
                <div className="border-black border-t border-b total h-[3rem]">
                    <div className="flex justify-between items-center h-full">
                        <p className="font-bold text-lg">Total</p>
                        <p className="font-bold text-lg">{totalcost}</p>
                    </div>
                </div>
            </div>
            <div className="button">
                <button className="bg-black w-full h-[3rem] text-white">Checkout</button>
            </div>
        </div>
    )
}