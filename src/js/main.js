$(document).ready(() => {
fetch('src/js/data_json/dados.json')
    .then(response => response.json())
    .then(data => {
            // SECTION HEADER
    const nav_bar_data = data[0];

    $('<header>').addClass('section-header').append(
        $('<section>').addClass('title-header').text(nav_bar_data[0]['title']),
        $('<ul>').append(
            $.map(nav_bar_data[1]['link'], function (i) {
                return $('<li>').addClass('ul-li-header').text(i)
            })
        ),
        $('<section>').addClass('container-btn').append(
            $.map(nav_bar_data[2]['cadastroBtn'], function (i) {
                return $('<button>').addClass('btn btn-5').text(i)
            })
        )
    ).appendTo('body');

    // SECTION BANNER

    const banner_data = data[1]

    $("<section>")
        .addClass("section-banner")
        .css("background-image", 'url("src/Imagens/Banner/immmmm.jpg")')
        .append(
            $("<section>")
                .addClass("section-text")
                .append(
                    $("<div>").addClass('title-banner').append(banner_data[0]["title"]),
                    $('<div>').addClass('content-input').append(
                        $('<input>').addClass('input-banner').attr('placeholder', banner_data[1]['placeholder']), // Adicionando o atributo placeholder
                        $('<span>').text(banner_data[2]['btn_action'])
                    )
                )
        ).appendTo("body");

    // SECTION ABOUT US
    const about_data = data[2]

    $("<section>")
        .addClass("section-about")
        .append(
            $("<section>")
                .addClass("section-text")
                .append(
                    $("<div>").text(about_data[0]["title"]),
                    $.map(about_data[1]["paragrafo"], function (i) {
                        return $("<p>").text(i);
                    }),
                    $("<button>").text(about_data[2]["btn_CTA"])
                )
        ).appendTo("body");

    // SECTION MAIN
    const carousel_data = data[3]

    $("<main>")
        .append(
            $("<section>").append(
                $("<div>").addClass("title-main").text(carousel_data[0]["title"])
            ),
            $("<section>")
                .addClass("splide")
                .attr("id", "image-carousel")
                .append(
                    $("<div>")
                        .addClass("splide__track")
                        .append(
                            $("<ul>")
                                .addClass("splide__list")
                                .append(
                                    $.map(carousel_data[1]["collection_img"], function (i) {
                                        return $("<li>")
                                            .addClass("splide__slide")
                                            .append($("<img>").attr("src", i));
                                    })
                                )
                        )
                )
        )
        .appendTo("body");

    new Splide("#image-carousel", {
        heightRatio: 0.5,
    }).mount();

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
                    $.map(produto_data[0]["collection_card"], function (i) {
                        return $("<div>")
                            .addClass("card")
                            .append(
                                $("<div>")
                                    .addClass("card-image")
                                    .append(
                                        $("<img>")
                                            .attr("src", i["imagem"])
                                            .addClass("image-responsive")
                                    ),
                                $("<div>")
                                    .addClass("card-header")
                                    .append(
                                        $("<div>").addClass("card-title").text(i["title_card"]),
                                        $('<div>').addClass('card-subtitle').text(i['subtitle_card'])
                                    )
                            );
                    })
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
            $.map(depoimento_data[1]["collection_deploi"], function (i) {
                return $('<div>').addClass('deploi').append(
                    $('<img>').attr('src', i['image']),
                    $('<section>').addClass('info').append(
                        $('<div>').addClass('name').text(i['name_person']),
                        $('<div>').addClass('profission').text(i['profission']),
                        $('<div>').addClass('text').text(i['deploi'])
                    ),
                )
            })
        )
    ).appendTo('body');

    // SECTION FOOTER
    const footer_data = data[6]

    $('<footer>').addClass('footer').append(
        $('<div>').addClass('title-footer').text(footer_data[0]['titleFooter']),
        $('<ul>').addClass('content-link').append(
            $.map(footer_data[1]['contentLink'], function (i) {
                return $('<li>').addClass('item').append(
                    $('<div>').text(i['li']),
                    $('<i>').addClass(i['icon'])
                )
            })
        )
    ).appendTo('body');
    })
})