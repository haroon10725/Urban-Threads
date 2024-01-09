function processData(data) {
    const docs = data.documents
    docs.forEach(doc => {
        const name=doc.name
        console.log(name)

    })
}


fetch('http://localhost:3000/data/product/fetch')
    .then(response => response.json())
    .then(name => {
        processData(name)
    })
    .catch(error => console.error('Error:', error));


