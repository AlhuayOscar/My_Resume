function ocultar(id) {
  document.getElementById(id).style.display = "none";
  document.getElementById(id).previousElementSibling.style.transform =
    "translateX(105px) scale(1.55)";
}
function mostrar(id) {
  var element = document.getElementById(id);
  if (element.style.display === "none") {
    setTimeout(function () {
      element.style.display = "initial";
    }, 750);
  }
  setTimeout(function () {
    document.getElementById(id).style.display = "initial";
    document.getElementById(id).previousElementSibling.style.transform =
      "translateX(0) scale(1)";
  }, 850);
}
