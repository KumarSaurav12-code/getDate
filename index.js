
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const confirmation = document.querySelector(".confirmation");
const container = document.querySelector(".container");
const confirmationNo = document.querySelector(".confirmationNo");

yesAnswerMethod = () => {
    container.style.display = 'none'
    confirmationNo.style.display = 'none'
    confirmation.style.display = 'block'
}

noAnswerMethod = () => {
    container.style.display = 'none'
    confirmationNo.style.display = 'block'
}

no.addEventListener('click', noAnswerMethod)
yes.addEventListener('click', yesAnswerMethod)

document.getElementById("fix").addEventListener("click", function () {
    window.location = "https://wa.me/+919953215630?text=Yes I will think!!!!! ";
}, false);

document.getElementById("nofix").addEventListener("click", function () {
    window.location = "https://wa.me/+919953215630?text= Better luck next time!!!!! ";
}, false);
