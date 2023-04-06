const maincontainer = document.querySelector(".box-container");
const thankscontainer = document.querySelector(".thanks-container");
const submitbuttom = document.querySelector("#submit-btn");
const rateBtns = document.querySelectorAll(".rating-btn");
const rate = document.querySelector("#rate");

rateBtns.forEach(element => {
    element.addEventListener("click", () => {
        rate.innerHTML = element.innerHTML
    })
});
submitbuttom.addEventListener('click', () => {
    maincontainer.classList.add('hidden')
    thankscontainer.classList.remove('hidden')
})

