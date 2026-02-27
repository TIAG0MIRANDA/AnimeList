const items = document.querySelectorAll(".item");
const line = document.querySelector(".line");

function moveLine(element) {
    const line = document.querySelector(".line");
    const nav = document.querySelector(".nav");

    const elementRect = element.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    line.style.width = elementRect.width + "px";
    line.style.left = (elementRect.left - navRect.left) + "px";
}

items.forEach(item => {
    item.addEventListener("click", () => {
        const text = item.querySelector("span");
        moveLine(text);
    });
});

const firstText = items[0].querySelector("span");
moveLine(firstText);