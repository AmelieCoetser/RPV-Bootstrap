//get DOM elements

const selected = document.querySelector(".selected");
const flightOptions = document.querySelector(".flightOptions");
const optionsList = document.querySelectorAll(".option");

console.log (selected, flightOptions, optionsList);

selected.onfocus = () => {
    console.log("focus");
    flightOptions.classList.toggle("active")
}; 

selected.onblur = () => {
    console.log("blur");
    selected.computedStyleMap.backgroundColor = "initial";
     flightOptions.classList.toggle("active")
}; 

//select element from dropdown list

optionsList.forEach((item) => (item.onclick = () => {
    console.log("item.innerText");
    selected.placeholder = item.innerText;
    })
);


//counters

let countM = 1;
const valueDisplayMars = document.getElementById("valueDisplayMars");
console.log("valueDisplayMars");
function increment1() {
    countM++;
    valueDisplayMars.innerText = countM;
    console.log("countM");
}
function decrement1() {
    countM--;
    valueDisplayMars.innerText = countM;

}



let countN = 1;
const valueDisplayNeptune = document.getElementById("valueDisplayNeptune");
console.log("valueDisplayNeptune");

function increment2() {
    countN++;
    valueDisplayNeptune.innerText = countN;
    console.log("countN");
}

function decrement2() {
    countN--;
    valueDisplayNeptune.innerText = countN;

}



let countG = 1;
const valueDisplayGiant = document.getElementById("valueDisplayGiant")

function increment3() {
    countG++;
    valueDisplayGiant.innerText = countG;
    console.log("countG");
}

function decrement3() {
    countG--;
    valueDisplayGiant.innerText = countG;

}



let countS = 1;
const valueDisplaySaturn = document.getElementById("valueDisplaySaturn");
console.log("valueDisplaySaturn");

function increment4() {
    countS++;
    valueDisplaySaturn.innerText = countS;
    console.log("countS");
}

function decrement4() {
    countS--;
    valueDisplaySaturn.innerText = countS;

}



let countU = 1;
const valueDisplayUranus = document.getElementById("valueDisplayUranus");
console.log("valueDisplayUranus");

function increment5() {
    countU++;
    valueDisplayUranus.innerText = countU;
    console.log("countU");
}

function decrement5() {
    countU--;
    valueDisplayUranus.innerText = countU;

}



let countMo = 1;
const valueDisplayMoon = document.getElementById("valueDisplayMoon");
console.log("valueDisplayMoon");

function increment6() {
    countMo++;
    valueDisplayMoon.innerText = countMo;
    console.log("countMo");
}

function decrement6() {
    countMo--;
    valueDisplayMoon.innerText = countMo;

}

//cart modal


const openBtn = document.querySelector(".fa-solid.fa-basket-shopping");
const closeBtn = document.getElementById("closeModal1");
const modal1 = document.getElementById("modal1");

console.log({ openBtn, closeBtn, modal1 });

openBtn.addEventListener("click", () => {
    modal1.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal1.classList.remove("open");
});

//submit modal

const openBtn2 = document.querySelector("#submitBtn"); // the button
const closeBtn2 = document.getElementById("closeSubmit");
const submit = document.getElementById("submit"); // the modal

openBtn2.addEventListener("click", (e) => {
    e.preventDefault(); // prevent form from submitting and refreshing the page
    submit.classList.add("open");
});

closeBtn2.addEventListener("click", () => {
    submit.classList.remove("open");
});
