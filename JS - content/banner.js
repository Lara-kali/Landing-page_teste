$(document).ready(() => {
    const banner = [
        {
            title: "O Futuro no Seu Pulso: Descubra o Relógio Tecnológico Definitivo!"
        },
        {
            caracteristicas: [
                "Tecnologia de ponta reunida em um elegante relógio que transcende o tempo.",
                "Monitoramento avançado de saúde e atividades para uma vida mais inteligente e ativa.",
                "Conectividade sem precedentes para sincronizar com seu estilo de vida digital."
            ]
        },
        {
            item_btn: "venha comprar"
        },
        {
            img_banner: [
                'Imagens/img-relogio1.png',
                "relogio tecnologico - banner"
            ]
        }
    ];

    $('<section>').addClass('section-banner').append(
        $('<section>').addClass('section-text').append(
            $('<div>').append(banner[0]['title']),
            $('<ul>').append(
                $.map(banner[1]['caracteristicas'], function (i) {
                    return $('<li>').text(i);
                })
            ),
            $('<button>').text(banner[2]['item_btn'])
        ),

        $('<section>').addClass('section-img').append(
            $('<img>').attr('src', banner[3]['img_banner'][0])
        )
    ).appendTo('body')
})