export default function Refiner({type, values,icon}){
    return(
        <div className="flex border border-gray-400 items-center justify-evenly h-[2.4rem] w-[7rem] cursor-pointer">
            <div className="icon w-1/6">
                <img src={icon} alt="icon" />
            </div>
            <div className="textbox">
                <p className="text-xl">{type}</p>
            </div>
        </div>
    )
}