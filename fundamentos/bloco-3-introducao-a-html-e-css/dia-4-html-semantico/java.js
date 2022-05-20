function changeColor(){
  let color = document.getElementsByClassName("main-content")[0];
  color.style.backgroundColor = "rgb(76,164,109)";
}
changeColor();

function changeColor1(){
  let yellowColor = document.getElementsByClassName("center-content")[0];
  yellowColor.style.backgroundColor = "white";
}
changeColor1

function corrigir(){
  let corrigido = document.getElementsByClassName("title")[0];
  corrigido.innerText = "JAVA SCRIPT (OBVIAMENTE)";
}
corrigir();

function maisculo (){
  let m = document.getElementsByTagName("p")[0];
  m.innerText = "TUDO EM MAIUSCULO"
};
maisculo();

function viewAll (){
  let view = document.getElementsByTagName("p");
  for( let  i = 0;i < view.length; i += 1)
  console.log(view[i].innerHTML)
}
viewAll ();