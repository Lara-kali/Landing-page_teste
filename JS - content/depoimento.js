$(document).ready(() => {
  const depoimentos = [
    {
      title_deploi: "depoimentos de clientes satisfeitos"
    },
    {
      collection_deploi: [
        {
          name_person: "John Anderson",
          profission: "Profissional de Marketing Digital",
          deploi: "Os relógios desta marca são mais do que meros acessórios. Eles são verdadeiras obras de arte que me ajudam a manter o ritmo no mundo agitado do marketing digital. Estilo e funcionalidade em um só relógio."
        },
        {
          name_person: "Sophia Martinez",
          profission: "Advogada de Direitos Humanos",
          deploi: "Como advogada, preciso gerenciar meu tempo de forma eficiente. Os relógios desta marca não apenas me auxiliam nisso, mas também adicionam um toque de elegância que combina com meu compromisso em defender a justiça."
        },
        {
          name_person: "David Walker",
          profission: "Astrônomo Amador",
          deploi: "Cada segundo conta quando você está observando as estrelas. Os relógios dessa marca não só têm um design celestial, mas também a precisão necessária para acompanhar o movimento dos corpos celestes."
        },
        {
          name_person: "Emily Bennett",
          profission: "Chef Confeiteira",
          deploi: "Na confeitaria, a precisão é a chave para criar obras-primas doces. Estes relógios me mantêm no tempo exato para criar sobremesas perfeitas e belas, assim como eles."
        },
        {
          name_person: "Michael Turner",
          profission: "Atleta Profissional de Triatlo",
          deploi: "Cruzar a linha de chegada em triatlos exige disciplina e resistência. Estes relógios são mais do que um contador de tempo; eles são parceiros confiáveis que me ajudam a superar meus limites."
        },
        {
          name_person: "Isabella Ramirez",
          profission: "Artista Visual",
          deploi: "Assim como minhas obras de arte, esses relógios são uma expressão de estilo e originalidade. Eles me inspiram a criar e a manter um ritmo criativo, independentemente do momento."
        },
        {
          name_person: "Daniel Patel",
          profission: "CEO de Startup Tecnológica",
          deploi: "O mundo das startups é rápido e imprevisível. Estes relógios combinam perfeitamente com o meu estilo de vida acelerado, enquanto adicionam um toque de elegância nas reuniões de negócios."
        },
        {
          name_person: "Olivia Reynolds",
          profission: "Viajante Aventureira",
          deploi: "Explorar o mundo é a minha paixão. Esses relógios duráveis e estilosos são meus companheiros de viagem, lembrando-me de aproveitar cada segundo de minhas aventuras."
        }
      ]
    }
  ]

  $('<section>').addClass('section-deploi').append(
    $('<section>').addClass('title-section-deploi').text(depoimentos[0]['title_deploi']),
    $('<section>').addClass('content-deploi').append(
      $.map(depoimentos[1]["collection_deploi"], function (i) {
        return $('<div>').addClass('deploi').append(
          $('<div>').text(i['name_person']),
          $('<div>').text(i['profission']),
          $('<div>').text(i['deploi'])
        )
      })
    )
  ).appendTo('body')
})