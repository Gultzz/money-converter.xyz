const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

var valor = "5.23";
var simboloMoeda = "$";

function converter(){
  let br = document.getElementById("money-br").value;
  let usd = document.getElementById("money-usd").value;
  if(document.getElementById("money-usd").value >= 0.0000000000000000001 || document.getElementById("money-usd").value <= -0.0000000000000000001){
    document.getElementById("money-br").value = "R$ " + (usd*valor).toFixed(4);
  }else if(document.getElementById("money-br").value >= 0.0000000000000000001 || document.getElementById("money-br").value <= -0.0000000000000000001){
    document.getElementById("money-usd").value = simboloMoeda + " " + (br/valor).toFixed(4);
  }
}
function zerar(){
  document.getElementById("money-usd").value = "";
  document.getElementById("money-br").value = "";
}

function converterMoeda(){
  var moeda = document.getElementById("select").value;
  valor = moeda;
  if(document.getElementById("select").value == "5.23"){
    document.getElementById("money-usd").placeholder = "USD";
    simboloMoeda = "$";
  }else if(document.getElementById("select").value == "6.15"){
    document.getElementById("money-usd").placeholder = "EUR";
    simboloMoeda = "€";
  }else if(document.getElementById("select").value == "0.00075"){
    document.getElementById("money-usd").placeholder = "PYG";
    simboloMoeda = "₲";
  }else if(document.getElementById("select").value == "0.047"){
    document.getElementById("money-usd").placeholder = "JPY";
    simboloMoeda = "¥";
  }else if(document.getElementById("select").value == "3.01"){
    document.getElementById("money-usd").placeholder = "EGP";
    simboloMoeda = "£";
  }
}
