import Navbar from "../components/Navbar/navbar.jsx"
import Footer from "../components/Footer/footer.jsx"
import Labels from "../components/EntryLabels/entrylabels.jsx"
import CartPanel from "../components/Cartpanel/cartpanel.jsx"
import Entry from "../components/Entries/entry.jsx"
import pic2 from "../assets/pic2.jpeg"

export default function CartPage() {
    return (
        <Page />
    )
}

function Page() {
    return (
        <div className="root">
            <Navbar />
            <br />
            <div className="ml-[3rem] head mb-3">
                <p className="text-2xl mx-2 mb-2">Shopping Cart</p>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[75%]">
                    <Labels />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                    <Entry productimg={pic2} price={60.72} quantity={2} subtotal={2000} />
                </div>
                <CartPanel />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}