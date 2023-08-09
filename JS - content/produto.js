$(document).ready(() => {
  const product = [
    {
      collection_card: [
        {
          title_card: "Relógio de Luxo Elegância Dourada",
          descricao:
            "Um relógio sofisticado com detalhes em ouro, design elegante e movimento suíço preciso. Perfeito para ocasiões especiais ou uso diário.",
          precificacao: "$499,99",
          imagem: "Imagens/RelogioP.1.png",
        },
        {
          title_card: "Relógio Esportivo Resistente à Água",
          descricao:
            "Relógio esportivo resistente à água até 100 metros, com cronógrafo, visor luminoso e pulseira de silicone confortável.",
          precificacao: "$129,99",
          imagem: "Imagens/RelogioP.2.png",
        },
        {
          title_card: "Relógio Clássico de Couro Vintage",
          descricao:
            "Um relógio clássico com pulseira de couro genuíno e mostrador elegante. Combina estilo atemporal com qualidade duradoura.",
          precificacao: "$89,99",
          imagem: "Imagens/RelogioP.3.png",
        },
        {
          title_card: "Smartwatch Multifuncional Inteligente",
          descricao:
            "Um smartwatch de última geração com monitoramento de saúde, notificações de smartphone, GPS integrado e diversas funcionalidades inteligentes.",
          precificacao: "$199,99",
          imagem: "Imagens/RelogioP.4.png",
        },
        {
          title_card: "Relógio de Edição Limitada Coleção Especial",
          descricao:
            "Um relógio exclusivo e de edição limitada, com design único e materiais premium, para colecionadores e amantes de relógios raros.",
          precificacao: "$799,99",
          imagem: "Imagens/RelogioP.5.png",
        },
        {
          title_card: "Relógio Esqueleto Automático de Aço Inoxidável",
          descricao:
            "Um relógio esqueleto automático com mecanismo visível através do mostrador, pulseira de aço inoxidável e estilo moderno.",
          precificacao: "$349,99",
          imagem: "Imagens/RelogioP.6.png",
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
                    $("<div>").addClass("card-title").text(i["title_card"])
                  ),
                $("<div>")
                  .addClass("card-body")
                  .append(
                    $("<div>").addClass("descricao-card").text(i["descricao"])
                  ),
                $("<div>")
                  .addClass("card-footer")
                  .append(
                    $("<button>")
                      .addClass("btn-card btn-one")
                      .text(i["precificacao"])
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
