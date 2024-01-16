const prodcts = [];
const desiredProducts = [];
const AllSubCategories = [];
let countSubcategCheck = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let FilteredSubCategories = [];
const subCategories = [];

function processData(data) {
    const Categories = data.documents
    // Categories.forEach(cat => {
    //     // console.log(cat.name)
    //     subCategories.push(cat.sub_categories)
    // })
    // // Traversing a single subcategory which means from two categories going into one of them
    // subCategories.forEach(m => {
    //     // traversing a single subcategory
    //     m.forEach(s => {
    //         AllSubCategories.push(s.name)
    //     })

    // })
    // // Traversing the data fields of each subcategory
    // // prodcts.forEach(items => {
    // //     // Traversing the items of each data field
    // //     items.forEach(item => {

    // //     })
    // // })
    // // Loops have ended here
    // for (let i = 0; i < AllSubCategories.length; i++) {
    //     if (countSubcategCheck[i] == true) {
    //         FilteredSubCategories.push(AllSubCategories[i])
    //     }
    // }
    // if (FilteredSubCategories.length == 0) {
    //     FilteredSubCategories = AllSubCategories
    // }
    // subCategories.forEach(m => {
    //     // traversing a single subcategory
    //     m.forEach(s => {
    //         for (let i = 0; i <= FilteredSubCategories.length; i++) {
    //             if (s.name == FilteredSubCategories[i]) {
    //                 // Storing the products of a filtered subcategories into Products Array
    //                 prodcts.push(s.data)
    //             }
    //         }
    //     }
    //     )
    // }
    // )
    // // console.log(FilteredSubCategories)
    // // console.log("Safeee")
    // // console.log(prodcts)
    // prodcts.forEach(e => {
    //     e.forEach(d => {
    //         desiredProducts.push(d)
    //     })
    // })
    // return desiredProducts
    const products = [];

    Categories.forEach(cat => {
        products.push(cat)
    })

    products.forEach(category => {
        category.sub_categories.forEach(m => {
            m.data.forEach(item => {
                console.log(item.title)

            }


            )
        })
    })
}

fetch("http://localhost:3000/data/product/fetch")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const mydata = processData(data);

    })
    .catch(error => {
        console.error('Error:', error);
    });






// prodcts.map(product => (
// <Product
//     pic={starpic}
//     prodpic={product.images[1]}
//     reviews={product.total_reviews}
//     newprice={product.real_price}
// // />)))
// console.log(countCheck.length)