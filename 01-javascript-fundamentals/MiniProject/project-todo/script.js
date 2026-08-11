/* const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

// Create the Add Task function
function addTask() {

    // Get input value

    // Validate input

    // Create <li>

    // Create task text

    // Create delete button

    // Add elements to <li>

    // Add <li> to task list

    // Clear input
}

// Get the task



// Validate empty input

// Create an <li>

// Create the task text
// Create Delete button
// Add elements to <li>
// Add <li> to the list
// Delete task
// Mark task complete
//Add button event

*/

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const errorMessage = document.getElementById("errorMessage");

// Create the Add Task function
function addTask() {
  // Get input value
  const taskText = taskInput.value.trim();

  // Validate empty input
 if (taskText === "") {

    errorMessage.innerText =
        "Please enter a task before adding!";

    return;
}
errorMessage.innerText = "";

  // Create <li> element
  const li = document.createElement("li");

  // Create task text span
  const span = document.createElement("span");
  span.textContent = taskText;

  // Mark task complete when text is clicked
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // Delete task when button is clicked
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Add elements to <li>
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add <li> to task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}

// Add button event listener
addBtn.addEventListener("click", addTask);

// error cleaning


// Allow pressing 'Enter' key to add a task
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
