// My data notes are at:  https://dbdiagram.io/d/Houses-66a513c28b4bb5230e832d1f

const students = [
  // {
  //   id: 1,
  //   name: "Burgerman",
  //   house: "Gryffindor",
  //   expelled: false,
  // },
  // {
  //   id: 2,
  //   name: "Joe",
  //   house: "Ravenclaw",
  //   expelled: false,
  // },
  // {
  //   id: 3,
  //   name: "Examplarina",
  //   house: "Hufflepuff",
  //   expelled: false,
  // },
  // {
  //   id: 4,
  //   name: "Sneaky",
  //   house: "Slytherin",
  //   expelled: false,
  // }
]

const villains = [
  // {
  //   id: 1,
  //   name: "Expelled Test",
  //   house: "Ravenclaw",
  //   expelled: true,
  // },
  // {
  //   id: 2,
  //   name: "A Small Dog",
  //   house: "Hufflepuff",
  //   expelled: true,
  // }
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
  domString += `<div class="card listed" style="width: 18rem;">
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
 

// Creates a new student card using the name put into the box. If there was no name entered, an error message will appear.
const createStudent = document.querySelector("#formButton");
createStudent.addEventListener("click", (e) => {
e.preventDefault();

const form = document.querySelector("form");

if (document.querySelector("#studentNameInput").value === "") {
  alert("Please enter a name.")
  throw new Error('Please enter a name.');
}

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

const blank = []

allButton.addEventListener("click", () => {
  cardsOnDom(students);
  evilCardsOnDom(villains)
});

gryffButton.addEventListener("click", () => {
  const gryffHouse = houseFilter(students, "Gryffindor");
  cardsOnDom(gryffHouse);
  evilCardsOnDom(blank)
});

huffButton.addEventListener("click", () => {
  const huffHouse = houseFilter(students, "Hufflepuff");
  cardsOnDom(huffHouse);
  evilCardsOnDom(blank)
});

raveButton.addEventListener("click", () => {
  const raveHouse = houseFilter(students, "Ravenclaw");
  cardsOnDom(raveHouse);
  evilCardsOnDom(blank)
});

slyButton.addEventListener("click", () => {
  const slyHouse = houseFilter(students, "Slytherin");
  cardsOnDom(slyHouse);
  evilCardsOnDom(blank)
});
// Each button will display only students from that house.


const evilCardsOnDom = (villains) => {
  let evilDomString = "";
 villains.forEach((villain => {
  evilDomString += `<div class="card listed" style="width: 18rem;">
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


const toggleExpelled = (event) => {
  if (event.target.id.includes("expel")) {  // Finds the expel button.
    const [, id] = event.target.id.split('--'); // Splits at the '--' so the word expel isn't added along with the ID.

    const swap = students.findIndex(event=> event.id === Number(id)) // Finds the ID of the student who is getting expelled.
    console.log(swap)

    // if (students[swap].expelled === false) {
    //   (students[swap].expelled = true)
    // }

    const newVillain = {
      id: villains.length + 1,
      name: (students[swap].name),
      house: (students[swap].house),
      expelled: true,
    } // Creates a new entry in the villain array using data from the expelled student.

    students.splice(swap, 1); // Removes the expelled student from the students array.
    
    villains.unshift(newVillain); // Adds the new villain.
    cardsOnDom(students)
    evilCardsOnDom(villains)
    // Repaints the dom to remove the "old" student and add the "new" villain.
  }
}
document.querySelector('#students').addEventListener('click', toggleExpelled);
// Runs toggleExpelled when students is clicked.
