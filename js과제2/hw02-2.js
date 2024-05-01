const formId = document.querySelector("form");
const hw2Cont = document.querySelector(".hw2-container");

const inputSubmit = document.getElementById("submit");

console.log(hw2Cont)
console.log(inputSubmit)
console.log(formId)
inputSubmit.onclick = function() {
    const formData = new FormData(formId);
    const inputText = formData.get('text');

    if(inputText.length <= 15) {

        formId.style.display = "none";
        const h2 = document.createElement("h2");
        h2.innerText = inputText;
        hw2Cont.appendChild(h2);
    } else {
        alert("error");
    }

}
formId.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(formElement);
    const text = formData.get('text');

    if(text.length <= 15) {
        hw2Cont.innerHTML = inputText;
    }
})