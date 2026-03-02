const items = document.querySelectorAll(".item");
const line = document.querySelector(".line");

function moveLine(element) {
    const nav = document.querySelector(".nav");
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

items.forEach(item => {
    item.addEventListener("click", () => {
        const text = item.querySelector("span");
        setActive(text);
        moveLine(text);
    });
});

const firstText = items[0].querySelector("span");
setActive(firstText);
moveLine(firstText);