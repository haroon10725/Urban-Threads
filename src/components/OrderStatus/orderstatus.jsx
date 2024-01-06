import notes from "../../assets/notes.png"
import pending from "../../assets/pending1.png"
import order from "../../assets/order.png"


export default function Orderstatus() {
    return (
        <div className="grid grid-cols-3 h-[10rem] w-[95%] gap-6">
            <div className="total-order shadow-lg">
                <div className="h-full w-[40%] flex justify-evenly items-center">
                    <div className="icon border border-black border-gray-800">
                        <img className="w-10 h-10 box-content p-2" src={notes} alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="a1 text-4xl font-bold">34</p>
                        <p className="a1 text-md">Total order</p>
                    </div>
                </div>
            </div>
            <div className=" shadow-lg pending-order flex justify-center">
                <div className="h-full flex justify-between items-center w-[95%]">
                    <div className="h-full w-[56%] flex justify-evenly items-center">
                        <div className="icon border border-black border-gray-800">
                            <img className="w-10 h-10 box-content p-2" src={pending} alt="" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="a1 text-4xl font-bold">34</p>
                            <p className="a1 text-md">Total Pending Order</p>
                        </div>
                    </div>
                    <div className="loading mr-1">
                        <div className="p-1 w-16 h-16 flex justify-center items-center border border-4 border-purple-400 rounded-full self-end bg-purple-50">
                            <p className="a1">100%</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" shadow-lg dispatched-order flex justify-center">
                <div className="h-full flex justify-between items-center w-[95%]">
                    <div className="h-full w-[52%] flex justify-evenly items-center">
                        <div className="icon border border-black border-gray-800">
                            <img className="w-10 h-10 box-content p-2" src={order} alt="" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="a1 text-4xl font-bold">34</p>
                            <p className="a1 text-md">Total Dispactched</p>
                        </div>
                    </div>
                    <div className="loading mr-1">
                        <div className="p-1 w-16 h-16 flex justify-center items-center border border-4 border-purple-400 rounded-full self-end bg-purple-50">
                            <p className="a1">100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}