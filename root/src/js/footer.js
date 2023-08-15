$(document).ready(()=> {
    const footer = [
        {
            titleFooter: "Title-footer"
        },
        {
            contentLink: [
                {
                    li: "facebook",
                    icon: "fa-brands fa-facebook"
                },
                {
                    li: "github",
                    icon: "fa-brands fa-github"
                },
                {
                    li: "twitter",
                    icon: "fa-brands fa-twitter"
                },
                {
                    li: "instagram",
                    icon: "fa-brands fa-instagram"
                }
            ]
        }
    ]

    $('<footer>').addClass('footer').append(
        $('<div>').addClass('title-footer').text(footer[0]['titleFooter']),
        $('<ul>').addClass('content-link').append(
            $.map(footer[1]['contentLink'], function(i) {
                return $('<li>').addClass('item').append(
                    $('<div>').text(i['li']),
                    $('<i>').addClass(i['icon'])
                )
            })
        )
    ).appendTo('body')
})