/**
 * Ésta función es para crear el ejercicio para seleccionar las cartas
 *
 * @param {string} id id del contenedor del ejercicio
 * @param {array} items array de imágenes para arrastrar
 *
 * Ejemplo de uso:
 * buildCardSelection("p2act", ["img1.jpg", "img2.jpg", "img3.jpg"]);
 *
 * Nota:
 *
 * ! Para los estilos de debe importar el archivo css cards_selection.css
 * ? <link rel="stylesheet" href="css/cards_selection.css" />
 *
 * ! Para el funcionamiento de debe importar el archivo js cards_selection.js
 * ? <script src="js/cards_selection.js"></script>
 */
function buildCardSelection(id, items) {
  let container = document.getElementById(id);
  container.setAttribute("class", "card-selection-container");

  items.forEach((item, i) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card-selection-item");
    card.setAttribute("id", `card-${i + 1}`);

    let image = new Image();
    image.src = item;

    let imgContainer = document.createElement("div");
    imgContainer.setAttribute("id", `img-${i + 1}`);
    imgContainer.setAttribute("class", "card-image-container");

    let img = document.createElement("img");
    img.setAttribute("src", item);
    img.setAttribute("class", "img-responsive");

    let spanContent = document.createElement("span");
    spanContent.setAttribute("class", "card-span-content");

    imgContainer.appendChild(img);
    imgContainer.appendChild(spanContent);

    card.appendChild(imgContainer);

    container.appendChild(card);
  });

  /* Reorder items */
  let children = container.children;

  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    let random = Math.floor(Math.random() * children.length);
    container.appendChild(children[random]);
  }
}

var containers;

$(document).ready(function () {
  containers = document.querySelectorAll(".card-image-container");
  console.log(containers);

  containers.forEach((container) => {
    container.addEventListener("click", function () {
      /* Get span from container */
      let span = container.querySelector("span");

      /* Add or remove "X" */
      if (span.innerHTML == "X") {
        span.innerHTML = "";
      } else {
        span.innerHTML = "X";
      }
    });
  });
});

/**
 * Ésta función es para validar el ejercicio de seleccionar las cartas
 *
 * @param {string} id id del contenedor del ejercicio
 * @param {array} coreList array de imágenes para arrastrar
 *
 * Ejemplo de uso:
 * coreCardSelection("p2act", ["", "X", "X"]);
 *
 * Nota:
 * ! Para el core list se debe pasar un array con los números de las cartas que se deben seleccionar
 */
function coreCardSelection(id, coreList) {
  let core = 0;

  let items = document.querySelectorAll(`${id} .card-image-container`);

  for (let i = 0; i < items.length; i++) {
    let itemId = items[i].id.split("img-")[1];
    if (items[i].querySelector("span").innerHTML == coreList[itemId - 1]) {
      core++;
      $(items[i].querySelector("span")).addClass("bien");
    } else {
      $(items[i].querySelector("span")).addClass("mal");
    }
  }

  return core / coreList.length;
}
