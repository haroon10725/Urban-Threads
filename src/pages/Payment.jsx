import Navbar from '../components/Navbar/navbar.jsx';
import Footer from '../components/Footer/footer.jsx';


function Payment({ match }) {
    return (
        <div>
            <Navbar />
            <div className="px-32 py-14">
                <div className="py-8">
                    <h1 className="font-bold text-ut-gray text-xl">A few strides away from completion ...</h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-between">
                    <form className="flex flex-col w-full lg:w-2/4 gap-6">
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
                        <button type="submit" className='px-4 py-2 w-full bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white'>Complete Purchase</button>
                    </form>
                    <div className="flex flex-col w-full lg:w-1/3 bg-blue-100">
                        <div>
                            <h1>Your Order Summary</h1>
                        </div>
                        <div>

                            <div>
                                <div>
                                    <span>Subtotal</span> <span>PKR 400</span>
                                </div>
                                <div>
                                    <span>Discount</span> <span>PKR 40</span>
                                </div>
                            </div>
                            <div>
                                <span>Total</span> <span>PKR 440</span>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li><strong>Free Shipment:</strong> Enjoy complimentary shipping on all orders.</li>
                                <li><strong>Return Policy:</strong> Returns accepted within 36 days of delivery. Items must be unused and in original packaging.</li>
                                <li><strong>Exchange Policy:</strong> Exchange eligible items within 36 days. Product must be unused and in its original condition.</li>
                                <li><strong>Mediation Role:</strong> In cases where a return/exchange request is denied by any brand, we hold no liability for the decision made by the company.</li>
                            </ul>
                        </div>
                        <div>
                            <p><strong>Important Notice:</strong> This checkout is for project demonstration only. No actual payments will be processed; entered information is for dummy use. Personal data is stored securely in MongoDB, but we cannot guarantee absolute security. By proceeding, you agree that this platform is not for real transactions. We assume no liability for inaccuracies, interruptions, or any inconvenience caused. Your use of this platform signifies understanding and acceptance of these terms.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Payment;
