$('#banner-close-btn').click(function() {
    $('#banner').hide(0);
});

$('call-container').hide(0);

$('#map-btn').click(function() {
    $('#map-container').show(0);
    $('#call-container').hide(0);
});

$('#call-btn').click(function() {
    $('#call-container').show(0);
    $('#map-container').hide(0);
});

// SLICK SLIDER

$(document).ready(function() {
    $('.customer-logos').slick({
        //
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

//Get the button
var mybutton = document.getElementById("myBtn");

// show button after 500 px
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        $('#myBtn').show(0);
    } else {
        $('#myBtn').hide(0);

    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}