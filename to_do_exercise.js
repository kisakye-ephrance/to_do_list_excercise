var newArr = []
const addBtn = document.getElementById ("save-btn");
const toDoListElement = document.getElementById("list");
var toDoList = []

addBtn.addEventListener ("click", (e) => {

    var inputElement = document.getElementById("todo-text").value;

    if (inputElement === ""){
        {   
            alert ("Please enter a task to do");
        }
    }

    else{
        newArr.push(inputElement);
        console.log(newArr);
        
        for (var i = 0; i < newArr.length; i++) {
            var task = newArr[i];
            const listItemElement = document.createElement('li');
            
            listItemElement.innerHTML = task;
            listItemElement.classList.add(["list-group-item"])

            const deleteBtn = document.createElement ("button")
            deleteBtn.classList.add("btn","btn-danger",)
            deleteBtn.classList.add("btn","float-right",)
            deleteBtn.innerHTML = "✕"
            deleteBtn.addEventListener ("click", (e) => { 
            e.preventDefault()
            listItemElement.remove()
            });

            const doneBtn = document.createElement ("button")
            doneBtn.classList.add("btn","btn-success",)
            doneBtn.classList.add("btn","float-right",)
            doneBtn.innerHTML = "✓"
            doneBtn.addEventListener ("click", (e) => { 
            e.preventDefault()
            listItemElement.style.textDecoration = "line-through";
            })

            listItemElement.appendChild(deleteBtn)
            listItemElement.appendChild(doneBtn)
            toDoListElement.appendChild(listItemElement);
            toDoList.push (listItemElement);
            console.log(toDoList)
            
        }

    }
    newArr = []
    document.getElementById("todo-text").value = "";
 
});

