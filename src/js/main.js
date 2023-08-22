$(document).ready(() => {
    fetch('src/js/data_json/dados.json')
        .then(response => response.json())
        .then(data => {

            const nav_bar_data = data[0];

            const banner_data = data[1];

            // SECTION HEADER
            $('<section>')
                .addClass('section_banner-and-navbar')
                .css("background-image", 'url("src/Imagens/Banner/immmmm(2).jpg")')
                .append(
                    $('<header>').addClass('section-header').append(
                        $('<section>').addClass('title-header').text(nav_bar_data[0]['title']),
                        $('<ul>').append(
                            $.map(nav_bar_data[1]['link'], (i) => $('<li>').addClass('ul-li-header').text(i))
                        ),
                        $('<section>').addClass('container-btn').append(
                            $.map(nav_bar_data[2]['cadastroBtn'], (i) => $('<button>').addClass('btn btn-5').text(i))
                        )
                    ),

                    // SECTION BANNER

                    $("<section>")
                        .addClass("section-banner")
                        .append(
                            $("<section>")
                                .addClass("section-text container")
                                .append(
                                    $("<div>").addClass('title-banner').append(banner_data[0]["title"]),
                                    $('<div>').addClass('content-input').append(
                                        $('<input>').addClass('input-banner').attr('placeholder', banner_data[1]['placeholder']), // Adicionando o atributo placeholder
                                        $('<button>').addClass('btn-4').text(banner_data[2]['btn_action'])
                                    )
                                )
                        )
                ).appendTo('body')

            // SECTION ABOUT US
            const about_data = data[2]

            $("<section>")
                .addClass("section-about")
                .append(
                    $("<section>")
                        .addClass("section-text container")
                        .append(
                            $("<div>").text(about_data[0]["title"]),
                            $.map(about_data[1]["paragrafo"], (i) => $('<p>').text(i)),
                            $("<button>").text(about_data[2]["btn_CTA"])
                        )
                ).appendTo("body");

            // SECTION MAIN
            const carousel_data = data[3]

            $("<main>")
                .css('background-image', 'url("src/Imagens/Banner/cool-background (8).png")')
                .append(
                    $("<section>").append(
                        $("<div>").addClass("title-main").text(carousel_data[0]["title"])
                    )
                )
                .appendTo("body");

            // SECTION PRODUTOS
            const produto_data = data[4]

            $("<section>")
                .css("background-image", 'url("src/Imagens/Banner/cool-background (2).png")')
                .addClass("section-card")
                .append(
                    $("<section>").addClass("section-title").text("Confira nossos produtos"),
                    $("<section>")
                        .addClass("card-container")
                        .append(
                            $.map(produto_data[0]["collection_card"], (i) => $('<div>')
                                    .addClass("card")
                                    .append(
                                        $("<img>")
                                            .attr("src", i["imagem"])
                                            .addClass("card-img-top"),
                                        $("<div>")
                                            .addClass("card-body")
                                            .append(
                                                $("<div>").addClass("card-title").text(i["title_card"]),
                                                $('<div>').addClass('card-text').text(i['subtitle_card'])
                                            )
                                    )
                            )
                        ),
                    $("<section>")
                        .addClass("section-footer")
                        .append(
                            $("<button>").addClass("btn-card btn-one").text(produto_data[1]["btn_cta"])
                        )
                )
                .appendTo("body");

            // SECTION DEPOIMENTOS
            const depoimento_data = data[5]

            $('<section>').addClass('section-deploi').append(
                $('<section>').addClass('title-section-deploi').text(depoimento_data[0]['title_deploi']),
                $('<section>').addClass('content-deploi').append(
                    $.map(depoimento_data[1]["collection_deploi"], (i) => $('<div>').addClass('deploi').append(
                            $('<img>').attr('src', i['image']),
                            $('<section>').addClass('info').append(
                                $('<div>').addClass('name').text(i['name_person']),
                                $('<div>').addClass('profission').text(i['profission']),
                                $('<div>').addClass('text').text(i['deploi'])
                            )
                        )
                    )
                )
            ).appendTo('body');

            // SECTION FOOTER
            const footer_data = data[6]

            $('<footer>').addClass('footer').append(
                $('<div>').addClass('title-footer').text(footer_data[0]['titleFooter']),
                $('<ul>').addClass('content-link').append(
                    $.map(footer_data[1]['contentLink'], (i) => $('<li>').addClass('item').append(
                            $('<div>').text(i['li']),
                            $('<i>').addClass(i['icon'])
                        ))
                )
            ).appendTo('body');
        })
})