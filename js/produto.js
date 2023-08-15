$(document).ready(() => {
  fetch('js/data/dados.json')
    .then(response => response.json())
    .then(data => {
      const product = data;

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
                        $("<div>").addClass("card-subtitle").text(i["subtitle_card"])
                      )
                  );
              })
            ),
          $("<section>")
            .addClass("section-footer")
            .append($("<button>").addClass("btn-btn-one").text(product[1]["btn_cta"]))
        )
        .appendTo("body");
    })
    .catch(error => console.error('Erro ao carregar JSON:', error));
});
