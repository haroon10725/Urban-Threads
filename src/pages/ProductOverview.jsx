import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar/navbar.jsx';
import Footer from '../components/Footer/footer.jsx';
import fetchData from '../util/API.jsx';

// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


const data = {
    "title": "Unstitched Light Brown Printed Lawn 3 Piece",
    "article_number": "EWU23A1",
    "variation_code": "26318",
    "unique_identifier": "EWU23A1-26318",
    "stock_keeping_unit": "251533",
    "short_description": [],
    "real_price": 4590.0,
    "discounted_price": 2754.0,
    "discount_pc": 40.0,
    "available_sizes": ['XL', 'L'],
    "images": [
        "https://edenrobe.com/cdn/shop/products/23_W_WomanUnStitchedAllure_EWU23A1-26318_1_9228c0fe-bd11-4810-a97a-a421af8171b5.jpg?v=1701506748",
        "https://edenrobe.com/cdn/shop/products/23_W_WomanUnStitchedAllure_EWU23A1-26318_2.jpg?v=1701506748",
        "https://edenrobe.com/cdn/shop/products/23_W_WomanUnStitchedAllure_EWU23A1-26318_3.jpg?v=1701506748",
        "https://edenrobe.com/cdn/shop/products/23_W_WomanUnStitchedAllure_EWU23A1-26318_4.jpg?v=1701506748",
        "https://edenrobe.com/cdn/shop/products/23_W_WomanUnStitchedAllure_EWU23A1-26318_5.jpg?v=1701506748",
        "https://edenrobe.com/cdn/shop/products/23_W_WomanUnStitchedAllure_EWU23A1-26318_6.jpg?v=1701506748"
    ],
    "total_reviews": 14,
    "average_rating": 3.2,
    "reviews": [
        {
            "rating": 3,
            "name": "Clarence Herrera",
            "gender": "male",
            "nationality": "DK",
            "comment": "Decent material, but the fit wasn't perfect. Delivery was within the estimated time."
        },
        {
            "rating": 5,
            "name": "Aaron Little",
            "gender": "male",
            "nationality": "AU",
            "comment": "An elegant addition to the wardrobe. The fabric's quality and resilience were commendable. The immaculate fit and prompt delivery made it an unparalleled choice. Would definitely recommend."
        },
        {
            "rating": 5,
            "name": "Russell Mendoza",
            "gender": "male",
            "nationality": "SA",
            "comment": "Purchased this attire, and it was an absolute delight. The fabric's softness and durability were impressive. The fit was flawless, a true wardrobe gem."
        },
        {
            "rating": 2,
            "name": "Henry Soto",
            "gender": "male",
            "nationality": "NZ",
            "comment": "Fair fabric, but the sizing was inconsistent. Shipping took longer than anticipated."
        },
        {
            "rating": 4,
            "name": "Nicholas Douglas",
            "gender": "male",
            "nationality": "KR",
            "comment": "An elegant wardrobe addition. Trendy fabric suited for the season. Despite fit tweaks needed, the quality and delivery were commendable."
        },
        {
            "rating": 3,
            "name": "Eric Carr",
            "gender": "male",
            "nationality": "MX",
            "comment": "The fabric was alright, but the item seemed slightly less durable. Customer service was responsive."
        },
        {
            "rating": 1,
            "name": "Kenneth Owens",
            "gender": "male",
            "nationality": "PK",
            "comment": "Clothing arrived with seams so poorly executed that they unraveled after minimal wear. Fabric felt coarse and scratchy. Support's indifference amplified the frustration."
        },
        {
            "rating": 3,
            "name": "Vernon Mckinney",
            "gender": "male",
            "nationality": "SG",
            "comment": "Acceptable fabric, but the item felt slightly uncomfortable. Delivery was on time."
        },
        {
            "rating": 4,
            "name": "Jeffery Mitchell",
            "gender": "male",
            "nationality": "SG",
            "comment": "The fabric felt like a warm hug, although the fit was slightly loose. Quick delivery made the overall experience delightful."
        },
        {
            "rating": 5,
            "name": "Kurt Wheeler",
            "gender": "male",
            "nationality": "NO",
            "comment": "This clothing piece felt like a trendsetting choice. The fabric's smoothness and durability were commendable. The flawless fit and rapid delivery made it exceptional."
        },
        {
            "rating": 3,
            "name": "Virgil Baker",
            "gender": "male",
            "nationality": "TR",
            "comment": "Decent material, but the seams were slightly uneven. Customer service was reasonably helpful."
        },
        {
            "rating": 1,
            "name": "Guy Martinez",
            "gender": "male",
            "nationality": "GB",
            "comment": "Received a garment that tore easily; the material seemed deceptively cheap. Customer service exhibited no willingness to address or resolve the glaring issues."
        },
        {
            "rating": 4,
            "name": "Seth Ortiz",
            "gender": "male",
            "nationality": "ES",
            "comment": "This addition to the wardrobe exuded sophistication. Chic fabric fitting for the weather. Despite minor fit issues, timely delivery added convenience."
        },
        {
            "rating": 2,
            "name": "Anthony Davidson",
            "gender": "male",
            "nationality": "FI",
            "comment": "Acceptable fabric, but the fit was awkward. Customer service was somewhat responsive."
        }
    ]
}

const Carousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <div>
            <h2>Image Carousel</h2>
            <Slider {...settings}>
                {images.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const Overview = () => {
    let { productUUID } = useParams();

    let x = fetchData();
    console.log(x)

    return (
        <div>
            Work In Progress ...
            <div className="flex">
                <div className="flex-1 bg-blue-200 p-4">
                    {/* <Carousel images={data['images']} /> */}
                </div>
                <div className="flex-1 bg-green-200 p-4">
                    <h2>{"Women"}</h2>
                    <h1>{data['title']}</h1>
                    <p>{data['unique_identifier']}</p>
                    <p>{data['stock_keeping_unit']}</p>
                    <p>{data['average_rating']}</p>
                    <p>{data['total_reviews']}</p>
                    <p>{data['real_price']}</p>
                    <p>{data['discount_pc']}</p>
                    <p>{data['discounted_price']}</p>
                    <p>{data['short_description']}</p>
                    <h3>Color</h3>
                    <div>
                    </div>
                    <h3>Sizes</h3>
                    <div>
                        {
                            data['available_sizes'].map((size) => (
                                <p>{size}</p>
                            ))
                        }
                    </div>
                    <button className='bg-orange-700 text-white px-4 py-2 rounded'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}


const Body = () => {
    let { productUUID } = useParams();

    return (
        <Overview productUUID={productUUID} />
    )
};


function ProductOverview() {
    let { productUUID } = useParams();

    return (
        <div>
            <Navbar />
            <Body productUUID={productUUID} />
            <Footer />
        </div>
    );
}

export default ProductOverview;
