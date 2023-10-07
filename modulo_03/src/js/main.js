const form = document.querySelector("form");
const tableContent = document.getElementById("tableContent");
const loadingTableContent = document.getElementById("loadingTableContent");

const formName = document.getElementById("name");
const formPreferredLanguage = document.getElementById("preferredLanguage");
const formHaveComputer = document.getElementsByName("haveComputer");

let formHaveComputerChecked = "";
formHaveComputer.forEach(function (e) {
    e.addEventListener("click", function () {
        if (this.checked) {
            formHaveComputerChecked = this.value;
        }
    });
});

const formAware = document.getElementById("aware");

const nameValue = document.getElementById("nameValue");
const preferredLanguageValue = document.getElementById("preferredLanguageValue");
const haveComputerValue = document.getElementById("haveComputerValue");
const awareValue = document.getElementById("awareValue");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    loadingTableContent.style.display = "flex";

    const formAllElements = form.elements;
    for (var i = 0; i < formAllElements.length; ++i) {
        formAllElements[i].disabled = true;
    }

    setInterval(() => {
        loadingTableContent.style.display = "none";
        tableContent.style.display = "block";

        nameValue.innerText = formName.value;
        preferredLanguageValue.innerText = formPreferredLanguage.value;
        haveComputerValue.innerText = formHaveComputerChecked;

        if (document.getElementById("aware").checked) {
            awareValue.innerText = "Estou ciente";
        } else {
            awareValue.innerText = "Não estou ciente";
        }
    }, 2500);
});
