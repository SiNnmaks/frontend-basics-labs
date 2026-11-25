// Завдання 1: зміна кольору фону та тексту 6-го та 7-го елементів при кліку
const sixthElement = document.getElementById("el-6");
const seventhElement = document.querySelector(".el-7");

sixthElement.addEventListener("click", function () {
    sixthElement.classList.toggle("active-id");
});

seventhElement.addEventListener("click", function () {
    seventhElement.classList.toggle("active-selector");
});

// Завдання 2: керування зображенням (Додати, Збільшити, Зменшити, Видалити)
const imageContainer = document.getElementById("image-container");
const btnAdd = document.getElementById("btn-add");
const btnZoomIn = document.getElementById("btn-zoom-in");
const btnZoomOut = document.getElementById("btn-zoom-out");
const btnDelete = document.getElementById("btn-delete");

// Додати зображення
btnAdd.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "https://kyivcity.gov.ua/";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = "Офіційний портал Києва";

    const img = document.createElement("img");
    img.src = "images/kyiv.jpg";
    img.alt = "Панорама міста Київ";
    img.style.width = "600px";

    link.appendChild(img);
    imageContainer.appendChild(link);
});

// Збільшити останнє зображення на сторінці
btnZoomIn.addEventListener("click", function () {
    const images = imageContainer.querySelectorAll("img");
    if (images.length > 0) {
        const targetImg = images[images.length - 1];
        const currentWidth = parseInt(targetImg.style.width, 10) || targetImg.clientWidth;
        if (currentWidth < 1200) {
            targetImg.style.width = (currentWidth + 60) + "px";
        }
    }
});

// Зменшити останнє зображення на сторінці
btnZoomOut.addEventListener("click", function () {
    const images = imageContainer.querySelectorAll("img");
    if (images.length > 0) {
        const targetImg = images[images.length - 1];
        const currentWidth = parseInt(targetImg.style.width, 10) || targetImg.clientWidth;
        if (currentWidth > 180) {
            targetImg.style.width = (currentWidth - 60) + "px";
        }
    }
});

// Видалити останнє зображення
btnDelete.addEventListener("click", function () {
    const links = imageContainer.querySelectorAll("a");
    if (links.length > 0) {
        imageContainer.removeChild(links[links.length - 1]);
    }
});