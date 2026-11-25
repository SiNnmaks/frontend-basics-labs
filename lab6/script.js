const downloadBtn = document.getElementById("download-btn");
const statusText = document.getElementById("status-text");
const usersContainer = document.getElementById("users-container");

downloadBtn.addEventListener("click", function () {
    statusText.textContent = "Loading...";

    // Отримання 5 випадкових користувачів у форматі JSON через fetch та Promise
    fetch("https://randomuser.me/api/?results=5")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Помилка HTTP: " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            statusText.textContent = "success!";
            renderUsers(data.results);
        })
        .catch(function (error) {
            statusText.textContent = "Error: " + error.message;
        });
});

// Виведення полів за Варіантом 15: picture (1), country (5), cell (3), postcode (6)
function renderUsers(users) {
    usersContainer.innerHTML = "";

    users.forEach(function (user) {
        const card = document.createElement("div");
        card.className = "user-card";

        card.innerHTML = `
            <img src="${user.picture.large}" alt="User photo">
            <div class="user-info">
                <p><strong>Country:</strong> ${user.location.country}</p>
                <p><strong>Cell:</strong> ${user.cell}</p>
                <p><strong>Postcode:</strong> ${user.location.postcode}</p>
            </div>
        `;

        usersContainer.appendChild(card);
    });
}