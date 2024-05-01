const formId = document.querySelector("form");
const hw2Cont = document.querySelector(".hw2-container");

const inputSubmit = document.getElementById("submit");


formId.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(formId);
    const inputText = formData.get('text');

    if(inputText.length <= 15) {

        formId.style.display = "none";
        const h2 = document.createElement("h2");
        h2.innerText = inputText;
        hw2Cont.appendChild(h2);
    } else {
        alert("너무 길어요");
    }
})