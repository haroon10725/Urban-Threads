
import Pagination from "../Pagination/pagination"

export default function OrderLabels() {
    return (
        <div className="flex h-full justify-between items-center w-[98%]">
            <div className="">
                <p className="a1 font-bold text-xl flex justify-center items-center">Today's Order</p>
            </div>
            <Pagination />
        </div>
    )
}
