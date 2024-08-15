# Kotkantien maalaus- ja tapetointi

## Yleiskuvaus

### Nimi
**Kotkantien maalaus- ja tapetointi**

Tämän kuvitteellisen yrityksen verkkosivuston nimi on "Kotkantien maalaus- ja tapetointi." Sivuston tarkoituksena on esitellä yrityksen palvelut ja tarjota asiakkaille hyödyllisiä työkaluja, kuten värien testaus ja inspiroiva galleria.

### Tavoite
Sivuston tavoitteena on luoda visuaalisesti näyttävä ja käyttäjäystävällinen kokemus, joka kuvastaa yrityksen ammattitaitoa ja ideologiaa. Sivuston tulee olla helppokäyttöinen, informatiivinen, ja houkutella asiakkaita käyttämään yrityksen palveluita.

## Sisällön esittely

### Pääsivut
Sivustolla on viisi eri pääsivua, jotka tarjoavat kattavan kuvan yrityksen toiminnasta ja palveluista. Nämä sivut ovat:

#### 1. Etusivu
Etusivulla esitellään yleiskatsaus yrityksestä ja sen toiminnasta.

![image](https://github.com/user-attachments/assets/99b33c07-56ae-4620-bad6-8e845d9aa99d)

![image](https://github.com/user-attachments/assets/3782f0e1-cf1c-45ee-ba03-e6b43aa76987)

![image](https://github.com/user-attachments/assets/3c2dd687-f39a-4ea4-8de5-81246c459088)


#### 2. Palvelut
Palvelut-sivulla esitellään tarkemmin yrityksen tarjoamat palvelut, kuten:
- **Maalauspalvelut:** Seinä- ja kattomaalaus, erilaiset erikoismaalaustyöt.
- **Tapetointi:** Tapetoinnit ja neuvot tapettivalintoihin.
- **Värien testaus:** Värisuunnittelu ja näytemaalaus.

![image](https://github.com/user-attachments/assets/9fa89d16-1ef1-4ec5-ae9e-91147dbbc35c)

#### 3. Värien testaus
Värien testaus -sivulla käyttäjä voi kokeilla eri värivaihtoehtoja virtuaalisen työkalun avulla. Työkalun avulla käyttäjä voi:
- Valita seinien värit ja nähdä, miltä ne näyttävät.
- Testata värien yhteensopivuutta.
- Tallentaa suosikkivärinsä myöhempää käyttöä varten.
  
![image](https://github.com/user-attachments/assets/bc9b90d5-79da-4f0d-9135-8ab957f7ee93)

![image](https://github.com/user-attachments/assets/996a913a-643b-4d56-a9d5-96556165fd00)


#### 4. Galleria
Galleria-sivulla esitellään kuvia yrityksen toteuttamista projekteista.

![image](https://github.com/user-attachments/assets/0db177cb-5f5c-4b13-81d8-e3e4f1e4099b)

![image](https://github.com/user-attachments/assets/9732df70-a35e-40b1-879f-12a0bd776875)


#### 5. Yhteystiedot
Yhteystiedot-sivulla esitetään kaikki tarvittavat tiedot yhteydenottoa varten:
- **Yrityksen osoite:** Fyysinen sijainti ja kartta footerissa.
- **Puhelinnumero ja sähköposti:** Yhteydenottotiedot asiakaspalveluun.
- **Yhteydenottolomake:** Mahdollisuus lähettää viesti suoraan sivustolta.
- **Sosiaalisen median linkit:** Linkit yrityksen some-tileihin.

![image](https://github.com/user-attachments/assets/15f7e95d-b695-4c85-af7b-db597c0c4cb0)

![image](https://github.com/user-attachments/assets/3f7fce37-5792-4260-b98e-d9716925e664)



### Toiminnallisuudet
Sivustolla on useita asioita, jotka parantavat käyttäjäkokemusta ja helpottavat asiakkaan päätöksentekoa:

- **Värien testaus -työkalu:** Interaktiivinen työkalu, jolla käyttäjät voivat testata eri värivaihtoehtoja ja nähdä, miten ne sopivat yhteen.
- **Galleria:** Galleria-sivulla on mahdollisuus avata kuvia isompina katselutiloina.
- **Yhteydenottolomake:** Helppokäyttöinen lomake, jolla käyttäjät voivat ottaa yhteyttä yritykseen suoraan sivustolta.
- **Kartta:** Footerissa on integroitu kartta, jonka avulla käyttäjä voi helposti löytää yrityksen sijainnin ja saada reittiohjeet.

## Käyttämäni työkalut
- **HTML**:llä tein sivuston rakenteen, linkit ja kuvat.
``` HTML
<div class="container mt-6">
        <div class="service-item">
            <img src="images/paint.svg" alt="paint" style="width:100px; margin: 25px;">
            <h2>Maalauspalvelut</h2>
            <h4>Tarjoamme ammattitaitoista maalauspalvelua seinien ja kattojen maalaukseen. Käytämme vain
                korkealaatuisia maaleja ja huolehdimme kaikista valmistelutöistä, kuten suojauksesta ja
                pohjamaalauksesta, taataksemme täydellisen lopputuloksen.</h4>
        </div>
    </div>
  ```
- **CSS**:llä tein sivulle näyttävän ulkoasun.
``` CSS
.mt-5 {
    background-color: rgb(250, 251, 255);
    border-radius: 10px;
    padding: 2.5%;
    padding-left: 5%;
    padding-bottom: 5%;
    padding-right: 5%;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    background-image: url('images/magicpattern-polka-dot-pattern-1718778258230.png');
    background-size: auto;
}
  ```
- **JavaScript**illä tein esimerkiksi värintestauksen ja gallerian kuvien näyttämisen kokoruudulla.

 ``` JavaScript
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
  ```
- **Kirjastot (Bootstrap ja jQuery)** Bootstrapin avulla tein footerin ja navigointipalkin. JQueryllä tein UKK-osion sivuun.

  ``` HTML
    <footer>
        <div class="bg-dark text-white">
            <div class="container py-4">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <h5 class="text-white mb-3">Kartalla</h5>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2087.8379692809362!2d25.508349977649235!3d65.00146934481731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cd5aac2e0dcb%3A0xd0f738d563fe562d!2sKotkantie%203%2C%2090250%20Oulu%2C%20Suomi!5e1!3m2!1sfi!2sus!4v1717574402900!5m2!1sfi!2sus"
                            width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <h5 class="text-white mb-3">Yhteystiedot</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="https://maps.app.goo.gl/LrHc7cmNsEPh6Z8Y8" class="text-white">Kotkantie 3,
                                    90100 Oulu</a></li>
                            <li><a href="tel:+3584499988899" class="text-white">+ 358 44 999 888 99</a></li>
                            <li><a href="mailto:info@kotkantienmaalaus.fi"
                                    class="text-white">info@kotkantienmaalaus.fi</a></li>
                        </ul>
                        <br>
                        <div class="social-icons">
                            <a href="https://www.instagram.com/osaopalvelut/" class="text-white me-2">
                                <i class="fab fa-instagram fa-3x"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UC3Iqv_zEnWSkxxi4hhwwvzQ" class="text-white">
                                <i class="fab fa-youtube fa-3x"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <h5 class="text-white mb-3">Navigointi</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="index.html" class="text-white">Etusivu</a></li>
                            <li><a href="Palvelut.html" class="text-white">Palvelut</a></li>
                            <li><a href="Varit.html" class="text-white">Värien testaus</a></li>
                            <li><a href="Galleria.html" class="text-white">Galleria</a></li>
                            <li><a href="Yhteystiedot.html" class="text-white">Yhteystiedot</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bg-dark text-white text-center py-3">
                © 2024 Kotkantien maalaus ja tapetointi
            </div>
        </div>
    </footer>
## Jatkokehitysideat
- Yhteydenottolomake, joka oikeasti lähettyy jonnekin.
- Yhteydenottolomakkeeseen voisi liittää kuvia.
- Värien testaksessa voisi testata myös materiaaleja.
- Galleriassa olisi ennen ja jälkeen kuvia.
- Sivulla olisi video, joka kertoisi tapetointi ja maalaus prosessista.

