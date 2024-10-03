document.getElementById('submit').addEventListener('click', addInfo);
// Create edit button
const editButton = document.createElement('button')
editButton.textContent = 'Edit'
editButton.classList.add('editButton')
const deleteButton = document.createElement('button')
deleteButton.textContent = 'Delete'
deleteButton.classList.add('deleteButton')
const saveButton = document.createElement('button')
saveButton.textContent = 'Save'
saveButton.classList.add('saveButton')
// Create a new div to hold the input value
const newDiv = document.createElement('div')
const item1 = document.getElementById('item1')
const quantity1 = document.getElementById('quantity1')
const container = document.getElementById('container')
const tableBody = document.getElementById('tableBody')
const newRow = document.createElement('tr')
const newItem = document.createElement('td')
const newQuantity = document.createElement('td')

function addInfo() {
    
    
    const inputItem = document.getElementById('item').value;
    const inputQuantity = document.getElementById('quantity').value;
    
    tableBody.appendChild(newRow)
    newRow.appendChild(newItem)
    newRow.appendChild(newQuantity)
    newItem.textContent = inputItem
    newQuantity.textContent = inputQuantity
    

    

    //Update content of the cell with the input value
    newQuantity.appendChild(editButton)
    newQuantity.appendChild(deleteButton)

    // Append the new div to the output container
    

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
    newQuantity.appendChild(saveButton)
    
    editButton.style.display = 'none'
    deleteButton.style.display = 'none'
    saveButton.style.display = 'inline'
    item1.style.display = 'inline'
    quantity1.style.display = 'inline'
    
    newItem.contentEditable = 'true'
    newQuantity.contentEditable = 'true'
    
    editButton.contentEditable = 'false'
    deleteButton.contentEditable = 'false'
    saveButton.contentEditable = 'false'


}
saveButton.addEventListener('click', makeCellsNonEditable)

function makeCellsNonEditable(button) {
    const tableBody = document.getElementById('tableBody');
    
    // Get all the table cells (td elements) in the table body
    const cells = tableBody.getElementsByTagName('td');

    // Get the parent row of the clicked Save button
    const row = button.parentElement;
    
    // Loop through each cell and set contentEditable to false
    for (let i = 0; i < cells.length; i++) {
        cells[i].contentEditable = false;
    }

   
   
}




deleteButton.addEventListener('click', deleteItem)

function deleteItem() {
    const deleteMessage = confirm('Are you sure you want to delete this item? ')
    if (deleteMessage) {
        newRow.remove()
    } 
    else {
        // If user clicks 'Cancel', do nothing
        console.log("Item deletion canceled.");
    }
}

saveButton.addEventListener('click', saveItem)

function saveItem() {
    saveButton.style.display = 'none';
    editButton.style.display = 'inline'
    deleteButton.style.display = 'inline'
    
    newQuantity.appendChild(editButton)
    newQuantity.appendChild(deleteButton)
    
    alert('Item saved!')
}
