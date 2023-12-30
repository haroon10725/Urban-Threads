import "./navbar.css"
import cart from "../../assets/cart.png"
import search from "../../assets/search.png"

export default function Navbar() {
    return (
        <div className="h-[4rem]">
            <div className="cupboard bg-blue-200 w-full h-[0rem] transition ease-in-out delay-150"></div>
            <div className="h-[4rem] lg:hidden">
                <div className="h-[4rem] flex flex-row justify-around items-center">
                    <div className="flex h-[2rem] sm:h-[2.5rem] flex-col justify-evenly hamburg cursor-pointer">
                        <div className="line1 bg-black h-[3px] w-[1.5rem] sm:h-[4px] sm:w-[1.5rem] rounded-full"></div>
                        <div className="line2 bg-black h-[3px] w-[1.5rem] sm:h-[4px] sm:w-[1.5rem] rounded-full"></div>
                        <div className="line3 bg-black h-[3px] w-[1.5rem] sm:h-[4px] sm:w-[1.5rem] rounded-full"></div>
                    </div>
                    <div className="header">
                        <p className="h1 text-xl sm:text-2xl sm:ml-[2rem]">URBAN THREADS</p>
                    </div>
                    <div className="cart-search flex flex-row justify-between w-[3.5rem] sm:w-[4.5rem]">
                        <div className="search w-[1.4rem] h-[1.4rem] sm:w-[1.5rem] sm:h-[1.5rem]">
                            <img src={cart}></img>
                        </div>
                        <div className="cart w-[1.4rem] h-[1.4rem] sm:w-[1.5rem] sm:h-[1.5rem]">
                            <img src={search}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[4rem] hidden lg:block">

                <div className="Navbar">
                    <ul className="h-[4rem] grid grid-cols-12 relative">
                        <div className="col-span-3 flex justify-evenly items-center">
                            <li className="">
                                <span className="d1 text-3xl mr-2">
                                    Urban
                                </span>
                                <span className="d1 text-3xl ml-2">Threads</span>
                            </li>
                        </div>
                        <div className="col-span-7 flex justify-evenly items-center">
                            <li className="text-xl">Pants</li>
                            <li className="text-xl">Shirts</li>

                            <li className="text-xl">Shoes</li>
                            <li className="text-xl">Accessories</li>
                        </div>
                        <div className="col-span-2 flex justify-evenly items-center">
                            <div className="cart w-[1.5rem] h-[1.5rem]">
                                <img src={search}></img>
                            </div>

                            <div className="search w-[1.5rem] h-[1.5rem]">
                                <img src={cart}></img>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
}

