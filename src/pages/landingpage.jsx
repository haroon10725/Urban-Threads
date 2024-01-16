import Navbar from "../components/Navbar/navbar.jsx";
import Frontier from "../components/Frontier/frontier.jsx";
import Slider from "../components/SliderBox/slider.jsx"
import Categories from "../components/Category/category.jsx";
import Bottom from "../components/Bottom/bottom.jsx";
import Contact from "../components/Contact/contact.jsx";
import Footer from "../components/Footer/footer.jsx";


export default function MainPage() {
    return (
        <Page />
    )
}

function Page() {
    return (
        <div className="root">
            <Navbar />
            <Frontier />
            <Slider />
            <Categories />
            <Bottom />
            <Contact />
            <Footer />
        </div>
    )
}
