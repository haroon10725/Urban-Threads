// function to handle data
function processData(data) {
    const docs = data.documents
    const name = [];
    const subCateg = [];
    docs.forEach(docs => {
        subCateg.push(docs.sub_categories)
    })
    subCateg.forEach(items => {
        name.push(items.name)
    })
    console.log(name)

}



// Caling api to fetch data
fetch('http://localhost:3000/data/product/fetch')
    .then(response => response.json())
    .then(name => {
        processData(name)
    })
    .catch(error => console.error('Error:', error));



