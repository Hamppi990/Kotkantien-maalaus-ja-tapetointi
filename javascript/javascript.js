function hexToRgb(hex) {
    // Muuntaa heksadesimaalivärin RGB-muotoon
    let r = 0, g = 0, b = 0;

    // Poista '#' jos se on
    hex = hex.replace(/^#/, '');

    // Muunna lyhyt muoto (esim. '#FFF') pitkään muotoon (esim. '#FFFFFF')
    if (hex.length === 4) {
        hex = hex.replace(/(.)/g, '$1$1');
    }

    // Muunna heksadesimaali RGB-muotoon
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
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



document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.img-fluid');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');

    images.forEach(image => {
        image.addEventListener('click', function () {
            modalImage.src = this.src;
            modal.show();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
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

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-expand-md');
    } else {
        navbar.classList.remove('navbar-expand-md');
    }
});
window.addEventListener("load", function () {
    document.querySelector(".loading-overlay").style.display = "none";
});

document.addEventListener('DOMContentLoaded', function () {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const gallery = document.querySelector('.container .row');
    const modalImage = document.getElementById('modalImage');
    let clickCount = 0;

    // Funktion määrittely, joka lisää event listenerit kuville
    const addImageClickEvent = (img) => {
        img.addEventListener('click', function () {
            modalImage.src = this.src;
            const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
            imageModal.show();
        });
    };

    // Lisää event listenerit alkuperäisille kuville
    document.querySelectorAll('.gallery-image').forEach(img => {
        addImageClickEvent(img);
    });

    const loadMoreImages = () => {
        clickCount++;
        let newImages = [];

        if (clickCount === 1) {
            newImages = [
                'tapetointi7.jpg',
                'tapetointi8.jpg',
                'tapetointi9.jpg'
                // Lisää tarvittaessa lisää kuvien polkuja
            ];
        } else if (clickCount === 2) {
            newImages = [
                'tapetointi10.jpg',
                'tapetointi11.jpg',
                'tapetointi12.jpg'
                // Lisää tarvittaessa lisää kuvien polkuja
            ];
        } else {
            loadMoreBtn.disabled = true;
            loadMoreBtn.textContent = 'Ei ole enää kuvia';
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
    };

    loadMoreBtn.addEventListener('click', loadMoreImages);
});


