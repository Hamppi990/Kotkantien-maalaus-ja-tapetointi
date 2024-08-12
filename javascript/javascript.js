document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.img-fluid');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const gallery = document.querySelector('.container .row');
    let clickCount = 0;

    function addImageClickEvent(img) {
        img.addEventListener('click', function () {
            modalImage.src = this.src;
            modal.show();
        });
    }

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

            const newImg = col.querySelector('.gallery-image');
            addImageClickEvent(newImg);
        });

        clickCount++;
    }

    loadMoreBtn.addEventListener('click', loadMoreImages);
});

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
        if (window.scrollY > 300) {
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

// Lomakkeen validointi ja ilmoitus lähetyksen onnistumisesta
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Tarkista, että kaikki kentät on täytetty
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        // Näytä ilmoitus onnistuneesta lähetyksestä
        alert('Viesti lähetetty onnistuneesti!');
        form.reset();
        form.classList.remove('was-validated');
    }, false);
});
