// Importing Pages
import Footer from "../Footer/footer"


import "./ordersm.css"

// importing icons
import home from ".././../assets/home.png"
import placed from "../../assets/placed.png"
import dispatched from "../../assets/dispatched.png"
import Onway from "../../assets/Onway.png"
import recieved from "../../assets/recieved.png"
import tick from "../../assets/check.png"
import address from "../../assets/location.png"
import emptystar from "../../assets/emptystar.png"
import yellowstar from "../../assets/yellowstar.png"

export default function OrderSm() {
    return (
        <div className="class 3xl:hidden">
            <div className="dashboard flex justify-start border-b border-gray-700 h-[6vh]">
                <div className="flex justify-evenly items-center w-[11rem]">
                    <div className="icon w-5 h-5">
                        <img src={home} alt="icon" />
                    </div>
                    <div>
                        <p className="a1 text-xl">Dashboard</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-[10.5vh] mt-[2vh] items-between justify-evenly">
                <div className="trackorder ml-4">
                    <p className="a1 font-bold text-2xl text-gray-800">Track Order</p>
                </div>
                <div className="date-time flex w-[90%] ml-4 justify-between">
                    <p className="a1 text-xs text-gray-700">April 24 2023</p>
                    <p className="a1 text-xs text-gray-700">GMT +05:00</p>
                </div>
                <div className="orderId ml-4">
                    <p className="a1 text-xs text-gray-700">
                        MPO-417D
                    </p>
                </div>
            </div>
            <div className="approx-time flex ml-4 mt-[1rem] mb-[0.5rem]">
                <p className="a1 text-md font-semibold text-gray-800">Time: 15mins</p>
            </div>
            <div className="flex start">
                <div className="flex justify-start w-full mb-4">
                    <div className="flex flex-col items-center mt-6 mx-5">
                        <div className="status1 rounded-full w-4 h-4">
                            <img src={tick} alt="" />
                        </div>
                        <div className="line h-12 border border-green-300"></div>
                        <div className="status2 rounded-full w-4 h-4">
                            <div className="status1 rounded-full w-4 h-4">
                                <img src={tick} alt="" />
                            </div>
                        </div>
                        <div className="line h-12 border border-green-300"></div>
                        <div className="status3 rounded-full w-4 h-4">
                            <div className="status1 rounded-full w-4 h-4">
                                <img src={tick} alt="" />
                            </div>
                        </div>
                        <div className="line h-12 border border-green-300"></div>
                        <div className="status3 rounded-full w-4 h-4">
                            <div className="status1 rounded-full w-4 h-4">
                                <img src={tick} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center">
                        <div className="flex items-center">
                            <div className="icon w-8 h-8 mr-4">
                                <img src={placed} alt="" />
                            </div>
                            <div className="h-16 Order-placed">
                                <div className="flex flex-col h-full justify-center">
                                    <p className="a3 text-sm">Order placed</p>
                                    <p className="a3 text-sm text-gray-600">Your order is placed</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="icon w-8 h-8 mr-4">
                                <img src={dispatched} alt="" />
                            </div>
                            <div className="h-16 Order-dispatched">
                                <div className="flex flex-col h-full justify-center">
                                    <p className="a3 text-sm">Order dispatched</p>
                                    <p className="a3 text-sm text-gray-600">Order dispatched</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="icon w-8 h-8 mr-4">
                                <img src={Onway} alt="" />
                            </div>
                            <div className="h-16 Order-proceed">
                                <div className="flex flex-col h-full justify-center">
                                    <p className="a3 text-sm">Order on way</p>
                                    <p className="a3 text-sm text-gray-600">Your wait is about to over!</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="icon w-8 h-8 mr-4">
                                <img src={recieved} alt="" />
                            </div>
                            <div className="h-16 Order-delivered">
                                <div className="flex flex-col h-full justify-center">
                                    <p className="a3 text-sm">Order delivered</p>
                                    <p className="a3 text-sm text-gray-600">Enjoy your Order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottoms flex flex-col justify-between items-start ml-5 h-[30vh]">
                <div className=" addres w-[95%] h-[6rem] border-gray-200 border flex flex-col">
                    <div className="flex items-center py-2 justify-start">
                        <div className="icon w-8 h-8 mr-1">
                            <img src={address} alt="" />
                        </div>
                        <div className="head">
                            <p className="a1 text-md font-semibold text-gray-800">Delivery Address</p>
                        </div>
                    </div>
                    <div className="address flex justify-start px-2">
                        <p className="a1 text-xs text-gray-700">E-70 Block 7 Gulshan Iqbal Karachi Near Abul Hasan Asphani Road</p>
                    </div>
                </div>


                <div className="rate-us w-[95%] h-[7rem] border-gray-200 border flex flex-col">
                    <div className="flex items-center px-2 py-1 justify-start">
                        <div className="head">
                            <p className="a4 text-md font-semibold text-gray-800">Rate us</p>
                        </div>
                    </div>
                    <div>
                        <p className="a1 text-[11px] text-gray-700 pb-2 px-2">Your feedback matters a lot for us in delivery you the right quality and quantity</p>
                    </div>
                    <div className="flex justify-start">
                        <div className="address flex justify-between px-2 w-[8rem]">
                            <img className="w-4 h-4 cursor-pointer" src={emptystar} alt="" />
                            <img className="w-4 h-4 cursor-pointer" src={emptystar} alt="" />
                            <img className="w-4 h-4 cursor-pointer" src={emptystar} alt="" />
                            <img className="w-4 h-4 cursor-pointer" src={emptystar} alt="" />
                            <img className="w-4 h-4 cursor-pointer" src={emptystar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer mt-4">
                <Footer />
            </div>

        </div>

    )
}