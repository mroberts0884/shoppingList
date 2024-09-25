document.getElementById('submit').addEventListener('click', addInfo);
// Create edit button
const editButton = document.createElement('button')
// Create delete button
const deleteButton = document.createElement('button')
const list = document.getElementById('list')
//Create save button
const saveButton = document.getElementById('saveButton')
saveButton.style.display = 'none'
// Create a new div to hold the input value
const newDiv = document.createElement('div')
const inputEditable = document.getElementById("editableInput")
inputEditable.style.display = 'none'

const container = document.getElementsByClassName('container')



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

    inputEditable.style.display = 'none'
    saveButton.style.display = 'none'

    // Clear the input field after submission
    document.getElementById('item').value = '';
    
    // Clear the input field after submission
    document.getElementById('quantity').value = '';
}

editButton.addEventListener('click', editItem)

function editItem() {
    
    saveButton.style.display = 'inline'
    inputEditable.style.display = 'inline'
    newDiv.style.display = 'none'
    inputEditable.removeAttribute('readonly')

    inputEditable.value = ''; // Clear the value
    inputEditable.focus(); // Focus on the input box for immediate editing
    
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

saveButton.addEventListener('click', saveItem)

function saveItem() {
    const inputValue = inputEditable.value;

    newDiv.textContent = inputValue
    inputEditable.style.display = 'none';
    saveButton.style.display = 'none';
    newDiv.style.display = 'inline'; // Show the updated static value
    newDiv.appendChild(editButton)
    newDiv.appendChild(deleteButton)
    alert('Item saved!')

    console.log('Item saved')
}
