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

const villains = [
  {
    id: 1,
    name: "Expelled Test",
    house: "Ravenclaw",
    expelled: true,
  },
  {
    id: 2,
    name: "A Small Dog",
    house: "Hufflepuff",
    expelled: true,
  }
]

// Will pick a number between 0 and 3, assigning a student to a house based on the result.
function randomHouse(max) {
  let result = Math.floor(Math.random() * max);

  if (result === 0) {
    return "Gryffindor"
  } else if (result === 1) {
    return "Hufflepuff"
  } else if (result === 2) {
    return "Ravenclaw"
  } else {
    return "Slytherin"
  }
  
}


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


const cardsOnDom = (students) => {
  let domString = "";
 students.forEach((student => {
  domString += `
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body"></div>
  <div class="card text-end" style="width: 18rem;">
    <div class="card-body">
     <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <a href="#" class="btn btn-primary expelBtn" id="expel--${student.id}">EXPEL!</a>
    </div>
  </div>`;
   })
 )
   renderToDom("#students", domString);
};
 
    
// The expel button currently does not work, remeber to .split it so they don't all get removed.
// Also, the image on the card should change depending on the student's house.

const createStudent = document.querySelector("#formButton");
createStudent.addEventListener("click", (e) => {
e.preventDefault();

const form = document.querySelector("form");

  const newStudent = {
    id: students.length + 1,
    name: document.querySelector("#studentNameInput").value,
    house: randomHouse(4),
    expelled: false,
  }
  
  students.unshift(newStudent);
  cardsOnDom(students)
  form.reset();
})



// Will check the student's house value and return a new array.
const houseFilter = (array, houseString) => {
  const houseArray = [];

  array.forEach((element) => {
    if (element.house === houseString) {
      houseArray.push(element);
    }
  });
  return houseArray;
}


const allButton = document.querySelector("#all-btn");
const gryffButton = document.querySelector("#gryffindor-btn");
const huffButton = document.querySelector("#hufflepuff-btn");
const raveButton = document.querySelector("#ravenclaw-btn");
const slyButton = document.querySelector("#slytherin-btn");

allButton.addEventListener("click", () => {
  cardsOnDom(students);
});

gryffButton.addEventListener("click", () => {
  const gryffHouse = houseFilter(students, "Gryffindor");
  cardsOnDom(gryffHouse);
});

huffButton.addEventListener("click", () => {
  const huffHouse = houseFilter(students, "Hufflepuff");
  cardsOnDom(huffHouse);
});

raveButton.addEventListener("click", () => {
  const raveHouse = houseFilter(students, "Ravenclaw");
  cardsOnDom(raveHouse);
});

slyButton.addEventListener("click", () => {
  const slyHouse = houseFilter(students, "Slytherin");
  cardsOnDom(slyHouse);
});
// Each button will display only students from that house.


const evilCardsOnDom = (villains) => {
  let evilDomString = "";
 villains.forEach((villain => {
  evilDomString += `
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body"></div>
  <div class="card text-end" style="width: 18rem;">
    <div class="card-body">
     <h5 class="card-title">${villain.name}</h5>
     <p>Works for Voldemort now! Oh dear.</p>
    </div>
  </div>`;
   })
 )
   renderToDom("#banished", evilDomString);
};
// Makes cards for the villains object and adds them to the #banished html.
















// ***TEST ZONE***

// Make another function to swap the expelled value from false to true, then filter the students to the villains object if it is set to true.



// const toggleExpelled = (event) => {
//   if (event.target.id.includes("expel")) {
//     const [, id] = event.target.id.split('--');

//     const swap = students.findIndex(student => student.id === Number(id))

//     if (students[swap].expelled === false) {
//       (students[swap].expelled = true)
//     }

//     // This may not be working
//     cardsOnDom(students)
//     evilCardsOnDom(villains)
//   }
// }
// document.querySelector('#students').addEventListener('click', toggleExpelled);
// // Should automagically begin once a student button is clicked?




// const evilFilter = (array, booleanValue) => {

//   array.forEach((item) => {
//     if (item.expelled === booleanValue) {
//       const index = (item)
//       villains.push(index);
//       students.pop(index);
//       // students.splice(index, 1); // This rIght here, what's the oppposite of push?
//     }
//   });
//   cardsOnDom(students)
//   return villains;
  
// };

// const evilButton = document.querySelector("#students");

// evilButton.addEventListener("click", () => {
//   const evilArmy = evilFilter(students, true);
//   evilCardsOnDom(evilArmy);
//   });






















// ***DON'T FORGET TO DO THIS ZONE***

// An error message should show if the new student form is left blank when it is submitted.
// if (("#studentNameInput") === "") {    // Gives an error if the name form is left blank. This does not currently work but I think I'm on the right track.
//   console.log('Please enter a name.');
//   throw new Error('Please enter a name.');
  
// }
