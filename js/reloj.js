$(document).ready(function () {
    setInterval(function () {
        var reloj = moment().format('LTS');
        $('#reloj').html(reloj);
    }, 1000);

    
});