function onOff() {
  document.querySelector("#modal").classList.toggle("hide");

  document.querySelector("body").classList.toggle("hideScroll");

  document.querySelector("#modal").classList.toggle("addScroll");
}

// framework Vuejs
new Vue({
  el: '.descricao',
  data: {
    titulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
})