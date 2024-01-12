import Navbar from "../components/Navbar/navbar.jsx"
import Footer from "../components/Footer/footer.jsx"
import Product from "../components/Product/product"
import Filter from "../components/Filterpanel/filter.jsx"
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
import search from "../assets/search.png"
import outlined from "@material-tailwind/react/theme/components/timeline/timelineIconColors/outlined.js"

// Importing function
import { DisplayFilter } from "../components/Filterpanel/filter.js"

// importing for time being
import "../App.css"


export default function ProductPage() {
    return (
        <div className="page">
            <Navbar />
            <div className="overflow-x-scroll mt-[1rem] h-[3rem] lg:hidden " style={{ scrollbarWidth: "none" }}>
                <div className="flex justify-center w-full">
                    <form className="w-3/4 flex rounded-full border items-center border-gray-300" action="">
                        <div className="seach w-5 h-5 ml-3">
                            <img src={search} alt="icon" />
                        </div>
                        <input className="px-3 py-2 w-5/6 rounded-full" type="text" name="searchbar" placeholder="Search" />
                        <div className="filter w-6 h-6 rounded-full mr-4 cursor-pointer">
                            <img id="filter" src={filter} onClick={DisplayFilter} alt="" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-5">
                <Filter />
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
