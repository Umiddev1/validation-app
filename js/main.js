let elForm = document.querySelector('.forms');
let elInpFirstName = document.querySelector('.firstname');
let elInpLastName = document.querySelector('.lastname');
let elInpEmail = document.querySelector('.email');
let elInpPassOne = document.querySelector('.pass-one');
let elInpPassTwo = document.querySelector('.pass-two');
let elSpanFirstName = document.querySelector('.span-name');
let elSpanLastName = document.querySelector('.span-lname');
let elSpanEmail = document.querySelector('.span-email');
let elSpanPassOne = document.querySelector('.span-passone');
let elSpanPassTwo = document.querySelector('.span-passtwo');

elForm.addEventListener("submit", output);
function output(e) {
  e.preventDefault()
  compare()
}
function compare() {
  let pass = elInpPassOne.value
  let pass1 = elInpPassTwo.value
  if(elInpFirstName.value === "") {
    elSpanFirstName.innerHTML = `Ismni kiriting...`
    elInpFirstName.style.borderColor = "red"
  }
  else if(pass !== pass1) {
    elSpanFirstName.innerHTML = `Ismni kiriting...`
    elInpFirstName.style.borderColor = "red"
  }
  else {
    elInpFirstName.value = ""
    elInpFirstName.style.borderColor = "green"
  }
  if(elInpLastName.value === "") {
    elSpanLastName.innerHTML = `Familya kiriting...`
    elInpLastName.style.borderColor = "red" 
  }
  else if(pass !== pass1) {
    elSpanLastName.innerHTML = `Familya kiriting...`
  }
  else {
    elInpLastName.value = ""
    elInpLastName.style.borderColor = "green"
  }
  if(elInpEmail.value === "") {
    elSpanEmail.innerHTML = `Email kiriting...`
    elInpEmail.style.borderColor = "red" 
  }
  else if(pass !== pass1) {
    elSpanEmail.innerHTML = `Email kiriting...`
  }
  else {
    elInpEmail.value = ""
    elInpEmail.style.borderColor = "green"
  }
  if(pass === "") {
    elSpanPassOne.innerHTML = `Parol...`
    elInpPassOne.style.borderColor = "red" 
  }
  else if (pass !== pass1) {
    elSpanPassOne.innerHTML = `Parol...`
  }
  else {
    elInpPassOne.value = ""
    elInpPassOne.style.borderColor = "green"
  }
  if(pass1 === "") {
    elSpanPassTwo.innerHTML = 'notogri...'
    elInpPassTwo.style.borderColor = "red"
  }
  else if(pass !== pass1) {
    elSpanPassTwo.innerHTML = 'notogri...'
    elInpPassTwo.style.borderColor = "red"
  } 
  else {
    elInpPassTwo.value = ""
    elInpPassTwo.style.borderColor = "green"
  }
  console.log(pass);
}