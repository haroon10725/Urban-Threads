// importing icons
import left from "../../assets/left.png"
import arrow from "../../assets/arrow.png"

export default function Pagination() {
    return (
        <div className="pagination flex items-center">
            <div className="left cursor-pointer shadow-md w-6 h-6 bg-gray-100 flex justify-center items-center mr-3">
                {/* <p className="rotate-[-90deg] text-2xl text-blue-600">^</p> */}
                <img className="w-5 h-5" src={left} alt="" />
            </div>
            <div className="pagebox mx-1 border border-gray-600 w-10 h-10 flex justify-center items-center">
                <p className="font-bold text-gray-600">1</p>
            </div>

            <div className="right shadow-md cursor-pointer w-6 h-6 flex bg-gray-100 justify-center items-center ml-3">
                {/* <p className="text-2xl rotate-90 text-blue-600">^</p> */}
                <img className="w-5 h-5 rotate-[180deg]" src={left} alt="" />
            </div>
        </div>
    )
}