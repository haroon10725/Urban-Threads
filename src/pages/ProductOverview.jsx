import React, { useState } from 'react';


import Navbar from '../components/Navbar/navbar.jsx';
import Footer from '../components/Footer/footer.jsx';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = {
    "title": "Men'S Dark Navy Blazer",
    "article_number": "EMTB22W",
    "variation_code": "6771",
    "unique_identifier": "EMTB22W-6771",
    "stock_keeping_unit": "231518",
    "short_description": [
        "Men's Blazer",
        "Slim Fit",
        "Cotton Fabric",
        "Printed Inner Satin",
        "Fancy Buttons"
    ],
    "real_price": 12991.0,
    "discounted_price": 9743.0,
    "discount_pc": 25.0,
    "colors": ["Grey", "Black"],
    "available_sizes": [
        "40",
        "42",
        "44"
    ],
    "images": [
        "https://edenrobe.com/cdn/shop/products/22_M_MenBlazer_EMTB22-6771_1_70ea60d6-fae4-4065-a634-71044883da49.jpg?v=1701517101",
        "https://edenrobe.com/cdn/shop/products/22_M_MenBlazer_EMTB22-6771_2_e02172be-7150-41a8-a6cb-fa9331971336.jpg?v=1701517101",
        "https://edenrobe.com/cdn/shop/products/22_M_MenBlazer_EMTB22-6771_3_8d2fac6d-a8e7-4c08-9143-328a861d51e1.jpg?v=1701517101",
        "https://edenrobe.com/cdn/shop/products/22_M_MenBlazer_EMTB22-6771_4_24874e26-228f-4fcd-b78d-3ebf241eb82f.jpg?v=1701517101",
        "https://edenrobe.com/cdn/shop/products/22_M_MenBlazer_EMTB22-6771_5_f43b52d2-9956-4be6-86fa-eb85b1d284a2.jpg?v=1701517101",
        "https://edenrobe.com/cdn/shop/products/22_M_MenBlazer_EMTB22-6771_6.jpg?v=1701517101"
    ],
    "total_reviews": 12,
    "average_rating": 3.2,
    "reviews": [
        {
            "rating": 2,
            "name": "Jared Clark",
            "gender": "male",
            "nationality": "NL",
            "comment": "Acceptable fabric, but the fit was awkward. Customer service was somewhat responsive."
        },
        {
            "rating": 3,
            "name": "Mike Castro",
            "gender": "male",
            "nationality": "NL",
            "comment": "The fabric was alright, but the item seemed slightly less durable. Customer service was responsive."
        },
        {
            "rating": 1,
            "name": "Erik Gonzalez",
            "gender": "male",
            "nationality": "GB",
            "comment": "Received an item with uneven seams and an odd, lingering odor. Fabric quality was substandard\u2014thin and prone to tearing. Customer support's apathy was disheartening."
        },
        {
            "rating": 5,
            "name": "Ricky Rodriquez",
            "gender": "male",
            "nationality": "NL",
            "comment": "The fabric felt heavenly against the skin. The quality and feel were exceptional. The fit was impeccable, earning its place as an instant favorite. Definitely recommend!"
        },
        {
            "rating": 4,
            "name": "Derek Chapman",
            "gender": "male",
            "nationality": "MX",
            "comment": "Presented this attire as a gift and it was adored. The fabric's softness was lauded despite a snug fit. The durability and style won hearts."
        },
        {
            "rating": 3,
            "name": "Brent Ruiz",
            "gender": "male",
            "nationality": "DK",
            "comment": "The quality was okay, but the fit wasn't as expected. Delivery was slightly delayed."
        },
        {
            "rating": 1,
            "name": "Morris Lambert",
            "gender": "male",
            "nationality": "ES",
            "comment": "Fabric quality was incredibly disappointing, resembling a flimsy costume. Sizes were far from accurate, rendering the fit impossible. Customer support was frustratingly unyielding."
        },
        {
            "rating": 2,
            "name": "David Harper",
            "gender": "male",
            "nationality": "AU",
            "comment": "Mediocre fabric, and the sizing was a bit small. Delivery was delayed."
        },
        {
            "rating": 5,
            "name": "Bernard Jones",
            "gender": "male",
            "nationality": "AU",
            "comment": "The fabric felt heavenly against the skin. The quality and feel were exceptional. The fit was impeccable, earning its place as an instant favorite. Definitely recommend!"
        },
        {
            "rating": 5,
            "name": "Ben Mason",
            "gender": "male",
            "nationality": "AE",
            "comment": "The comfort from this attire felt personalized. The fabric's quality and texture were exceptional. The fit was flawless, becoming an instant favorite."
        },
        {
            "rating": 3,
            "name": "Billy Collins",
            "gender": "male",
            "nationality": "UA",
            "comment": "Fabric was acceptable, but the stitching could have been neater. Delivery was within the specified timeframe."
        },
        {
            "rating": 5,
            "name": "Shane Rice",
            "gender": "male",
            "nationality": "AU",
            "comment": "Wearing this felt like an upscale upgrade. The fabric was chic and seasonally appropriate. The flawless fit and swift delivery made it a standout purchase. Definitely recommend."
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
        autoplay: true,
    };

    return (
        <div>
            <Slider {...settings} className="p-5">
                {images.map((imageUrl, index) => (
                    <div key={index} className="flex justify-center items-center h-fit">
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
                        className={`border-2 text-sm px-4 py-1 ${selectedColor === color ? `'bg-purple-50 border-purple-500 text-purple-500 font-bold'` : 'border-gray-400 bg-gray-100 text-gray-800'}`}
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
                            className={`border-2 text-sm p-1 w-9 h-9 ${selectedSize === size ? 'bg-purple-50 border-purple-500 text-purple-500 font-bold' : 'border-gray-400 bg-gray-100 text-gray-800'}`}
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
            <div className="flex items-center h-9 w-fit bg-gray-100 border-2 border-gray-400">
                <button className="bg-gray-300 px-3 py-1 hover:bg-gray-400 active:bg-gray-500" onClick={() => handleQuantityChange(-1)}>
                    <i className="fas fa-minus font-bold"></i>
                </button>
                <span className="mx-4 w-8 text-center">{quantity}</span>
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
        <div className="text-ut-gray gap-4">
            <div className="text-sm font-bold">
                <i className="fa fa-arrow-left" aria-hidden="true"></i><span className="px-3">BACK</span>
            </div>
            <div className="flex">
                <div className="flex-1 overflow-hidden">
                    <div className="py-16 px-48">
                        <div>
                            <Carousel images={data['images']} />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col py-16 px-4 gap-5">
                    <div id="headings" className="flex flex-col gap-2 font-bold">
                        <h2 className="text-sm text-teal-700">{"Men".toUpperCase()} | {"Trousers".toUpperCase()}</h2>
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
                    <br />
                    <div id="addToCart">
                        <p className="text-[0.7rem] text-gray-600"><span className="text-green-500">*</span> Please note that the product appearance may vary from what is shown in the pictures.</p>
                        <br />
                        <button className='px-4 py-2 w-full bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Legal = () => {
    return (
        <div>
            <div className="flex justify-between py-4 px-48 gap-16">
                <div className="flex flex-col gap-4 text-center w-[640px]">
                    <i className="text-5xl text-teal-800 fas fa-shipping-fast"></i>
                    <h2 className="font-bold text-teal-800 text-md">SHIPPING POLICY</h2>
                    <p className="text-sm text-gray-700">
                        Fast-track your experience with our expedited shipping,
                        delivering your product within 3-4 business days, ensuring your
                        purchase reaches you promptly and reliably.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-center w-[640px]">
                    <i className="text-5xl text-teal-800 fas fa-money-bill"></i>
                    <h2 className="font-bold text-teal-800 text-md">REFUND POLICY</h2>
                    <p className="text-sm text-gray-700">You have a window of 2 business days from the date of delivery
                        to request a refund for this product. If the item doesn't meet your
                        expectations, initiate a return within this timeframe for a full
                        refund.</p>
                </div>
                <div className="flex flex-col gap-4 text-center text-teal-800 w-[640px]">
                    <i className="text-5xl text-teal-800 fas fa-user-tie"></i>
                    <h2 className="font-bold text-md">CONNECTING BUYERS & SELLERS</h2>
                    <p className="text-sm text-gray-700">As a platform facilitating transactions between buyers and
                        sellers, we do not assume liability for products. The merchandise
                        holds no contractual obligation with our platform, and any
                        concerns about quality or liability should be addressed directly
                        with the seller.</p>
                </div>
            </div>
        </div>
    );
}

const DistributionChart = ({ reviews }) => {
    const starCounts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    const totalReviews = data['total_reviews'];

    reviews.forEach(review => {
        const { rating } = review;
        starCounts[rating]++;
    });

    const starPercentages = {};
    for (let key in starCounts) {
        starPercentages[key] = (starCounts[key] / totalReviews) * 100;
    }

    console.log(starPercentages)

    return (
        <div className="flex flex-col gap-2 py-4">
            <div className="flex items-center">
                <div className="w-20 text-sm">Best</div>
                <div className="flex h-3 w-full bg-gray-200">
                    <div className={`flex w-[${starPercentages[5]}%] px-10 bg-green-800`} value={starCounts[5]}>&nbsp;</div>
                </div>
            </div>

            <div className="flex items-center">
                <div className="w-20 text-sm">Good</div>
                <div className="flex h-3 w-full bg-gray-200">
                    <div className={`flex w-[${starPercentages[4]}%] px-10 bg-lime-800`} value={starCounts[4]}>&nbsp;</div>
                </div>
            </div>

            <div className="flex items-center">
                <div className="w-20 text-sm">Average</div>
                <div className="flex h-3 w-full bg-gray-200">
                    <div className={`flex w-[${starPercentages[3]}%] px-10 bg-yellow-800`} value={starCounts[3]}>&nbsp;</div>
                </div>
            </div>

            <div className="flex items-center">
                <div className="w-20 text-sm">Poor</div>
                <div className="flex h-3 w-full bg-gray-200">
                    <div className={`flex w-[${starPercentages[2]}%] px-10 bg-orange-800`} value={starCounts[2]}>&nbsp;</div>
                </div>
            </div>

            <div className="flex items-center">
                <div className="w-20 text-sm">Worst</div>
                <div className="flex h-3 w-full bg-gray-200">
                    <div className={`flex w-[${starPercentages[1]}%] px-10 bg-red-800`} value={starCounts[1]}>&nbsp;</div>
                </div>
            </div>

        </div>
    )
};

const Comment = ({ name, rating, comment }) => {
    return (
        <div className="comment bg-gray-200 p-4 border-l-4 border-pink-800">
            <h4 className="font-bold text-sm text-purple-500">{name}</h4>
            <p>Rating: {rating}</p>
            <p className="text-sm">{comment}</p>
        </div>
    );
};

const CommentList = ({ comments }) => {
    return (
        <div className="comment-section">
            <div className="comments flex flex-col gap-4">
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        name={comment.name}
                        rating={comment.rating}
                        comment={comment.comment}
                    />
                ))}
            </div>
        </div>
    );
};

const Reviews = () => {
    return (
        <div>
            <div className="flex text-ut-gray">
                <div className="w-1/3 px-12 py-6 flex flex-col gap-3">
                    <h2 className="font-bold text-ut-gray text-xl">REVIEWS</h2>
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-5xl">{data['average_rating']}</h1>
                        <RatingStars averageRating={data['average_rating']} />
                    </div>
                    <div>

                        {data['total_reviews']} REVIEWS
                        <DistributionChart reviews={data['reviews']} />
                    </div>
                </div>
                <div className="w-2/3 px-12 py-6 flex flex-col gap-3">
                    <h2 className="font-bold text-ut-gray text-xl">COMMENTS</h2>
                    <div className="max-h-96 overflow-y-scroll bg-gray-100 p-2">
                        <CommentList comments={data['reviews']} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Body = () => {
    // let { productUUID } = useParams();

    return (
        <div className="flex flex-col px-8 py-12 font-lexend">
            <Overview productUUID={776} />
            <br />
            <Legal />
            <br />
            <Reviews />
        </div>
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
