console.log('hello!');

let pics = 8;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('portfolio').innerHTML += "<img src='assets/portfolio/" + pic + ".jpg'" + "class='portfoliopic' id='pic" + pic+ "' />";
}

// Javascript DOM selectors
// How we access parts of the DOM inside our EncyclopediaAssignment
// example: img src = assets/image.jpg id=myimg class= "pics"
    // 1. document.getElementsByTagName()
      // ex: document.getElementsByTagName("img")[n]
        // n = the order that the tag comes (so if you put 0, then it takes the first item by that tag name)
    // 2. document.getElementsByClassName()
      // ex: document.getElementsByClassName("pics")[n]
    // 3. document.getElementById()
    // 4. document.querySelector()
      // main reason to use querySelectorAll() accesses all with tag or class name


// Changing dom selectors:
  // DOM selector + DOM property = DOM value

// DOM Properties
  // .style
  // .innerHTML
  // .classList.toggle (turn class on and off)
  // .id
