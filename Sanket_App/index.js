function sub(){
    alert("Enjoy The Sale!")
}

function mybtn(){
    alert("Form Submit Sucessfully!")
}


const product=[
    {
        id:0,
        image:'Images/P1.webp'  ,
        title:'Castle',
        price:1200,
    },
    {
        id:1,
        image:'Images/P2.webp'  ,
        title:'Doctor Set',
        price:1500,

    },
    {
        id:2,
        image:'Images/P3.webp'  ,
        title:'Roaster',
        price:1300,

    },
    {
        id:3,
        image:'Images/P4.webp'  ,
        title:'Car Set',
        price:800,

    },

];

const categories = [...new set(product.map((item)=>
    {return item}))]
    let i=0;
  
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {images, title, price} =item;
        return(
            `<div class='box'>
            <div class = 'img-box'>
              <img class = 'images' src=${images}></img>
              </div>
              <div class='bottom'>
              <p>${title}</p>
              <h2>$ ${price}.00</h2>`+
              "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
`</div>
</div>`               
    )
    }).join('');
    
var cart =[];
function displaycart(a){
    let j = 0;
    if(cart.length==0){
        document.getAnimations('cartItem').innerHTML = "Your cart is empty";

    }
    else{
        document.getElementById("cartItem").innerHTML = car.map((items)=>
        {
            var{image, title,price}=items;
            return(
                `<div class='cart-items'>
                <div class='row-img'>
                <img class='rowing' src=${images}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px'>${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"

            )
        })
    }
}