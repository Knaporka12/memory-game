export default function renderStartingPage(){
    const mainEle = document.querySelector(`main`);

    const html = ` 
        
            <h2>Choose difficulty level:</h2>

            <section>

                <button data-level="easy">Easy</button>
                <button data-level="medium">Medium</button>
                <button data-level="hard">Hard</button>

            </section>

    `

    mainEle.innerHTML = html;
}

