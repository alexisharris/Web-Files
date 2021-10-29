
// listen for click on submit button
document.querySelector(".submit").addEventListener("click", checkboxesClicked);
  // start function
  function checkboxesClicked () {
    // count all of the checkboxes that are checked
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    // get length of result from variable above. If no checkboxes checked
    if(checkboxes.length==0) {
      alert("Self care is important. If you can't make any time for yourself today, make sure to make some for yourself tomorrow!")
    }
    // if one checkbox is checked
    else if (checkboxes.length == 1) {
      alert("Yay! You did one self care item. Let's see if we can do even more tomorrow.");}
    // if two checkboxes are checked
    else if (checkboxes.length ==2) {
      alert("Wow, two items of self care! Think we can hit all three tomorrow?");}
    // if thre checkboxes are checked
    else {
      alert("Congratulations on completing all three acts of self care for today! You deserve it!");
    }
  }

const track = document.querySelector(".slideTrack");

const pages = Array.from(track.children);

const nextButton = document.querySelector(".slidesButtonRight");

const prevButton = document.querySelector(".slidesButtonLeft");

// const dotsNav = document.querySelector(".slidesNav");
//This was the overambitious dots nav that I couldn't figure out how to do
// const dots = Array.from(document.querySelector('.slidesIndicator'));

const slideSize = pages[0].getBoundingClientRect();

const slideWidth = slideSize.width;

// arrange slides next to one another
// pages[0].style.left = 0
// pages[1].style.left = slideWidth + "px"; Make this better with for loop?
// take the number and width of each slide, multiply each one by index to position it one right after the other
pages.forEach((slide,index) => {
  slide.style.left= slideWidth * index + "px";
});

// create a function to move the slides that can be used for back and forth
// variables/const needed are track, current slide, and the slide we're moving to
const moveToSlide = function(track, currentSlide, targetSlide){
  // change the css for the track, add the transform css element, move it based on the size of our current slide
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  // remove the class designation of current slide from previous
  currentSlide.classList.remove('currentSlide');
  // add class to new slide we moved to
  targetSlide.classList.add('currentSlide');
}
// Click right, move slides to right
// add event listener to next button, on click, initiate function
nextButton.addEventListener('click', e => {
  // define the current slide in the function so we can use it as a variable
  const currentSlide = track.querySelector('.currentSlide');
  // define next slide in the function with next element sibling (the slide after it) so we can use as variable
  const nextSlide = currentSlide.nextElementSibling;
  // use function we made above
  moveToSlide(track, currentSlide, nextSlide);
})
//Click left, move the slide
// add event listener to previous button, on click, initiate function
prevButton.addEventListener('click', e => {
  // set current slide as the slide we are on in the track to use as variable for moveToSlide function
  const currentSlide = track.querySelector('.currentSlide');
  // set previous slide as slide before slide we are on using previous Element Sibling so we can use it in moveToSlide function
  const prevSlide = currentSlide.previousElementSibling;
  // input new defined variables above into our previously defined moveToSlide function and run it
  moveToSlide(track, currentSlide, prevSlide);
})


// Checkbox alerts
