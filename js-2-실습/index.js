const h2Id = document.getElementById("time-display");

function inText() {
    const date = new Date();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const hour = date.getHours();

    h2Id.textContent = `${hour}:${min}:${sec}`;
}
setInterval(inText, 1000);
