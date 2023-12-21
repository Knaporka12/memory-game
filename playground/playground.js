// let imgNumber = Math.floor(Math.random() * 4);
// console.log(imgNumber)
// let tab = []

// tab[0] = document.querySelector(`.js-img`)
    

// console.log(tab[0].src)

// const a = {
//     name: 'kacper',
//     age: 19
// }
// let b;
//  b = Object.assign({}, a);

// console.log(a === b);
// console.log(a)
// console.log(b)

// const image = document.querySelector(`.js-img`);

// let target = {};

// target = Object.assign({}, image);

// console.log(image)
// console.log(target)

const image = document.querySelectorAll(`.js-img`);

console.log(typeof image[0])

//console.log(image[1] === image[0]);

image[0] = image[1];
image[0].classList.remove(`js-img`)
console.log(image[0].classList)
console.log(image[1].classList)

console.log(image[1] == image[0]);


