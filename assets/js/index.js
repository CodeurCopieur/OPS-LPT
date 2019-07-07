var slideNo = 1;
carousel(slideNo);

function carousel(n) {
    var slides = document.getElementsByClassName('container-slide');
    var puces = document.getElementsByClassName('main-container__slider-pages-puce');
    var articles = document.getElementsByClassName('main-container__row-img');
    
    if(n > slides.length) 
        slideNo = 1;

    if(n < 1) 
        slideNo = slides.length;

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display="none"; 
    }
    slides[slideNo - 1].style.display="block";

    for (var i = 0; i < puces.length; i++) {
        puces[i].className = puces[i].className.replace(" active", "");
    }
    puces[slideNo - 1].className += " active";

    for (var i = 0; i < articles.length; i++) {
        articles[i].className = articles[i].className.replace(" active-2", "");;
    }
    articles[slideNo - 1].className += " active-2";
}


function newSlide(n) {
    carousel(slideNo += n)
}

function currentSlide(n) {
    carousel(slideNo = n)
}


