export function renderGame(difficulty) {

    let sectionsCount;
    if (difficulty === 'easy') sectionsCount = 1;
    if (difficulty === 'medium') sectionsCount = 2;
    if (difficulty === 'hard') sectionsCount = 3;

    const requiredTableElements = sectionsCount*3; //obliczam ile potrzeba elementów do tablicy żeby byla odpowiednia ilosc par kart

    const mainEle = document.querySelector(`.js-main`);
    let html;

    for (let i = 0; i < sectionsCount; i++){

        html += `
            <section>

                <figure><img src="images/tlo.jpg" alt="pudzilla" class="js-img"></figure>
                <figure><img src="images/tlo.jpg" alt="pudzilla" class="js-img"></figure>
                <figure><img src="images/tlo.jpg" alt="pudzilla" class="js-img"></figure>
                <figure><img src="images/tlo.jpg" alt="pudzilla" class="js-img"></figure>
                <figure><img src="images/tlo.jpg" alt="pudzilla" class="js-img"></figure>
                <figure><img src="images/tlo.jpg" alt="pudzilla" class="js-img"></figure>

            </section>
        `;
        mainEle.innerHTML = html;
        
    }

    mainEle.firstChild.textContent = ''; //usuwam ten napis 'undefined', jakis bug, nwm czym spowodowany wiec robie tak
    mainEle.innerHTML += `
    
        <aside class="js-aside"></aside>

        <footer class="js-footer">

            <button class="js-play-again-btn">
                Play Again!
            </button>

        </footer>
    `;

    

    const imgElements = document.querySelectorAll(`.js-img`);

    if (sectionsCount === 3) { //jeśli level hard to zmniejszam wielkosc zdjec
       
        imgElements.forEach((image) => {

            image.classList.add('image-level-hard');
            image.parentElement.classList.add('figure-level-hard');

        })
    }

    let duplicateCount = [];

    for(let i = 0; i < requiredTableElements; i++) {
        duplicateCount.push(0);
    }

    imgElements.forEach((image) => {

        let imgNumber;

        do {

            imgNumber = Math.floor(Math.random() * requiredTableElements);

        } while (duplicateCount[imgNumber] >= 2)

        duplicateCount[imgNumber]++;
        image.src = `images/pudzian${imgNumber}.jpg`;
    
    });
}