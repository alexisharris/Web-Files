console.log("hello world");

let meals = ["lunch", "dinner", "brunch"];
let images = ["lunch.jpg", "dinner.jpg", "brunch.jpg"];
let prevMeal;

for (i=0; i<document.getElementsByClassName("meal").length; i++){
  console.log(meals[i]);
  document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i] + "</h2>";
  document.getElementsByClassName("meal")[i].addEventListener("click", setActive, false);
  document.getElementsByClassName("meal")[i].id = meals[i];

}

function setActive (e){
  prevmeal = document.getElementsByClassName("active")[0].id;
  if(prevmeal != undefined){
    document.getElementById(prevmeal).classList.toggle("active");
    document.getElementById(prevmeal +"menu").style.display = "none";
  }

  if (e.target.tagName == "H2") {
    console.log("h2 clicked");
    e.target.parentNode.classList.toggle("active");
  }
  else {
    console.log("div clicked");
    e.target.classList.toggle("active");
  }
}
