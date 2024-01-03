import React, { useState } from 'react';

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
    "colors": ["Blue", "Purple", "Red", "Green", "Yellow"],
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

const RatingStars = ({ averageRating }) => {
    const totalStars = 5; // Total number of stars
    const fullStars = Math.floor(averageRating); // Number of full stars
    const decimalPart = averageRating - fullStars; // Decimal part to determine if a half-star is needed
    let hasHalfStar = decimalPart >= 0.5;
    let emptyStars = totalStars - fullStars - hasHalfStar;

    // Array to store the star elements
    const stars = [];
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={`filled-${i}`} className="text-xl fas fa-star text-amber-600" />);
    }

    // Add half star if present
    if (hasHalfStar) {
        stars.push(
            <i className="text-xl fas fa-star-half-alt text-amber-600"></i>
        );
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="text-xl far fa-star text-amber-600" />);
    }

    return (
        <div className="flex items-center gap-1">
            {stars.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
}

const Pricing = ({ realPrice, discountedPrice, discount }) => {
    return (
        <div className="flex flex-col gap-1 text-2xl">
            {discount > 0 ? (
                <div className="flex items-center gap-6">
                    <div>
                        <span className="text-red-400 line-through">{`Rs. ${realPrice}`}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold" >{`Rs. ${discountedPrice}`}</span>
                        <span className="font-bold bg-yellow-600 px-2 py-1 rounded-full text-xs">{`${discount}%`} Off</span>
                    </div>
                </div>
            ) : (
                <div>
                    <span>{`Rs. ${realPrice}`}</span>
                </div>
            )}
            <div>
                <p className="text-[0.6rem] text-gray-600"><span className="text-green-800 font-bold">*</span> Shipping calculated at checkout.</p>
            </div>
        </div>
    );
}

const ColorSelector = ({ colors }) => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-bold">COLOR</h2>
            <div className="flex space-x-2">
                {colors.map((color, index) => (
                    <button
                        key={index}
                        className={`border-2 text-sm px-4 py-1 ${selectedColor === color ? `'bg-${color.toLowerCase()}-50 border-${color.toLowerCase()}-500 text-${color.toLowerCase()}-500 font-bold'` : 'border-gray-300 bg-gray-100 text-gray-700'}`}
                        onClick={() => handleColorChange(color)}
                    >{color}</button>
                ))}
            </div>
        </div>
    );
};

const SizeSelector = ({ sizes }) => {
    const [selectedSize, setSelectedSize] = useState('');


    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-bold">SIZE</h2>
            <form className="space-x-4">
                {sizes.map((size) => (
                    <label key={size} className="inline-block">
                        <input
                            type="radio"
                            name="size"
                            value={size}
                            checked={selectedSize === size}
                            onChange={handleSizeChange}
                            className="hidden"
                        />
                        <button
                            type="button"
                            className={`border-2 text-sm p-1 w-9 h-9 ${selectedSize === size ? 'bg-purple-50 border-purple-500 text-purple-500 font-bold' : 'border-gray-300 bg-gray-100 text-gray-700'
                                }`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    </label>
                ))}
            </form>
        </div>
    );
};

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value) => {
        const newQuantity = quantity + value;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-bold">QUANTITY</h2>
            <div className="flex items-center rounded-md h-9 w-fit bg-gray-100">
                <button className="bg-gray-300 px-3 py-1 hover:bg-gray-400 active:bg-gray-500" onClick={() => handleQuantityChange(-1)}>
                    <i className="fas fa-minus font-bold"></i>
                </button>
                <span className="mx-4">{quantity}</span>
                <button className="bg-gray-300 px-3 py-1 hover:bg-gray-400 active:bg-gray-500" onClick={() => handleQuantityChange(1)}>
                    <i className="fas fa-plus font-bold"></i>
                </button>
            </div>
        </div>
    );
};

const Overview = () => {
    // let { productUUID } = useParams(767);

    // let x = fetchData();
    // console.log(x)

    return (
        <div className="p-6 font-lexend text-ut-gray">
            <div className="text-sm font-bold">
                <i className="fa fa-arrow-left" aria-hidden="true"></i><span className="px-3">BACK</span>
            </div>
            <div className="flex">
                <div className="flex-1 bg-blue-200 p-4">
                    {/* <Carousel images={data['images']} /> */}
                </div>
                <div className="flex-1 flex flex-col p-4 gap-5">
                    <div id="headings" className="flex flex-col gap-2 font-bold">
                        <h2 className="text-sm text-teal-700">{"Women".toUpperCase()}</h2>
                        <h1 className="text-2xl">{data['title']}</h1>
                        <h3 className="text-xs text-gray-800">{data['article_number']}</h3>
                    </div>
                    <div id="ratings" className="flex gap-6 font-bold text-gray-800">
                        <span>
                            <RatingStars averageRating={data['average_rating']} />
                        </span>
                        <span>
                            {data['average_rating']} | {data['total_reviews']} REVIEWS
                        </span>
                    </div>
                    <div id="price">
                        <Pricing realPrice={data['real_price']} discountedPrice={data['discounted_price']} discount={data['discount_pc']} />
                    </div>
                    <div id="metaInfo" className="text-gray-600 text-xs">
                        <p>
                            <b>UUID:</b> {data['unique_identifier']}
                        </p>
                        <p>
                            <b>SKU:</b> {data['stock_keeping_unit']}
                        </p>
                    </div>
                    <div id="color">
                        <ColorSelector colors={data['colors']} />
                    </div>
                    <div id="size">
                        <SizeSelector sizes={data['available_sizes']} />
                    </div>
                    <div id="quantity">
                        <QuantitySelector />
                    </div>
                    <div id="addToCart">
                        <button className='px-4 py-2 w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


const Body = () => {
    // let { productUUID } = useParams();

    return (
        <Overview productUUID={776} />
    )
};


function ProductOverview() {
    // let { productUUID } = useParams();

    return (
        <div>
            <Navbar />
            <Body productUUID={889} />
            <Footer />
        </div>
    );
}

export default ProductOverview;
