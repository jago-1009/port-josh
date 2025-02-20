function initListeners() {
    $('#hamburger').click(function (e) { 
        e.preventDefault();
        $('#hamburger').toggleClass('is-active')
        $('#mobile-nav').slideToggle(400, 'swing', function () {
        });
    });
}

$(document).ready(function () {
    initListeners();
});