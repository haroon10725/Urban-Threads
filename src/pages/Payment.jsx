import Navbar from '../components/Navbar/navbar.jsx';
import Footer from '../components/Footer/footer.jsx';

function Payment({ match }) {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <h1>A few strides away from completion ...</h1>
                </div>
                <div className="flex">
                    <form className="flex flex-col w-2/3 bg-red-100 gap-6">
                        <div className="flex flex-col gap-4">
                            <div>
                                <h1>Personal Information</h1>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2">
                                    <div className="flex flex-col gap-1">
                                        <label>First Name</label>
                                        <input />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Last Name</label>
                                        <input />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label>Email</label>
                                    <input />
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex flex-col gap-1">
                                        <label>Address</label>
                                        <input />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>City</label>
                                        <input />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <h1>Payment Information</h1>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label>Card Number</label>
                                <input />
                            </div>
                            <div className="flex gap-2">
                                <div className="flex flex-col gap-1">
                                    <label>Expiry Date</label>
                                    <input />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label>CVC/CVV</label>
                                    <input />
                                </div>
                            </div>
                        </div>
                        <button type="submit">Complete Purchase</button>
                    </form>
                    <div className="flex w-1/3 bg-blue-100">
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Payment;
