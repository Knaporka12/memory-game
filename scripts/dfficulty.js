import { renderGame } from "./RenderGame.js";
import { startGame } from "./memory.js";

export function chooseDifficulty() {

    const levelButtons = document.querySelectorAll(`button`);

    levelButtons.forEach((button) => {

        button.addEventListener('click', () => {

            const difficulty = button.dataset.level;
            renderGame(difficulty);
            startGame(difficulty);
            return difficulty;

        })

        
    })
}