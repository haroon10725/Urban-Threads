import "./navbar.css"
import cart from "../../assets/cart.png"
import search from "../../assets/search.png"

import { useEffect } from "react";
import { drawer } from "@material-tailwind/react";

export default function Navbar() {

    useEffect(() => {
        const hamburg = document.getElementsByClassName('hamburg')
        const drawer = document.getElementsByClassName('drawer')

    }, []);



    return (
        <div className="h-[4rem]">
            <div className="drawer hidden">
                <div className="h-4/6 w-[90%] items border border-2 bg-white z-50 absolute">
                    <div className="h-1/2 flex flex-col justify-evenly ml-4">
                        <p className="a1 cross text-3xl cursor-pointer text-gray-700" onClick={
                            function () {
                                const drawer = document.getElementsByClassName('drawer')
                                drawer[0].classList.add('hidden')
                            }
                        }>✖</p>
                        <a href="http://localhost:5173/product"><li className="a1 cursor-pointer text-2xl">Products</li></a>
                        <hr className="bg-black h-[2px]" />
                        <a href="http://localhost:5173/order"><li className="a1 cursor-pointer text-2xl">Orders</li></a>
                        <hr className="bg-black h-[2px]" />
                        <a href="http://localhost:5173/cart"><li className="a1 cursor-pointer text-2xl">Cart</li></a>
                        <hr className="bg-black h-[2px]" />
                        <a href="http://localhost:5173/pants"><li className="a1 cursor-pointer text-2xl">Pants</li></a>
                        <hr className="bg-black h-[2px]" />
                        <a href="http://localhost:5173/trousers"><li className="a1 cursor-pointer text-2xl">Trousers</li></a>
                        <hr className="bg-black h-[2px]" />
                    </div>
                </div>
            </div>
            <div className="h-[4rem] lg:hidden">
                <div className="h-[4rem] flex flex-row justify-around items-center">
                    <div className="flex h-[2rem] sm:h-[2.5rem] flex-col justify-evenly hamburg cursor-pointer" onClick={function () {
                        const drawer = document.getElementsByClassName('drawer')
                        drawer[0].classList.toggle('hidden')
                    }}>
                        <div className="line1 bg-black h-[3px] w-[1.5rem] sm:h-[4px] sm:w-[1.5rem] rounded-full"></div>
                        <div className="line2 bg-black h-[3px] w-[1.5rem] sm:h-[4px] sm:w-[1.5rem] rounded-full"></div>
                        <div className="line3 bg-black h-[3px] w-[1.5rem] sm:h-[4px] sm:w-[1.5rem] rounded-full"></div>
                    </div>
                    <div className="header">
                        <a href="http://localhost:5173/">
                            <p className="h1 text-xl pointer-cursor sm:text-2xl sm:ml-[2rem]">URBAN THREADS</p>
                        </a>
                    </div>
                    <div className="cart-search flex flex-row justify-between w-[3.5rem] sm:w-[4.5rem]">
                        <div className="search w-[1.4rem] h-[1.4rem] sm:w-[1.5rem] sm:h-[1.5rem]">
                            <a href="http://localhost:5173/cart"> <img src={cart}></img></a>
                        </div>
                        {/* <div className="cart w-[1.4rem] h-[1.4rem] sm:w-[1.5rem] sm:h-[1.5rem]">
                            <img src={search}></img>
                        </div> */}
                    </div>

                </div>
            </div>
            <div className="h-[4rem] hidden lg:block">

                <div className="Navbar">
                    <ul className="h-[4rem] grid grid-cols-12 relative">
                        <div className="col-span-3 flex justify-evenly items-center">
                            <a className="cursor-pointer" href="http://localhost:5173/">
                                <li className="">
                                    <span className="d1 text-3xl mr-2">
                                        Urban
                                    </span>
                                    <span className="d1 text-3xl ml-2">Threads</span>
                                </li>
                            </a>
                        </div>
                        <div className="col-span-7 flex justify-evenly items-center">
                            <a href="http://localhost:5173/product"> <li className="text-xl cursor-pointer">Products</li></a>
                            <a href="http://localhost:5173/order"> <li className="text-xl cursor-pointer">Orders</li></a>

                            <a href="http://localhost:5173/product/#pants"> <li className="text-xl cursor-pointer">Pants</li></a>
                            <a href="http://localhost:5173/product/#trousers"> <li className="text-xl cursor-pointer">Trouser</li></a>


                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                            {/* <div className="cart w-[1.5rem] h-[1.5rem]">
                                <img src={search}></img>
                            </div> */}

                            <div className="search w-[1.5rem] h-[1.5rem]">
                                <a href="http://localhost:5173/cart"> <img src={cart}></img></a>
                            </div>
                        </div>

                    </ul>
                </div>
            </div >
        </div >
    );
}

