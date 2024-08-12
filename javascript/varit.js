function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
    }

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}

function rgbToHex(rgb) {
    const rgbaMatch = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*\d+)?\)$/);
    if (rgbaMatch) {
        const r = parseInt(rgbaMatch[1]).toString(16).padStart(2, '0');
        const g = parseInt(rgbaMatch[2]).toString(16).padStart(2, '0');
        const b = parseInt(rgbaMatch[3]).toString(16).padStart(2, '0');
        return `#${r}${g}${b}`.toUpperCase();
    }
    return rgb; // Return as-is if not matched
}

function changeDivColor(color, elementId) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = color;

    const colorRgb = hexToRgb(color);
    const colorName = Array.from(document.querySelectorAll('.color'))
        .find(button => {
            const buttonColor = window.getComputedStyle(button).backgroundColor;
            return buttonColor === colorRgb;
        })?.getAttribute('data-color-name') || 'Tuntematon väri';

    element.innerHTML = `<p style="color: #fff;">${colorName}</p>`;
}

function resetColor(elementId) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = '#fff';
    element.innerHTML = '';
}

function copyCurrentColor(elementId) {
    const element = document.getElementById(elementId);
    const color = element.style.backgroundColor;

    const hexColor = rgbToHex(color);
    const colorName = element.innerHTML.match(/<p style="color: #fff;">(.*?)<\/p>/)?.[1] || 'Tuntematon väri';

    if (colorName === 'Tuntematon väri') {
        alert("Valitse ensin väri!");
        return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = `${hexColor} (${colorName})`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    const tooltip = document.createElement('div');
    tooltip.textContent = `Väri kopioitu: ${hexColor} (${colorName})`;
    tooltip.className = 'tooltip';
    tooltip.style.position = 'absolute';
    tooltip.style.background = '#000';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.zIndex = '1000';

    document.body.appendChild(tooltip);

    const rect = element.getBoundingClientRect();
    tooltip.style.top = `${rect.top + window.scrollY + element.offsetHeight + 5}px`;
    tooltip.style.left = `${rect.left + window.scrollX + (element.offsetWidth / 2) - (tooltip.offsetWidth / 2)}px`;

    setTimeout(() => {
        document.body.removeChild(tooltip);
    }, 2000);
}

function showColorsInModal() {
    const testArea1 = document.getElementById('test-area-1');
    const testArea2 = document.getElementById('test-area-2');
    const color1 = testArea1.style.backgroundColor || '#fff';
    const color2 = testArea2.style.backgroundColor || '#fff';

    const color1Hex = rgbToHex(color1);
    const color2Hex = rgbToHex(color2);

    const colorName1 = testArea1.textContent || 'Tuntematon väri';
    const colorName2 = testArea2.textContent || 'Tuntematon väri';

    if (color1 === '#fff' && color2 === '#fff') {
        alert("Valitse värit!");
        return;
    }

    const modalTestArea1 = document.getElementById('modal-test-area-1');
    const modalTestArea2 = document.getElementById('modal-test-area-2');

    modalTestArea1.style.width = '396px';
    modalTestArea1.style.height = '500px';

    modalTestArea2.style.width = '370px';
    modalTestArea2.style.height = '500px';

    modalTestArea1.style.backgroundColor = color1Hex;
    modalTestArea1.innerHTML = `<p style="color: #fff;">${colorName1} (${color1Hex})</p>`;

    modalTestArea2.style.backgroundColor = color2Hex;
    modalTestArea2.innerHTML = `<p style="color: #fff;">${colorName2} (${color2Hex})</p>`;

    const colorModal = new bootstrap.Modal(document.getElementById('colorModal'));
    colorModal.show();
}
window.addEventListener('load', function () {
    document.querySelector(".loading-overlay").style.display = "none";
});

document.addEventListener('hidden.bs.modal', function (event) {
    const modalElement = event.target;
    if (modalElement.id === 'imageModal') {
        document.querySelector('.loading-overlay').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 125) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});