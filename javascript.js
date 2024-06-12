function changeDivColor(color, divId) {
    const testArea = document.getElementById(divId);
    testArea.style.backgroundColor = color;
}

function resetColors() {
    document.getElementById('test-area-1').style.backgroundColor = '';
    document.getElementById('test-area-2').style.backgroundColor = '';
}