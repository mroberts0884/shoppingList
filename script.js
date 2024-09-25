document.getElementById('submit').addEventListener('click', addInfo);
// Create edit button
const editButton = document.createElement('button')
// Create delete button
const deleteButton = document.createElement('button')
const list = document.getElementById('list')
//Create save button
const saveButton = document.createElement('button')
saveButton.innerText = "Save"
// Create a new div to hold the input value
const newDiv = document.createElement('div')



function addInfo() {
    const inputItem = document.getElementById('item').value;
    const inputQuantity = document.getElementById('quantity').value;

     // Create a new div to hold the input value
     
     newDiv.textContent = inputItem + ' ' + inputQuantity; // Set the text inside the div
    
    // adding text to edit button
    editButton.innerText = "Edit Item"

    // adding class name to editbutton
    editButton.classList.add('editButton')

    // adding text to delete button
    deleteButton.innerText = "Delete Item"

    // adding class name to delete button
    deleteButton.classList.add('deleteButton')

    newDiv.appendChild(editButton)
    newDiv.appendChild(deleteButton)

    // Append the new div to the output container
    list.appendChild(newDiv);
    
    // Clear the input field after submission
    document.getElementById('item').value = '';
    
    // Clear the input field after submission
    document.getElementById('quantity').value = '';
}

editButton.addEventListener('click', editItem)

function editItem() {
    newDiv.contentEditable = true
    editButton.contentEditable = false
    deleteButton.contentEditable = false
    saveButton.contentEditable = false
    newDiv.appendChild(saveButton)
}

deleteButton.addEventListener('click', deleteItem)

function deleteItem() {
    const deleteMessage = confirm('Are you sure you want to delete this item? ')
    if (deleteMessage) {
        newDiv.remove()
    } 
    else {
        // If user clicks 'Cancel', do nothing
        console.log("Item deletion canceled.");
    }
}

save.addEventListener('click', saveItem)

function saveItem() {
   const content = newDiv.innerHTML
   localStorage.setItem("savedContent", content);
   console.log("Content saved to localStorage:", content);
   saveButton.style.display = 'none'
}

window.onload = function() {
    const savedContent = localStorage.getItem("savedContent");
    if (savedContent) {
        newDiv.innerHTML = savedContent;
    }
}
