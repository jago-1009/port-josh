function initListeners() {
    $('#hamburger').click(function (e) { 
        e.preventDefault();
        $('#hamburger').toggleClass('is-active')
        $('#mobile-nav').toggle();
    });
}

$(document).ready(function () {
    initListeners();
});