$(document).ready(() => {
    // SECTION HEADER
    const navBar = [
        {
            title: "landing page",
        },
        {
            link: ["home", "show more", "intro"],
        },
        {
            cadastroBtn: ["login", "signup"],
        },
    ];

    $('<header>').addClass('section-header').append(
        $('<section>').addClass('title-header').text(navBar[0]['title']),
        $('<ul>').append(
            $.map(navBar[1]['link'], function (i) {
                return $('<li>').addClass('ul-li-header').text(i)
            })
        ),
        $('<section>').addClass('container-btn').append(
            $.map(navBar[2]['cadastroBtn'], function (i) {
                return $('<button>').addClass('btn btn-5').text(i)
            })
        )
    ).appendTo('body');

    // SECTION BANNER
    const banner = [
        {
            title: "O Futuro no Seu Pulso: Descubra o Relógio Tecnológico Definitivo!",
        },
        {
            placeholder: "O que está procurando?"
        },
        {
            btn_action: "pesquisar"
        },
        {
            img_banner: ["Src/Imagens/Banner/img-relogio1.png", "relogio tecnologico - banner"],
        },
    ];

    $("<section>")
        .addClass("section-banner")
        .append(
            $("<section>")
                .addClass("section-text")
                .append(
                    $("<div>").addClass('title-banner').append(banner[0]["title"]),
                    $('<div>').addClass('content-input').append(
                        $('<input>').addClass('input-banner').attr('placeholder', banner[1]['placeholder']), // Adicionando o atributo placeholder
                        $('<span>').text(banner[2]['btn_action'])
                    )
                ),

            $("<section>")
                .addClass("section-img")
                .append($("<img>").attr("Src", banner[3]["img_banner"][0]))
        ).appendTo("body");

    // SECTION ABOUT US
    const about = [
        {
            title: "Sobre Nós - A Tecnologia em Cada Segundo",
        },
        {
            paragrafo: [
                "Bem-vindo à [Nome da Empresa], onde a alta tecnologia encontra a tradição horológica. Somos uma equipe apaixonada por relógios de alta tecnologia, dedicados a oferecer o que há de mais avançado e sofisticado no mundo dos relógios.",
                "Nossa expertise reside em criar relógios que transcendem a simples medição do tempo. Desenvolvemos relógios inteligentes, conectados e repletos de funcionalidades inovadoras.",
                "A busca pela inovação está no cerne de tudo o que fazemos. Cada novo modelo é fruto de pesquisa avançada e criatividade incansável, garantindo que nossos clientes desfrutem de recursos únicos e experiências que superam todas as expectativas.",
            ],
        },
        {
            btn_CTA: "Venha nos conhecer",
        },
    ];

    $("<section>")
        .addClass("section-about")
        .append(
            $("<section>")
                .addClass("section-text")
                .append(
                    $("<div>").text(about[0]["title"]),
                    $.map(about[1]["paragrafo"], function (i) {
                        return $("<p>").text(i);
                    }),
                    $("<button>").text(about[2]["btn_CTA"])
                )
        ).appendTo("body");

    // SECTION MAIN
    const carrousel = [
        {
            title: "O Futuro no Seu Pulso: Conheça Nossos Relógios Inteligentes",
        },
        {
            collection_img: [
                "Src/Imagens/Slider/img-relogio2.png",
                "Src/Imagens/Slider/img-relogio3.png",
                "Src/Imagens/Slider/img-relogio4.png",
            ],
        },
    ];

    $("<main>")
        .append(
            $("<section>").append(
                $("<div>").addClass("title-main").text(carrousel[0]["title"])
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
                                    $.map(carrousel[1]["collection_img"], function (i) {
                                        return $("<li>")
                                            .addClass("splide__slide")
                                            .append($("<img>").attr("Src", i));
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
    const product = [
        {
            collection_card: [
                {
                    title_card: "AstraTime",
                    subtitle_card: "Celestial Chrono",
                    imagem: "Src/Imagens/img_dos_produtos/RelogioP.1.png",
                },
                {
                    title_card: "ChronoTech",
                    subtitle_card: "Nexus Timekeeper",
                    imagem: "Src/Imagens/img_dos_produtos/RelogioP.2.png",
                },
                {
                    title_card: "LuminaWatches",
                    subtitle_card: "Aurora Vanguard",
                    imagem: "Src/Imagens/img_dos_produtos/RelogioP.3.png",
                },
                {
                    title_card: "TemporalX",
                    subtitle_card: "Eon Navigator",
                    imagem: "Src/Imagens/img_dos_produtos/RelogioP.4.png",
                },
                {
                    title_card: "HorizonTimepieces",
                    subtitle_card: "Lumina Horizon",
                    imagem: "Src/Imagens/img_dos_produtos/RelogioP.5.png",
                },
                {
                    title_card: "AstralWatches",
                    subtitle_card: "Stellar Chronograph",
                    imagem: "Src/Imagens/img_dos_produtos/RelogioP.6.png",
                },
            ],
        },
        {
            btn_cta: "Ver mais",
        },
    ];

    $("<section>")
        .addClass("section-card")
        .append(
            $("<section>").addClass("section-title").text("Confira nossos produtos"),
            $("<section>")
                .addClass("card-container")
                .append(
                    $.map(product[0]["collection_card"], function (i) {
                        return $("<div>")
                            .addClass("card")
                            .append(
                                $("<div>")
                                    .addClass("card-image")
                                    .append(
                                        $("<img>")
                                            .attr("Src", i["imagem"])
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
                    $("<button>").addClass("btn-card btn-one").text(product[1]["btn_cta"])
                )
        )
        .appendTo("body");

    // SECTION DEPOIMENTOS
    const depoimentos = [
        {
            title_deploi: "depoimentos de clientes satisfeitos"
        },
        {
            collection_deploi: [
                {
                    image: "Src/Imagens/customers/JOHN_ANDERSON.jpg",
                    name_person: "John Anderson",
                    profission: "Profissional de Marketing Digital",
                    deploi: "Os relógios desta marca são mais do que meros acessórios. Eles são verdadeiras obras de arte que me ajudam a manter o ritmo no mundo agitado do marketing digital. Estilo e funcionalidade em um só relógio."
                },
                {
                    image: "Src/Imagens/customers/EMILY_BENNETT.jpg",
                    name_person: "Emily Bennett",
                    profission: "Chef Confeiteira",
                    deploi: "Na confeitaria, a precisão é a chave para criar obras-primas doces. Estes relógios me mantêm no tempo exato para criar sobremesas perfeitas e belas, assim como eles."
                },
                {
                    image: "Src/Imagens/customers/MICHAEL_TURNER.jpg",
                    name_person: "Michael Turner",
                    profission: "Atleta Profissional de Triatlo",
                    deploi: "Cruzar a linha de chegada em triatlos exige disciplina e resistência. Estes relógios são mais do que um contador de tempo; eles são parceiros confiáveis que me ajudam a superar meus limites."
                },
                {
                    image: "Src/Imagens/customers/ISABELLA_RAMIREZ.jpg",
                    name_person: "Isabella Ramirez",
                    profission: "Artista Visual",
                    deploi: "Assim como minhas obras de arte, esses relógios são uma expressão de estilo e originalidade. Eles me inspiram a criar e a manter um ritmo criativo, independentemente do momento."
                }
            ]
        }
    ]

    $('<section>').addClass('section-deploi').append(
        $('<section>').addClass('title-section-deploi').text(depoimentos[0]['title_deploi']),
        $('<section>').addClass('content-deploi').append(
            $.map(depoimentos[1]["collection_deploi"], function (i) {
                return $('<div>').addClass('deploi').append(
                    $('<img>').attr('Src', i['image']),
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
            $.map(footer[1]['contentLink'], function (i) {
                return $('<li>').addClass('item').append(
                    $('<div>').text(i['li']),
                    $('<i>').addClass(i['icon'])
                )
            })
        )
    ).appendTo('body');
})