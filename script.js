document.getElementById('submit').addEventListener('click', addInfo);
// Create edit button
const editButton = document.getElementById('editButton')
editButton.style.display = 'none'
// Create delete button
const deleteButton = document.getElementById('deleteButton')
deleteButton.style.display = 'none'
const list = document.getElementById('list')
//Create save button
const saveButton = document.getElementById('saveButton')
saveButton.style.display = 'none'
// Create a new div to hold the input value
const newDiv = document.createElement('div')
const item1 = document.getElementById('item1')
const quantity1 = document.getElementById('quantity1')
const container = document.getElementById('container')

function addInfo() {
    const inputItem = document.getElementById('item').value;
    const inputQuantity = document.getElementById('quantity').value;
    
    //Update content of the cell with the input value
    item1.textContent = inputItem
    quantity1.textContent = inputQuantity
    
    item1.appendChild(editButton)
    item1.appendChild(deleteButton)
    quantity1.appendChild(editButton)
    quantity1.appendChild(deleteButton)

    // Append the new div to the output container
    list.appendChild(item1)
    list.appendChild(quantity1)
    
    editButton.style.display = 'inline'
    deleteButton.style.display = 'inline'
    saveButton.style.display = 'none'

    // Clear the input field after submission
    document.getElementById('item').value = '';
    
    // Clear the input field after submission
    document.getElementById('quantity').value = '';
}

editButton.addEventListener('click', editItem)

function editItem() {
    item1.appendChild(saveButton)
    quantity1.appendChild(saveButton)
    
    saveButton.style.display = 'inline'
    item1.style.display = 'inline'
    quantity1.style.display = 'inline'
    
    item1.contentEditable = true
    quantity1.contentEditable = true
    
    editButton.contentEditable = false
    deleteButton.contentEditable = false
    saveButton.contentEditable = false
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
    saveButton.style.display = 'none';
    newDiv.appendChild(editButton)
    newDiv.appendChild(deleteButton)
    alert('Item saved!')
}
