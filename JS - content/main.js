$(document).ready(() => {
  const carrousel = [
    {
      title: "O Futuro no Seu Pulso: Conheça Nossos Relógios Inteligentes",
    },
    {
      collection_img: [
        "Imagens/img-relogio2.png",
        "Imagens/img-relogio3.png",
        "Imagens/img-relogio4.png",
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
});
