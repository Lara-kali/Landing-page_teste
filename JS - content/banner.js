$(document).ready(() => {
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
      img_banner: ["Imagens/Banner/img-relogio1.png", "relogio tecnologico - banner"],
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
        .append($("<img>").attr("src", banner[3]["img_banner"][0]))
    )
    .appendTo("body");
});

