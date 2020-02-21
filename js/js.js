
let i = 0;
let images = ['image/1.png', 'image/2.png', 'image/3.png']
function animationImagins() { // наша функция перелистывания картинок
    document.getElementById("image_slider").src = images[i];
    i++;
    if (i == images.length) {
        i = 0;
    }
}
animationImagins(1); // как сделать начало анимации с первой картинки без начала 1
let controllerAnimate;

function startAnimate() { // Запускаем анимацию
    controllerAnimate = setInterval(animationImagins, 1000);
    update();  
}
function stopAnimate() { // тормозим анимацию
    clearInterval(controllerAnimate);
    controllerAnimate = null;
}
