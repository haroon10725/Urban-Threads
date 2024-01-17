import "./bottom.css"
import pic1 from "../../assets/pic5.jpeg"
import pic2 from "../../assets/pic6.jpeg"


function Poster({ text, details, backimg }) {
    return (
        <div className="flex w-[19rem] h-[15rem] sm:h-[21rem] sm:w-[27rem] xl:h-[32rem] xl:w-[38rem]" style={{ backgroundImage: `url(${backimg})`, backgroundSize: "cover" }}>
            <div className="textbox flex flex-col justify-end mb-2 ml-4 sm:mb-8 sm:ml-6">
                <p className="text-sm font-bold text-white sm:text-lg md:text-xl lg:text-2xl mb-2">{text}</p>
                <p className="a2 text-sm font-bold text-white sm:text-md md:text-lg mb-3">{details}</p>
                <div className="btnbox">
                    <button className="bg-[#f2cfcf] w-[7rem] h-[2rem] lg:w-[10rem] lg:h-[4rem] text-sm text-white md:text-md lg:text-xl lg:font-bold">SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default function Bottom() {
    return (
        <div className="flex flex-col items-center lg:flex-row justify-evenly">
            <Poster backimg={pic1} details={"Where comforts meet style and warmth"} text={"WINTER SEASON"} />
            <div className="h-10"></div>
            <Poster backimg={pic2} details={"Granting elegance to your wardrobe"} text={"THE BASIC COLLECTION"} />
        </div>
    )
}