function onOff() {
  document.querySelector("#modal").classList.toggle("hide");

  document.querySelector("body").classList.toggle("hideScroll");

  document.querySelector("#modal").classList.toggle("addScroll");
}

// framework Vuejs
const sectionTitle = new Vue({
  el: '#title',
  data: {
    titulo: 'em exibição'
  }
})

const sectionDivDesc = new Vue({
  el: '.descricao',
  data: {
    titulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
})