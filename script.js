document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput")
    const addTaskButton = document.getElementById("addTaskButton")
    const taskList = document.getElementById("taskList")

    loadTasksFromLocalStorage()

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim()

        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ""
        }
    })

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click()
        }
    })

    function addTask(taskText, completed = false) {
        const li = document.createElement("li")
        li.classList.toggle("completed", completed)

        const span = document.createElement("span")
        span.textContent = taskText

        
        const completeButton = document.createElement("button")
        completeButton.textContent = "Complete"

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"

    
        li.appendChild(span)
        li.appendChild(completeButton)
        li.appendChild(deleteButton)
        taskList.appendChild(li)

       
        completeButton.addEventListener("click", function() {
            li.classList.toggle("completed")
            updateLocalStorage()
        })

        deleteButton.addEventListener("click", function() {
            li.remove()
            
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput")
    const addTaskButton = document.getElementById("addTaskButton")
    const taskList = document.getElementById("taskList")

    loadTasksFromLocalStorage()

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim()

        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ""
        }
    })

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click()
        }
    })

    function addTask(taskText, completed = false) {
        const li = document.createElement("li")
        li.classList.toggle("completed", completed)

        const span = document.createElement("span")
        span.textContent = taskText

        const completeButton = document.createElement("button")
        completeButton.textContent = completed ? "Undo" : "Complete"

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"

        li.appendChild(span)
        li.appendChild(completeButton)
        li.appendChild(deleteButton)
        taskList.appendChild(li)

        completeButton.addEventListener("click", function() {
            li.classList.toggle("completed")
            completeButton.textContent = li.classList.contains("completed") ? "Undo" : "Complete"
            updateLocalStorage()
        })

        deleteButton.addEventListener("click", function() {
            li.remove()
            updateLocalStorage()
        })

        updateLocalStorage()
    }

    function loadTasksFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || []
        tasks.forEach(task => {
            addTask(task.text, task.completed)
        })
    }

    function updateLocalStorage() {
        const tasks = []

        document.querySelectorAll("#taskList li").forEach(li => {
            tasks.push({
                text: li.querySelector("span").textContent,
                completed: li.classList.contains("completed")
            })
        })

        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})
            updateLocalStorage()
        })
        
        updateLocalStorage()
    }


    function loadTasksFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || []
        tasks.forEach(task => {
            addTask(task.text, task.completed)
        })
    }
    function updateLocalStorage() {
        const tasks = []

        document.querySelectorAll("#taskList li").forEach(li => {
            tasks.push({
                text: li.querySelector("span").textContent,
                completed: li.classList.contains("completed")
            })
        })

        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})
