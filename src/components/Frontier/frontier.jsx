import "./frontier.css"
import pic1 from "../../assets/pic1.jpeg"
import pic2 from "../../assets/pic9.jpg"

export default function Frontier() {
    return (
        <div className="">
            <div className="a1 flex items-end">
                <div className="w-full mb-[1vh] absolute flex-col lg:ml-2 lg:mb-8 flex">
                    <div className="textbox">
                        <p className="a2 text-xl ml-2 font-medium sm:font-bold text-white lg:text-3xl 2xl:text-6xl">KIRENA</p>
                        <p className="a3 text-white font-medium text-sm sm:font-bold ml-2 md:text-md lg:text-lg">The most comfortable stylish pants you'll ever have.</p>
                    </div>
                    <div className="btnbox">
                        <button className="ml-2 bg-[#f2cfcf] w-[7rem] h-[2rem] lg:w-[10rem] lg:h-[4rem] text-sm text-white md:text-md lg:text-xl lg:font-bold">SHOP NOW</button>
                    </div>
                </div>
                <img className="sm:hidden" src={pic2} alt="mainpic1" />
                <img className="hidden w-full h-auto sm:block" src={pic1} alt="mainpic2" />
            </div>
        </div>
    )
}