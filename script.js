let count = 0;
const counterObj = document.getElementById("counter");
const btnObj = document.getElementById("incrementBtn");

btnObj.addEventListener("click", () => {
    alert(count);
    count++;
    counterObj.innerText = count;
});
