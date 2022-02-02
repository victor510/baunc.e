const sectionalOverlay = document.querySelector('.sectional_overlay')
const shoeDetailDisplaySection = document.querySelector('.full_shoe_display')


const displayShoeDetailsBtn = document.querySelectorAll('.shop_shoe')
const closeShoeDisplayBtn = document.querySelector('.full_shoe_display .close_btn')
const imgOnDisplay = document.getElementById('img_on_display');

var productName = document.getElementById('product__name');
var manufucturer = document.getElementById('manufucturer');
var productPrice = document.getElementById('product__price');

var arr_shoeDetail, shoeImgPath, shoeName, shoeManufucturer, shoePrice;



for( var element of displayShoeDetailsBtn) {
    element.addEventListener('click', ()=> {
        shoeDetailDisplaySection.classList.add('active')
        sectionalOverlay.classList.add('active')
    })
}

closeShoeDisplayBtn.addEventListener('click', ()=> {
    shoeDetailDisplaySection.classList.remove('active')
    sectionalOverlay.classList.remove('active')
})

let shoeDetailsMapping = {
    basketball_team : ['./Assets/Compressed/b_ball-team.jpg','Name : Team Malice .', 'this is one of our customers<br>that has been buying shoes from us. Nike and Jordan 23', 'Fair Pricing' ],

    shoe_2 : ['./Assets/Compressed/shoe-1.jpg','Name : to be updated', 'nike shoe Brand', '<span>buy at: </span>$324.10' ],

    shoe_3 : ['./Assets/Compressed/shoe-14.jpg','Name : to be updated', 'nike shoe Brand', '<span>buy at: </span>$99.45' ],

    shoe_4 : ['./Assets/Compressed/shoe-11.jpg','Name : to be updated', 'nike shoe Brand', '<span>buy at: </span>$103.56' ],

    shoe_5 : ['./Assets/Compressed/shoe-6.jpg','Name : to be updated', 'nike shoe Brand', '<span>buy at: </span>$88.22' ],

    shoe_6 : ['./Assets/Compressed/shoe-8.jpg','Name : to be updated', 'nike shoe Brand', '<span>buy at: </span>$132.45' ],

    shoe_7 : ['./Assets/Compressed/shoe-9.jpg','Name : to be updated', 'nike shoe Brand', '<span>buy at: </span>$165.74' ]
    
}

var replyToClickEvent = function() {
    var id = this.id;
    arr_shoeDetail = Object.values(shoeDetailsMapping)[0];

    if (id === Object.keys(shoeDetailsMapping)[0]) {
        arr_shoeDetail = Object.values(shoeDetailsMapping)[0];
        shoeImgPath = arr_shoeDetail[0];
                shoeName = arr_shoeDetail[1];
                shoeManufucturer = arr_shoeDetail[2];
                shoePrice = arr_shoeDetail[3];

                imgOnDisplay.src = shoeImgPath;
                console.log(shoeName)
                productName.innerHTML = shoeName;
                manufucturer.innerHTML = shoeManufucturer;
                productPrice.innerHTML = shoePrice;

    } else if (id === Object.keys(shoeDetailsMapping)[1]) {
        arr_shoeDetail = Object.values(shoeDetailsMapping)[1];
        shoeImgPath = arr_shoeDetail[0];
                shoeName = arr_shoeDetail[1];
                shoeManufucturer = arr_shoeDetail[2];
                shoePrice = arr_shoeDetail[3];

                imgOnDisplay.src = shoeImgPath;
                console.log(shoeName)
                productName.innerHTML = shoeName;
                manufucturer.innerHTML = shoeManufucturer;
                productPrice.innerHTML = shoePrice;

    } else if (id === Object.keys(shoeDetailsMapping)[2]) {
        arr_shoeDetail = Object.values(shoeDetailsMapping)[2];
        shoeImgPath = arr_shoeDetail[0];
                shoeName = arr_shoeDetail[1];
                shoeManufucturer = arr_shoeDetail[2];
                shoePrice = arr_shoeDetail[3];

                imgOnDisplay.src = shoeImgPath;
                console.log(shoeName)
                productName.innerHTML = shoeName;
                manufucturer.innerHTML = shoeManufucturer;
                productPrice.innerHTML = shoePrice;

    } else if (id === Object.keys(shoeDetailsMapping)[3]) {
        arr_shoeDetail = Object.values(shoeDetailsMapping)[3];
        shoeImgPath = arr_shoeDetail[0];
                shoeName = arr_shoeDetail[1];
                shoeManufucturer = arr_shoeDetail[2];
                shoePrice = arr_shoeDetail[3];

                imgOnDisplay.src = shoeImgPath;
                console.log(shoeName)
                productName.innerHTML = shoeName;
                manufucturer.innerHTML = shoeManufucturer;
                productPrice.innerHTML = shoePrice;

    } else if (id === Object.keys(shoeDetailsMapping)[4]) {
        arr_shoeDetail = Object.values(shoeDetailsMapping)[4];
        shoeImgPath = arr_shoeDetail[0];
                shoeName = arr_shoeDetail[1];
                shoeManufucturer = arr_shoeDetail[2];
                shoePrice = arr_shoeDetail[3];

                imgOnDisplay.src = shoeImgPath;
                console.log(shoeName)
                productName.innerHTML = shoeName;
                manufucturer.innerHTML = shoeManufucturer;
                productPrice.innerHTML = shoePrice;

    } else if (id === Object.keys(shoeDetailsMapping)[5]) {
        arr_shoeDetail = Object.values(shoeDetailsMapping)[5];
        shoeImgPath = arr_shoeDetail[0];
                shoeName = arr_shoeDetail[1];
                shoeManufucturer = arr_shoeDetail[2];
                shoePrice = arr_shoeDetail[3];

                imgOnDisplay.src = shoeImgPath;
                console.log(shoeName)
                productName.innerHTML = shoeName;
                manufucturer.innerHTML = shoeManufucturer;
                productPrice.innerHTML = shoePrice;

    } else if (id === Object.keys(shoeDetailsMapping)[6]) {
        arr_shoeDetail = Object.values(shoeDetailsMapping)[6];
        shoeImgPath = arr_shoeDetail[0];
                shoeName = arr_shoeDetail[1];
                shoeManufucturer = arr_shoeDetail[2];
                shoePrice = arr_shoeDetail[3];

                imgOnDisplay.src = shoeImgPath;
                console.log(shoeName)
                productName.innerHTML = shoeName;
                manufucturer.innerHTML = shoeManufucturer;
                productPrice.innerHTML = shoePrice;

    }
    

}


const btnIds = Object.keys(shoeDetailsMapping);
var noOfIds = btnIds.length;
var counter = 0;


for (counter = 0; counter < noOfIds; counter++) {
    document.getElementById(btnIds[counter]).onclick = replyToClickEvent
}