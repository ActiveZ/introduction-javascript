const array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let sum = 0;

// Calculer et afficher la moyenne des éléments du tableau
array.forEach(x => sum += x);

console.log("Moyenne du tableau =", sum / array.length);