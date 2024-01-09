import Navbar from "../components/Navbar/navbar.jsx"
import Footer from "../components/Footer/footer.jsx"
import Product from "../components/Product/product"
import Refiner from "../components/Refiner/refiner.jsx"
import { Productpanel, FakePanel } from "../components/productpanel/productpanel.jsx"

// importing all pics
import pic1 from "../assets/pic7.jpeg"
import pic2 from "../assets/pic3.jpeg"
import pic3 from "../assets/pic2.jpeg"
import pic4 from "../assets/pic8.jpeg"
import sort from "../assets/sorter.png"
import filter from "../assets/filter.png"
import color from "../assets/color.png"
import size from "../assets/size.png"
import starpic from "../assets/star.png"

export default function ProductPage() {
    return (
        <div className="page">
            <Navbar />
            <div className="overflow-x-scroll mt-[1rem] h-[3rem] lg:hidden " style={{ scrollbarWidth: "none" }}>
                <div className="flex justify-center w-full">
                    <form className="w-3/4" action="">
                        <input className="rounded-full border border-yellow-500 px-3 py-2 w-full" type="text" name="searchbar" placeholder="Search" />
                    </form>
                </div>
            </div>
            <div className="flex flex-col items-center mt-[1rem]">
                <Category header={"Pants"} />
                <div className="flex">
                    <Productpanel />
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                        <Product pic={starpic} prodpic={pic1} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic1} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic1} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic1} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic1} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic1} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                    </div>
                </div>
                <Category header={"Trousers"} />
                <div className="flex">
                    <FakePanel />
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                        <Product pic={starpic} prodpic={pic2} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic2} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic2} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic2} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic2} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic2} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                    </div>
                </div>
                <Category header={"Shirts"} />
                <div className="flex">
                    <FakePanel />
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                        <Product pic={starpic} prodpic={pic4} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic4} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic4} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic4} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic4} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                        <Product pic={starpic} prodpic={pic4} productname={"Gelyu Harem Pants-Black"} reviews={"942"} newprice={"$49.95"} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

function Category({ header }) {
    return (
        <div className="header flex justify-start lg:justify-center lg:mb-[4rem] w-5/6 xl:w-[89%] mb-5">
            <p className="text-2xl lg:text-4xl">{header}</p>
        </div>
    )
}
