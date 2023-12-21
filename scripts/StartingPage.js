export default function renderStartingPage(){
    const container = document.querySelector(`.filtr`);

    const html = ` 
        <main>
        
            <header>
                <h1>Pudzilla Memory Game!</h1>
                <h2>Choose difficulty level:</h2>
            </header>

            <section>

                <button data-level="easy">Easy</button>
                <button data-level="medium">Medium</button>
                <button data-level="hard">Hard</button>

            </section>

        </main>
    `

    container.innerHTML = html;
}

