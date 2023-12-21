export function chooseDifficulty() {

    const levelButtons = document.querySelectorAll(`button`);

    levelButtons.forEach((button) => {

        button.addEventListener('click', () => {

            const difficulty = button.dataset.level;

            return difficulty;

        })

        
    })
}