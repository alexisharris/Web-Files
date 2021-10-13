// console.log("hello world");
// // generate random number 0-1 = Math.random, multiply by number you want to get 0-number you want
// console.log(Math.random()*3);
// // Math.floor makes it only integers
// console.log(Math.floor(Math.random()*20));
//
// console.log(document.getElementsByClassName('options'));
//
// console.log (document.getElementsByClassName("options")[0].innerHTML);

//
// for(i=0; i<3; i++) {
//   console.log(i);
// }

const images=["taters.jpg", "fries.jpg", "mashed2.jpg"]
const title= ["Tater Tots", "Fries", "Mashed Potatoes"]

for(i=0; i<document.getElementsByClassName("options").length; i++) {
  document.getElementsByClassName("label")[i].innerHTML=title[i];
  // console.log(document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + '"> ';

  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);

// call changeColor with the ID of the section when clicked
  document.getElementsByClassName("options")[i].addEventListener("click", function (){changeColor(this.id)});
}

function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");
}
