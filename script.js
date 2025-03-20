// Function to generate and display a random number
function generateRandomNumber() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100)+1;

    // Get the numberDisplay div
    var numberDisplay = document.getElementById('numberDisplay');

    // Clear any existing content
    numberDisplay.innerHTML = '';

    // Create a new paragraph element
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'Random Number: ' + randomNumber;

    // Append the paragraph to the numberDisplay div
    numberDisplay.appendChild(paragraph);
   
}


// Function to add a new item to the list
function addItem() {
    // Get the itemList element
    var itemList = document.getElementById('itemList');

    // Create a new list item element
    var newItem = document.createElement('li');
    newItem.innerHTML = 'Item ' + (itemList.children.length + 1);

    // Append the new item to the itemList
    itemList.appendChild(newItem);
}

// Function to remove the last item from the list
function removeItem() {
    // Get the itemList element
    var itemList = document.getElementById('itemList');

    // Remove the last item if the list is not empty
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    }
}

