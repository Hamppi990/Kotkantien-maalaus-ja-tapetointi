function hexToRgb(hex) {
    // Muuntaa heksadesimaalivärin RGB-muotoon
    let r = 0, g = 0, b = 0;

    // Poista '#' jos se on
    hex = hex.replace(/^#/, '');

    // Muunna lyhyt muoto (esim. '#FFF') pitkään muotoon (esim. '#FFFFFF')
    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
    }

    // Muunna heksadesimaali RGB-muotoon
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

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

    // Hae värin nimen painikkeesta
    const colorRgb = hexToRgb(color);
    const colorName = Array.from(document.querySelectorAll('.color'))
        .find(button => {
            const buttonColor = window.getComputedStyle(button).backgroundColor;
            return buttonColor === colorRgb;
        })?.getAttribute('data-color-name') || 'Tuntematon väri';

    // Näytä värin nimi
    element.innerHTML = `<p style="color: #fff;">${colorName}</p>`;
}

function resetColor(elementId) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = '#fff'; // Alkuperäinen väri on valkoinen
    element.innerHTML = '';
}

function copyCurrentColor(elementId) {
    const element = document.getElementById(elementId);
    const color = element.style.backgroundColor;

    // Muunna RGB-merkintä HEX-merkintään
    const hexColor = rgbToHex(color);

    // Hae värin nimi
    const colorName = element.innerHTML.match(/<p style="color: #fff;">(.*?)<\/p>/)?.[1] || 'Tuntematon väri';

    if (colorName === 'Tuntematon väri') {
        alert("Valitse ensin väri!");
        return;
    }
    // Luo teksti-elementti
    const textarea = document.createElement('textarea');
    textarea.value = `${hexColor} (${colorName})`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Näytä työkalu vihje
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

    // Aseta työkaluvihje oikeaan paikkaan ja poista se hetken kuluttua
    const rect = element.getBoundingClientRect();
    tooltip.style.top = `${rect.top + window.scrollY + element.offsetHeight + 5}px`;
    tooltip.style.left = `${rect.left + window.scrollX + (element.offsetWidth / 2) - (tooltip.offsetWidth / 2)}px`;

    setTimeout(() => {
        document.body.removeChild(tooltip);
    }, 2000);
}



function showColorsInModal() {
    // Get the colors from the main areas
    const testArea1 = document.getElementById('test-area-1');
    const testArea2 = document.getElementById('test-area-2');
    const color1 = testArea1.style.backgroundColor || '#fff';
    const color2 = testArea2.style.backgroundColor || '#fff';

    // Convert RGB to HEX for displaying
    const color1Hex = rgbToHex(color1);
    const color2Hex = rgbToHex(color2);

    // Find color names
    const colorName1 = testArea1.textContent || 'Tuntematon väri';
    const colorName2 = testArea2.textContent || 'Tuntematon väri';

    if (color1 === '#fff' && color2 === '#fff') {
        alert("Valitse värit!");
        return; // Exit the function if both colors are white
    }

    const modalTestArea1 = document.getElementById('modal-test-area-1');
    const modalTestArea2 = document.getElementById('modal-test-area-2');

    // Set the dimensions of the modal areas
    modalTestArea1.style.width = '396px';
    modalTestArea1.style.height = '500px';

    modalTestArea2.style.width = '370px';
    modalTestArea2.style.height = '500px';

    // Set the background colors and text
    modalTestArea1.style.backgroundColor = color1Hex;
    modalTestArea1.innerHTML = `<p style="color: #fff;">${colorName1} (${color1Hex})</p>`;

    modalTestArea2.style.backgroundColor = color2Hex;
    modalTestArea2.innerHTML = `<p style="color: #fff;">${colorName2} (${color2Hex})</p>`;

    // Show the modal
    const colorModal = new bootstrap.Modal(document.getElementById('colorModal'));
    colorModal.show();
}

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.img-fluid');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const gallery = document.querySelector('.container .row');
    let clickCount = 0; // Huolehdi, että clickCount on määritelty ja saatavilla

    function addImageClickEvent(img) {
        img.addEventListener('click', function () {
            modalImage.src = this.src;
            modal.show();
        });
    }

    // Lisää event listener alkuperäisille kuville
    images.forEach(image => {
        addImageClickEvent(image);
    });

    function loadMoreImages() {
        let newImages = [];

        if (clickCount === 0) {
            newImages = [
                'images/tapetointi7.jpg',
                'images/tapetointi8.jpg',
                'images/tapetointi9.jpg'
            ];
        } else if (clickCount === 1) {
            newImages = [
                'images/tapetointi10.jpg',
                'images/tapetointi11.jpg',
                'images/tapetointi12.jpg'
            ];
        } else {
            loadMoreBtn.disabled = true;
            loadMoreBtn.textContent = 'Ei enempää kuvia';
            return;
        }

        newImages.forEach(image => {
            const col = document.createElement('div');
            col.classList.add('col-md-4');
            col.innerHTML = `<img src="${image}" class="img-fluid gallery-image" alt="Galleria Kuva">`;
            gallery.appendChild(col);

            // Lisää event listener uusille kuville
            const newImg = col.querySelector('.gallery-image');
            addImageClickEvent(newImg);
        });

        clickCount++;
    }

    // Lisää event listener nappiin
    loadMoreBtn.addEventListener('click', loadMoreImages);


    // Muut DOMContentLoaded -käsittelijän toiminnot
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Täytä kaikki pakolliset kentät.');
            return;
        }
        form.reset();
        alert('Viesti lähetetty onnistuneesti!');
    });
});

// Piilota latauspeitto, kun ikkuna on latautunut
window.addEventListener('load', function () {
    document.querySelector(".loading-overlay").style.display = "none";
});

// Piilota latauspeitto, kun modaalin piilottaminen tapahtuu
document.addEventListener('hidden.bs.modal', function (event) {
    const modalElement = event.target;
    if (modalElement.id === 'imageModal') {
        document.querySelector('.loading-overlay').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Hae kaikki linkit sivulta
    const links = document.querySelectorAll('a');

    // Käy kaikki linkit läpi
    links.forEach(link => {
        // Tarkista, onko linkki ulkoinen (ei saman verkkotunnuksen alla)
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer'); // Parantaa tietoturvaa
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");

    // Show or hide the button depending on scroll position
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { // Show the button if scrolled more than 300px
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
