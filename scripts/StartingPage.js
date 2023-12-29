export function renderStartingPage(){

    let winsCount = JSON.parse(localStorage.getItem('winsCount'));
    if (!winsCount) winsCount = 0;

    const mainEle = document.querySelector(`.js-main`);

    const html = ` 

            <h2>
                <span>Your Wins: ${winsCount}</span>
                <span class = "unlock-count">Win ${10 - winsCount} more games to unlock premium version!</span>
                Choose difficulty:
            </h2>

            <section>

                <button class = "js-difficulty-button"data-level="easy">Easy</button>
                <button class = "js-difficulty-button"data-level="medium">Medium</button>
                <button class = "js-difficulty-button"data-level="hard">Hard</button>

            </section>

    `

    mainEle.innerHTML = html;
}

