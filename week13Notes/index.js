// function student (firstName, lastName, age, year) {
//   this.first=firstName;
//   this.last=lastName;
//   this.age=age;
//   this.year=year;
// }
//
// const stef = new student ("Stefanie", "Cook", 25, "Junior");
// const name = stef.first;
//
// function alumni (first, last, age, gradYR, profession) {
//   student.call (this,first,last, age);
//   this.gradYR = gradYR;
//   this.profession= profession;
// }

// OOPs
    // Abstraction: Create an object rather than different variables (car, not parts of a car)
    // Encapsulation: The data that we act on and the things that we do to it live in the same place
    // Polymorphism: You can have lots of different
    // Inheritance: Constructors can be used in parts of other constuctors
// Objects are NOT ordered
    // nameOfObject.nameOfProperty


console.log("hi");

fetch('weather.json')
.then((r) => r.json())
.then(function(data) {
  let weather = data;
  console.log(weather);
  let location = (weather.location.name);
  let temp = (weather.current.temp_f);
  document.getElementById("location").innerHTML = location;
  document.getElementById("tempf").innerHTML = temp;
})

// fetch('forecast.json')
// .then((resp) => resp.json())
// .then(function(data){
//   let forecast = data;
//   console.log(forecast);
//   console.log(forecast.forecast.forecastday[0].astro.sunrise);
//   console.log(forecast.forecast.forecastday[0].hour[1].condition.text);
//   forecastDate = forecast.forecast.forecastday[0].date;
//   sunrise = forecast.forecast.forecastday[0].astro.sunrise;
//   condition = forecast.forecast.forecastday[0].hour[1].condition.text;
//   document.getElementById('date').innerHTML = forecastDate;
//   document.getElementById('sunrise').innerHTML = sunrise;
// })

let boots = {
  'name': 'boots',
  'age' : '7',
  'isOld': function(){
    if(this.age > 10){
      return 'yes';
    }
    else {
      return 'no';
    }
  }
}

console.log(boots.isOld());
