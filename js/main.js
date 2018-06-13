$(document).ready(function () {
    var offset = 120;
    var duration = 500;
    var scrollTop = $(".to-top");
    scrollTop.hide();
    $(window).scroll(function () {
        if($(this).scrollTop() > offset){
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

    $('.slider').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true,
        adaptiveHeight: true
    });

    var posts = [{
            title: 'Prueba de título 1',
            date: moment().format('L'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veniam ipsam. Doloremque animi dicta rerum corporis impedit, neque ducimus vel laudantium molestiae officia, provident minima porro quisquam voluptate nostrum fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab aspernatur vero eaque mollitia magni perferendis dolore culpa eum dolores rem totam quam maxime, reprehenderit aliquam quisquam! Molestias, laudantium suscipit?'
        },
        {
            title: 'Prueba de título 2',
            date: moment().format('L'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veniam ipsam. Doloremque animi dicta rerum corporis impedit, neque ducimus vel laudantium molestiae officia, provident minima porro quisquam voluptate nostrum fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab aspernatur vero eaque mollitia magni perferendis dolore culpa eum dolores rem totam quam maxime, reprehenderit aliquam quisquam! Molestias, laudantium suscipit?'
        },
        {
            title: 'Prueba de título 3',
            date: moment().format('L'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veniam ipsam. Doloremque animi dicta rerum corporis impedit, neque ducimus vel laudantium molestiae officia, provident minima porro quisquam voluptate nostrum fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab aspernatur vero eaque mollitia magni perferendis dolore culpa eum dolores rem totam quam maxime, reprehenderit aliquam quisquam! Molestias, laudantium suscipit?'
        },
        {
            title: 'Prueba de título 4',
            date: moment().format('L'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veniam ipsam. Doloremque animi dicta rerum corporis impedit, neque ducimus vel laudantium molestiae officia, provident minima porro quisquam voluptate nostrum fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab aspernatur vero eaque mollitia magni perferendis dolore culpa eum dolores rem totam quam maxime, reprehenderit aliquam quisquam! Molestias, laudantium suscipit?'
        }

    ];

    posts.forEach((item) => {
        var post = `
            <article class="post" >
                <h2>${item.title}</h2> 
                <span class = "date">${item.date}</span>
                <p>${item.content}</p> 
                <a href ="#" class= "button-more">Leer más</a> 
            </article>
        `;
        $('#posts').append(post);
    });

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