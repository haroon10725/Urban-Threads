import "./slider.css"
import pic1 from "../../assets/pic7.jpeg"
import pic2 from "../../assets/pic8.jpeg"
import pic3 from "../../assets/pic4.jpeg"

function Product({ backimg, name, cost }) {
    return (
        <div className="w-[10rem] h-[10rem] mr-4 sm:h-[14rem] sm:w-[14rem] inline-block md:h-[20rem] md:w-[20rem]">
            <div className="bg-red-200 w-full h-full product" style={{ backgroundImage: `url(${backimg})`, backgroundSize: "cover" }}>
            </div >
            <div className="flex-col justify-center items-center flex">
                <p className="s1">{name}</p>
                <p className="s1">{cost}</p>
            </div>
        </div>


    )
}

export default function SliderBox() {
    return (
        <div className="mt-[3rem] mb-[8rem] font-medium">
            <div className="head flex justify-center mb-4">
                <p className="text-lg ml-3 sm:text-xl sm:ml-0">NEW AND TRENDING</p>
            </div>
            <div className="slider overflow-x-scroll" style={{ height: "120%" }}>
                <div className="ml-4 scroller w-[350%] h-[24vh] sm:h-[36vh] md:h-[48vh]">
                    <Product backimg={pic1} name={"Safari Shirts"} cost={"$60.0"}/>
                    <Product backimg={pic2} name={"Safari Shirts"} cost={"$60.0"}/>
                    <Product backimg={pic3} name={"Safari Shirts"} cost={"$60.0"}/>
                    <Product backimg={pic3} name={"Safari Shirts"} cost={"$60.0"}/>
                    <Product backimg={pic3} name={"Safari Shirts"} cost={"$60.0"}/>
                    

                </div>
            </div>
        </div>
    )
}

