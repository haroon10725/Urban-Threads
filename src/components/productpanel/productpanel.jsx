import "./productpanel.css"
import "./productpanel.js"

// importing functions
import Clicked from "./productpanel.js"

export function Productpanel() {
    return (
        <div className="panel w-full ml-5 lg:grid lg:grid-cols-1 hidden lg:h-full">
            <div className="price border-black border-b border-gray-500">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-bold font-medium">Price</p>
                        <p className="c1 text-2xl text-gray-700 rotate-180 cursor-pointer" onClick={() => Clicked(0)}>^</p>
                    </div>
                    <div className="c2 flex flex-col my-4 hidden">
                        <div className="reset">
                            <p className="text-md underline underline-offset-4 font-medium decoration-gray-300 decoration-[1.5px] cursor-pointer">Reset</p>
                        </div>
                        <form className="mt-3" action="">
                            <input className="w-5 h-5 text-black mr-3 my-2" type="checkbox" />
                            <label className="" htmlFor="">$20-$40</label>
                            <br />
                            <input className="w-5 h-5 text-black mr-3 my-2" type="checkbox" />
                            <label className="" htmlFor="">$40-$60</label>

                        </form>
                    </div>
                </div>
            </div>
            <div className="product-type border-black border-b border-gray-500">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-bold font-medium">Product Type</p>
                        <p className="c1 text-2xl text-gray-700 rotate-180 cursor-pointer" onClick={() => Clicked(1)}>^</p>
                    </div>
                    <div className="c2 flex flex-col my-4 hidden">
                        <div className="reset">
                            <p className="text-md underline underline-offset-4 font-medium decoration-gray-300 decoration-[1.5px] cursor-pointer">Reset</p>
                        </div>
                        <form className="mt-3" action="">
                            <input className="w-5 h-5 text-black mr-3 my-2" type="checkbox" />
                            <label className="" htmlFor="">Pants</label>
                            <br />
                            <input className="w-5 h-5 text-black mr-3 my-2" type="checkbox" />
                            <label className="" htmlFor="">Shorts</label>
                            <br />
                            <input className="w-5 h-5 text-black mr-3 my-2" type="checkbox" />
                            <label className="" htmlFor="">Jackets</label>
                            <br />
                            <input className="w-5 h-5 text-black mr-3 my-2" type="checkbox" />
                            <label className="" htmlFor="">Shirts</label>
                            <br />
                            <input className="w-5 h-5 text-black mr-3 my-2" type="checkbox" />
                            <label className="" htmlFor="">Shorts</label>

                        </form>
                    </div>
                </div>
            </div>
            <div className="color border-black border-b border-gray-500">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-bold font-medium">Color</p>
                        <p className="c1 text-2xl text-gray-700 rotate-180 cursor-pointer" onClick={() => Clicked(2)}>^</p>
                    </div>
                    <div className="c2 flex flex-col my-4 hidden">
                        <div className="reset">
                            <p className="text-md underline underline-offset-4 font-medium decoration-gray-300 decoration-[1.5px] cursor-pointer">Reset</p>
                        </div>
                        <form className="mt-3" action="">
                            <input className="w-5 h-5 text-black mr-3 my-2" type="checkbox" />
                            <label className="" htmlFor="">Army-Green</label>
                            <br />
                            <input className="w-5 h-5 text-black mr-3 my-2" type="checkbox" />
                            <label className="" htmlFor="">Navy-Blue</label>
                            <br />
                            <input className="w-5 h-5 text-black mr-3 my-2" type="checkbox" />
                            <label className="" htmlFor="">Beige-White</label>


                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export function FakePanel() {
    return (
        <div className="panel w-full ml-5 lg:grid lg:grid-cols-1 hidden lg:h-full">
            
        </div>
    )
}
