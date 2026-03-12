//  SELETORES
const items = document.querySelectorAll(".item");
const line = document.querySelector(".line");
const nav = document.querySelector(".nav");

// FUNÇÕES

// FUNÇÃO que move a linha para baixo do item do menu selecionado
function moveLine(element) {

    // Pega o tamanho e a posição do elemento clicado (ex: um botão do menu)
    const elementRect = element.getBoundingClientRect(); 

    // Pega o tamanho e a posição da navbar inteira
    const navRect = nav.getBoundingClientRect();

    // Define a largura da linha igual à largura do elemento clicado
    line.style.width = elementRect.width + "px";

    // Define a posição horizontal da linha
    // Calcula a distância do elemento até o início da navbar
    line.style.left = (elementRect.left - navRect.left) + "px";
}

function setActive(text) {
    items.forEach(i => {
        i.querySelector("span").classList.remove("active");
    });
    text.classList.add("active");
}
 
//EVENTOS
items.forEach(item => {
    item.addEventListener("click", () => {
        const text = item.querySelector("span");
        setActive(text);
        moveLine(text);
    });
});

//  INICIALIZAÇÃO
const firstText = items[0].querySelector("span");
setActive(firstText);
moveLine(firstText);