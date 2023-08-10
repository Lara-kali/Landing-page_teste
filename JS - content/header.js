$(document).ready(function () {
  // Declaração de Array's
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

  // Construção do html

  // Criando o elemento header
  var header = $("<header>");

  // Criando o elemento nav
  var nav_bar = $("<nav>");

  //Craindo o elemento div que contém o title
  var title_navbar = $("<div>").addClass("title-header").text(navBar[0].title);

  // Criando o elemento ul
  var ul_navbar = $("<ul>");

  // Criando o elemento div que contem os btn
  var content_btn = $("<div>").addClass('content-btn');

  // Iterar os itens dentro do objeto "link"
  for (let i = 0; i < navBar[1].link.length; i++) {
    // Criando o elemento li
    var li_navbar = $("<li>");

    // Criando o elemento a
    var a_link = $("<a>")
      .attr("href", "#" + navBar[1].link[i])
      .text(navBar[1].link[i]);

    // Atribuindo o elemento a criado ao elemento li
    li_navbar.append(a_link);

    // Atribuindo o elemento li ao elemento ul
    ul_navbar.append(li_navbar);
  }

  // Iterar os itens dentro do objeto "cadastroBtn"
  for (let i = 0; i < navBar[2].cadastroBtn.length; i++) {
    // Criando o elemento button
    var btn_navbar = $("<button>").addClass('btn btn-5').text(navBar[2].cadastroBtn[i]);

    // Atribuindo o elemento button ao elemento div
    content_btn.append(btn_navbar);
  }

  nav_bar.append(title_navbar);
  nav_bar.append(ul_navbar);

  nav_bar.append(content_btn);

  header.append(nav_bar);

  $("body").append(header);
});
