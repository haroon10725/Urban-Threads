// importing external functions
import { Clicked } from "./filter.js"
import { CloseFilter } from "./filter.js"
import { uncheckAll } from "./filter.js"
import { Checkfilters } from "./filter.js"

// importing external files
import "./filter.css"
import "./filter.js"

import down from "../../assets/down.png"


export default function Filter({ type, values, icon }) {
    return (
        <div>
            <div className="flex filter-panel absolute justify-center transition ease-in-out delay-150 duration-500 opacity-0">
                <div className="w-5/6 h-[36rem] border border-gray-300 bg-white z-50 p-2">
                    <div className="flex justify-between m-2">
                        <div className="FilterBy">
                            <p className="a1 text-3xl font-medium">Filter By</p>
                        </div>
                        <div className="cross" onClick={CloseFilter}>
                            <p className="a1 text-3xl cursor-pointer text-gray-700">✖</p>
                        </div>
                    </div>
                    <p className="a3 tracking-wide ml-2">Category</p>
                    <div className="categ-list flex flex-col ml-2 my-4 rounded-lg border-gray-400 border">
                        <div className="flex items-center justify-between h-[2.5rem] px-2 h-full w-[96%]">
                            <p className="a2 text-sm text-gray-600 font-extralight">Select Categories</p>
                            <div className="c1 w-5 h-5 cursor-pointer items-center flex h-full" onClick={Clicked}>
                                <img src={down} alt="" />
                            </div>
                        </div>
                        <div className="hidden categ">
                            <form className="mt-1 ml-2" action="">
                                <input className="p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                <label className="a1" htmlFor="">Men</label>

                                <br />
                                <input className="p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                                <label className="a1" htmlFor="">Boys</label>

                            </form>
                        </div>
                    </div>


                    <div className="price mx-2 my-5">
                        <div className="pricetag">
                            <p className="a3 text-gray-900">Price (pkr)</p>
                        </div>
                        <form className="mt-3 flex justify-evenly" action="">
                            {/* <label className="a" htmlFor="">Min Price</label> */}
                            <input className="min p-3 h-8 border border-gray-400 rounded-md w-[45%]" placeholder="Min" type="text" />

                            <br />
                            <input className="max p-3 h-8 border border-gray-400 rounded-md w-[45%]" placeholder="Max" type="text" />
                            {/* <label className="a" htmlFor="">2000-3500 pkr</label> */}

                        </form>
                    </div>
                    <div className="size mx-2 my-5">
                        <div className="pricetag">
                            <p className="a3 text-gray-900">Size</p>
                        </div>
                        <form className="mt-1" action="">
                            <input className="p-3 h-5 w-5 border border-gray-400 mr-3 my-1  rounded-md" type="checkbox" />
                            <label className="a1" htmlFor="">XS</label>

                            <br />
                            <input className="p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                            <label className="a1" htmlFor="">SM</label>
                            <br />
                            <input className="p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                            <label className="a1" htmlFor="">MD</label>
                            <br />
                            <input className="p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                            <label className="a1" htmlFor="">LG</label>
                            <br />
                            <input className="p-3 h-5 w-5 border border-gray-400 mr-3 my-1 rounded-md" type="checkbox" />
                            <label className="a1" htmlFor="">XL</label>


                        </form>
                    </div>

                    <div className="price mx-2 my-5">
                        <div className="pricetag">
                            <p className="a3 text-gray-900">Rating <span className="a3 text-gray-400 text-xs">(avg)</span></p>
                        </div>
                        <form className="mt-3 flex" action="">
                            {/* <label className="a" htmlFor="">Min Price</label> */}
                            <input className="p-3 h-8 border border-gray-400 rounded-md w-[45%]" placeholder="Rating" type="text" />
                        </form>
                    </div>
                    <div className="clear-apply mx-2 flex justify-evenly">
                        <button className="text-yellow-400 w-[45%] h-8 border-yellow-300 border rounded-2xl" onClick={uncheckAll}>Clear Filter</button>
                        <button className="a3 text-white rounded-2xl bg-yellow-300 h-8 w-[45%]" onClick={Checkfilters}>Apply</button>
                    </div>

                </div>
            </div>
        </div>
    )
}