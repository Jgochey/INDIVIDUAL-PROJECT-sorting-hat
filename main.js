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
  },
  {
    id: 5,
    name: "Expelled Test",
    house: "Ravenclaw",
    expelled: true,
  }
]


function randomHouse(max) {
  return Math.floor(Math.random() * max);
}
console.log(randomHouse(4));
// Will pick a number between 0 and 3, assign each number to a house, then each new student can be assigned a random house.
// (Get student name and id >>> assign random house >>> set expelled to false >>> render student card)


const renderToDom = (divId, html) => { // Looks at the targeted html div (divId) and renders whatever is passed as an argument (html).
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}


// When the "Begin sorting process" button is clicked, the entry form should be made visible.
const formDisplay = document.querySelector("#entryForm");
const loadForm = document.querySelector("#sortButton");
loadForm.addEventListener("click", (e) => {
e.preventDefault();

formDisplay.style.display = "block";
});












// This works but it still needs to add the new student to the object array.
const loadStudents = document.querySelector("#formButton");
loadStudents.addEventListener("click", (e) => {
e.preventDefault();

let studentCards = "";
students.forEach((student) => {
studentCards += `
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body"></div>
<div class="card text-end" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${student.name}/h5>
    <p class="card-text">${student.house}</p>
    <a href="#" class="btn btn-primary expelBtn" id="expel--${student.id}">EXPEL!</a>
  </div>
</div>`

renderToDom("#students", studentCards)
});
})
// The image on the card should change depending on the student's house.




const createStudent = document.querySelector("#formButton");
createStudent.addEventListener("click", (e) => {
e.preventDefault();

  const newStudent = {
    id: students.length + 1,
    name: document.querySelector("#studentNameInput").value,
    house: "Ravenclaw",
    expelled: false,
  }
// The ravenclaw should be replaced with a random house...function??

  students.push(newStudent);
  renderToDom("#students", studentCards) // START HERE: This won't work because studentCards is only declared in the function above.
  form.reset();

})

















// An error message should show if the new student form is left blank when it is submitted.
// if (("#studentNameInput") === "") {    // Gives an error if the name form is left blank. This does not currently work but I think I'm on the right track.
//   console.log('Please enter a name.');
//   throw new Error('Please enter a name.');
  
// }















// ADD THE NEW STUDENT TO THE STUDENTS ARRAY BEFORE RENDERING.
// const form = document.querySelector("form");
// form.addEventListener("submit", createStudent);  
// Does form work or does the targeting need to be more specific? Also, "submit" might be incorrect?














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
