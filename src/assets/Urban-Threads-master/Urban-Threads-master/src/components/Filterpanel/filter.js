var a1 = document.getElementsByClassName('c1');
var a2 = document.getElementsByClassName('filter-panel');
var a3 = document.getElementsByClassName('categ-list');
var a4 = document.getElementsByClassName('categ');
var min = document.getElementsByClassName('min')
var max = document.getElementsByClassName('max')
var man = document.getElementsByClassName('man')
var boy = document.getElementsByClassName('boys')


export function DisplayCateg(item) {
    item[0].classList.toggle('hidden')
}
export function Clicked() {
    a1[0].classList.toggle('rotate-180')
    a3[0].classList.toggle('h-[7rem]')
    a4[0].classList.toggle('hidden')

}

export function DisplayFilter() {
    a2[0].classList.replace('opacity-0', 'opacity-100')

    // Men will be the default products so checkbox will remain checked
    man[0].checked = true
}

export function CloseFilter() {

    a2[0].classList.replace('opacity-100', 'opacity-0')
    a2[0].classList.replace('relative', 'absolute')

}

export function uncheckAll() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
}


var minprice;
var maxprice;

export function Checkfilters() {
    if (isNaN(Number(min[0].value))) {
        alert("Please enter a number in the min field")
    } else {
        minprice = min[0].value
    }

    if (isNaN(Number(max[0].value))) {
        alert("Please enter a number in the min field")
    } else {
        maxprice = max[0].value
    }
}


const postData = {
    "min-value": minprice,
    "max-value": maxprice,
};


// function to handle data
function processData(data) {
    const docs = data.documents
    docs.forEach(doc => {
        doc.forEach(subCat => {
            console.log(subCat)
        })
    })
}

// Caling api to fetch data
fetch('http://localhost:3000/data/product/fetch')
    .then(response => response.json())
    .then(name => {
        processData(name)
    })
    .catch(error => console.error('Error:', error));



