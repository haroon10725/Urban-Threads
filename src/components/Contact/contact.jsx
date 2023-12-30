import "./contact.css"

export default function Contact() {
    return (
        <div className="h-[10rem] mt-12 bg-[#f2cfcf]">
            <div className="text-form-box h-full flex flex-col justify-center items-center">
                <p className="mb-1 font-bold text-lg sm:text-2xl">Unlock 10% Savings</p>
                <p className="mb-2 hidden p-2 font-semibold sm:inline-block sm:text-md">Stay in the Loop + Enjoy 10% Off Your First Order</p>
                <div className="mobtext mb-2 flex flex-col items-center sm:hidden">
                    <p className="mb-1 font-semibold text-sm">Stay in the Loop + Enjoy 10% Off Your</p>
                    <p className="font-semibold text-sm">First Order</p>
                </div>
                <div className="mb-1 form">
                    <form action="">
                        <input className="font-bold h-[2rem] p-2" name="emailaddress" type="text" placeholder="Enter email here"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}