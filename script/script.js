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

window.onscroll = () => {
    toggleTopButton();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('d-none');
    } else {
        document.getElementById('back-to-up').classList.add('d-none');
    }
}