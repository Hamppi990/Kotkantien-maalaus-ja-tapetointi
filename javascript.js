// Function to select a color from the palette
function selectColor(color) {
    // Create a new div element for the selected color
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;

    // Add the selected color to the testing area
    const testArea = document.getElementById('test-area');
    testArea.appendChild(colorDiv);
}

// Function to clear selected colors from the testing area
function clearColors() {
    const testArea = document.getElementById('test-area');
    testArea.innerHTML = ''; // Clear all child elements
}
