export default function Order({ name, verification, pending, dispatched }) {
    return (
        <div className="grid grid-cols-6 border border-gray-400 h-[8vh]">
            <div className="flex justify-start items-center category col-span-2">
                <p className="a1 ml-4">{name}</p>
            </div>
            <div className="flex justify-center items-center verification">
                <p className="a1">{verification}</p>
            </div>
            <div className="flex justify-center items-center pending">
                <p className="a1">{pending}</p>
            </div>
            <div className="flex justify-center items-center dispatched">
                <p className="a1">{dispatched}</p>
            </div>
            <div className="flex justify-center items-center action">
                <div className="flex w-1/6 justify-evenly cursor-pointer">
                    <p className="a1 font-bold text-2xl">.</p>
                    <p className="a1 font-bold text-2xl">.</p>
                    <p className="a1 font-bold text-2xl">.</p>
                </div>
            </div>

        </div>
    )
}