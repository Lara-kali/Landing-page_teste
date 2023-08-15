$(document).ready(() => {
  const product = [
    {
      collection_card: [
        {
          title_card: "AstraTime",
          subtitle_card: "Celestial Chrono",
          imagem: "Imagens/img_dos_produtos/RelogioP.1.png",
        },
        {
          title_card: "ChronoTech",
          subtitle_card: "Nexus Timekeeper",
          imagem: "Imagens/img_dos_produtos/RelogioP.2.png",
        },
        {
          title_card: "LuminaWatches",
          subtitle_card: "Aurora Vanguard",
          imagem: "Imagens/img_dos_produtos/RelogioP.3.png",
        },
        {
          title_card: "TemporalX",
          subtitle_card: "Eon Navigator",
          imagem: "Imagens/img_dos_produtos/RelogioP.4.png",
        },
        {
          title_card: "HorizonTimepieces",
          subtitle_card: "Lumina Horizon",
          imagem: "Imagens/img_dos_produtos/RelogioP.5.png",
        },
        {
          title_card: "AstralWatches",
          subtitle_card: "Stellar Chronograph",
          imagem: "Imagens/img_dos_produtos/RelogioP.6.png",
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
          $("<button>").addClass("btn-btn-one").text(product[1]["btn_cta"])
        )
    )
    .appendTo("body");
});