import "./category.css"
import pic1 from "../../assets/pic4.jpeg"
import pic2 from "../../assets/pic3.jpeg"
import pic3 from "../../assets/pic2.jpeg"
import pic4 from "../../assets/pic7.jpeg"


function Category({ backimg, text }) {
    return (
        <div className="picbox">
            <div className="flex items-end img h-[10rem] w-[8rem] sm:h-[14rem] sm:w-[9rem] md:h-[20rem] md:w-[15rem] lg:h-[27rem] lg:w-[22rem]" style={{ backgroundImage: `url(${backimg})`, backgroundSize: "cover" }}>
                <p className="text-xl sm:text-2xl font-bold text-white ms-3">{text}</p>
            </div>
        </div>)

}

export default function Categories() {
    return (
        <div className="flex flex-col mb-[5rem] xl:flex-row">
            <div className="flex justify-evenly xl:w-[50%] xl:justify-around">
                <Category backimg={pic1} text={'BOTTOMS'} />
                <Category backimg={pic2} text={'TOPS'} />
            </div>
            <div className="mt-[3rem] flex justify-evenly xl:mt-[0rem] xl:w-[50%] xl:justify-around">
                <Category backimg={pic3} text={"NEWS"} />
                <Category backimg={pic4} text={"RESTOCK"} />
            </div>
        </div>
    )
}

