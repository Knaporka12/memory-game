import { renderGame } from "./RenderGame.js";
import { startGame } from "./PlayGame.js";

export function chooseDifficulty() {

    const levelButtons = document.querySelectorAll(`.js-difficulty-button`);

    levelButtons.forEach((button) => {

        button.addEventListener('click', () => {

            const difficulty = button.dataset.level;
            renderGame(difficulty);
            startGame(difficulty);
            return difficulty;

        })
        
    })
}