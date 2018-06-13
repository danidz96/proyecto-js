$(document).ready(function () {
    $('.slider').bxSlider({
        mode: 'fade',
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

    posts.forEach((item, index) => {
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
    console.log(posts);


});