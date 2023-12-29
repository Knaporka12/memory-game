export function renderStartingPage(){

    let winsCount = JSON.parse(localStorage.getItem('winsCount'));
    if (!winsCount) winsCount = 0;

    const mainEle = document.querySelector(`.js-main`);

    const html = ` 

            <h2>
                Your Wins: ${winsCount}
            </h2>

            <p class = "unlock-count-p">Win ${10 - winsCount} more games to unlock premium version!</p>
            <p class = "choose-diff-p">Choose difficulty:</p>

            <section>

                <button class = "js-difficulty-button"data-level="easy">Easy</button>
                <button class = "js-difficulty-button"data-level="medium">Medium</button>
                <button class = "js-difficulty-button"data-level="hard">Hard</button>

            </section>

    `

    mainEle.innerHTML = html;
}

