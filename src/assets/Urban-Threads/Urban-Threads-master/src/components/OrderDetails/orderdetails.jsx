

export default function OrderDetails() {
    return (
        <div className="flex justify-center h-[8vh]">
            <div className="category-labels w-[95%] border border-gray-400 grid grid-cols-6">
                <div className="flex justify-start items-center category col-span-2">
                    <p className="ml-4">CATEGORY</p>
                </div>
                <div className="flex justify-center items-center verification">
                    <p className="a1">VERIFICATION</p>
                </div>
                <div className="flex justify-center items-center pending">
                    <p className="a1">PENDING</p>
                </div>
                <div className="flex justify-center items-center dispatched">
                    <p className="a1">DISPATCHED</p>
                </div>
                <div className="flex justify-center items-center action">
                    <p className="a1">ACTION</p>
                </div>
            </div>
        </div>
    )
}