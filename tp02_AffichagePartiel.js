const array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let sum = 0;

// Combiner une boucle et un test de manière à n’afficher que les entiers supérieurs à 3
array.forEach(x => {
    if (x > 3) sum += x;
});
console.log("Somme des entiers supérieurs à 3 =", sum);

// Combiner une boucle et un test de manière à n’afficher que les entiers pairs
sum = 0;
array.forEach(x => {
    if (x % 2 == 0) sum += x;
});
console.log("Somme des entiers pairs =", sum);

// Combiner une boucle et un test de manière à n’afficher que les entiers impairs
sum = 0;
array.forEach(x => {
    if (x % 2 != 0) sum += x;
});
console.log("Somme des entiers impairs =", sum);