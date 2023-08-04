$(document).ready(() => {
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
    )
    .appendTo("body");
});
