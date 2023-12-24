import "./bottom.css"
import pic1 from "../../assets/pic5.jpeg"
import pic2 from "../../assets/pic6.jpeg"


function Poster({ backimg }) {
    return (
        <div className="flex w-[19rem] h-[15rem] sm:h-[21rem] sm:w-[27rem] xl:h-[32rem] xl:w-[38rem]" style={{ backgroundImage: `url(${backimg})`, backgroundSize: "cover" }}>
            <div className="textbox flex flex-col justify-end mb-2 ml-4 sm:mb-8 sm:ml-6">
                <p className="text-sm text-white sm:text-md mb-3">Lorem Ipsum</p>
                <p className="text-sm text-white sm:text-md mb-3">Lorem Ipsum is simply dummy text text of the printing</p>
                <button className="mb-3 w-1/3 font-bold text-sm sm:text-md h-[13%] bg-[#f2cfcf]" style={{ fontFamily: "Inika,sanns-serif" }}>SHOP NOW</button>
            </div>
        </div>
    )
}

export default function Bottom() {
    return (
        <div className="flex flex-col items-center lg:flex-row justify-evenly">
            <Poster backimg={pic1} />
            <div className="h-10"></div>
            <Poster backimg={pic2} />
        </div>
    )
}