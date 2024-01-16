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
            <div className="ml-[1rem] lg:ml-[3rem] head mb-3">
                <p className="text-2xl mx-2 mb-2 hidden lg:block">Shopping Cart</p>
                <p className="text-2xl mb-1 lg:hidden">Cart</p>
            </div>
            <div className="flex">
                <div className="w-full flex flex-col lg:w-[75%]">
                    <Labels />
                    <Entry productimg={pic2} name={"Shinu Sleeve Shirt"} qty={"1"} quantity={"Color: Gray"} subtotal={"$39.95"} price={"$39.95"} colour={"Gray"} size={"Size: XS(US)/ M(Japan)"} />
                </div>
                <CartPanel />
            </div>
            <div className="footer relative top-[34.5rem]">
                <Footer />
            </div>
        </div>
    )
}
