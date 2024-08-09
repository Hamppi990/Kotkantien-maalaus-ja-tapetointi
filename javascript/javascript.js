function changeDivColor(color, divId) {
    const testArea = document.getElementById(divId);
    testArea.style.backgroundColor = color;
}

function resetColor(areaId) {
    document.getElementById(areaId).style.backgroundColor = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-fluid');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');

    images.forEach(image => {
        image.addEventListener('click', function() {
            modalImage.src = this.src;
            modal.show();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
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

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if(window.scrollY > 100) {
      navbar.classList.add('navbar-expand-md');
    } else {
      navbar.classList.remove('navbar-expand-md');
    }
  });
  window.addEventListener("load", function() {
    document.querySelector(".loading-overlay").style.display = "none";
});