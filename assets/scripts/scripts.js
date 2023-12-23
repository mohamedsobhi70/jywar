$('.testimonials-owl').owlCarousel({
    rtl: true,
    nav: false,
    dots: false,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            margin: 30,
            stagePadding: 20,
        },
        768: {
            margin: 50,
            stagePadding: 20,
        },
        1024: {
            margin: 70,
            stagePadding: 0,
        }

    }
})

AOS.init({
    debounceDelay: 200, 
    throttleDelay: 399,
    duration: 900, 
    easing: 'ease', 
    once: true, 
    disable: 'mobile'
});