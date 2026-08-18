
        const taskInput = document.getElementById("taskInput");
        const addBtn = document.getElementById("addBtn");
        const taskList = document.getElementById("taskList");

        addBtn.addEventListener("click", () => {
            // 1. Get input value and trim extra space
            const taskText = taskInput.value.trim();

            // 2. Validate empty input
            if (taskText === "") {
                alert("Please enter a task!");
                return;
            }

            // 3. Create <li> element
            const li = document.createElement("li");

            // 4. Put the task text inside <li>
            const textNode = document.createTextNode(taskText + " ");
            li.appendChild(textNode);

            // Bonus: Create and append Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => {
                li.remove();
            });
            li.appendChild(deleteBtn);

            // 5. Add <li> to <ul>
            taskList.appendChild(li);

            // 6. Clear the input field
            taskInput.value = "";
        });
   