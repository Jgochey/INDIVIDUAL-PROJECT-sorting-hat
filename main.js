// My data notes are at:  https://dbdiagram.io/d/Houses-66a513c28b4bb5230e832d1f


// This is what the finished app should have:

// To start off with, you will use a bootstrap card to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

// A bootstrap form will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin).

// On sorting a student, the form should clear and a bootstrap card with the student's name and a random house assignment should print below the form.

// You should also be able to expel a student after they have been sorted, which should remove their card from the student array and move them to Moldy Voldy's Army.

const students = [
  {
    id: 1,
    name: "Burgerman",
    house: "Gryffindor",
    expelled: false,
  },
  {
    id: 2,
    name: "Joe",
    house: "Ravenclaw",
    expelled: false,
  },
  {
    id: 3,
    name: "Examplarina",
    house: "Hufflepuff",
    expelled: false,
  },
  {
    id: 4,
    name: "Sneaky",
    house: "Slytherin",
    expelled: false,
  }
]


function randomHouse(max) {
  return Math.floor(Math.random() * max);
}
console.log(randomHouse(4));
// Will pick a number between 0 and 3, assign each number to a house, then each new student can be assigned a random house.


const renderToDom = (divId, html) => { // Looks at the targeted html div (divId) and renders whatever is passed as an argument (html).
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}


const loadForm = document.querySelector("#sortButton");
loadForm.addEventListener("click", (e) => {

let studentForm = "";
studentForm += `<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">What is your name?</label>
    <input type="text" class="form-control" id="studentNameInput" placeholder="Harry Potter">
  <button type="submit" id="formButton" class="btn btn-primary">Sort Me!</button>
</form>`

renderToDom("#entryForm", studentForm)



const loadStudents = document.querySelector("#formButton"); // This has to be placed inside the loadForm function or else it will come back undefined. I believe because the "formButton" located inside studentForm does not exist/won't be created outside of this function? So there is nothing for loadStudents to target.
loadStudents.addEventListener("click", (e) => {

let studentCards = ""; 
studentCards += `
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body"></div>
<div class="card text-end" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Student Name</h5>
    <p class="card-text">House Name</p>
    <a href="#" class="btn btn-primary expelBtn">EXPEL!</a>
  </div>
</div>`

renderToDom("#students", studentCards)
})

})

 // Renders the student form to the HTML when it is activated (after clicking the begin sorting process button).
 // It still needs to actually add the new student information to the student object array and assign them a random house.

// (On-submit-button-click > create new student > assign random house > add new student to object array > rerender student cards)

// The image on the student card should change depending on the house value (student.house). And obviously the Student Name should be taken from their (student.name) inside the students array.












// const renderStudents = (array) => {
//   let studentStuff = "";

//     array.forEach( (item) => {
//       studentStuff += student(item);   
// });

//   renderToDom("#students", studentStuff);
// }
// // Do these need to be two seperate functions?
// const renderBanished = (array) => {
//   let banishedStuff = "";

//     array.forEach( (item) => {
//       banishedStuff += student(item);   
// });

//   renderToDom("#banished", banishedStuff);
// }

// // Each student card should have an expel button that sends them over to the banished area (Voldemort's minions).
// // If expelled is set to true, then they should be moved here.

// renderStudents(students);
