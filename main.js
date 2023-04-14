
$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        variableWidth: true
    });
  });

console.log(document);

//grab 3 chair card divs

// const highlightChairs = document.getElementsByClassName('section2-card');

// highlightChairs.forEach(chair=>chair.addEventListener('onHover',()=>handleHighlightHover));


//on:hover set classID on target to card-highlight,
// then remove card-highlight from other cards


