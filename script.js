document.getElementById('submit').addEventListener('click', addInfo);

// Create a new div to hold the input value
const item1 = document.getElementById('item1')
const quantity1 = document.getElementById('quantity1')
const container = document.getElementById('container')

function addInfo() {
    const inputItem = document.getElementById('item').value;
    const inputQuantity = document.getElementById('quantity').value;

    const tableBody = document.getElementById('tableBody')
    const newRow = tableBody.insertRow()
    const newItem = newRow.insertCell()
    newItem.id = 'newItem'
    const newQuantity = newRow.insertCell()
    newQuantity.id = 'newQuantity'

    // Create edit button
    const editButton = document.createElement('button')
    editButton.textContent = 'Edit'
    editButton.classList.add('editButton')
    editButton.addEventListener('click', function() {
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
        copyButton.contentEditable = 'false'
    })


    // Create delete button
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('deleteButton')

    deleteButton.addEventListener('click', function () {
        const deleteMessage = confirm('Are you sure you want to delete this item? ')
        if (deleteMessage) {
            newRow.remove()
        } 
        else {
            // If user clicks 'Cancel', do nothing
            console.log("Item deletion canceled.");
        }
    })

    // Create save button
    const saveButton = document.createElement('button')
    saveButton.textContent = 'Save'
    saveButton.classList.add('saveButton')
    
    saveButton.addEventListener('click', function() {

        const tableBody = document.getElementById('tableBody');
    
        // Get all the table cells (td elements) in the table body
        const cells = tableBody.getElementsByTagName('td');
        
        // Loop through each cell and set contentEditable to false
        for (let i = 0; i < cells.length; i++) {
            cells[i].contentEditable = false;
    }
        saveButton.style.display = 'none';
        editButton.style.display = 'inline'
        deleteButton.style.display = 'inline'
        copyButton.style.display = 'inline'
        
        newQuantity.appendChild(editButton)
        newQuantity.appendChild(deleteButton)
        newQuantity.appendChild(copyButton)
        
        alert('Item saved!')
    })

    newItem.textContent = inputItem
    newQuantity.textContent = inputQuantity
    newRow.appendChild(newItem)
    newRow.appendChild(newQuantity)
    tableBody.appendChild(newRow)
    

    const actionCellEdit = newRow.insertCell(2)
    const actionCellDelete = newRow.insertCell(3)

    actionCellEdit.appendChild(editButton)
    actionCellDelete.appendChild(deleteButton)

    editButton.style.display = 'inline'
    deleteButton.style.display = 'inline'
    saveButton.style.display = 'none'

    // Clear the input field after submission
    document.getElementById('item').value = '';
    
    // Clear the input field after submission
    document.getElementById('quantity').value = '';
   
}
    
