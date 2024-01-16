import Navbar from '../components/Navbar/navbar.jsx';
import Footer from '../components/Footer/footer.jsx';
import { useState } from "react";




function Payment({ match }) {
    const [price, setPrice] = useState(null);

    const makePayment = () => {
        alert("Purchase completed")
    }

    return (
        <div>
            <Navbar />
            <div className="px-8 lg:px-16 xl:px-32 py-14">
                <div className="flex flex-col-reverse lg:flex-row justify-between gap-16 lg:gap-4">
                    <form className="flex flex-col w-full lg:w-2/4 gap-6">
                        <div className="py-8">
                            <h1 className="font-bold text-ut-gray text-xl">A few strides away from completion ...</h1>
                        </div>
                        <div className="flex flex-col gap-12">
                            <div>
                                <h1 className="font-bold text-lg text-purple-600">
                                    <span className="pr-4 text-center">
                                        <i className="fas fa-1 text-xs text-white bg-purple-700 py-2 px-3"></i>
                                    </span>
                                    Personal Information
                                </h1>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-16">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="text-xs text-pink-800">First Name</label>
                                        <input className="text-gray-900 p-2 bg-gray-200 py-2 border-b-2 border-pink-800 focus:outline-none focus:bg-gray-300" required />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="text-xs text-pink-800">Last Name</label>
                                        <input className="text-gray-900 p-2 bg-gray-200 py-2 border-b-2 border-pink-800 focus:outline-none focus:bg-gray-300" required />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-pink-800">Email</label>
                                    <input className="text-gray-900 p-2 bg-gray-200 py-2 border-b-2 border-pink-800 focus:outline-none focus:bg-gray-300" type="email" required />
                                </div>

                                <div className="flex gap-16">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="text-xs text-pink-800">Address</label>
                                        <input className="text-gray-900 p-2 bg-gray-200 py-2 border-b-2 border-pink-800 focus:outline-none focus:bg-gray-300" required />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="text-xs text-pink-800">City</label>
                                        <input className="text-gray-900 p-2 bg-gray-200 py-2 border-b-2 border-pink-800 focus:outline-none focus:bg-gray-300" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-12">
                            <div>
                                <h1 className="font-bold text-lg text-purple-600">
                                    <span className="pr-4 text-center">
                                        <i className="fas fa-2 text-xs text-white bg-purple-700 py-2 px-3"></i>
                                    </span>
                                    Payment Information
                                </h1>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-pink-800">Card Number</label>
                                    <input className="text-gray-900 p-2 bg-gray-200 py-2 border-b-2 border-pink-800 focus:outline-none focus:bg-gray-300" pattern="\d{4}-\d{4}-\d{4}-\d{4}" required />
                                </div>
                                <div className="flex gap-16">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="text-xs text-pink-800">Expiry Date</label>
                                        <div className="flex gap-3">
                                            <input className="text-gray-900 p-2 bg-gray-200 py-2 border-b-2 border-pink-800 focus:outline-none focus:bg-gray-300" type="number" min={1} max={12} required placeholder="MM" />
                                            <input className="text-gray-900 p-2 bg-gray-200 py-2 border-b-2 border-pink-800 focus:outline-none focus:bg-gray-300" type="number" min={2000} max={2099} required placeholder="YY" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="text-xs text-pink-800">CVV/CVC</label>
                                        <input className="text-gray-900 p-2 bg-gray-200 py-2 border-b-2 border-pink-800 focus:outline-none focus:bg-gray-300" pattern="[0-9]{3}" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" onClick={makePayment} className='px-4 py-2 w-full bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white'>Complete Purchase</button>
                    </form> 
                    <div className="flex flex-col w-full lg:w-1/3 bg-yellow-50 border-2 border-amber-500 px-16 py-12 justify-between gap-24">
                        <div className="text-center">
                            <h1 className="font-bold text-neutral-700 text-2xl">YOUR ORDER SUMMARY</h1>
                        </div>
                        <table className="bg-white text-sm text-neutral-700">
                            <tr className="border-2 border-pink-800">
                                <td className="p-3 flex justify-between">
                                    <span>Subtotal</span> <span>PKR 400</span>
                                </td>
                            </tr>
                            <tr className="border-2 border-pink-800">
                                <td className="p-3 flex justify-between">
                                    <span>Discount</span> <span>PKR 40</span>
                                </td>
                            </tr>
                            <tr className="bg-purple-100 text-indigo-800 border-2 border-pink-800 font-bold">
                                <td className="p-3 flex justify-between">
                                    <span>Total</span> <span>PKR 360</span>
                                </td>
                            </tr>
                        </table>
                        <div className="flex flex-col gap-8 text-[0.65rem] text-neutral-700 text-justify">
                            <div>
                                <ol className="flex flex-col gap-1">
                                    <li><strong>Free Shipment:</strong> Enjoy complimentary shipping on all orders.</li>
                                    <li><strong>Return Policy:</strong> Returns accepted within 36 days of delivery. Items must be unused and in original packaging.</li>
                                    <li><strong>Exchange Policy:</strong> Exchange eligible items within 36 days. Product must be unused and in its original condition.</li>
                                    <li><strong>Mediation Role:</strong> In cases where a return/exchange request is denied by any brand, we hold no liability for the decision made by the company.</li>
                                </ol>
                            </div>
                            <div>
                                <p><strong>Important Notice:</strong> This checkout is for project demonstration only. No actual payments will be processed; entered information is for dummy use. Personal data is stored securely in MongoDB, but we cannot guarantee absolute security. By proceeding, you agree that this platform is not for real transactions. We assume no liability for inaccuracies, interruptions, or any inconvenience caused. Your use of this platform signifies understanding and acceptance of these terms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    );
}

export default Payment;
