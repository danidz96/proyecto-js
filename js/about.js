$(document).ready(function () {
    var offset = 120;
    var duration = 500;
    var scrollTop = $(".to-top");
    scrollTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            scrollTop.fadeIn(duration);
        } else {
            scrollTop.fadeOut(duration);
        }
    });

    //Click event to scroll to top
    $(scrollTop).click(function (e) {
        e.preventDefaul();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });

    //Acrodeon
    $('#acordeon').accordion();

    //Login falso

    $('#login form').submit(function () {
        var form_name = $('#form_name').val();

        localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem('form_name');

    if (form_name != null && form_name != undefined) {
        $('#about p').html('Bienvenido, ' + form_name);
        $('#about p').append('</br></br><a href="#" id="logout">Cerrar Sesión</a>');
        $('#login').hide();
        $('#logout').click(function () {
            localStorage.clear();
            location.reload();
        });
    }

});