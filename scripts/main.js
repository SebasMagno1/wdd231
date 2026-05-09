// NAV TOGGLE
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// LAST MODIFIED
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;


/* COURSES DATA */
const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 2, completed: true },
  { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 2, completed: true },
  { code: "WDD231", name: "Web Frontend Development I", credits: 2, completed: false },
  { code: "CSE110", name: "Introduction to Programming", credits: 2, completed: true },
  { code: "CSE111", name: "Programming with Functions", credits: 2, completed: true },
  { code: "CSE210", name: "Programming with Classes", credits: 2, completed: true }
];

function displayCourses(list) {
  const container = document.getElementById("courseContainer");
  container.innerHTML = "";

  list.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");

    if (course.completed) {
      div.classList.add("completed");
    }

    div.textContent = `${course.code} - ${course.name}`;
    container.appendChild(div);
  });

  const total = list.reduce((sum, course) => sum + course.credits, 0);
  document.getElementById("totalCredits").textContent = total;
}

function filterCourses(type) {
  let filtered = courses;

  if (type === "WDD") {
    filtered = courses.filter(c => c.code.startsWith("WDD"));
  } else if (type === "CSE") {
    filtered = courses.filter(c => c.code.startsWith("CSE"));
  }

  displayCourses(filtered);
}

// BUTTON EVENTS (NO onclick — FIX REQUIRED)
document.querySelectorAll(".filters button").forEach(button => {
  button.addEventListener("click", () => {
    filterCourses(button.dataset.filter);
  });
});

// INITIAL LOAD
displayCourses(courses);


const onlineCourses = [
  { name: "Administrador de bases de datos", platform: "Fundación Carlos Slim" },
  { name: "Introducción a la programación", platform: "Fundación Carlos Slim" },
  { name: "Basic English Writing Course", platform: "Platzi" },
  { name: "Intermediate English Writing Course", platform: "Platzi" },
  { name: "Advanced English Writing Course", platform: "Platzi" }
];

function displayOnlineCourses() {
  const container = document.getElementById("onlineCourses");
  container.innerHTML = "";

  onlineCourses.forEach(course => {
    const li = document.createElement("li");
    li.textContent = `${course.name} — ${course.platform}`;
    container.appendChild(li);
  });
}

displayOnlineCourses();