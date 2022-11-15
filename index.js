$('.big-image').click(() => {
    $(".lightbox").css('display', 'flex');

    // quit lightbox
    $('.fa-times').click(() => {
        $(".lightbox").hide('slow');
    })
});

$('.fa-close').click(() => {
    $(".lightbox").hide("slow");
});

// swiper lightbox

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

// swiper 1

var swiper = new Swiper(".mySwiper4", {
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper3", {
    spaceBetween: 10,

    thumbs: {
        swiper: swiper,
    },
});

// function number of item

function numberOfItem(item) {
    var item = 1;
    var plus = document.querySelector('#plus');
    var minus = document.querySelector('#minus');

    var numberItem = document.querySelector('#quantity-number');

    $(plus).click(() => {
        numberItem.innerHTML = item++;
    });

    $(minus).click(() => {
        numberItem.innerHTML = item--;
    });
};

numberOfItem();

// add item to cart

var itemInCart = [];

function renderCart(item) {


    //create product in cart
    var imageCart = document.querySelector('#product-cart-img');

    // node to cart
    var node = document.createElement("div");
    var priceItem = parseInt()
    node.setAttribute('class', `new-item-cart`);
    node.setAttribute('id', item.id);


    node.innerHTML = `
        <img id="cart-img" src="${imageCart.src}">
        <span id="cart-text" class="text-left">
            Fall Limited Edition Sneakers
            <br>
            $${item.price} x ${item.text} <br> <b>$${(item.price) * (item.text)}</b>
        </span>
        <button id='delete-item'><i id="cart-icon" class="fa fa-trash"></i></button>
    `;

    var reference = document.querySelector('#dropdown-hr');
    $(node).insertAfter(reference)


    // Node button
    var nodeButton = document.createElement("button");
    nodeButton.setAttribute('class', `btn btn-warning btn-checkout`);
    nodeButton.innerHTML = "Checkout";

    var referenceButton = document.querySelector('.new-item-cart');
    $(nodeButton).insertAfter(referenceButton)

    itemInCart.push(node);

    // store item in cart
    // localStorage.setItem('itemInCart', JSON.stringify(itemInCart));

};


function addToCart(text) {
    var item = {
        text,
        price: 125,
        id: Date.now(),
    };
    renderCart(item)
};


// audio for cart
var audio = new Audio('/sound/fx.mp3');


$('#add-cart').click((e) => {
    e.preventDefault();
    audio.play();

    // select the text input
    var numberItem = parseInt($('#quantity-number').text());
    
    addToCart(numberItem);

    // close dropdown
    $('#close-dropdown').click(()=> {
        $('.dropdown-menu').toggle();
    })
    // delete item in cart
    $('#delete-item').click( () => {
        $('.new-item-cart').remove();
        $('.btn-checkout').remove();
        //remove cart alert
        $('#orange-circle').hide();
    });
    // cart alert
    $('#orange-circle').show();
});

$('.fa-shopping-cart').click(()=> {
    $('.dropdown-menu').toggle();
});












