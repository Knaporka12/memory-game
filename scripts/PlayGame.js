import { mainFunction } from "./MainMemory.js";

let score = 0;

let winsCount = JSON.parse(localStorage.getItem('winsCount'));
if (!winsCount) winsCount = 0;

export function startGame(difficulty){

    const imgElements = document.querySelectorAll(`.js-img`);
    
    imgElements.forEach(image => {
        
        image.addEventListener('click', () => {
            playGame(image, difficulty);
        });

    });

};

let previousImage; // tworze poza funkcja by nie tworzylo nowego previousimage za kazdym wywolaniem funkcji dla image
function playGame(image, difficulty) {

    let scoreToWin;
    if (difficulty === 'easy') scoreToWin = 3;
    if (difficulty === 'medium') scoreToWin = 6;
    if (difficulty === 'hard') scoreToWin = 9;
 
    image.classList.add('visible-opacity');
    image.classList.add('rotate');

    if (previousImage){

        if (previousImage !== image){

            if (previousImage.src === image.src){

                image.classList.add(`pointers`);
                previousImage.classList.add(`pointers`);
                previousImage = undefined;
                score++;

            } else {

                setTimeout(() => {
                    image.classList.add('rotate-back');
                    previousImage.classList.add('rotate-back');
                }, 500);

            

                setTimeout(() => {
                    image.classList.remove('visible-opacity');
                    previousImage.classList.remove('visible-opacity');
                    image.classList.remove('rotate');
                    previousImage.classList.remove('rotate');
                    image.classList.remove('rotate-back');
                    previousImage.classList.remove('rotate-back');
                    previousImage = undefined;
                    console.log(image);
                    console.log(previousImage);
                }, 1000);

            }
        }
    } else {

        previousImage = image;
        
    }

    const asideEle = document.querySelector(`.js-aside`);
    asideEle.innerHTML = `<h2>Score: ${score} / ${scoreToWin}</h2>` 

    if (score === scoreToWin){
        winsCount++;
        localStorage.setItem('winsCount', JSON.stringify(winsCount));
        score = 0;
        playAgain();
    }

}


function playAgain() {

    const playAgainBtn = document.querySelector(`.js-play-again-btn`);
    playAgainBtn.classList.add('visible-display');

    playAgainBtn.addEventListener('click', () => {
        mainFunction();
    });
};
