//  SELETORES
const items = document.querySelectorAll(".item");
const line = document.querySelector(".line");
const nav = document.querySelector(".nav");

// FUNÇÕES 
function moveLine(element) {
    const elementRect = element.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    line.style.width = elementRect.width + "px";
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