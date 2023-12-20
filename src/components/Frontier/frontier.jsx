import "./frontier.css"
import pic1 from "../../assets/pic1.jpeg"

export default function Frontier() {
    return (
        <div className="">
            <div className="a1 flex items-end">
                <div className="w-3/4 absolute flex-col h-[6rem] flex">
                    <div className="textbox">
                        <p className="text-xl ml-2 text-white">Lorem Ipsum</p>
                        <p className="text-white text-sm ml-2">Lorem Ipsum is simply dummy text of printing</p>
                    </div>
                    <div className="btnbox">
                        <button className="ml-2 bg-[#f2cfcf] w-[7rem] h-[2rem] text-sm text-white md:text-md">SHOP NOW</button>
                    </div>
                </div>
                <img src={pic1} alt="mainpic" />
            </div>
        </div>
    )
}