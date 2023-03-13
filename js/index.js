$(window).on('load', () => {
    $('.marquee').marquee({
        duplicated: true,
        duration: 10000
    });
    $('.marquee-faster').marquee({
        duplicated: true,
        duration: 6000
    });
})

$('#highlight').click(() => {
    window.open("https://play.google.com/store/apps/details?id=com.supersuman.gitamite");
})

$('#about').click(() => {
    window.open("https://www.linkedin.com/in/sumanthperambuduri/");
})

$('#projects').click(() => {
    window.open("https://github.com/supersu-man");
})

$('#contact').click(() => {
    window.open("https://mail.google.com/mail/?view=cm&source=mailto&to=sumanthpera444@gmail.com")
})

$('#resume').click(() => {
    window.open("../assets/resume.pdf")
})

$('.real-card').hover(
    () => {
        $('#highlight').addClass('highlight-hover')
    },
    () => {
        $('#highlight').removeClass('highlight-hover')
    }
)