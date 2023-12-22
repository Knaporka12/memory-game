import { renderStartingPage } from "./StartingPage.js";
import { chooseDifficulty } from "./dfficulty.js";



export function mainFunction(){ //potrzebne do ponownego zagrania jesli sie wygra

    renderStartingPage();
    chooseDifficulty();

}

mainFunction();