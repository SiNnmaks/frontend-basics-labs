// === ЗАВДАННЯ 1: Перевірка форми за допомогою RegExp (Варіант 15) ===
const form = document.getElementById("user-form");

const fields = [
    {
        id: "pib",
        rowId: "row-pib",
        label: "ПІБ",
        regex: /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/
    },
    {
        id: "group",
        rowId: "row-group",
        label: "Група",
        regex: /^[А-ЯІЇЄҐA-Z]{2}-\d{2}$/
    },
    {
        id: "faculty",
        rowId: "row-faculty",
        label: "Факультет",
        regex: /^[А-ЯІЇЄҐA-Z]{4}$/
    },
    {
        id: "address",
        rowId: "row-address",
        label: "Адреса",
        regex: /^м\.\s\d{6}$/
    },
    {
        id: "telegram",
        rowId: "row-telegram",
        label: "Telegram",
        regex: /^@[A-Za-zА-Яа-яІіЇїЄєҐґ0-9_]{3,32}$/
    }
];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isFormValid = true;
    const validatedData = [];

    fields.forEach(function (field) {
        const input = document.getElementById(field.id);
        const row = document.getElementById(field.rowId);
        const value = input.value.trim();

        if (field.regex.test(value)) {
            row.classList.remove("error");
            row.classList.add("valid");
            validatedData.push({ label: field.label, value: value });
        } else {
            row.classList.remove("valid");
            row.classList.add("error");
            isFormValid = false;
        }
    });

    if (isFormValid) {
        const resultWindow = window.open("", "ValidatedData", "width=420,height=340");
        if (resultWindow) {
            resultWindow.document.write(`
                <!DOCTYPE html>
                <html lang="uk">
                <head>
                    <meta charset="UTF-8">
                    <title>Введені дані</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
                        h2 { color: #058f8f; margin-bottom: 12px; }
                        p { margin: 6px 0; font-size: 15px; }
                    </style>
                </head>
                <body>
                    <h2>Введені дані (Варіант 15)</h2>
                    ${validatedData.map(item => `<p><strong>${item.label}:</strong> ${item.value}</p>`).join("")}
                </body>
                </html>
            `);
            resultWindow.document.close();
        }
    }
});

// === ЗАВДАННЯ 2: Таблиця 6х6 (Варіант 5 — клітинка №5) ===
const table = document.getElementById("grid-table");
const colorPicker = document.getElementById("color-picker");
const targetVariant = 5;
const allCells = [];

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let counter = 1;
for (let r = 0; r < 6; r++) {
    const tr = document.createElement("tr");
    for (let c = 0; c < 6; c++) {
        const td = document.createElement("td");
        td.textContent = counter;
        allCells.push(td);

        if (counter === targetVariant) {
            // 1. Наведення курсора -> випадковий колір
            td.addEventListener("mouseover", function () {
                td.style.backgroundColor = getRandomColor();
            });

            // 2. Одинарний клік -> колір з палітри
            td.addEventListener("click", function () {
                td.style.backgroundColor = colorPicker.value;
            });

            // 3. Подвійний клік (Варіант 5) -> зміна кольору всіх клітинок, КРІМ обраної
            td.addEventListener("dblclick", function () {
                const selectedColor = colorPicker.value;
                allCells.forEach(function (cell) {
                    if (cell !== td) {
                        cell.style.backgroundColor = selectedColor;
                    }
                });
            });
        }

        tr.appendChild(td);
        counter++;
    }
    table.appendChild(tr);
}