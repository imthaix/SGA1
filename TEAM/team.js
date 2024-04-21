// Função para permitir a soltura do item
function allowDrop(ev) {
    ev.preventDefault();
}

// Função para arrastar o item
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// Função para soltar o item
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}