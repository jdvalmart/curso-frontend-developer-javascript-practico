const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {

     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
     const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

     if(!isMobileMenuClosed){
         mobileMenu.classList.add('inactive');
     };
     if(!isDesktopMenuClosed){
         desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}


const productList = [];
productList.push({
    name:'bike',
    price:100,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name:'pantalla',
    price:200,
    image:"https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name:'termo',
    price:50,
    image:"https://images.pexels.com/photos/14939673/pexels-photo-14939673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name:'telefono',
    price:900,
    image:"https://images.pexels.com/photos/6913718/pexels-photo-6913718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name:'macbook',
    price:2200,
    image:"https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});


function renderProducts(arr) {
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
      
        const productName = document.createElement('p');
        productName.innerText =  product.name;
      
        productInfoDiv.append(productPrice, productName)
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.append(productInfoDiv, productInfoFigure);
      
        productCard.append(productImg, productInfo);
      
        cardsContainer.appendChild(productCard);
      
        
      }
};

renderProducts(productList);