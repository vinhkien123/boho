$(document).ready(function () {
    // var sliderhome = $('.grid-slider-wrap');
    // sliderhome.flickity({
    //     // options
    //     cellAlign: 'center',
    //     contain: true,
    //     autoPlay: true,
    //     prevNextButtons: false,
    //     pageDots: false,
    //     wrapAround: true
    // });

    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
    var elem = document.querySelector('.carousel');
    var project = document.querySelector('.carouselProject')
    var flkty = new Flickity(elem, {
        wrapAround: true,
        dragThreshold: 3,
        prevNextButtons: false,
        pageDots: false,
        on: {
            change: function (index) {
                let elm = $(`.body-${index + 1}`);
                $('.content .body').removeClass('active');
                elm.addClass('active');
            }
        }
    });
    var flktyProject = new Flickity(project, {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        initialIndex: 1,

    });
    var previousButton = document.querySelector('.btnPrev');
    previousButton.addEventListener('click', function () {
        flkty.previous();



    });
    var nextButton = document.querySelector('.btnNext');

    nextButton.addEventListener('click', function () {
        flkty.next();



    });

});
const logoWidth = $('.logo').innerWidth()
const logoToLeft = $('.logo').offset().left
console.log(logoWidth, "aa", logoToLeft);
const animation = gsap.timeline();
const project = gsap.timeline();
const logo = $(".header .topMenu .container .logo ")
const scroolMenu = $(".header .topMenu .bg-black ")
const language = $(".header .topMenu .container .language ")
animation.to('.detailMenu', { y: 0 })
    .to(".logo", { x: -((logoToLeft - logoWidth) / 100 * 80) })
    .from(".navClose", { x: "100%", duration: 1 }, "-=1")

    .to('.bg-down', { y: 0 }, "-=1")
    .fromTo('.stagger', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, stagger: 0.1 }, "-=1")
animation.reverse();
project.to('.project', { y: 0 })
    .from(".project .container .bg-yellow", { y: "-100%" })
    .fromTo('.delay', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, stagger: 0.3 }, "-=1")
project.reverse()
document.getElementById('menu').addEventListener('click', () => {
    let header = $(".header .detailMenu")
    header.addClass('active')
    logo.addClass('show')
    language.addClass('show')
    scroolMenu.removeClass('scroll')
    project.reverse() ? animation.restart() : project.reverse()


    // gsap.to()


})
document.getElementById('btnClose').addEventListener('click', () => {
    // // gsap.to('.detailMenu', { y: -1000, direction: 3 })
    // // gsap.to('.logo', { x: 0, direction: 3 })
    // // gsap.to('.bg-down', { y: -100 })
    // // gsap.to('.navClose', { x: 1500, direction: 1 })
    setTimeout(() => {
        // $(".header .detailMenu").removeClass('active')
        logo.removeClass('show')
        language.removeClass('show')

    }, 1000)
    animation.reversed() ? animation.restart() : animation.reverse();

})

document.getElementById('openProject').addEventListener('click', () => {
    scroolMenu.addClass('scroll')
    // gsap.to('.project', { y: 0 })
    project.reverse() ? project.restart() : project.reverse()
})
document.getElementById('closeProject').addEventListener('click', () => {
    scroolMenu.removeClass('scroll')
    project.reverse()
})
function scrollMenu() {

}
const line = $('.main .container .row .left h3 .line')

$(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop()

    const heightMenu = $(".topMenu").outerHeight()
    if (scrollTop >= heightMenu) {
        scroolMenu.addClass('scroll')
    } else {
        scroolMenu.removeClass('scroll')
    }
})

gsap.to('.main .container .row .left h3 .line', { y: -200, })
$(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop()
    const heightWindow = $(window).innerHeight()

    if (scrollTop >= line.offset().top + line.innerHeight() - heightWindow) {
        gsap.to('.main .container .row .left h3 .line', { y: 0, duration: 1 })

    } else {
        gsap.to('.main .container .row .left h3 .line', { y: -200, duration: 1 })
    }

})
$(document).ready(function (e) {
    $('.mouse').on('mouseenter', function (e) {
        var offset = $(this).offset();
        var x = (e.pageX - offset.left);
        var y = (e.pageY - offset.top);
        $(this).find('span').css({ top: y, left: x })

    })
    $('.mouse').on('mouseout', function (e) {
        var offset = $(this).offset();
        var x = (e.pageX - offset.left);
        var y = (e.pageY - offset.top);
        $(this).find('span').css({ top: y, left: x })

    })
})
