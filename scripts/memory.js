import renderStartingPage from "./StartingPage.js";
import { chooseDifficulty } from "./dfficulty.js";
import { renderGame } from "./RenderGame.js";

let score = 0;

//renderStartingPage();



//chooseDifficulty()


renderGame('easy')

function startGame(){

    let previousImage;

    const imgElements = document.querySelectorAll(`.js-img`);

    imgElements.forEach(image => {

        image.addEventListener('click', playGame);

    });
};

startGame();

function playGame() {

    image.classList.add('visible-opacity');
    image.classList.add('rotate');

    if (previousImage){

        if (image.parentElement !== previousImage.parentElement){

            if (previousImage.src === image.src){

                previousImage.removeEventListener('click', playGame);
                image.removeEventListener('click', playGame);
                previousImage = undefined;
                score++;
                console.log(score);

            } else {

                setTimeout(() => {
                    image.classList.add('rotate-back');
                    previousImage.classList.add('rotate-back');
                }, 500);

            

                setTimeout(() => {
                    image.classList.remove('visible-opacity');
                    previousImage.classList.remove('visible-opacity');
                    previousImage = undefined;
                }, 1000);

            }
        }
    } else {

        previousImage = image;            
        
    }

}