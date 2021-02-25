function onOff() {
  document.querySelector("#modal").classList.toggle("hide");

  document.querySelector("body").classList.toggle("hideScroll");

  document.querySelector("#modal").classList.toggle("addScroll");
}

// framework Vuejs
const sectionTitle = new Vue({
  el: '#page-ideas #title',
  data: {
    titulo: 'em exibição'
  }
})

new Vue({
  el: '#page-ideas #ideas, #container #last-ideias',
  data: {
    ideas: [
      {
        'img': 'https://www.flaticon.com/premium-icon/icons/svg/3242/3242257.svg',
        'title': 'Cursos de Programação',
        'category': 'Estudo',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'url': '#'
      },
      {
        'img': "https://www.flaticon.com/premium-icon/icons/svg/3242/3242372.svg",
        'title': "Exercícios",
        'category': "Saúde",
        'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        'url': "#",
      },
      {
        'img': "https://www.flaticon.com/premium-icon/icons/svg/3242/3242355.svg",
        'title': "Ler Livros",
        'category': "Raciocínio",
        'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        'url': "#",
      },
      {
        'img': "https://www.flaticon.com/premium-icon/icons/svg/3242/3242389.svg",
        'title': "Assistir Séries",
        'category': "Séries",
        'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        'url': "#",
      },
      {
        'img': "https://www.flaticon.com/premium-icon/icons/svg/3242/3242384.svg",
        'title': "Fazer Novos Amigos",
        'category': "Vida Social",
        'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        'url': "#",
      },
      {
        'img': "https://www.flaticon.com/premium-icon/icons/svg/3242/3242322.svg",
        'title': "Pintura",
        'category': "Criatividade",
        'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        'url': "#",
      },
    ]
  }
})