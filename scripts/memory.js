import renderStartingPage from "./StartingPage.js";
import { chooseDifficulty } from "./dfficulty.js";
import { renderGame } from "./RenderGame.js";

let score = 0;

//renderStartingPage();



//chooseDifficulty()


renderGame('easy')

function startGame(){

    const imgElements = document.querySelectorAll(`.js-img`);

    imgElements.forEach(image => {
        
        image.addEventListener('click', () => {
            playGame(image);
        });

    });

};

startGame();


let previousImage; // tworze poza funkcja by nie tworzylo nowego previousimage za kazdym wywolaniem funkcji dla image
function playGame(image) {

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
                    previousImage = undefined;
                    console.log(image);
                    console.log(previousImage);
                }, 1000);

            }
        }
    } else {

        previousImage = image;
        
    }

}