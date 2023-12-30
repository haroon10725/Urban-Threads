import "./frontier.css"
import pic1 from "../../assets/pic1.jpeg"
import pic2 from "../../assets/pic9.jpg"

export default function Frontier() {
    return (
        <div className="">
            <div className="a1 flex items-end">
                <div className="w-full mb-[1vh] absolute flex-col h-[6rem] flex">
                    <div className="textbox">
                        <p className="text-xl ml-2 font-medium sm:font-bold text-white">KIRENA</p>
                        <p className="text-white font-medium text-sm sm:font-bold ml-2 ">The most comfortable stylish pants you'll ever have.</p>
                    </div>
                    <div className="btnbox">
                        <button className="ml-2 bg-[#f2cfcf] w-[7rem] h-[2rem] text-sm text-white md:text-md">SHOP NOW</button>
                    </div>
                </div>
                <img className="sm:hidden" src={pic2} alt="mainpic1" />
                <img className="hidden sm:block" src={pic1} alt="mainpic2" />
            </div>
        </div>
    )
}