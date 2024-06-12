function changeDivColor(color, divId) {
    const testArea = document.getElementById(divId);
    testArea.style.backgroundColor = color;
}

function resetColor(areaId) {
    document.getElementById(areaId).style.backgroundColor = '';
}

