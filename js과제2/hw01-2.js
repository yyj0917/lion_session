const selectBox = document.querySelector("select");

selectBox.onchange = function () {
    var h1 = document.querySelector("h1");
    var container1 = document.querySelector(".hw1-container");
    var container2 = document.querySelector(".hw2-container");
    var container3 = document.querySelector(".hw3-container");

    const value = selectBox.options[selectBox.selectedIndex].value;
    h1.style.color = value;
    container1.style.borderColor = value;
    container2.style.borderColor = value;
    container3.style.borderColor = value;


};