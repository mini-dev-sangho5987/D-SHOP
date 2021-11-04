const main = document.getElementById('img')
const main2 = document.getElementsByClassName('chmain');
const list = document.getElementsByClassName('menu');
const p = document.getElementsByClassName('p');
function change(j) {
  main.style.display = 'none';
  if (j == "img") {
    ret();
    list[0].style.color = "white";
    list[0].style.background = "#111";
    p[0].style.color = "#eee";
  }
  else {
  for (let i = 0; i < 5; i++) {
      main2[i].style.display = 'none';
      p[i].style.removeProperty("color");
      list[i].style.removeProperty("color");
      list[i].style.removeProperty("background");
  }
}
  list[5].style.removeProperty("color");
  list[5].style.removeProperty("background");
  p[5].style.removeProperty("color");
  p[j].style.color = "#eee";
  list[j].style.color = "white";
  list[j].style.background = "#111";
  main2[j].style.display = 'block';
}

function ret() {
  for (let i = 0; i < 5; i++) {
    main2[i].style.display = 'none';
    p[i].style.removeProperty("color");
    list[i].style.removeProperty("color");
    list[i].style.removeProperty("background");
  }
  main.style.display = 'block';
}

function href(j) {
  location.href = "./login.html";
}
