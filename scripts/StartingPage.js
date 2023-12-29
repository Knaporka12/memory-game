import { mainFunction } from "./MainMemory.js";

export function renderStartingPage(){

    let currentVersion = JSON.parse(localStorage.getItem('currentVersion'));
    if (!currentVersion) currentVersion = 'pudzian';

    let winsCount = JSON.parse(localStorage.getItem('winsCount'));
    if (!winsCount) winsCount = 0;

    const h1Ele = document.querySelector(`.js-h1`);
    if (currentVersion === 'pudzian'){
        h1Ele.innerHTML = 'Pudzilla Memory Game!'
    } else h1Ele.innerHTML = 'Sins Memory Game!'

    const containerEle = document.querySelector(`.container`);

    containerEle.classList.remove(`background-pudzian`);
    containerEle.classList.remove(`background-sins`);
    containerEle.classList.add(`background-${currentVersion}`);
    
    const mainEle = document.querySelector(`.js-main`);

    const html = ` 

            <article>
                <h2>
                    Your Wins: ${winsCount}
                </h2>

                <p class = "unlock-count-p">Win ${5 - winsCount} more games to unlock premium version!</p>
                <button class = "toggle-version-btn js-toggle-version-btn"></button>
                <p class = "choose-diff-p">Choose difficulty:</p>
            </article>
            <section>  

                <button class = "js-difficulty-button" data-level="easy">Easy</button>
                <button class = "js-difficulty-button" data-level="medium">Medium</button>
                <button class = "js-difficulty-button" data-level="hard">Hard</button>

            </section>

    `
    mainEle.innerHTML = html;

    const versionBtn = document.querySelector(`.js-toggle-version-btn`);

    if (winsCount >= 5) {

        document.querySelector(`.unlock-count-p`).classList.add('unvisible-display');
        versionBtn.classList.add('visible-display');

        versionBtn.addEventListener('click', () => {
            changeVersion();
        })

    }

    currentVersion === 'pudzian' ? versionBtn.innerHTML = 'Enable Premium version' : versionBtn.innerHTML = 'Disable premium version';
    
}

function changeVersion() {

    let currentVersion = JSON.parse(localStorage.getItem('currentVersion'));

    if (currentVersion === 'pudzian'){
        currentVersion = 'sins'
    } else currentVersion = 'pudzian'

    localStorage.setItem('currentVersion', JSON.stringify(currentVersion));

    mainFunction();
}
