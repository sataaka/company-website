let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //変数宣言
    let i;
    //document.getElementsByClassName("mySlides") は、クラス名が "mySlides" のHTML要素を全て取得します。
    let slides = document.getElementsByClassName("mySlides");
    //クラス名が "dot" の要素（スライドショー下部に表示されるナビゲーション用のドット）をすべて取得します。
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
