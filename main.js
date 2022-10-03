// Cambio de cantidad de productos ingresado por el usuario
let minusBtn = document.querySelector('.input_minus');
let plusBtn = document.querySelector('.input_plus');
let userInput = document.querySelector('.input_number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if (userInputNumber <= 0 ){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
});

//Agregar los productos al carro 
const addToCartBtn = document.querySelector('.details_button');
let cartNotification = document.querySelector('.header_cart-notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;
    
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
    priceModal.innerHTML = `$125 x ${lastValue} <span>$${lastValue*125}.00</span>`;
})

// Mostrar el modal del carrito con detalle
const cartIconBtn = document.querySelector('.header_cart');
const cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal_price');
const productContainer = document.querySelector('.cart-modal_checkout-container');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if(lastValue == 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }else{
        drawProductInModal();
    }
});

//Borrar el carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal_delete');
    deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
    })
};

// Cambiar imagenes cuando se presionen las flechas
const imageContainer = document.querySelector('.gallery_image-container');
const previousGalleryBtn = document.querySelector('.gallery_image-previous');
const nextGalleryBtn = document.querySelector('.gallery_image-next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=> {
    changeNextImage(imageContainer);    
});

previousGalleryBtn.addEventListener('click', ()=> {
    changePreviousImage(imageContainer);    
});

// Mostrar el modal de imagenes cuando hago click en la imagen principal
const imagesModal = document.querySelector('.modal-gallery_background');
const closeModalBtn = document.querySelector('.modal-gallery_close');

imageContainer.addEventListener('click', ()=> {
    imagesModal.style.display = 'grid';
})

closeModalBtn.addEventListener('click', ()=> {
    imagesModal.style.display = 'none';
})

//Cambiar las imagenes principales desde los thumbnails
let thumbnails = document.querySelectorAll('.gallery_thumbnail'); 
thumbnails = [...thumbnails];

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event =>{
        console.log(event.target.id); 
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    })
})

//cambiar las imagenes principales desde los thumbnails en el MODAL
let modalthumbnail = document.querySelectorAll('.modal-gallery_thumbnail');
const modalImgContainer = document.querySelector('.modal-gallery_image-container');
modalthumbnail = [...modalthumbnail];

modalthumbnail.forEach(modalthumbnail => {
    modalthumbnail.addEventListener('click', event =>{
        console.log(event.target.id.slice(-1)); 
        modalImgContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    })
})

//Cambiar Imagen Principal de modal desde las flechas en el modal
const nextModalBtn = document.querySelector('.modal-gallery_next');
const previousModalBtn = document.querySelector('.modal-gallery_previous');

nextModalBtn.addEventListener('click', ()=> {
    changeNextImage(modalImgContainer);    
});

previousModalBtn.addEventListener('click', ()=> {
    changePreviousImage(modalImgContainer);    
});

//Mostrar el navbar cuando presiono el menu de hamburguesa
const iconMenu = document.querySelector('.header_menu');
const modalMenu = document.querySelector('.modal-navbar_background');
const closeModalMenu = document.querySelector('.modal-navbar_close-icon');

modalMenu.style.display = "none";

iconMenu.addEventListener('click', () => {
    console.log("apreto menu");
    modalMenu.style.display = 'block';
});

closeModalMenu.addEventListener('click', ()=>{
    modalMenu.style.display = 'none';
});


// Funciones
function drawProductInModal(){
    productContainer.innerHTML = `
    <div class="cart-modal_details-container">
        <img class="cart-modal_image" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
            <p class="cart-modal_product">Autumn Limited Edition</p>
            <p class="cart-modal_price">$125 x ${lastValue} <span>$${lastValue*125}.00</span></p>
        </div>
        <img class="cart-modal_delete" src="./images/icon-delete.svg" alt="delete">
    </div>
    <button class="cart-modal_checkout">Checkout</button>`
    deleteProduct();
};

function changeNextImage(imgContainer){
    if (imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
};

function changePreviousImage(imgContainer){
    if (imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
};