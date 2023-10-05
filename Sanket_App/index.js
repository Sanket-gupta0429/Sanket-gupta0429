function sub() {
    alert("Enjoy The Sale!")
}

function mybtn() {
    alert("Form Submit Sucessfully!")
}


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Toy 1',
        image: '1png.png',
        price: 1500
    },
    {
        id: 2,
        name: 'Toy 2',
        image: '2png.png',
        price: 1500
    },
    {
        id: 3,
        name: 'Toy 3',
        image: '3png.jfif',
        price: 1500
    },
    {
        id: 4,
        name: 'Toy 4',
        image: '4png.jfif',
        price: 1500
    },

    {
        id: 5,
        name: 'Toy 5',
        image: '5png.jfif',
        price: 1500
    },
    {
        id: 6,
        name: 'Toy 6',
        image: '1png.png',
        price: 1500
    },

];

let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="">Buy Now</button>
        <button onclick="addtoCard(${key})"> Add to Cart</button>
        `;

        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key) {
    if (listCard[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;

    }

    reloadCard();
}

// function reloadCard(){
//     listCard.innerHTML='';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value,key) =>{
//       totalPrice= totalPrice+ value.price;
//       count = count + value.quantity; 

//       if(value != null ){
//         let newDiv = document.createElement('li');
//         newDiv.innerHTML =`
//         <div> <img src="images/${value.image}"/></div>
//         <div>${value.name}</div>
//         <div>${value.price.toLocaleString()}</div>
//         <div>${value.quantity}</div>
//         <div>
//         <button onclick="changeQuantity(${key}, ${value.quantity -1})">-</button>
//         class="count">${value.quantity}</div>
//         <button onclick="changeQuantity(${key}, ${value.quantity +1})">+</button>
//         <div class="count">${value.quantity}</div>
//         </div>
//         `;
//         listCard.appendChild(newDiv);
//       }
//     })
//     total.innerHTML=totalPrice.toLocaleString();
//     quantity.innerHTML=count;




const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pname = storeitems.getElementById("h2")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toLocaleUpperCase().indexOf(searchbox) > -1) {
                product[i].computedStyleMap.display = "";
            } else {
                product[i].computedStyleMap.display="none";

            }
        }
    }
}